
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
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
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

                <v-col
                  cols="6"
                  md="4"
                >
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                  >
                    <div class="regCard">
                      <div class="cardHead">Latest News</div>
                      <v-divider></v-divider>
                      <br />
                      Lorem ipsum dolor sit amet, no mazim laoreet legendos mei, ut dicta verear pro. Sit ex congue theophrastus vituperatoribus. Assueverit efficiantur no quo, ex mei dolore quaerendum. Ius munere virtute ex. Iudico fierent luptatum nam eu. Sed no labitur comprehensam, mea autem aliquid nostrum te.
                      <br /><br />
                      Ut eius everti eos, nec zril aliquid ut. Eius veritus salutatus cum ea. Vim te nihil discere. Te ius malis semper, qui cu graeco offendit assentior. Facilis deleniti ei has, saperet utroque assueverit mei an, stet inimicus eam an.
                      <br /><br />
                      Sit ad unum iisque alienum, liber dissentiunt no mel. Veniam diceret nusquam at duo, eam et eruditi eloquentiam. Quaeque delectus id pri, quaestio dissentiet et usu. Dicta soluta melius qui an, congue putant euripidis mea ex. Eu feugait convenire has. Magna pertinax has ei, ne tota erroribus rationibus pri.
                    </div>
                  </v-card>
                </v-col>
              </v-row>

              <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
              <v-row>
                <v-col
                  cols="6"
                  md="4"
                >
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                  >
                    <div class="regCard">
                      <div class="cardHead">Recent Site Updates</div>
                      <v-divider></v-divider>
                      <br />
                      Lorem ipsum dolor sit amet, ne diceret minimum quaerendum eum, at erant bonorum eligendi mel. Posse utamur est ad, duis platonem ea sea, sea eu timeam intellegam. Erat meis nihil te ius, his facer facilis ne. Justo summo at eam, sumo diam omittam te sed. Erat ubique iisque sea ad.
                      <br /><br />
                      Ipsum simul persius eum ea, an eum corpora salutandi. Ut propriae accumsan assentior sed, meis nominavi menandri et eum. Qui et scripserit inciderint. Iusto nostrum legendos ne mel, ad pri sale novum signiferumque. Qui aliquid persequeris et, nullam verear iuvaret mei no. Stet nemore mel an, habeo autem his in.
                      <br /><br />    
                      Ad sed quidam urbanitas, nec iuvaret epicuri accusata in. Nam at atomorum sententiae, ius id tincidunt disputationi, ius dicat vulputate at. Vix everti epicuri consulatu an, ius et cetero adipisci. Per legendos repudiandae ea. Mei no mucius tamquam, te diam atqui congue vim.
                      <br /><br />
                      Nam vero causae an, ea suavitate dissentiunt est. An per enim autem timeam. Officiis oportere maluisset te mei, pri et veri ornatus, mei et viderer feugiat eruditi. An nemore sententiae theophrastus sea, recteque inciderint no mei. Et vim partem tibique. Ei vel debet integre intellegam, eos eu aperiam accumsan disputationi.
                    </div>
                  </v-card>
                </v-col>
                <v-col
                  cols="6"
                  md="4"
                >
                  <v-card
                    class="pa-2 align-center"
                    outlined
                    tile
                    align="center"
                  >
                    <img width="100%" height="100%" src="../assets/Faster3.jpg" alt="ipsos1" />
                  </v-card>
                </v-col>
                <v-col
                  cols="6"
                  md="4"
                >
                  <TwitterCard />
                  <br /><br />
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                  >
                    <div class="regCard">
                      <div class="cardHead">Project Updates</div>
                      <v-divider></v-divider>
                      <br />
                      Lorem ipsum dolor sit amet, ne diceret minimum quaerendum eum, at erant bonorum eligendi mel. Posse utamur est ad, duis platonem ea sea, sea eu timeam intellegam. Erat meis nihil te ius, his facer facilis ne. Justo summo at eam, sumo diam omittam te sed. Erat ubique iisque sea ad.
                      <br /><br />
                      Ipsum simul persius eum ea, an eum corpora salutandi. Ut propriae accumsan assentior sed, meis nominavi menandri et eum. Qui et scripserit inciderint. Iusto nostrum legendos ne mel, ad pri sale novum signiferumque. Qui aliquid persequeris et, nullam verear iuvaret mei no. Stet nemore mel an, habeo autem his in.
                    </div>
                  </v-card>
                </v-col>
              </v-row>

              <!-- Columns are always 50% wide, on mobile and desktop -->
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
                      <div class="cardHead">Applause Awards</div>
                      <v-divider></v-divider>
                      <br />

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
                    <div class="regCard">
                      <div class="cardHead">Useful Links</div>
                      <v-divider></v-divider>
                      <br />
                      How to Check Seeds
                      <br />
                      <a href="">Seed Checking Guidelines</a>
                      <br /><br />
                      Survey Live Links
                      <br />
                      <a href="">Nissan Surveys</a>
                      <br />
                      <a href="">Mitsubishi Surveys</a>
                      <br />
                      <a href="">Renault Surveys</a>
                      <br />
                    </div>
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
import TwitterCard from "@/components/TwitterCard.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    TwitterCard
  },

  data: () => ({
    News: [
      {
        href: require("../assets/earthday.jpg")
      },
      {
        href: require("../assets/maxresdefault.jpg")
      }
      
    ]
  })
};
</script>
