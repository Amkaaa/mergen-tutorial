<template lang="lang">
  <header class="header">
    <div class="hcontainer">
      <nav class="nav">
        <div class="logo">
          <nuxt-link to="#"><img src="~/assets/nav2/logo.png"></nuxt-link>
        </div>
        <div class="nav-bar">
          <ul class="list">
            <li class="nav-item active"><a href="#" class="link"><div class="inside">Home</div></a></li>
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
@media only screen and (min-width: 960px){
  .header{
    width: 100%;
    height: 80px;
    background-image: url("../../assets/nav2/bg.png") !important;
    background-position: right;
  }
  .hcontainer{
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
    height: 80px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav-bar{
    flex: 1 1 auto;
    height: 80px;
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
    font-size: 12px;
    color: #D5DED9;
  }
  .nav-item .link{
    transition: color 0.4s ease;
  }
  .active .link{
    color: black !important;
  }
  .nav-item:hover .link{
    color: black;
  }
  .button{
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', sans-serif;
    color: blue;
    padding-right: 25px;
    padding-left: 25px;
    font-weight: 700;
    border-radius: 34px;
    background: white;
    transition: all 0.3s ease;
  }
  .button:hover{
    -webkit-box-shadow: 0px 5px 15px 2px rgba(0,0,0,0.47);
    -moz-box-shadow: 0px 5px 15px 2px rgba(0,0,0,0.47);
    box-shadow: 0px 5px 15px 2px rgba(0,0,0,0.47);
  }
  .inside{
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

}
</style>
