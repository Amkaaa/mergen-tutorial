<template lang="html">
  <header class="header">
    <div class="contact">
      <div class="container">
        <ul class="list left">
          <li class="list-item"><a class="link" href="#"><font-awesome-icon :icon="['fas', 'envelope']"/>&nbsp;&nbsp;&nbsp;&nbsp;mergenfromrabbit@gmail.com</a></li>
          <li class="list-item link">|</li>
          <li class="list-item"><a class="link" href="#"><font-awesome-icon :icon="['fas', 'phone']"/>&nbsp;&nbsp;&nbsp;&nbsp;(+976)99873993</a></li>
        </ul>
        <ul class="list right">
          <li class="list-item"><a class="link" href="#">Login</a></li>
          <li class="list-item link">|</li>
          <li class="list-item"><a class="link" href="#">Signup</a></li>
        </ul>
      </div>
    </div>
    <div class="nav-main">
      <div class="container">
        <div class="flex-col">
          <div class="menu">
            <span class="header-item left">
              <a href="#" id="button" @click="show = !show"><font-awesome-icon :icon="['fas', 'bars']"/></a>
            </span>
          </div>
          <div class="logo">
            <img src="~/assets/special-nav8/logo.png" alt="">
          </div>
          <div class="button">
            <span class="header-item right">
              <a id="button" class="button-item" href="#"><font-awesome-icon :icon="['fas', 'search']"/></a>
              <span class="button-item"></span>
              <a id="button" class="button-item" href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"/></a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <transition name="menu">
      <div class="nav-bar" v-if="show">
        <div class="whitespace">
        </div>
        <div class="cancel">
          <div class="contain-cancel">
            <div class="btn" @click="show = !show">
              <font-awesome-icon :icon="['fas', 'times']"/>
            </div>
          </div>
        </div>
        <ul class="nav-bar-list">
          <li class="nav-item"><a class="link" href="#"><img src="~/assets/special-nav18/logo.png" alt=""> </a></li>
          <li class="nav-item"><a class="link" href="#">Home</a></li>
          <li class="nav-item"><a class="link" href="#">Blog</a></li>
          <li class="nav-item"><a class="link" href="#">Event</a></li>
          <li class="nav-item"><a class="link" href="#">Services</a></li>
          <li class="nav-item"><a class="link" href="#">About</a></li>
          <li class="nav-item"><a class="link" href="#">Contact</a></li>
        </ul>
        <ul class="contact-menu">
            <li>
              <ul class="social-link">
                <li class="social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'facebook-square']"/></a></li>
                <li class="social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'facebook-square']"/></a></li>
                <li class="social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'facebook-square']"/></a></li>
                <li class="social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'facebook-square']"/></a></li>
                <li class="social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'facebook-square']"/></a></li>
              </ul>
            </li>
            <li>Email: <a href="#">mergenfromrabbit@gmail.com</a> </li>
            <li>Phone: <a href="#">99873993</a> </li>

        </ul>
        <div class="whitespace">
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data(){
    return{
      show: false
    }
  }
}
</script>

<style lang="css" scoped>
.menu-enter-active, .menu-leave-active{
  transition: opacity .5s ease;
  opacity: 1;
}
.menu-leave-active, .menu-enter{
  transition: opacity .5s ease;
  opacity: 0;
}
.nav-bar{
  background: white;
  display: none;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-flow: column;
}
.nav-item{
  margin: auto;
}
.whitespace{
  flex: 0 1 25px;
  width: 100%;
}
.cancel{
  flex: 0 1 50px;
  width: 100%;
  position: relative;
}
.nav-bar-list{
  flex: 1 1 auto;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
}
.contact-menu{
  flex: 0 1 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-link{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-item{
  margin: 5px;
}

.btn{
  float: right;
  position: absolute;
  right: 50px;
  font-size: 32px;
  width: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 52px;
  background: blue;
  cursor: pointer;
  color: white;
}
.active{
  display:block;
}





.header{
  height: 120px;
  width: 100%;
  position: fixed;
}
.contact{
  height: 40px;
  width: 100%;
  background: #2f73fe;
  position: relative;
}
.nav-main{
  height: 80px;
  width: 100%;
  position: relative;
}
.container{
  max-width: 960px;
  width: 100%;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  box-sizing: border-box;
}
.list{
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0;
}
.left{
  float: left;
}
.right{
  float: right;
}
.list-item{
  float: left;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.left .list-item:first-child{
  padding-left: 0;
}
.right .list-item:last-child{
  padding-right: 0;
}
.link{
  text-decoration: none;
}
.contact .link {
  color: white;
}
.flex-col{
  width: inherit;
  height: 100%;
}
.menu{
  width: 33.3%;
  float: left;
  height: 100%;
}
.button{
  float:left;
  width: 33.3%;
  height: 100%;
}
.logo{
  float:left;
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.header-item{
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
.header-item span.button-item{
  background: black;
  width: 1px;
  height: 24px;
}
.button-item{
  margin-right: 10px;
  margin-left: 10px;
}
.button-item:last-child{
  margin-right: 0;
}
#button{
  color: #848D82;
  transition: color 0.4s ease;
}
#button:hover{
  color: black;
}

</style>
