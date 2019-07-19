<template>
<div class="page">
  <div class="pageWrapper">
    <div class="infoContainer">
      <div class="info">
        <div class="info__text1 animated fadeIn slow">
          <p>
            Pro Tag schmeißt jeder Einzelne <br> etwa <span class="headline">220 Gramm </span>weg.
          </p>
        </div>
        <div class="info__text2 animated fadeIn slow delay-4s">
          <p>
            So viel ist das gar nicht?<br>
            <span class="headline">Untersuch'</span> das Obst und Gemüse in der Kiste.<br>
          </p>
        </div>
      </div>
    </div>
    <div class="imgContainer">
      <div class="crate">
        <img class="crate--main" src="../../assets/images/newScenes/kiste.png" alt="">
        <div class="tomato animated bounceInDown fast" @click="openModal(2)">
          <img class="tomato--bad" src="../../assets/images/newScenes/food/veggies/tomate-faul-oben.png" alt="">
          <img class="tomato--good" src="../../assets/images/newScenes/food/veggies/tomate-oben.png" alt="">
        </div>
        <div class="banana animated bounceInDown slow" @click="openModal(0)">
          <img class="banana--bad" src="../../assets/images/newScenes/food/fruits/banane-faul.png" alt="">
          <img class="banana--good" src="../../assets/images/newScenes/food/fruits/banane-frisch.png" alt="">
        </div>
        <div class="gurke animated bounceInDown fast" @click="openModal(1)">
          <img class="gurke--bad" src="../../assets/images/newScenes/food/veggies/gurke-faul.png" alt="">
          <img class="gurke--good" src="../../assets/images/newScenes/food/veggies/gurke.png" alt="">
        </div>
        <img v-b-tooltip.hover title="<- I'm with stupid" class="tomato-right" src="../../assets/images/newScenes/food/veggies/tomate-rechts.png" alt="">
        <img v-b-tooltip.hover title="Schon wieder liegen geblieben..." class="tomato-left" src="../../assets/images/newScenes/food/veggies/tomate-links.png" alt="">
        <img class="crate--front" src="../../assets/images/newScenes/kiste-front.png" alt="">
      </div>
    </div>
    <b-modal ref="veggieCount" size="lg" header-bg-variant="dark" body-bg-variant="dark" footer-bg-variant="dark">
      <b-tabs v-model="tabIndex" content-class="mt-3" class="gridContainer">
        <b-tab class="veggieCount__body" title="Bananen">
          <div class="veggieCount__grid">
            <!-- eslint-disable-next-line vue/require-v-for-key, vue/no-unused-vars -->
            <img v-for="item in bananas" src="../../assets/images/newScenes/food/fruits/banane.png" class="veggieCount__veggie">
          </div>
        </b-tab>
        <b-tab class="veggieCount__body" title="Gurken">
          <div class="veggieCount__grid">
            <!-- eslint-disable-next-line vue/require-v-for-key, vue/no-unused-vars -->
            <img v-for="item in cucumbers" src="../../assets/images/newScenes/food/veggies/gurke.png" class="veggieCount__veggie">
          </div>
        </b-tab>
        <b-tab class="veggieCount__body" title="Tomaten">
          <div class="veggieCount__grid">
            <!-- eslint-disable-next-line vue/require-v-for-key, vue/no-unused-vars -->
            <img v-for="item in tomatoes" src="../../assets/images/newScenes/food/veggies/tomate-oben.png"  class="veggieCount__veggie">
          </div>
        </b-tab>
      </b-tabs>
      <template slot="modal-footer">
        <div class="customFooter">
          <p>
            Das summiert sich zu <span class="headline">81 Kg</span>  pro Kopf im Jahr, <br> davon satte <span class="headline">53-55 Kg</span>  kann man vermeiden.<br>
            Umgerechnet sind das <span class="headline--big">{{ currentValue }}</span> {{ currentVeggie }} pro Sekunde. <br>
            Ein Bild steht für {{ currentVeggie }}.
          </p>
        </div>
      </template>
    </b-modal>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      tabIndex: 0,
      bananas: [],
      cucumbers: [],
      tomatoes: [],
      drawnVeggies: false,
      // Weight of veggie in grams
      bananaWeight: 150,
      cucumberWeight: 300,
      tomatoWeight: 80,
      // One image in the grid represents 100 units (like tomatoes)
      unitSize: 100,
      // calculated veggies
      bananaValue: 0,
      cucumberValue: 0,
      tomatoValue: 0,
      currentValue: 0,
      currentVeggie: '',
      storeAudio: new Audio(require('../../assets/audio/Audio5.mp3')),
      modalAudio: new Audio(require('../../assets/audio/Audio6.mp3')),
      pageAudios: []
    }
  },
  mounted () {
    this.pageAudios = [this.storeAudio]
    this.startAudio(this.storeAudio)
  },
  beforeDestroy () {
    this.stopAudio()
  },
  methods: {
    openModal (index) {
      this.tabIndex = index
      this.$refs['veggieCount'].show()
      if (!this.drawnVeggies) { this.drawVeggies() }
      if (this.tabIndex === 0) {
        this.currentValue = this.bananaValue
        this.currentVeggie = 'Bananen'
      }
      if (this.tabIndex === 1) {
        this.currentValue = this.cucumberValue
        this.currentVeggie = 'Gurken'
      }
      if (this.tabIndex === 2) {
        this.currentValue = this.tomatoValue
        this.currentVeggie = 'Tomaten'
      }
      this.startAudio(this.modalAudio)
    },
    drawVeggies () {
      this.drawnVeggies = true
      let values = this.calculateVeggies()
      let bananaCount = values[0]
      let cucumberCount = values[1]
      let tomatoCount = values[2]

      this.startInterval(this.bananas, bananaCount)
      this.startInterval(this.cucumbers, cucumberCount)
      this.startInterval(this.tomatoes, tomatoCount)
    },
    calculateVeggies () {
      let numbers = []
      let wasteInKG = 2000

      // Rechnung für bananas
      let result = ((wasteInKG * 1000) / this.bananaWeight) / this.unitSize
      numbers.push(result)
      this.bananaValue = Math.ceil(result * this.unitSize)

      // Rechnung für Gurken
      result = ((wasteInKG * 1000) / this.cucumberWeight) / this.unitSize
      numbers.push(result)
      this.cucumberValue = Math.ceil(result * this.unitSize)

      // Rechnung für Tomaten
      result = ((wasteInKG * 1000) / this.tomatoWeight) / this.unitSize
      numbers.push(result)
      this.tomatoValue = Math.ceil(result * this.unitSize)

      return numbers
    },
    startInterval (array, amount) {
      let count = 0
      let interval = setInterval(() => {
        if (count > amount) {
          clearInterval(interval)
        }
        array.push(count)
        count++
      }, 80)
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
  },
  watch: {
    tabIndex: function () {
      if (this.tabIndex === 0) {
        this.currentValue = this.bananaValue
        this.currentVeggie = 'Bananen'
      }
      if (this.tabIndex === 1) {
        this.currentValue = this.cucumberValue
        this.currentVeggie = 'Gurken'
      }
      if (this.tabIndex === 2) {
        this.currentValue = this.tomatoValue
        this.currentVeggie = 'Tomaten'
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
      position: absolute;
      height: 100%;
      left: 0;
      width: 50%;

      .crate{
        position: relative;
        left: 0;
        height: 100%;
        width: 100%;

        &--main{
          position: absolute;
          left: 20%;
          top: 50px;
          height: auto;
          width: 500px;
        }

        &--front{
          position: absolute;
          left: 20%;
          top: 432px;
          height: auto;
          width: 500px;
        }

      .banana{
        position: absolute;
        left: calc(20% + 90px);
        top: 120px;
        height: auto;
        width: 270px;
        filter: drop-shadow(0 0 20px #fbff02);
        transition: filter 1000ms ease-in;

        &:hover .banana--bad  {
          opacity: 1;
        }

        &:hover .banana--good  {
          opacity: 0;
        }

        &--good {
          position: absolute;
          left: 0;
          top: 0;
          width: 320px;
          height: auto;
          opacity: 1;
          transition: opacity 1000ms ease-in;
        }

        &--bad {
          position: absolute;
          left: 0;
          top: 0;
          width: 320px;
          height: auto;
          opacity: 0;
          transition: opacity 1000ms ease-in;
        }
      }

      .tomato{
        position: absolute;
        left: calc(20% + 270px);
        top: 80px;
        height: auto;
        width: 150px;
        filter: drop-shadow(0 0 20px #ee0808);
        transition: filter 1000ms ease-in;

        &:hover .tomato--bad  {
          opacity: 1;
        }

        &:hover .tomato--good  {
          opacity: 0;
        }

        &--good {
          position: absolute;
          left: 0;
          top: 0;
          width: 150px;
          height: auto;
          opacity: 1;
          transition: opacity 1000ms ease-in;
        }

        &--bad {
          position: absolute;
          left: 0;
          top: 0;
          width: 150px;
          height: auto;
          opacity: 0;
          transition: opacity 1000ms ease-in;
        }
      }

      .gurke{
        position: absolute;
        left: calc(20% + 110px);
        top: 150px;
        height: auto;
        width: 130px;
        filter: drop-shadow(0 0 20px #4aa519);
        transition: filter 1000ms ease-in;

        &:hover .gurke--bad  {
          opacity: 1;
        }

        &:hover .gurke--good  {
          opacity: 0;
        }

        &--good {
          position: absolute;
          left: 0;
          top: 0;
          width: 130px;
          height: auto;
          opacity: 1;
          transition: opacity 1000ms ease-in;
        }

        &--bad {
          position: absolute;
          left: 0;
          top: 0;
          width: 130px;
          height: auto;
          opacity: 0;
          transition: opacity 1000ms ease-in;
        }
      }

      .tomato-left{
        position: absolute;
        left: calc(20% + 50px);
        top: 320px;
        height: auto;
        width: 200px;
      }

      .tomato-right{
        position: absolute;
        left: calc(20% + 150px);
        top: 310px;
        height: auto;
        width: 200px;
      }
    }
  }

    .infoContainer {
      position: absolute;
      height: 100%;
      left: 50%;
      width: 50%;
      background: url('../../assets/images/newScenes/backgrounds/background-blue.png') center no-repeat;
      background-size: contain;
      background-color: #0f2331;

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

.veggieCount {
  &__body {
    max-height: 280px;
    overflow-y: auto;
    background: #343a40;
  }

  &__grid {
    position: relative;
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(18, 30px);
    grid-gap: 10px;
    background: #343a40;
  }

  &__veggie {
    width: 30px;
    height: auto;
  }
}

.customFooter{
  position: relative;
  left: -120px;
  font-family: 'Barlow Black', Helvetica, Arial, sans-serif;
  color: #deebf7;
  font-size: 20px;
  text-align: center;
}
</style>
