<template>
  <v-container fluid>
    <v-row>
      <v-col class="d-flex" cols="6" sm="4">
        <v-select
          :items="items"
          :label="label"
          outlined
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: {
        items: {
            type: Array
        },
        label: {
            type: String,
            default: 'testing'
        }
    }
        
  }
</script>