<template>
  <div id="app">
    <layout>
      <router-view/>
    </layout>
    <!--    <div id="nav">-->
    <!--      <Button @click="handleClick('back')"> 返回上一页</Button>-->
    <!--      <Button @click="handleClick('push')"> 跳转到 parent</Button>-->
    <!--      <Button @click="handleClick('replace')"> 替换到 parent</Button>-->
    <!--      <router-link to="/">Home</router-link>-->
    <!--      |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--      <router-link :to="{ name: 'about' }">About</router-link>-->
    <!--    </div>-->
    <!--    <div class="bar"></div>-->
    <!--        <transition-group :name="routerTransition">-->
    <!--          <router-view key="default"/>-->
    <!--          <router-view key="email" name="email"/>-->
    <!--          <router-view key="tel" name="tel"/>-->
    <!--        </transition-group>-->
  </div>
</template>

<script>
import Layout from './views/Layout'

export default {
  name: 'Admin',
  components: {
    Layout
  },
  data () {
    return {
      routerTransition: ''
    }
  },
  watch: {
    $route (to) {
      to.query &&
      to.query.transitionName &&
      (this.routerTransition = to.query.transitionName)
    }
  },
  methods: {
    handleClick (type) {
      if (type === 'back') {
        this.$router.back()
      } else if (type === 'push') {
        // this.$router.push('/parent')
        // this.$router.push({
        //   name: 'argu',
        //   params: {
        //     name: 'guakun'
        //   }
        // })
        const name = 'guakun'
        this.$router.push({
          path: `/argu/${name}`
        })
      } else if (type === 'replace') {
        // this.$router.push('/parent')
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }
}
</script>

<style lang="less">
html,
body {
  height: 100%;
  /*min-width: 1300px;*/

  #app {
    height: 100%;
  }
}

.router-enter {
  opacity: 0;
}

.router-enter-active {
  transition: opacity 0.8s ease;
}

.router-enter-to {
  opacity: 1;
}

.router-leave {
  opacity: 1;
}

.router-leave-active {
  transition: opacity 0.8s ease;
}

.router-leave-to {
  opacity: 0;
}

.bar {
  margin: 100px;
}

.iconfont-svg {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

@font-face {
  font-family: 'iconfont';  /* project id 1610748 */
  src: url('./assets/font/iconfont.eot');
  src: url('./assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./assets/font/iconfont.woff2') format('woff2'),
  url('./assets/font/iconfont.woff') format('woff'),
  url('./assets/font/iconfont.ttf') format('truetype'),
  url('./assets/font/iconfont.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
