<template>
  <div class="page">
    <div class="background">
      <div class="background__sliding"></div>
      <img class="background__skyline" src="../assets/images/sky.png">
    </div>
    <div class="foreground">
      <div class="foreground__info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ad delectus itaque fugiat distinctio consequatur aliquam quo quibusdam illum. Non enim vero corrupti, aliquam sit facere maxime. Voluptatum, tempora.
        </p>
      </div>
      <img class="foreground__food" src="../assets/images/badburger.png">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@keyframes slide{
  0%{
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(-1692px, 0, 0);
  }
}

.page {
  width: 100%;
  height: 100%;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    top: 0;

    &__sliding {
      background: url('../assets/images/background.jpg') repeat-x;
      height: 100%;
      width: 5076px;
      animation: slide 20s linear infinite;
    }

    &__skyline {
      position: absolute;
      width: 100%;
      left:0;
      bottom: 0;
    }
  }

 .foreground {
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    top: 0;

    &__info {
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      max-width: 550px;
      color: #afafaf;
      font-size: 20px;
      filter: drop-shadow(0 0 50px #ffffff);
    }

    &__food {
      position: absolute;
      width: 350px;
      height: 280px;
      left:0;
      bottom: 0;
      margin-left: 30px;
      filter: drop-shadow(0 0 30px #d37321);
    }
  }
}
</style>
