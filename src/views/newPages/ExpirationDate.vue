<template>
<div class="page">
  <div class="pageWrapper">
    <div class="imgContainer animated tada slow">
      <img class="milk" v-b-tooltip.hover title="So alt bin ich doch gar nicht :(" src="../../assets/images/newScenes/food/milk.png" alt="">
    </div>
    <div class="infoContainer">
      <div class="info">
        <span class="headline">Vertraue deinen Sinnen</span>
        <div class="info__text">
          <p>
          Mindesthaltbarkeit - wie der Name schon sagt:<br>
          Bis dahin ist etwas mindestens haltbar.<br><br>
          Also nur weil der Joghurt, die Milch oder andere Lebensmittel mit einem MHD mal einige Tage drüber sind,
          heißt es nicht, dass man sie wegwerfen muss. <br><br>
          Schaut sie euch genau an. Geruch. Optik. Konsistenz.<br>
          Wenn das alles noch gut ist, gibt es keinen Grund <br>
          das Lebensmittel nicht zu essen oder in ein Gericht zu verarbeiten.
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
      mhdAudio: new Audio(require('../../assets/audio/Audio12.mp3')),
      pageAudios: []
    }
  },
  mounted () {
    this.pageAudios = [this.mhdAudio]
    this.startAudio(this.mhdAudio)
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

      .milk{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 80%;
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
