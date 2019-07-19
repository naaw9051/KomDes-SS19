<template>
<div class="page">
  <div class="pageWrapper">
    <div class="sectionContainer">
      <div class="obst section animated slideInLeft slow">
        <div class="images">
          <img class="banana" src="../../assets/images/newScenes/Szene4/banane.png" alt="">
          <img class="paprika" src="../../assets/images/newScenes/Szene4/paprika.png" alt="">
          <img class="brokkoli" src="../../assets/images/newScenes/Szene4/brokkoli.png" alt="">
        </div>
        <p class="info">
          <span class="headline--big">34%</span><br>
          Obst & Gemüse
        </p>
      </div>
      <div class="zubereitet section animated slideInLeft">
        <div class="images">
          <img src="../../assets/images/newScenes/Szene4/zubereitetes.png" alt="">
        </div>
        <p>
          <span class="headline--big">16%</span><br>
          Zubereitetes
        </p>
      </div>
      <div class="brot section animated slideInLeft">
        <div class="images">
          <img src="../../assets/images/newScenes/Szene4/bread.png" alt="">
        </div>
        <p>
          <span class="headline--big">14%</span><br>
          Brot & Backwaren
        </p>
      </div>
      <div class="drinks section animated slideInLeft fast">
        <div class="images">
          <img src="../../assets/images/newScenes/Szene4/soda.png" alt="">
        </div>
        <p>
          <span class="headline--big">11%</span><br>
          Getränke
        </p>
      </div>
      <div class="milch section animated slideInLeft fast">
        <div class="images">
          <img class="milk" src="../../assets/images/newScenes/Szene4/milk.png" alt="">
          <img class="cheese" src="../../assets/images/newScenes/Szene4/cheese.png" alt="">
        </div>
        <p class="info">
          <span class="headline--big">9%</span><br>
          Milchprodukte
        </p>
      </div>
      <div class="fertig section animated slideInLeft faster">
        <div class="images">
          <img src="../../assets/images/newScenes/Szene4/can.png" alt="">
        </div>
        <p>
          <span class="headline--big">7%</span><br>
          Fertigprodukte
        </p>
      </div>
      <div class="fleisch section animated slideInLeft faster">
        <div class="images">
          <img class="fish" src="../../assets/images/newScenes/Szene4/fish.png" alt="">
          <img class="meat" src="../../assets/images/newScenes/Szene4/meat.png" alt="">
        </div>
        <p>
          <span class="headline--big">4%</span><br>
          Fleisch & Fisch
        </p>
      </div>
      <div class="sonstiges section">
        <p>
          <span class="headline--big">5%</span><br>
          Sonstiges
        </p>
      </div>
    </div>
    <div class="infoContainer animated slideOutRight delay-3s">
      <div class="info">
        <span class="headline--big">Die Zusammensetzung der vermeidbaren Abfälle</span>
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
    background: url('../../assets/images/newScenes/backgrounds/background-blue.png') center no-repeat;
    background-size: contain;
    background-color: #0f2331;

    .infoContainer {
      position: absolute;
      top: 40%;
      width: 80%;
      left: 10%;
    }

    .sectionContainer{
      position: relative;
      height: 100%;
      width: 100%;

      .section{
        position: absolute;
        top: 0;
        height: 100%;

        &:hover .images img{
          filter: drop-shadow(0 0 30px #6aa7cc );
        }

        &:hover p{
          visibility: visible;
        }

        p{
          visibility: hidden;
        }
      }
    }
  }
}

.headline--big{
  color:#e19f25;
}

.obst{
  width: 34%;
  background: url('../../assets/images/newScenes/Szene4/backgrounds/a.png') center no-repeat;
  background-size: cover;

  .paprika {
    position: absolute;
    bottom: 75px;
    left: calc(50% - 80px);
    width: auto;
    height: 120px;
  }

  .brokkoli {
    position: absolute;
    bottom: 75px;
    left: calc(50% + 20px);
    width: auto;
    height: 110px;
  }

  .banana {
    position: absolute;
    bottom: 130px;
    left: calc(50% - 25px);
    width: auto;
    height: 110px;
  }
}

.zubereitet{
  left: 34%;
  width: 16%;
  background: url('../../assets/images/newScenes/Szene4/backgrounds/b.png') center no-repeat;
  background-size: cover;

  .images img {
    position: absolute;
    bottom: 75px;
    left: calc(50% - 50px);
    width: auto;
    height: 100px;
  }
}

.brot{
  left: 50%;
  width: 14%;
  background: url('../../assets/images/newScenes/Szene4/backgrounds/c.png') center no-repeat;
  background-size: cover;
    .images img {
    position: absolute;
    bottom: 75px;
    left: calc(50% - 70px);
    width: auto;
    height: 100px;
  }
}

.drinks{
  left: 64%;
  width: 10%;
  background: url('../../assets/images/newScenes/Szene4/backgrounds/d.png') center no-repeat;
  background-size: cover;

    .images img {
    position: absolute;
    bottom: 75px;
    left: calc(50% - 30px);
    width: 80px;
    height: auto;
  }
}

.milch{
  left: 74%;
  width: 9%;
  background: url('../../assets/images/newScenes/Szene4/backgrounds/e.png') center no-repeat;
  background-size: cover;

  p{
    font-size: 16px;
  }

  .milk {
    position: absolute;
    bottom: 85px;
    left: calc(50% - 30px);
    width: auto;
    height: 120px;
  }

  .cheese {
    position: absolute;
    bottom: 75px;
    left: calc(50% - 20px);
    width: 70px;
    height: auto;
  }
}

.fertig{
  left: 83%;
  width: 7%;
  background: url('../../assets/images/newScenes/Szene4/backgrounds/f.png') center no-repeat;
  background-size: cover;

   p{
    font-size: 12px;
  }

  .images img {
    position: absolute;
    bottom: 75px;
    left: calc(50% - 30px);
    width: 70px;
    height: auto;
  }
}

.fleisch{
  left: 90%;
  width: 6%;
  background: url('../../assets/images/newScenes/Szene4/backgrounds/g.png') center no-repeat;
  background-size: cover;
   p{
    font-size: 12px;
  }

   .fish {
    position: absolute;
    transform: rotate(60deg);
    bottom: 110px;
    left: calc(50% - 60px);
    width: 130px;
    height: auto;
  }

  .meat {
    position: absolute;
    bottom: 90px;
    left: calc(50% - 30px);
    width: 70px;
    height: auto;
  }
}

.sonstiges{
  left: 96%;
  width: 4%;
  background: url('../../assets/images/newScenes/Szene4/backgrounds/h.png') center no-repeat;
  background-size: cover;
   p{
    font-size: 10px;
  }
}
.headline--big{
  color: #6aa7cc;
}
</style>
