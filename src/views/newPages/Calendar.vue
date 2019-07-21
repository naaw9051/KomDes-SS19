<template>
<div class="page">
  <div class="pageWrapper">
    <div class="imgContainer animated swing slow">
      <img class="calendar" v-b-tooltip.hover title="122 Tage für nichts und wieder nichts..." src="../../assets/images/newScenes/calendar.png" alt="">
    </div>
    <div class="infoContainer">
      <div class="info">
        <div class="info__text">
          <p>
          Rein rechnerisch produzieren wir jedes Jahr bis zu diesem Tag ganz umsonst unsere Lebensmittel.
          </p>
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

      .calendar{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 60%;
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
