<template>
  <div id="app">
    <div id="nav">
      <Button @click="handleClick('back')"> 返回上一页</Button>
      <Button @click="handleClick('push')"> 跳转到 parent</Button>
      <Button @click="handleClick('replace')"> 替换到 parent</Button>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <transition-group :name="routerTransition">
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="email" name="tel"/>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      routerTransition: ''
    }
  },
  watch: {
    $router (to) {
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

<style lang="less" scoped>
.router-enter {
  opacity: 0;
}

.router-enter-active {
  transition: opacity 3s ease;
}

.router-enter-to {
  opacity: 1;
}

.router-leave {
  opacity: 1;
}

.router-leave-active {
  transition: opacity 3s ease;
}

.router-leave-to {
  opacity: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
