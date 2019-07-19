<template>
<div class="page">
  <div class="pageWrapper">
    <div class="infoContainer">
      <div class="info">
        <span class="headline">Mach' andere glücklich!</span>
        <div class="info__text">
          <p>
            Und wenn doch mal was übrig bleibt – <br>warum machst du nicht anderen eine kleine Freude? <br><br>
            Es gibt mittlerweile zahlreiche private Initiativen und Portale über die du deine Lebensmittel verschenken kannst.<br><br>
            Verschenken statt wegwerfen ist hier die Devise!
          </p>
        </div>
      </div>
    </div>
    <div class="imgContainer animated bounce slow">
      <img class="sharingBox" src="../../assets/images/newScenes/foodsharing1.png"  alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      foodSharingAudio: new Audio(require('../../assets/audio/Audio15.mp3')),
      pageAudios: []
    }
  },
  mounted () {
    this.pageAudios = [this.foodSharingAudio]
    this.startAudio(this.foodSharingAudio)
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

      .sharingBox{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 77%;
        height: auto;
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
