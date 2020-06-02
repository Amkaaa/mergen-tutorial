<template lang = "html">
  <v-layout>
    <nuxt-link to = "/login"><h1>Нэвтрэх&nbsp;</h1></nuxt-link>
    <nuxt-link to = "/signup"><h1>Signup</h1></nuxt-link>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

  h1{
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 15px solid #f1f1f1;
  }

  h1:hover{
    border: 20px solid #33333
  }
</style>
