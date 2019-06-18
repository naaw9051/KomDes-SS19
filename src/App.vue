<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/landing-page">Seite 1</router-link> |
      <router-link to="/store-front">Seite 2</router-link> |
      <router-link to="/store-shelf">Seite 3</router-link> |
    </div>
    <transition name="slide" :duration="{ enter: 500, leave: 800 }">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
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
