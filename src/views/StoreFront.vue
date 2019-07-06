<template>
  <div class="page">
    <div class="background">
      <div class="background__info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ad delectus itaque fugiat distinctio consequatur aliquam quo quibusdam illum. Non enim vero corrupti, aliquam sit facere maxime. Voluptatum, tempora.
        </p>
      </div>
    </div>
    <div class="foreground">
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
  background: url('../assets/images/background.jpg') 0 0 no-repeat;

  .background {
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
  }

 .foreground {
    position: relative;
    left: 55%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 600px;
  }
}
</style>
