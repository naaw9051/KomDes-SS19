<template>
<div class="page">
  <div class="pageWrapper">
    <div class="infoContainer">
      <span class="headline--big">Werd' aktiv und hilf' mit!</span>
      <p>
        Keine Panik, schon mit kleinen Veränderungen kann man viel bewirken.<br>
        Und einfach ist es gleich dazu.<br>
      </p>
      <span class="headline">Schritt für Schritt</span>
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
    background: url('../../assets/images/newScenes/backgrounds/background-blue.png') center no-repeat;
    background-size: contain;
    background-color: #0f2331;

    .infoContainer {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
    }
  }
}
</style>
