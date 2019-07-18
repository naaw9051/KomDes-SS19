<template>
<div class="page">

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
