<template lang="html">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
      <v-text-field
        label="Username"
        v-model="username"></v-text-field>

        <v-text-field
          label="Password"
          v-model="password"></v-text-field>
          {{username}} {{password}}
          <v-btn color="success" @click="login()">CHeck</v-btn>
    </v-flex>

  </v-layout>

</template>

<script>
export default {
  data(){
    return{
      username: "",
      password: ""
    }
  },

  methods: {
    //async await Todorohoi 1 funtsiig uleene
    login: async function(){
      let res = await this.$axios.$post("http://localhost:8080/login", {username: this.username, password: this.password})
      console.log(res)
      console.log("You clicked");
    }
  }
}
</script>

<style lang="css" scoped>
</style>
