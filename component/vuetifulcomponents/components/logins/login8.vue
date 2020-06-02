<template>
    <div class="lcontainer">
        <div class="login-section">
             <div class="image" :style="'background-image: url(' + require('~/assets/logins/8/bg8.png') + ')'">
                <div class="text">
                    <h1>Welcome Page</h1>
                    <p>Sign in to continue access pages</p>
                </div>
            </div>
            <div class="form">
                <div class="header">
                    <h1>Sign In</h1>
                    <p>Sign in to continue access pages</p>
                </div>
                <div class="">
                    <v-text-field
                    color="#6ED4FF"
                        label="Email"
                        type="email"
                    ></v-text-field>
                    <v-text-field
                    color="#6ED4FF"
                        label="Password"
                        type="password"
                    ></v-text-field>
                    <div class="continue-btn-section">
                        <div class="half">
                            <div class="sbtn" style="font-size: 16px">Continue&nbsp;<fa class="icon" :icon="['fas', 'chevron-right']" /></div>
                        </div>
                    </div>
                    <br>
                    <div class="text-social">
                        <p>or Connect with Social Media</p>
                    </div>
                    <div class="social">
                        <div class="sbtn" style="font-size: 16px"><fa class="icon" :icon="['fab', 'twitter']" />&nbsp;&nbsp;Sign in With Twitter</div>
                        <br>
                        <div class="sbtn" style="font-size: 16px"><fa class="icon" :icon="['fab', 'facebook-f']" />&nbsp;&nbsp;Sign in With Facebook</div>
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
<style >
.social{
    height: 80px;
}
.social .sbtn:first-of-type{
  background: linear-gradient(to right, #67E4FE, #35ABD3)
}
.social .sbtn:nth-of-type(2){
  background: linear-gradient(to right,  #277EBB,#277EBB)
}
.icon{
    width: 14px!important;
  height: 14px !important;
  font-size: 14px !important;
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
  border-radius: 40px;
  font-size: 14px!important;
}
.continue-btn-section .sbtn{
      text-transform: uppercase;
  font-weight: 700;
  background: linear-gradient(to left top, #6ED4FF , #8FFFA3);
}
.text-social{
    color:#808080;
    display:flex;
    flex-direction: row;
    justify-content: center;
}
.header{
    color:#000000;
    display:flex;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
}
.header p{
    color:#808080;
}
.form{
    background: white;
    height:100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.text{
    height:100%;
    color:white;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding:40px;
}
.image{
  background-position: center;
  background-size: cover;
}
.lcontainer{
      min-height: 100vh;

  background: #5CC5B1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media only screen and (min-width: 961px){
  .login-section{
    width: 910px;
    height: 520px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 10px;
    overflow: hidden;
    -webkit-box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.59);
-moz-box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.59);
box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.59);
  }
}
@media only screen and (min-width: 601px) and (max-width: 960px){
  .login-section{
    width: 70%;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    -webkit-box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.59);
-moz-box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.59);
box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.59);
  }
}
@media only screen and (max-width: 600px){
    .login-section{
        width: 100%;
        height: auto;
        -webkit-box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.59);
-moz-box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.59);
box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.59);
    } 
}
</style>


