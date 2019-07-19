<template>
  <div id="app">
    <div class="paging">
      <button class="paging__sound customBtn" @click="toggleSound()">
        <font-awesome-icon :icon="soundIcon" size="lg" />
      </button>
      <div class="paging__dots">
        <div class="paging__dots--line"></div>
        <router-link to="/1"><div class="paging__dots--link"></div></router-link>
        <router-link to="/2"><div class="paging__dots--link"></div></router-link>
        <router-link to="/3"><div class="paging__dots--link"></div></router-link>
        <router-link to="/4"><div class="paging__dots--link"></div></router-link>
        <router-link to="/5"><div class="paging__dots--link"></div></router-link>
        <router-link to="/6"><div class="paging__dots--link"></div></router-link>
        <router-link to="/7"><div class="paging__dots--link"></div></router-link>
        <router-link to="/8"><div class="paging__dots--link"></div></router-link>
        <router-link to="/9"><div class="paging__dots--link"></div></router-link>
        <router-link to="/10"><div class="paging__dots--link"></div></router-link>
        <router-link to="/11"><div class="paging__dots--link"></div></router-link>
        <router-link to="/12"><div class="paging__dots--link"></div></router-link>
        <router-link to="/13"><div class="paging__dots--link"></div></router-link>
      </div>
      <div class="paging__branding">
        <img class="paging__branding--logo" src="./assets/images/newScenes/Lagerung3.png" alt="">
      </div>
    </div>
    <button class="arrowLeft customBtn" @click="previousPage()" :disabled=" disableLeftNavigation">
      <font-awesome-icon icon="chevron-left" size="lg" />
    </button>
    <button class="arrowRight customBtn" @click="nextPage()" :disabled=" disableRightNavigation">
      <font-awesome-icon icon="chevron-right" size="lg" />
    </button>
    <transition :enter-active-class="enterTransition" :leave-active-class="leaveTransition">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      totalPages: 15,
      disableLeftNavigation: false,
      disableRightNavigation: false,
      soundIcon: 'volume-up',
      playAudio: true,
      enterTransition: 'animated slideInRight',
      leaveTransition: 'animated slideOutLeft',
      ambientAudio: new Audio(require('./assets/audio/loop-leise.wav')),
      allAudio: []
    }
  },
  methods: {
    nextPage: function () {
      let newRoute = parseInt(this.$route.path.slice(1)) + 1
      if (!this.disableRightNavigation) { this.$router.push(`${newRoute}`) }
    },
    previousPage: function () {
      let newRoute = parseInt(this.$route.path.slice(1)) - 1
      if (!this.disableLeftNavigation) { this.$router.push(`${newRoute}`) }
    },
    toggleSound: function () {
      this.playAudio = !this.playAudio
    }
  },
  mounted () {
    this.ambientAudio.loop = true
    this.ambientAudio.play()
    this.allAudio.push(this.ambientAudio)
  },
  watch: {
    '$route' (to, from) {
      const toDepth = parseInt(to.path.slice(1))
      const fromDepth = parseInt(from.path.slice(1))
      this.enterTransition = toDepth < fromDepth ? 'animated slideInLeft' : 'animated slideInRight'
      this.leaveTransition = toDepth < fromDepth ? 'animated slideOutRight' : 'animated slideOutLeft'
      this.disableLeftNavigation = toDepth - 1 < 1
      this.disableRightNavigation = toDepth + 1 > this.totalPages
    },
    playAudio: function () {
      if (this.playAudio) {
        this.soundIcon = 'volume-up'
        for (let audio of this.allAudio) {
          audio.play()
        }
      } else {
        this.soundIcon = 'volume-mute'
        for (let audio of this.allAudio) {
          audio.pause()
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import './../node_modules/animate.css/animate.min.css';
@font-face {
  font-family: 'Barlow Black';
  src: url('./assets/fonts/barlow/Barlow-Medium.ttf');
  font-weight: normal;
}

@font-face {
  font-family: 'Barlow Black';
  src: url('./assets/fonts/barlow/Barlow-Black.ttf');
  font-weight: bold;
}

@font-face {
  font-family: 'Barlow Black';
  src: url('./assets/fonts/barlow/Barlow-SemiBold.ttf');
  font-weight: 600;
}

@font-face {
  font-family: 'Barlow Black';
  src: url('./assets/fonts/barlow/Barlow-Regular.ttf');
  font-weight: 500;
}

body {
  margin: 0;
  user-select: none;
}

#app {
  font-family: 'Barlow Black', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #deebf7;
  font-size: 20px;
}

.paging {
  height: 60px;
  width: 100%;
  background:#2c3e50;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  &__branding {
    margin-right: 20px;
    font-size: 18px;
    text-transform: uppercase;

    &--logo{
      width: 50px;
    }
  }

  &__dots {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

    &--line{
      position: absolute;
      top: 50%;
      width: 100%;
      border-top: 3px solid #bbb;
      transform: translateY(-50%);
    }

    .router-link-exact-active &--link{
      background: #bbb;
    }

    &--link {
      position: relative;
      margin: 0 16px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      border-radius: 50%;
      background: #2c3e50;
      border: 2px solid #bbb;

      &:hover {
        background: #e9e9e9;
      }
    }
  }

  &__sound {
    margin: 20px;
    color: white;
  }

  a {
    font-weight: bold;
    color: #dbcda1;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.arrowLeft {
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: 50px;
  z-index: 2;
}

.arrowRight {
  position: absolute;
  top: 50%;
  right: 0;
  margin-right: 50px;
  z-index: 2;
}

.customBtn {
  border: none;
  background: transparent;
  outline: none;

  &:hover {
    color: #42b983;
   }

  &:focus {
    outline: none;
   }
}

.page {
  position: fixed;
  width: 100%;
  height: calc(100% - 60px);
}

.headline{
  font-family: 'Barlow Black', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #6aa7cc;
  font-weight: bold;
  font-size: 28px;
}

.headline--big{
  font-family: 'Barlow Black', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #6aa7cc;
  font-weight: bold;
  font-size: 42px;
}

.bigtext{
  font-family: 'Barlow Black', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #6aa7cc;
  font-weight: 600;
  font-size: 36px;
}

.megabigtext{
  font-family: 'Barlow Black', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #6aa7cc;
  font-weight: bold;
  font-size: 56px;
}

.nav {
  height: 60px;
  width: 100%;
  font-family: 'Barlow Black', Helvetica, Arial, sans-serif;
  align-items: center;
  background: #343a40 ;
}
</style>
