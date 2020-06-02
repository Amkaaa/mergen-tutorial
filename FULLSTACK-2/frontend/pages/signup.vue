<template lang="html">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 md4 offset-md4>

      <v-text-field
        label="Username"
        type="text"
        v-model="Username">
      </v-text-field>

      <v-text-field
        label="Password"
        type="password"
        v-model="password">
      </v-text-field>

      <v-btn color="success" @click="signup()">Sign Up</v-btn>
      {{Username}} {{password}}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data(){
    return{
      Username: "",
      password: ""
    }
  },
  methods: {
    async signup(){
      //console.log("You clicked the signup")
      let res = await this.$axios.$post("http://localhost:8080/signup", {Username: this.Username, password: this.password})
      console.log(res)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
