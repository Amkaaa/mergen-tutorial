<template lang="html">
  <div class="lcontainer">
    <div class="login-section">
      <div class="image" :style="'background-image: url(' + require('~/assets/logins/2/bg.png') + ')'">
        <div class="text">
          <h1>Hey</h1>
          <h1>Glad to see you</h1>
          <p>to keep connected with us please login with your personal info</p>
        </div>
      </div>
      <div class="form">
        <div class="headline">
          <p>Welcome back please login to your account</p>
        </div>
        <div class="social">
          <div class="sbtn" style="font-size: 16px"><fa class="icon" :icon="['fab', 'facebook-f']" />&nbsp;&nbsp;Login With Facebook</div>
          <div class="sbtn" style="font-size: 16px"><fa class="icon" :icon="['fab', 'google']" />&nbsp;&nbsp;Login With Google</div>

        </div>
        <div class="subline center nopadding">
          -OR-
        </div>
        <div class="">
          <v-text-field
            color="#FF5666"
            label="Email"
            type="email"
          ></v-text-field>
          <v-text-field
            color="#FF5666"
            label="Password"
            type="password"
          ></v-text-field>
          <v-checkbox
            class="nopadding"
            color="#FF5666"
            v-model="checkbox"
            label="Remember me"
          ></v-checkbox>
          <div class="login-btn-section">
            <div class="half">
              <div class="sbtn" style="font-size: 16px">Login</div>
            </div>
          </div>
        </div>
        <div class="subline center">
          Don't have an acount? &nbsp; <a class="special" href="#">Sign up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
a{
  text-decoration: none;
  color: inherit;
}
.subline{
  font-size: 12px;
}
.center{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.nopadding{
  padding: 0!important;
  margin: 0!important;
}
.special{
  color: #FF5666;
  font-weight: 700;
}
.icon{
  width: 14px!important;
  height: 14px !important;
  font-size: 14px !important;
}
.social{
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.sbtn{
  height: 40px;
  background: blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px!important;
}
.half{
  width: 50%;
  margin: auto;
}
.social .sbtn:first-of-type{
  background: linear-gradient(to top, #6F88FA, #68B5F3)
}
.social .sbtn:nth-of-type(2){
  background: linear-gradient(to bottom, #F7937C, #F07167)
}
.headline p{
  font-size: 16px;
  width: 60%;
}
.form{
  color: #A0A0A0;
}
.login-btn-section .sbtn{
  text-transform: uppercase;
  font-weight: 700;
  background: linear-gradient(to left top, #FF5D67, #FF7E69);
}
.lcontainer{
  min-height: 100vh;
  background: #F5F4F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image{
  background-position: center;
  background-size: cover;
}
.form{
  background: white;
  height: 100%;
  padding: 40px;
}
.text{
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
}
@media only screen and (min-width: 961px){
  .login-section{
    width: 910px;
    height: 520px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>
