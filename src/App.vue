<template>
  <div id="app">
    <div id="nav">
      <router-link to="/1">Seite 1</router-link> |
      <router-link to="/2">Seite 2</router-link> |
      <router-link to="/3">Seite 3</router-link> |
    </div>
    <transition :enter-active-class="transitionName"> 
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default { 
  data () {
    return {
      transitionName: 'animated slideInRight'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.slice(1)
      const fromDepth = from.path.slice(1)
      this.transitionName = toDepth < fromDepth ? 'animated slideInLeft' : 'animated slideInRight'
    }
  }
}
</script>

<style lang="scss">
@import './../node_modules/animate.css/animate.min.css';

body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background:#2c3e50;
  height: 60px;
  width: 100%;
  a {
    font-weight: bold;
    color: #dbcda1;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
