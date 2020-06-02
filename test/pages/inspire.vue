<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-layout>
    <v-flex 
    xs12 
    sm4 
    offset-sm4>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data(){
    return{
      card_text: "Lorem ipsum is Loremest Ipsum"
    }
  }
}
</script>

