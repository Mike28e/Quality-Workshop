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
                  cols="16"
                  md="12"
                >
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                  >
                    <div class="regCard">
                      <div class="cardHead">Reports</div>
                      <v-divider></v-divider>
                      <br />
                      <v-container fluid>
                        <v-row>
                          <v-col class="d-flex" cols="6" sm="4">
                            <v-select
                              :items="Projects"
                              label="Project"
                              outlined
                            ></v-select>
                          </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <br />
                        <v-row>
                          <v-col class="d-flex" cols="4" sm="3">
                            <v-select
                              v-model="value"
                              :items="Markets"
                              chips
                              label="Market"
                              multiple
                              outlined
                            ></v-select>
                          </v-col>
                          <v-col class="d-flex" cols="4" sm="3">
                            <v-select
                              v-model="value"
                              :items="TIS"
                              chips
                              label="Time in Service"
                              multiple
                              outlined
                            ></v-select>
                          </v-col>
                          <v-col class="d-flex" cols="4" sm="3">
                            <v-select
                              v-model="value"
                              :items="Waves"
                              chips
                              label="Wave"
                              multiple
                              outlined
                            ></v-select>
                          </v-col>
                          <v-col class="d-flex" cols="4" sm="3">
                            <v-select
                              v-model="value"
                              :items="Makes"
                              chips
                              label="Make"
                              multiple
                              outlined
                            ></v-select>
                          </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <br />
                        <v-row>
                          <v-col class="d-flex" cols="6" sm="4">
                            <v-select
                              :items="Reports"
                              label="Report"
                              outlined
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-container>
                    </div>
                  </v-card>
                </v-col>
              </v-row>

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
                      Response Rate (Totals)
                      <br /><br />
                      <v-simple-table dense>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left" v-for="(item, i) in ReportHeaders" :key="i">{{ item }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, i) in ReportData" :key="i">
                              <td v-for="(data, x) in item" :key="x">{{ data }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
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
                      Response Rate (Totals)
                      <br /><br />
                      <v-simple-table dense>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left" v-for="(item, i) in ReportHeaders" :key="i">{{ item }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, i) in ReportData" :key="i">
                              <td v-for="(data, x) in item" :key="x">{{ data }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
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
                      Response Rate (Totals)
                      <br /><br />
                      <v-simple-table dense>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left" v-for="(item, i) in ReportHeaders" :key="i">{{ item }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, i) in ReportData" :key="i">
                              <td v-for="(data, x) in item" :key="x">{{ data }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
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
      
    ],
    Projects: ['Nissan', 'Mitsubishi', 'Renault'],
    Markets: ['USA', 'Mexico', 'Canada', 'Brazil', 'Europe', 'Indonesia', 'China'],
    TIS: ['30 Days', '75 Days', '12 Months', '24 Months', '36 Months'],
    Waves: ['2019 Wave 1', '2019 Wave 2', '2019 Wave 3', '2019 Wave 4', '2020 Wave 1'],
    Makes: ['Nissan','INFINITI','Venucia'],
    Reports: ['Reponse Rates (Total)', 'SMS Provider Analysis'],
    ReportHeaders: ['Market','Make','Model','Mailed'],
    ReportData: [
      {
        Market: 'US',
        Make: 'Nissan',
        Model: 'Sentra',
        Mailed: 1000
      },
      {
        Market: 'US',
        Make: 'Nissan',
        Model: 'Sentra',
        Mailed: 1000
      },
      {
        Market: 'US',
        Make: 'Nissan',
        Model: 'Sentra',
        Mailed: 1000
      }
    ]
  })
};
</script>