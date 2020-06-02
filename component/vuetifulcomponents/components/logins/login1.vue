<template lang="html">
  <div class="lcontainer">
    <div class="login-section">
      <div class="form">
        <div class="">
          <div class="headline">
            <p>Login</p>
          </div>
          <v-text-field
          label="Email"
          type="email"
          color="#8053CB"
          ></v-text-field>
          <v-text-field
          label="Password"
          type="password"
          color="#8053CB"
          ></v-text-field>
          <v-checkbox
          class="nopadding"
          color="#8053CB"
          v-model="checkbox"
          label="Remember me"
          ></v-checkbox>
          <div class="lbtn">
            <v-btn class="lbtn-item" color="#DB71CD" >Sign in</v-btn>
          </div>
          <div class="subline center">
            Don't have an acount? &nbsp; <a class="special" href="#">Sign up</a>
          </div>
        </div>
      </div>
      <div class="image">
        <h2>Hey</h2>
        <h2>Welcome</h2>
        <h2>Back</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .form{
    padding: 40px;
  }
  .special{
    color: #DB71CD;
  }
  a{
    text-decoration: none;
    color:"#8053CB";
    font-weight: 700;
  }
  .center{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .lcontainer{
    min-height: 100vh;
    background: linear-gradient(to right bottom, #FFE6F7 , #EDECFF);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .headline p{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 28px;
    color: #8053CB;
  }
  .subline{
    color: #979797;
  }
  .lbtn{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .lbtn-item{
    width: 50%;
    color: white;
    text-transform: capitalize;
  }
  .image{
    background-position: center;
    background-size: cover;
    background-image: url("../../assets/logins/1/Mask_Group_1.png");
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 40px;
    }
    h2{
      color: white;
      font-size: 32px;
      line-height: 1;
    }
    .login-section{
      background-color: white;
      -webkit-box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.48);
      -moz-box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.48);
      box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.48);
    }
  @media only screen and (min-width:961px){
    .login-section{
      width: 910px;
      height: 520px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-radius: 5px;
      overflow: hidden;

    }
    .image{
      padding-bottom: 60px;
    }
    .form{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
    @media only screen and (min-width: 601px) and (max-width:960px) {
      .login-section{
        width: 70%;
      }
      .image{
        padding-top:20px;
        padding-bottom:20px;
      }
    }
    @media only screen and (max-width: 600px) {
      .login-section{
        width: 100%;
      }
      .image{
        padding-top:20px;
        padding-bottom:20px;
      }
    }
</style>
