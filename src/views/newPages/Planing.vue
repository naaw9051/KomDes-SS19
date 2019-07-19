<template>
<div class="page">
  <div class="pageWrapper">
    <div class="imgContainer animated swing slow">
      <img class="shoppinglist" v-b-tooltip.hover title="Butter, Milch, Einkaufstasche mitnehmen..." src="../../assets/images/newScenes/Einkaufliste.png" alt="">
    </div>
    <div class="infoContainer">
      <div class="info">
        <span class="headline">Plane und kontrolliere deine Vorräte</span>
        <div class="info__text">
          <p>
          Geh lieber einmal mehr zum Supermarkt als einmal zu oft zur Mülltonne.<br>
          Schau vorm Einkaufen erstmal was man du zuhause hast, vielleicht brauchst du weniger als du denkst.<br> <br>
          Vor allem bei verderblichen Lebensmitteln lohnt es!<br>
          Online finden sich sehr viele Rezepte: Koch dir etwas aus deinen Vorräten und spare an Geld.<br><br>
          Gut möglich, dass du sogar ein neues Lieblingsgericht entdeckst.<br>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      planingAudio: new Audio(require('../../assets/audio/Audio14.mp3')),
      pageAudios: []
    }
  },
  mounted () {
    this.pageAudios = [this.planingAudio]
    this.startAudio(this.planingAudio)
  },
  beforeDestroy () {
    this.stopAudio()
  },
  methods: {
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
.page {
  .pageWrapper {
    position: relative;
    background: #0f2331;
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;

    .imgContainer {
      position: relative;
      justify-items: center;
      height: 100%;
      width: 100%;

      .shoppinglist{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 77%;
        width: auto;
      }
    }

    .infoContainer {
      background: url('../../assets/images/newScenes/backgrounds/background-blue.png') center no-repeat;
      background-size: contain;
      background-color: #0f2331;
      position: relative;

      .info{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
      }
    }
  }
}
</style>
