<template>
<div class="page">
  <div class="pageWrapper">
    <div class="imgContainer">
      <div class="gridContainer">
            <!-- eslint-disable-next-line vue/require-v-for-key, vue/no-unused-vars -->
        <div v-for="item in gridItems" class="gridContainer__item" :class="item.class"></div>
      </div>
      <button class="germany" @click="showItems('germany')">
        <img src="../../assets/images/newScenes/germany.png" alt="">
      </button>
      <button class="france" @click="showItems('france')">
        <img src="../../assets/images/newScenes/frankreich.png" alt="">
      </button>
    </div>
    <div class="infoContainer">
      <div class="info">
        <span class="headline">Deutschland im Vergleich</span>
        <div class="info__text" :class="{ clicked: clicked }">
          <p>
            Food Waste pro Person<br>
            <span class="bigtext">{{ personWaste }}</span><br>
            Kilogramm/Jahr<br><br>

            Nationaler Food Waste<br>
            <span class="bigtext">{{ nationWaste }}</span><br>
            Tonnen/Jahr<br>
          </p>
        </div>
        <div class="frTip" :class="{ clicked: frClicked }"><br>
          Frankreich hat im Jahr 2016 Food Waste den Kampf angesagt: Lebensmittelverschwendung wird für Händler unter Strafe gestellt.
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
      gridItems: [],
      personWaste: '',
      nationWaste: '',
      clicked: false,
      frClicked: false
    }
  },
  methods: {
    showItems: function (land) {
      this.clicked = true
      if (land === 'germany') {
        this.frClicked = false
        let gerArray = []
        for (let i = 0; i < 100; i++) {
          if (i < 81) { gerArray.push({ class: 'full' }) } else { gerArray.push({ class: 'empty' }) }
        }
        this.gridItems = gerArray
        this.personWaste = '81,6'
        this.nationWaste = '18, 000,000'
      }

      if (land === 'france') {
        this.frClicked = true
        let frArray = []
        for (let i = 0; i < 100; i++) {
          if (i < 20) { frArray.push({ class: 'full' }) } else { frArray.push({ class: 'empty' }) }
        }
        this.gridItems = frArray
        this.personWaste = '20'
        this.nationWaste = '10,300,000 '
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
      height: 100%;
      width: 100%;

      .gridContainer{
        position: absolute;
        top: 50px;
        left: 20%;
        height: 80%;
        width: auto;
        display: grid;
        justify-content: center;
        justify-items: center;
        grid-template-rows: repeat(10, 30px);
        grid-template-columns: repeat(10, 40px);
        grid-auto-flow: row;
        grid-gap: 2px;

        &__item{
          width: 40px;
          height: 30px;
        }

        .full{
          background: #6aa7cc;
        }

        .empty{
          background: #315268;
        }
      }

      .germany{
        position: absolute;
        top: 70%;
        left: calc(20% + 30px);
        width: 100px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;

        &:hover{
          filter: drop-shadow(0 0 20px #6aa7cc);
        }

        &:focus{
          filter: drop-shadow(0 0 20px #6aa7cc);
        }
        img{
          width: 100px;
        }
      }

      .france{
        position: absolute;
        top: 70%;
        left: calc(20% + 250px);
        width: 100px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;

        &:hover{
          filter: drop-shadow(0 0 20px #6aa7cc);
        }

        &:focus{
          filter: drop-shadow(0 0 20px #6aa7cc);
        }

        img{
          width: 100px;
        }
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

        .info__text{
          opacity: 0;
        }

        .frTip{
          opacity: 0;
        }
        .clicked {
          opacity: 1;
        }
      }
    }
  }
}
</style>
