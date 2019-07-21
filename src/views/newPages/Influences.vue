<template>
<div class="page">
  <div class="pageWrapper">
    <div class="circleContainer">
      <div class="circleContainer--line"></div>
      <div class="environment circle" @click="showInfo('environment')" :class="{ active: toggleEnv }">
        <img src="../../assets/images/newScenes/erdball.png" alt="">
      </div>
      <div class="resources circle" @click="showInfo('resources')" :class="{ active: toggleRes }">
        <img src="../../assets/images/newScenes/blatt.png" alt="">
      </div>
      <div class="money circle" @click="showInfo('money')" :class="{ active: toggleMoney }">
        <img src="../../assets/images/newScenes/geldschein.png" alt="">
      </div>
    </div>
    <div class="infoContainer">
      <span class="headline">{{ headline }}</span>
      <p>
        {{ infoText }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      headline: 'Was kannst du konkret damit bewirken?',
      infoText: '',
      environmentInfo: ['Umweltbelastung eindämmen', 'Jährlich entstehen durch die Lebensmittelverschwendung unnötigerweise mehr als 38 Millionen Tonnen Treibhausgase. Weniger wegwerfen heißt also auch, weniger Belastung für unsere Umwelt.'],
      resourcesInfo: ['Ressourcenverlust vermeiden', 'Die Lebensmittelverschwendung geht mit immensen Ressourcenverlusten einher: Gut 43.000 Quadratkilometer landwirtschaftlicher Fläche werden genutzt, sowie 216 Millionen Kubikmeter Wasser verbraucht. Für jedes Nahrungsmittel verbrauchen  wir auch Energie bei Herstellung und Transport. Die Belastung durch Pflanzenschutzmittel, Mineral- und Wirtschaftsdünger kommen auch noch dazu.'],
      moneyInfo: ['Geld sparen', 'Wir kaufen viel zu viel ein. Dadurch steigert sich die Nachfrage und erhöht so unnötig die Preise von Grundnahrungsmitteln. Im Jahr könnte man pro Person etwa 235-300 Euro sparen. Mit diesen 250 Euro könntest du deinen nächsten Städtetrip planen.'],
      toggleEnv: false,
      toggleRes: false,
      toggleMoney: false,
      environmentAudio: new Audio(require('../../assets/audio/Audio17.mp3')),
      resourcesAudio: new Audio(require('../../assets/audio/Audio18.mp3')),
      moneyAudio: new Audio(require('../../assets/audio/Audio19.mp3')),
      pageAudios: []
    }
  },
  mounted () {
    this.pageAudios = [this.environmentAudio, this.resourcesAudio, this.moneyAudio]
  },
  beforeDestroy () {
    this.stopAudio()
  },
  methods: {
    showInfo: function (type) {
      if (type === 'environment') {
        this.toggleEnv = true
        this.toggleRes = false
        this.toggleMoney = false
        this.headline = this.environmentInfo[0]
        this.infoText = this.environmentInfo[1]
        this.startAudio(this.environmentAudio)
      }

      if (type === 'resources') {
        this.toggleEnv = false
        this.toggleRes = true
        this.toggleMoney = false
        this.headline = this.resourcesInfo[0]
        this.infoText = this.resourcesInfo[1]
        this.startAudio(this.resourcesAudio)
      }

      if (type === 'money') {
        this.toggleEnv = false
        this.toggleRes = false
        this.toggleMoney = true
        this.headline = this.moneyInfo[0]
        this.infoText = this.moneyInfo[1]
        this.startAudio(this.moneyAudio)
      }
    },
    startAudio: function (audioFile) {
      for (let audio of this.pageAudios) {
        audio.pause()
      }
      if (this.$parent.playAudio) {
        audioFile.play()
      }
    },
    stopAudio: function () {
      for (let audio of this.pageAudios) {
        audio.pause()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes osciShadow{
  0%{
    filter: drop-shadow(0 0 10px #6aa7cc);
  }
  50%{
    filter: drop-shadow(0 0 20px #6aa7cc);
  }
  100%{
    filter: drop-shadow(0 0 10px #6aa7cc);
  }
}

.page {
  .pageWrapper {
    position: relative;
    background: #0f2331;
    width: 100%;
    height: 100%;
    background: url('../../assets/images/newScenes/backgrounds/background-blue.png') center no-repeat;
    background-size: contain;
    background-color: #0f2331;

    .infoContainer {
      position: absolute;
      top: 400px;
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
    }

    .circleContainer{
      position: relative;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      align-items: center;

      &--line{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 97%;
        border: 6px solid #263845;
        transform: translate(-50%, -50%);
        animation: osciShadow 3s linear infinite;
        // filter: drop-shadow(0 0 20px #6aa7cc);
      }

      .circle{
        position: relative;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #263845;

        &:hover{
          border: 5px solid #6aa7cc;
        }

        img{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 100px;
          width: auto;
        }
      }

      .active{
        border: 5px solid #6aa7cc;
        filter: drop-shadow(0 0 20px #6aa7cc);
        width: 250px;
        height: 250px;

        img{
          height: 150px;
          width: auto;
          }
      }
    }
  }
}

</style>
