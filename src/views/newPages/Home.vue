<template>
<div class="page">
  <div class="pageWrapper">
    <div class="infoContainer">
      <div class="info">
        <span class="headline">Vertraue deinen Sinnen</span>
        <div class="info__text">
          <p>
          Mindesthaltbarkeit, wie der Name schon sagt:<br>
          Bis dahin ist etwas mindestens Haltbar.<br><br>
          Also nur weil der Johgurt, die Milch oder andere Lebensmittel mit einem MHD mal einige Tage drüber sind,
          heißt es nicht, dass man sie wegwerfen muss. <br><br>
          Schaut sie euch genau an. Geruch. Optik. Konsistens.<br>
          Wenn das alles noch gut ist, gibt es keinen Grund <br>
          das Lebensmittel nicht zu essen oder in ein Gericht zu verarbeiten.
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
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
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
