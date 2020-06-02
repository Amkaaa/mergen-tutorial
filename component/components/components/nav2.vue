<template lang="lang">
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <nuxt-link to="#"><img src="../assets/nav2/logo.png"></nuxt-link>
        </div>
        <div class="nav-bar">
          <ul class="list">
            <li class="nav-item"><a href="#" class="link"><div class="inside">Home</div></a></li>
            <li class="nav-item"><a href="#" class="link"><div class="inside">About</div></a></li>
            <li class="nav-item"><a href="#" class="link"><div class="inside">Products</div></a></li>
            <li class="nav-item"><a href="#" class="link"><div class="inside">Showcase</div></a></li>
            <li class="nav-item"><a href="#" class="link"><div class="inside">Blog</div></a></li>
            <li class="nav-item"><a href="#" class="link"><div class="inside">Contact</div></a></li>
            <li class="nav-item"><a class="button" href="#">Download</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>


<style>
.header{
  width: 100%;
  height: 100px;
  background-image: url("../assets/nav2/bg.png") !important;
  background-position: center;
}
.container{
  max-width: 960px;
  width: 100%;
  margin: auto;
}
.nav{
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row;
}
.logo{
  flex: 0 1 150px;
  height: 100px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav-bar{
  flex: 1 1 auto;
  height: 100px;
}
.list{
  float: right;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
}
.nav-item{
  float:left;
  min-width: 50px;
  padding-right: 15px;
  padding-left: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.link{
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: lightgray;
}
.nav-item .link{
  transition: color 0.4s ease;
}
.nav-item:hover .link{
  color: black;
}
.button{
  width: 100px;
  height: auto;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  color: skyblue;
  border-radius: 34px;
  background: white;
}
.inside{
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* .container{
  height: 100%;
  width: 80%;
  margin: auto;
}
.nav-bar{
  height: 100px;
  position: relative;
  width: 100% ;
  top: 0;
  margin: 0;
  padding: 0;

}
.nav-item{
  height: 100px;
  list-style: none;
  float:left;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.right{
  float: right;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo{
  height: 40px;
  width: auto;
}
.nav-context{
  list-style: none;
  display: inline;
  padding-left: 200px;
}
.link{
  padding-left: 40px;
  color: lightgray;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.link:hover{
  color: black;
  transition-duration: 0.4s;
}
.nav-item-link{
  display: inline;

}
.nav-item:first-child{
  align-items: center;
}
.nav-item:nth-child(2){

  align-items: center;
}
.button{
  width: 130px;
  height: 30px;
  padding-top: 10px;
  text-align: center;
  font-weight: bold;
  float: right;
  color: skyblue;
  background-color: white;
  border-radius: 50px;;
}

.center{
  width: 77%;
} */
</style>
