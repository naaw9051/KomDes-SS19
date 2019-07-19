<template>
<div class="page" @click="showInfo()">
  <div class="pageWrapper">
    <div class="infoContainer">
      <div class="info">
        <div class="info__text1" :class="{ active: text1 }">
          <span class="headline--big">Stop Food</span><br>
          <span class="megabigtext">Waste</span>
        </div>
        <div class="info__text2" :class="{ active: text2 }">
          <p>
          In Deutschland leben über<br>
          <span class="bigtext">83 Millionen</span><br>
          Menschen.
          </p>
        </div>
        <div class="info__text3" :class="{ active: text3 }">
          <img src="../../assets/images/newScenes/food/burger.png" alt="">
          <p>
          <span class="megabigtext">54,4</span><br>
          <span class="headline--big">Millionen</span><br>
          <span class="headline--big">Tonnen</span><br>
          </p>
        </div>
        <div class="info__text4" :class="{ active: text4 }">
          <img src="../../assets/images/newScenes/food/ein-drittel-burger.png" alt="">
          <p>
            Und ein Drittel davon landet in der Tonne.<br>
          </p>
        </div>
        <div class="info__text5" :class="{ active: text5 }">
        <span class="headline">Aber woran liegt das?</span>
          <p>
            Am besten wir machen uns zum Ort an dem alles beginnt,<br>
            dem <span class="headline">Supermarkt</span>.<br>
          </p>
        </div>
      </div>
    </div>
    <div class="imgContainer">
      <div class="city">
      <div class="sky">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
      </div>
        <img class="city--off" src="../../assets/images/newScenes/backgrounds/city-without-lights.png" alt="">
        <img class="city--on" src="../../assets/images/newScenes/backgrounds/city-with-lights.png" alt="">
        <img class="trash-left" src="../../assets/images/newScenes/backgrounds/mülltüte-links.png" alt="">
        <img class="trash-right" src="../../assets/images/newScenes/backgrounds/mülltüte-rechts.png" alt="">
        <img class="trashcan" src="../../assets/images/newScenes/backgrounds/trash.png" alt="">
        <div class="burger">
          <img class="burger--bad" src="../../assets/images/newScenes/food/burger-bad.png" alt="">
          <img class="burger--good" src="../../assets/images/newScenes/food/burger.png" alt="">
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
      clickCounter: 0,
      text1: true,
      text2: false,
      text3: false,
      text4: false,
      text5: false
    }
  },
  methods: {
    showInfo () {
      this.clickCounter++
      if (this.clickCounter === 1) {
        this.text1 = false
        this.text2 = true
      }
      if (this.clickCounter === 2) {
        this.text2 = false
        this.text3 = true
      }
      if (this.clickCounter === 3) {
        this.text3 = false
        this.text4 = true
      }
      if (this.clickCounter === 4) {
        this.text4 = false
        this.text5 = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes lightss{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}

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

      .city{
        position: relative;
        left: 0;
        height: 100%;
        width: auto;

        &--on{
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: auto;
          opacity: 0;
          animation: lightss 10s ease-in-out infinite;
        }

        &--off{
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: auto;
        }

      .trashcan{
        position: absolute;
        right: -130px;
        bottom: -15px;
        height: 250px;
        width: auto;
      }

      .trash-left{
        position: absolute;
        left: 0;
        bottom: -5px;
        height: 250px;
        width: auto;
      }

      .trash-right{
        position: absolute;
        right: 0px;
        bottom: 0;
        height: 250px;
        width: auto;
      }

      .burger{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100px;
        height: 70px;
        filter: drop-shadow(0 0 30px #d37321);
        transition: filter 1000ms ease-in;

        &:hover {
          filter: drop-shadow(0 0 30px #4aa519);
        }

        &:hover .burger--bad  {
          opacity: 1;
        }

        &:hover .burger--good  {
          opacity: 0;
        }

        &--good {
          position: absolute;
          left: 0;
          top: 0;
          width: 100px;
          height: auto;
          opacity: 1;
          transition: opacity 1000ms ease-in;
        }

        &--bad {
          position: absolute;
          left: 0;
          top: 0;
          width: 100px;
          height: auto;
          opacity: 0;
          transition: opacity 1000ms ease-in;
        }
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
          top: 43%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;

        .info__text1{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 1000ms ease-out;

          .megabigtext{
            color: #deebf7;
            font-size: 62px;
          }
        }

        .info__text2{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 1000ms ease-in;
        }

        .info__text3{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 1000ms ease-in;

          img{
            position: absolute;
            top: -50px;
            left: 0px;
            width: 400px;
            z-index: -1;
          }
        }

        .info__text4{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 1000ms ease-in;

           img{
            position: absolute;
            top: -150px;
            left: 0px;
            width: 400px;
            z-index: -1;
          }

          p{
            position: absolute;
            top: 150px;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
          }
        }

        .info__text5{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 1000ms ease-in;
        }

      .active{
          opacity: 1;
        }
      }
    }
  }
}

@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
}

.stars, .twinkling, .clouds {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:0;
}

.twinkling{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}

.clouds{
    background:transparent url('../../assets/images/newScenes/clouds3.png') repeat center;
    background-size: auto 300px;

  -moz-animation:move-clouds-back 200s linear infinite;
  -ms-animation:move-clouds-back 200s linear infinite;
  -o-animation:move-clouds-back 200s linear infinite;
  -webkit-animation:move-clouds-back 200s linear infinite;
  animation:move-clouds-back 200s linear infinite;
}
</style>
