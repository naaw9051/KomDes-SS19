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
      <div class="crate">
        <img class="crate--main" src="../../assets/images/newScenes/kiste.png" alt="">
        <div class="tomato">
          <img class="tomato--bad" src="../../assets/images/newScenes/food/veggies/tomate-faul-oben.png" alt="">
          <img class="tomato--good" src="../../assets/images/newScenes/food/veggies/tomate-oben.png" alt="">
        </div>
        <div class="banana">
          <img class="banana--bad" src="../../assets/images/newScenes/food/fruits/banane-faul.png" alt="">
          <img class="banana--good" src="../../assets/images/newScenes/food/fruits/banane-frisch.png" alt="">
        </div>
        <div class="gurke">
          <img class="gurke--bad" src="../../assets/images/newScenes/food/veggies/gurke-faul.png" alt="">
          <img class="gurke--good" src="../../assets/images/newScenes/food/veggies/gurke.png" alt="">
        </div>
        <img class="tomato-right" src="../../assets/images/newScenes/food/veggies/tomate-rechts.png" alt="">
        <img class="tomato-left" src="../../assets/images/newScenes/food/veggies/tomate-links.png" alt="">
        <img class="crate--front" src="../../assets/images/newScenes/kiste-front.png" alt="">
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
</style>
