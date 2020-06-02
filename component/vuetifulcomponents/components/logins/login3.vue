<template lang="html">
    <div class="lcontainer">
        <div class="login-section">
        <div class="form">
            <div class="">
            <div class="headline">
                <p>Welcome Back, Please login <br>to your acount</p>
            </div>
            <v-text-field
            label="Email Address"
            type="email"
            color="#8053CB"
            ></v-text-field>
            <v-text-field
            label="Password"
            type="password"
            color="#8053CB"
            ></v-text-field>
            <div class="subline">
                <a class="special" href="#">Forgot your password?</a>
            </div>
            <v-checkbox
            class="nopadding"
            color="#8053CB"
            v-model="checkbox"
            label="Remember me"
            ></v-checkbox>
            <div class="lbtn">
                <v-btn class="lbtn-item" color="#DB71CD" >LOGIN</v-btn>
            </div>
            </div>
        </div>
        <div class="image">
            <h2>Glad</h2>
            <h2>to see You.</h2>
            <p>Don't have an account ? Create your account, it takes less than a minute</p>
             <div class="rbtn">
                <v-btn class="rbtn-item" color="#ca6b3e"><fa class="icon" :icon="['fab', 'google']" />&nbsp;+&nbsp;&nbsp;Sign Up with Google</v-btn>
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
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

    .icon{
    width: 14px!important;
    height: 14px !important;
    font-size: 14px !important;
    }
    .form{
        padding: 40px;
    }
    .special{
        color: #979797;
    }
    .special:hover{
        color: #97979798;
    }
    a{
        text-decoration: none;
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
        font-size: 17px;
        color: rgb(97, 97, 97);
        font-family: 'Source Sans Pro', sans-serif;
    }
    .subline{
        display: flex;
        float: right;
        margin-top: 5px;
    }
    .lbtn{
        display: flex;
        flex-direction: row;
        align-items: left;
        justify-content: left;
    }
    .rbtn{
        display: flex;
        flex-direction: row;
        align-items: left;
        justify-content: left;
        margin-top: 50px;
    }
    .lbtn-item{
        width: 50%;
        color: white;
        text-transform: capitalize;
        border-radius: 20px;
        margin: 0;
    }
    .rbtn-item{
        width: 60%;
        color: white;
        text-transform: capitalize;
        border-radius: 20px;
        margin: 0;
    }
    .image{
        background-position: center;
        background-size: cover;
        background-image: url("../../assets/logins/3/Mask_Group_1.png");
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding:150px 40px 150px 40px;
    }
    .image h2{
        color: white;
        font-size: 32px;
        line-height: 1;
    }
    .image p{
        color: white;
        margin-top: 20px;
        font-size: 14px;
    }
    .login-section{
        background-color: white;
        -webkit-box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.48);
        -moz-box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.48);
        box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.48);
    }
    .nopadding{
        margin: 0;
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
