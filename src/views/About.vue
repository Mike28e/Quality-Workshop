<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap');

  .content-background {
    background-color: #F0EFEF;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: auto;
  }

  .content {
    margin: 78px 30px 35px 280px;
  }

  .regCard {
    margin:10px 10px 15px 10px;
  }

  .cardHead {
    font-weight: bold;
    padding-bottom: 10px;
  }
</style>


<template>
  <v-app>
      <v-content>
        <div class="content-background">
          <NavBar />
          <div class="content">
            <v-container>
              <!-- Stack the columns on mobile by making one full-width and the other half-width -->
              <v-row>
                <v-col
                  cols="12"
                  md="8"
                >
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                  >
                  <div class="regCard">
                    <div class="cardHead">About</div>
                    <v-divider></v-divider>
                    <br />
                    Lorem ipsum dolor sit amet, no mazim laoreet legendos mei, ut dicta verear pro. Sit ex congue theophrastus vituperatoribus. Assueverit efficiantur no quo, ex mei dolore quaerendum. Ius munere virtute ex. Iudico fierent luptatum nam eu. Sed no labitur comprehensam, mea autem aliquid nostrum te.
                    <br /><br />
                    Ut eius everti eos, nec zril aliquid ut. Eius veritus salutatus cum ea. Vim te nihil discere. Te ius malis semper, qui cu graeco offendit assentior. Facilis deleniti ei has, saperet utroque assueverit mei an, stet inimicus eam an.
                    Sit ad unum iisque alienum, liber dissentiunt no mel. Veniam diceret nusquam at duo, eam et eruditi eloquentiam. Quaeque delectus id pri, quaestio dissentiet et usu. Dicta soluta melius qui an, congue putant euripidis mea ex. Eu feugait convenire has. Magna pertinax has ei, ne tota erroribus rationibus pri.
                  </div>
                  </v-card>
                </v-col>

                <v-col
                  cols="6"
                  md="4"
                >
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                  >
                    <v-carousel>
                      <v-carousel-item
                        v-for="(item,i) in News"
                        :key="i"
                        :src="item.href"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                      ></v-carousel-item>
                    </v-carousel>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </v-content>
    </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "About",
  components: {
    NavBar
  },

  data: () => ({
    News: [
      {
        href: "https://img.etimg.com/photo/msid-68721421/nature.jpg"
      },
      {
        href: "https://specials-images.forbesimg.com/imageserve/5dd6e3cfe0af7b0006b1f039/960x0.jpg?fit=scale"
      }
      
    ]
  })
};
</script>