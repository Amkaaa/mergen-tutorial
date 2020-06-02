<template lang="html">
  <div class="lcontainer">
    <div class="login-section">
      <div class="login-image">
          <div class="bottom"><h1>Welcome back</h1></div>
          <p class="half">sign in to continue access</p>
          <p class="bottom supersize">www.youtubecom</p>
      </div>
      <div class="login-form">
        <div class="">
          <div class="headline">
            <h1>Sign in</h1>
          </div>
          <div class="form">
            <v-text-field
            color="#6325B1"
            label="Email"
            type="email"
            ></v-text-field>
            <v-text-field
            color="#6325B1"
            label="Password"
            type="password"
            ></v-text-field>
          </div>
          <div class="button main">
            Continue <fa class="icon" :icon="['fas', 'chevron-right']"/>
          </div>
          <div class="text">
            <p class="center">or Connect with Social media</p>
          </div>
          <div class="button facebook">
            <div style="width:80%;">
              <fa class="icon" :icon="['fab', 'facebook-f']"/> &nbsp;&nbsp;Facebook
            </div>
          </div>
          <div class="button twitter">
            <div style="width:80%;">
              <fa class="icon" :icon="['fab', 'twitter']"/>&nbsp;&nbsp; Twitter
            </div>
          </div>
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
.icon{
  width: 14px;
  height: 14px;
  font-size: 14px;
}
.center{
  text-align: center;
}
.lcontainer{
  min-height: 100vh;
  background-image: url("../../assets/logins/5/bg.png");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form{
  margin-top: 20px;
}
.button{
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
}
p{
  margin: 0;
}
.supersize{
  width: 100%;
}
.headline{
  color: #363636;
}
.text{
  color: #8B8B8B;
}
.main{
  background: linear-gradient(to right, #6325B1, #DB00B1);
}
.facebook{
  background: linear-gradient(to left, #3FA3E8, #277EBB);
}
.twitter{
  background: linear-gradient(to left, #67E4FE, #35ABD3);
}

@media only screen and (min-width:961px) {
  .login-section{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 910px;
    min-height: 520px;
    border-radius: 10px;
    overflow: hidden;
  }
  .half{
    margin-left: 50%;
    width: 30%;
    margin-top: 20px;
  }
}
@media only screen and (min-width:601px) and (max-width:960px) {
  .login-section{
    width: 70%;
    border-radius: 10px;
    overflow: hidden;
  }
}
@media only screen and (max-width:600px) {
  .login-section{
    width: 100%;
    min-height: 100vh;
    background: white;
  }
}
.login-image{
  background-image:url("../../assets/logins/5/Side.png");
  background-position: center;
  background-size: cover;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bottom{
  flex: 0.5 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.login-form{
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
