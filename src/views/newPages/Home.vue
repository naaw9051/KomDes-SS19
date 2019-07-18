<template>
<div class="page">
  <div class="backgroundContainer">
    <div class="background">
      <img class="background__counter" src="../../assets/images/counter.png">
      <img class="background__burgerpile" src="../../assets/images/burger-pile.png">
      <img class="background__cup" src="../../assets/images/cup.png">
    </div>
  </div>
  <div class="foreground">
    <div class="foreground__text info">
      <div class="info__title">
        <h2>STOP FOOD WASTE</h2>
      </div>
      <div class="info__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ad delectus itaque fugiat distinctio consequatur aliquam quo quibusdam illum. Non enim vero corrupti, aliquam sit facere maxime. Voluptatum, tempora.
      </div>
      <div class="info__text">
        <p><span class="info__fact">88888 </span>Lorem, ipsum dolor.</p>
        <p><span class="info__fact">88888 </span>Lorem, ipsum dolor.</p>
        <p><span class="info__fact">88888 </span>Lorem, ipsum dolor.</p>
      </div>
    </div>
    <div class="foreground__burger">
      <img class="foreground__burger--bad" src="../../assets/images/badburger.png">
      <img class="foreground__burger--good" src="../../assets/images/goodburger.png">
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
  width: 100%;
  height: 100%;

  .backgroundContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    top: 0;

    .background {
      position: relative;
      width: 100%;
      height: 100%;
      background: url('../../assets/images/background.jpg') 0 0 no-repeat;

      &__counter {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
      }

      &__burgerpile {
        position: absolute;
        right: 525px;
        bottom: 0;
        width: auto;
        height: 400px;
      }

      &__cup {
        position: absolute;
        margin-right: -70px;
        right: 0;
        bottom: 0;
        width: auto;
        height: 90%;
        filter: blur(3px);
      }
    }
  }

  .foreground {
    position: relative;
    width: 100%;
    height: 100%;

    .info {
      position: absolute;
      left: 120px;
      top: 50%;
      transform: translateY(-50%);
      width: 400px;
      color: #afafaf;

      &__title {
        font-size: 30px;
        white-space:nowrap;
      }

      &__text {
        font-size: 16px;
      }

      &__fact {
        font-size: 16px;
        font-weight: bold;
      }
    }

    &__burger {
      position: absolute;
      right: 200px;
      bottom: 100px;
      width: 283px;
      height: 200px;
      filter: drop-shadow(0 0 30px #d37321);
      transition: filter 1000ms ease-in;

      &:hover {
        filter: drop-shadow(0 0 30px #33442a);
      }

      &:hover .foreground__burger--bad  {
        opacity: 1;
      }

      &:hover .foreground__burger--good  {
        opacity: 0;
      }

      &--good {
        position: absolute;
        left: 0;
        top: 0;
        height: 200px;
        width: auto;
        object-fit: contain;
        opacity: 1;
        transition: opacity 1000ms ease-in;
      }

      &--bad {
        position: absolute;
        left: 0;
        top: 0;
        height: 220px;
        width: auto;
        object-fit: contain;
        opacity: 0;
        transition: opacity 1000ms ease-in;
      }
    }
  }
}
</style>
