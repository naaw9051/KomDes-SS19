<template>
<div class="page">
  <div class="pageWrapper">
    <div class="sectionContainer">
      <div class="industrie section" @click="showInfo('industrie')" :class="{ active: toggleIndustrie }">
        <img class="animated tada" src="../../assets/images/newScenes/szene5/industry.png" alt="">
        <p class="headline--big">17%</p>
      </div>
      <div class="großhandel section" @click="showInfo('großhandel')" :class="{ active: toggleGroßhandel }">
        <img class="animated tada delay-1s" src="../../assets/images/newScenes/szene5/großh.png" alt="">
        <p class="headline--big">17%</p>
      </div>
      <div class="handel section" @click="showInfo('handel')" :class="{ active: toggleHandel }">
        <img class="animated tada delay-2s" src="../../assets/images/newScenes/szene5/handel.png" alt="">
        <p class="headline--big">5%</p>
      </div>
      <div class="haushalt section" @click="showInfo('haushalt')" :class="{ active: toggleHaushalt }">
        <img class="animated tada delay-3s" src="../../assets/images/newScenes/szene5/haushalt.png" alt="">
        <p class="headline--big">61%</p>
      </div>
    </div>
    <div class="infoContainer">
      <span class="headline">{{ headline }}</span>
      <p>
        <ul>
          <li>{{ infoText1 }}</li>
          <li>{{ infoText2 }}</li>
          <li>{{ infoText3 }}</li>
          <li>{{ infoText4 }}</li>
          <li>{{ infoText5 }}</li>
        </ul>
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      headline: 'Aber wie kommt die Verschwendung zustande?',
      infoText1: '',
      infoText2: '',
      infoText3: '',
      infoText4: '',
      infoText5: '',
      industrieInfo: ['Lebensmittelindustrie', '▪Abweichung von den geforderten Produkt-und Qualitätseigenschaften', ' ▪Überproduktion und Fehlplanung ', '▪Fehler im Herstellungsprozess (z.B. Fehlchargen, Produktionsausfälle,Verschütten, Fehletikettierungen', '', ''],
      handelInfo: ['Handel', '▪Volle Regale bis Ladenschluss–mit Backwaren, Obst und Gemüseund anderen leicht verderblichen Waren', '▪Beschädigung von verderblichen Lebensmitteln (z.B. eingedrücktes Obst)', '▪Ablauf von Mindesthaltbarkeits-und Verbrauchsdatum', '▪Überbestände durch kaum kalkulierbares Einkaufsverhalten', '▪Falsche Lagerung, Schäden beim Transport'],
      großhandelInfo: ['Großverbraucher', '▪Fehlendes Wissen über Abfallmengen', '▪Mangelhafte Lagerung', '▪Kalkulation schwierig, wenn Nachfrage stark schwankt', '▪Hygiene-und Sicherheitsvorschriften', '▪Zu wenig differenzierte Portionsgrößen (etwa in Kantinen)'],
      haushaltInfo: ['Private Haushalte', '▪Mangelnde Wertschätzung von Lebensmitteln, bedingt auch durchständige Verfügbarkeit und das im EU-Vergleich äußerst niedrige Preisniveau', '▪Fehlplanung, Fehlkauf, fehlender Überblick über Vorräte', '▪Falsche Aufbewahrung', '▪Ablauf des Mindesthaltbarkeitsdatums', ''],
      toggleIndustrie: false,
      toggleGroßhandel: false,
      toggleHandel: false,
      toggleHaushalt: false
    }
  },
  methods: {
    showInfo: function (type) {
      if (type === 'industrie') {
        this.toggleIndustrie = true
        this.toggleGroßhandel = false
        this.toggleHandel = false
        this.toggleHaushalt = false
        this.headline = this.industrieInfo[0]
        this.infoText1 = this.industrieInfo[1]
        this.infoText2 = this.industrieInfo[2]
        this.infoText3 = this.industrieInfo[3]
        this.infoText4 = this.industrieInfo[4]
        this.infoText5 = this.industrieInfo[5]
      }

      if (type === 'großhandel') {
        this.toggleIndustrie = false
        this.toggleGroßhandel = true
        this.toggleHandel = false
        this.toggleHaushalt = false
        this.headline = this.großhandelInfo[0]
        this.infoText1 = this.großhandelInfo[1]
        this.infoText2 = this.großhandelInfo[2]
        this.infoText3 = this.großhandelInfo[3]
        this.infoText4 = this.großhandelInfo[4]
        this.infoText5 = this.großhandelInfo[5]
      }

      if (type === 'handel') {
        this.toggleIndustrie = false
        this.toggleGroßhandel = false
        this.toggleHandel = true
        this.toggleHaushalt = false
        this.headline = this.handelInfo[0]
        this.infoText1 = this.handelInfo[1]
        this.infoText2 = this.handelInfo[2]
        this.infoText3 = this.handelInfo[3]
        this.infoText4 = this.handelInfo[4]
        this.infoText5 = this.handelInfo[5]
      }

      if (type === 'haushalt') {
        this.toggleIndustrie = false
        this.toggleGroßhandel = false
        this.toggleHandel = false
        this.toggleHaushalt = true
        this.headline = this.haushaltInfo[0]
        this.infoText1 = this.haushaltInfo[1]
        this.infoText2 = this.haushaltInfo[2]
        this.infoText3 = this.haushaltInfo[3]
        this.infoText4 = this.haushaltInfo[4]
        this.infoText5 = this.haushaltInfo[5]
      }
    }
  }
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
      top: 400px;
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
      ul{
      list-style: none;
      }
    }

    .sectionContainer{
      position: relative;
      top: 28%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 220px;
      width: 100%;

      .section{
        position: absolute;
        top: 0;
        height: 220px;

        &:hover img{
          filter: drop-shadow(0 0 30px #ce5452 );
        }

        &:hover p{
          visibility: visible;
        }

        p{
          visibility: hidden;
        }
      }

      .active{
        filter: drop-shadow(0 0 20px #6aa7cc);

        img{
          filter: drop-shadow(0 0 30px #ce5452 );
        }

        p{
          visibility: visible;
        }
      }
    }
  }
}

.industrie{
  width: 19%;
  background: #8998a8;

  img{
    position: absolute;
    top: 50px;
    left: calc(50% - 40px);
    width: 100px;
  }
}

.großhandel{
  left: 19%;
  width: 19%;
  background: #718397;

  img{
    position: absolute;
    top: 75px;
    left: calc(50% - 50px);
    height: 100px;
    width: auto;
  }
}

.handel{
  left: 38%;
  width: 10%;
  background: #596e85;

  img{
    position: absolute;
    top: 75px;
    left: 5px;
    // height: 100px;
    width: 120px;
  }
}

.haushalt{
  left: 48%;
  width: 57%;
  background: #425a74;

  img{
    position: absolute;
    top: 75px;
    left: calc(50% - 50px);
    height: 100px;
    width: auto;
  }
}

.headline--big{
  color:#e19f25;
}
</style>
