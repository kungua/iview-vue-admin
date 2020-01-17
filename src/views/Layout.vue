<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider
        :width="200"
        v-model="collapsed"
        breakpoint="sm"
        collapsible
        hide-trigger
        class="sider-outer"
      >
        <side-menu :collapsed="collapsed" :list="routers"/>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon
            :class="triggerClasses"
            @click="handleCollapsed"
            type="md-menu"
            :size="32"
          ></Icon>
        </Header>
        <i-content class="content-con">
          <div>
            <Tabs
              :value="getTabNameByRoute($route)"
              :animated="false"
              @on-click="handleClickTab"
              type="card">
              <TabPane
                v-for="(item, index) in tabList"
                :name="getTabNameByRoute(item)"
                :label="labelRender(item)"
                :key="`tabNav_${index}`"
              />
            </Tabs>
          </div>
          <div class="view-box">
            <Card class="page-card" shadow>
              <router-view></router-view>
            </Card>
          </div>
        </i-content>
      </Layout>
    </Layout>
  </div>
</template>

<script type="text/jsx">
import SideMenu from '../components/SideMenu'
import { getTabNameByRoute, getRouteById } from '../lib/utils'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    SideMenu
  },
  data () {
    return {
      collapsed: false,
      list: [],
      getTabNameByRoute,
    }
  },
  computed: {
    ...mapState({
      routers: state =>
        state.router.routers.filter(route => {
          return route.path !== '*' && route.name !== 'login'
        }),
      tabList: state => state.tabNav.tabList
    }),
    triggerClasses () {
      return ['trigger-icon', this.collapsed ? 'rotate' : '']
    }
  },
  methods: {
    ...mapActions([
      'handleRemove'
    ]),
    handleClickTab (id) {
      let route = getRouteById(id)
      this.$router.push(route)
    },
    handleCollapsed () {
      this.collapsed = !this.collapsed
    },
    handleTabRemove (id, ev) {
      ev.stopPropagation()
      this.handleRemove({
        id,
        route: this.$route
      }).then(nextRoute => {
        this.$router.push(nextRoute)
      })
    },
    labelRender (item) {
      console.log(item)
      return h => {
        return (
          <div>
            <span>{item.meta.title}</span>
            <icon
              nativeOn-click={this.handleTabRemove.bind(this, getTabNameByRoute(item))}
              type="md-close-circle"
              style="line-height: 10px; "></icon>
          </div>
        )
      }
    }
  }
}
</script>

<style lang="less">
.layout-wrapper,
.layout-outer {
  height: 100%;

  .header-wrapper {
    background-color: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0 23px;

    .trigger-icon {
      cursor: pointer;

      &.rotate {
        transform: rotateZ(-90deg);
        transition: transform 0.3s ease;
      }
    }
  }

  .sider-outer {
    height: 100%;
    overflow: hidden;

    .ivu-layout-sider-children {
      margin-right: -20px;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  .content-con {
    padding: 0;

    .ivu-tabs-bar {
      margin-bottom: 0;
    }

    .ivu-box {
      padding: 0;
    }

    .page-card {
      min-height: ~"calc(100vh - 84px)";
    }
  }
}
</style>
