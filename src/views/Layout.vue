<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider v-model="collapsed" breakpoint="sm" collapsible hide-trigger>
        <side-menu :collapsed="collapsed" :list="list">
          我是一个 menu
        </side-menu>
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
          <Card class="page-card" shadow>
            <router-view/>
          </Card>
        </i-content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu'

export default {
  components: {
    SideMenu
  },
  data () {
    return {
      collapsed: true,
      list: [
        { title: '1111', icon: 'ios-analytics' },
        { title: '2222', icon: 'ios-analytics' },
        {
          title: '3333',
          icon: 'ios-analytics',
          children: [
            { title: '3333-1', icon: 'ios-analytics' },
            {
              title: '3333-2',
              icon: 'ios-analytics',
              children: [
                { title: '3333-2-1', icon: 'ios-analytics' },
                {
                  title: '3333-2-2',
                  children: [{ title: '3333-2-2-1' }, { title: '3333-2-2-2' }]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    triggerClasses () {
      return ['trigger-icon', this.collapsed ? 'rotate' : '']
    }
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style scoped lang="less">
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

  .content-con {
    padding: 10px;

    .page-card {
      min-height: ~"calc(100vh - 84px)";
    }
  }
}
</style>
