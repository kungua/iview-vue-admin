<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider
        v-model="collapsed"
        breakpoint="sm"
        collapsible
        hide-trigger
      ></Sider>
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
            <router-view />
          </Card>
        </i-content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false
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
