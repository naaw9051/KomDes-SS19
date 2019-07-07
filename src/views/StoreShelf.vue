<template>
  <div class="page">
    <div class="background">
      <img class="background__foodBox" src="../assets/images/foodbox.jpg">
      <div class="background__info--left">Das Gemüse sieht zwar komisch aus, <br> schmeckt aber genauso gut!</div>
      <div class="background__info--right">Untersuch' das Gemüse <br> und schau was passiert</div>
    </div>
    <div class="foreground">
      <div v-b-modal.veggieCount class="foreground__food avocado">
        <img class="foreground__food--bad avocado" src="../assets/images/badburger.png">
        <img class="foreground__food--good avocado" src="../assets/images/goodburger.png">
      </div>
      <div v-b-modal.veggieCount class="foreground__food cucumber">
        <img class="foreground__food--bad cucumber" src="../assets/images/badburger.png">
        <img class="foreground__food--good cucumber" src="../assets/images/goodburger.png">
      </div>
      <div v-b-modal.veggieCount class="foreground__food tomato">
        <img class="foreground__food--bad tomato" src="../assets/images/badburger.png">
        <img class="foreground__food--good tomato" src="../assets/images/goodburger.png">
      </div>
       <b-modal id="veggieCount" size="lg" title="Zahlen in Gemüse">
        <template slot="default">
          <b-tabs content-class="mt-3">
            <b-tab title="Avocados" active>
              <p>Animation zu Avocados</p>
            </b-tab>
            <b-tab title="Gurken">
              <p>Animation zu Gurken</p>
            </b-tab>
            <b-tab title="Tomaten">
              <p>Animation zu Tomaten</p>
            </b-tab>
          </b-tabs>
        </template>
        <template slot="modal-footer">
          <p>
            Custom Footer
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse autem voluptates repellat necessitatibus magni, rem expedita eligendi possimus deserunt harum reiciendis veritatis odio natus explicabo. Soluta voluptas doloribus similique! Obcaecati, eligendi. Tenetur delectus assumenda illum voluptatibus, tempora nisi voluptate officia, perferendis earum, reiciendis provident suscipit itaque architecto ratione eligendi sapiente eius expedita error atque quis. Ratione a animi dolorem nihil qui maxime libero saepe fuga blanditiis temporibus quam voluptates, tempora ullam perferendis itaque? Dicta et ea doloribus dolor accusamus.
          </p>
        </template>
       </b-modal>
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

    &__foodBox {
      position: absolute;
      left: 55%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 500px;
      width: 600px;
    }

    &__info {
      &--left {
        position: absolute;
        left: 80px;
        top: 120px;
        color: #afafaf;
        font-size: 20px;
      }

      &--right {
        position: absolute;
        right: 80px;
        top: 300px;
        color: #afafaf;
        font-size: 20px;
      }
    }
  }

 .foreground {
    position: relative;
    left: 55%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 600px;

    &__food {

      &:hover .foreground__food--bad  {
        opacity: 1;
      }

      &:hover .foreground__food--good  {
        opacity: 0;
      }

      &--good {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: contain;
        opacity: 1;
        transition: opacity 1000ms ease-in;
      }

      &--bad {
        position: absolute;
        left: 0;
        top: 0;
        object-fit: contain;
        opacity: 0;
        transition: opacity 1000ms ease-in;
      }
    }

    .avocado {
      position: absolute;
      margin-top: 20px;
      width: 283px;
      height: 220px;
      left: 0;
      top: 0;
      filter: drop-shadow(0 0 20px #88b04b);
    }

    .cucumber {
      position: absolute;
      width: 283px;
      height: 220px;
      left: 70px;
      bottom: 0;
      filter: drop-shadow(0 0 20px #196941);
    }

    .tomato {
      position: absolute;
      margin-top: 20px;
      width: 283px;
      height: 220px;
      right: 0;
      top: 0;
      filter: drop-shadow(0 0 20px #fa5359);
    }
  }
}
</style>
