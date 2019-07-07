<template>
  <div class="page">
    <div class="background">
      <img class="background__foodBox" src="../assets/images/foodbox.jpg">
      <div class="background__info--left">Das Gemüse sieht zwar komisch aus, <br> schmeckt aber genauso gut!</div>
      <div class="background__info--right">Untersuch' das Gemüse <br> und schau was passiert</div>
    </div>
    <div class="foreground">
      <div class="foreground__food avocado" @click="openModal(0)">
        <img class="foreground__food--bad avocado" src="../assets/images/badburger.png">
        <img class="foreground__food--good avocado" src="../assets/images/goodburger.png">
      </div>
      <div class="foreground__food cucumber" @click="openModal(1)">
        <img class="foreground__food--bad cucumber" src="../assets/images/badburger.png">
        <img class="foreground__food--good cucumber" src="../assets/images/goodburger.png">
      </div>
      <div class="foreground__food tomato" @click="openModal(2)">
        <img class="foreground__food--bad tomato" src="../assets/images/badburger.png">
        <img class="foreground__food--good tomato" src="../assets/images/goodburger.png">
      </div>
       <b-modal ref="veggieCount" size="lg" title="Zahlen in Gemüse">
          <b-tabs v-model="tabIndex" content-class="mt-3">
            <b-tab class="veggieCount__body" title="Avocados">
              <h3 align="center">Das sind ca. {{ avocadoValue }} Avocados!</h3>
              <div class="veggieCount__grid">
                <!-- eslint-disable-next-line vue/require-v-for-key, vue/no-unused-vars -->
                <img v-for="item in avocados" src="../assets/images/badburger.png" class="veggieCount__veggie">
              </div>
            </b-tab>
            <b-tab class="veggieCount__body" title="Gurken">
              <h3 align="center">Das sind ca. {{ cucumberValue }} Gurken!</h3>
              <div class="veggieCount__grid">
                <!-- eslint-disable-next-line vue/require-v-for-key, vue/no-unused-vars -->
                <img v-for="item in cucumbers" src="../assets/images/badburger.png"  class="veggieCount__veggie">
              </div>
            </b-tab>
            <b-tab class="veggieCount__body" title="Tomaten">
              <h3 align="center">Das sind ca. {{ tomatoValue }} Tomaten!</h3>
              <div class="veggieCount__grid">
                <!-- eslint-disable-next-line vue/require-v-for-key, vue/no-unused-vars -->
                <img v-for="item in tomatoes" src="../assets/images/badburger.png"  class="veggieCount__veggie">
              </div>
              </b-tab>
          </b-tabs>
        <template slot="modal-footer">
          <div>
            <h4>Infos zum Fact oder ne Legende</h4>
            <p>
              Custom Footer
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse autem voluptates repellat necessitatibus magni, rem expedita eligendi possimus deserunt harum reiciendis veritatis odio natus explicabo.
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
      avocados: [],
      cucumbers: [],
      tomatoes: [],
      drawnVeggies: false,
      // Weight of veggie in grams
      avocadoWeight: 150,
      cucumberWeight: 300,
      tomatoWeight: 80,
      // One image in the grid represents 100 units (like tomatoes)
      unitSize: 100,
      // calculated veggies
      avocadoValue: 0,
      cucumberValue: 0,
      tomatoValue: 0
    }
  },
  methods: {
    openModal (index) {
      this.tabIndex = index
      this.$refs['veggieCount'].show()
      if (!this.drawnVeggies) { this.drawVeggies() }
    },
    drawVeggies () {
      this.drawnVeggies = true
      let values = this.calculateVeggies()
      let avocadoCount = values[0]
      let cucumberCount = values[1]
      let tomatoCount = values[2]

      this.startInterval(this.avocados, avocadoCount)
      this.startInterval(this.cucumbers, cucumberCount)
      this.startInterval(this.tomatoes, tomatoCount)
    },
    calculateVeggies () {
      let numbers = []
      let wasteInKG = 2000

      // Rechnung für Avocados
      let result = ((wasteInKG * 1000) / this.avocadoWeight) / this.unitSize
      numbers.push(result)
      this.avocadoValue = Math.ceil(result * this.unitSize)

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
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  background: url('../assets/images/background.jpg') 0 0 no-repeat;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    top: 0;

    &__foodBox {
      position: absolute;
      left: 55%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 500px;
      width: 600px;
    }

    &__info {
      &--left {
        position: absolute;
        left: 80px;
        top: 120px;
        color: #afafaf;
        font-size: 20px;
      }

      &--right {
        position: absolute;
        right: 80px;
        top: 300px;
        color: #afafaf;
        font-size: 20px;
      }
    }
  }

 .foreground {
    position: relative;
    left: 55%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 600px;

    &__food {

      &:hover .foreground__food--bad  {
        opacity: 1;
      }

      &:hover .foreground__food--good  {
        opacity: 0;
      }

      &--good {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: contain;
        opacity: 1;
        transition: opacity 1000ms ease-in;
      }

      &--bad {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: contain;
        opacity: 0;
        transition: opacity 1000ms ease-in;
      }
    }

    .avocado {
      position: absolute;
      margin-top: 20px;
      width: 283px;
      height: 220px;
      left: 0;
      top: 0;
      filter: drop-shadow(0 0 20px #88b04b);
    }

    .cucumber {
      position: absolute;
      width: 283px;
      height: 220px;
      left: 70px;
      bottom: 0;
      filter: drop-shadow(0 0 20px #196941);
    }

    .tomato {
      position: absolute;
      margin-top: 20px;
      width: 283px;
      height: 220px;
      right: 0;
      top: 0;
      filter: drop-shadow(0 0 20px #fa5359);
    }
  }
}

.veggieCount {
  &__body {
    max-height: 280px;
    overflow-y: auto;
  }

  &__grid {
    position: relative;
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(18, 30px);
    grid-gap: 10px;
  }

  &__veggie {
    width: 30px;
    height: 30px;
  }
}
</style>
