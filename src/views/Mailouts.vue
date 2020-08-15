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
                    <div class="cardHead">Mailouts</div>
                    <v-divider></v-divider>
                    <br>
                    <OverlayLoader Label='Launch Mailout'/>
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
                    <Calendar />
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
import Calendar from "@/components/Calendar.vue";
import OverlayLoader from "@/components/OverlayLoader.vue";

export default {
  name: "About",
  components: {
    NavBar,
    Calendar,
    OverlayLoader
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