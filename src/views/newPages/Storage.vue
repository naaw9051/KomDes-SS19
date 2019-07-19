<template>
<div class="page">
  <div class="pageWrapper">
    <div class="infoContainer">
      <div class="info">
        <span class="headline">Gib ihnen ein neues Zuhause</span>
        <div class="info__text">
          <p>
          Damit alles lange haltbar bleibt, lagere deine Lebensmittel entsprechend.<br><br>
          Bei den meisten Lebensmitteln steht drauf, wie sie am besten gelagert werden sollen.<br>
          Wenn man sich unsicher ist, kann man sich online schnell die richtige Lagerungsweise heraussuchen.<br><br>
          Den Lagerort sollte man dringend sauber halten.
          </p>
        </div>
      </div>
    </div>
    <div class="imgContainer">
      <div class="arranged">
        <div class="box animated bounceInDown">
          <img src="../../assets/images/newScenes/Lagerung2.png" alt="">
        </div>
        <div class="dose animated bounceInLeft delay-1s">
          <img v-b-tooltip.hover title="Bin auch super für unterwegs!" src="../../assets/images/newScenes/Lagerung3.png" alt="">
        </div>
        <div class="glas animated pulse delay-1s">
          <img src="../../assets/images/newScenes/Lagerung1.png" alt="">
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

      .arranged{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 420px;
        width: 500px;

        .box{
          position: relative;
          left: -50px;
          height: 250px;
          width: auto;

          img {
          height: 250px;
          width: auto;
          }
        }

        .dose{
          position: absolute;
          left: 0;
          top: 200px;
          height: 200px;
          width: auto;

          img {
          height: 200px;
          width: auto;
          }
        }

        .glas{
          position: absolute;
          right: 0;
          top: 100px;
          height: 320px;
          width: auto;

          img {
            height: 320px;
            width: auto;
          }
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
      }
    }
  }
}
</style>
