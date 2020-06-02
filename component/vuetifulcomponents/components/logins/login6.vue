<template lang="html">
    <div class="lcontainer">
        <div class="contact" :style="'background-image: url(' + require('~/assets/logins/6/log6.png') + ')'">
            <div class="sections">
                <div clas="white-space">

                </div>
                <div class="text">
                    <h1>Private Access</h1>
                    <p>Sign in to continue access pages</p>
                    <div class="empty">

                    </div>
                </div>
                
                <div class="input-section">
                    <div class="section2"> 
                        <v-text-field
                        color = "#FF835B"
                        label="E-mail"
                        type="email"
                        ></v-text-field>
                        <v-text-field
                        color = "#FF835B"
                        label="Password"
                        type="password"
                        ></v-text-field>
                        <div class="continue-button">
                            <span class="sbtn" style="font-size: 16px"><span>continue</span></span>
                            <span class="sbtn" style="font-size: 16px"><fa class="icon" :icon="['fas', 'chevron-right']"/></span>
                        </div>
                     <div class="empty">

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
.lcontainer{
  min-height: 100vh;
  background: linear-gradient(to top, #FF835B, #FFCA74);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon{
    width: 14px!important;
    height: 14px !important;
    font-size: 14px !important;
}
.text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 23px;
    padding: 20px;
}
.empty{
    height: 100px;
}
.contact{
    background-position: center;
    background-size: cover;
}
.input-section{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
}
.continue-button{
    width: 100%;
    margin: auto;
    height: 40px;
    text-transform: uppercase;
    font-weight: 400;
    background: linear-gradient(to left top, #FCA10E,#FF470B);
    color: white;
    font-size: 34px;
    border-radius: 33px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.continue-button span{
    letter-spacing: 2px;
}
.continue-button .sbtn{
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
    cursor: pointer;
}
.section2{
    width: 100%;
}
.contact{
    background: white;
    border-radius: 10px;
    overflow: hidden;
    -webkit-box-shadow: 0px 10px 53px -12px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 10px 53px -12px rgba(0,0,0,0.57);
    box-shadow: 0px 10px 53px -12px rgba(0,0,0,0.57);
}
@media only screen and (min-width: 961px){
  .contact{
    width: 910px;
    height: 520px;
    display: grid;
    border-radius: 5px;
    overflow: hidden;
    background-position: center;
    background-size: cover;
  }
  .sections{
      display:grid;
      grid-template-columns: 0.3fr 0.85fr 0.85fr;
  }
}
@media only screen and (max-width: 960px){
    .empty{
        display: none;
    }
}
</style>