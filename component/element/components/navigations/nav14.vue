<template lang="html">
    <header class="header">
        <div class="contact">
            <div class="hcontainer">
                <ul class="list left">
                    <li class="list-item"><a class="link" href="#"><fa :icon="['fas', 'envelope']"/> info@nutrisha.com</a></li>
                    <li class="list-item link">|</a></li>
                    <li class="list-item"><a class="link" href="#"><fa :icon="['fas', 'phone']" /> (+1) 245 578 2645</a></li>

                </ul>
                <ul class="list right">
                     <li class="list-item link">|</a></li>
                     <li class="list-item"><a class="link" href="#">Login</a></li>
                     <li class="list-item link">\ </a></li>
                     <li class="list-item"><a class="link" href="#">Register</a></li>
                </ul>
            </div>
        </div>
        <div class="main-nav">
            <div class="hcontainer">
                <div class="flex-col">
                   <div class="language ">
                       <span>
                       <a class="link" href="#">Eng</a>
                       </span>
                   </div>
                   <div class="logo">
                        <img src="~/assets/nav14/logo.png" alt="logo">
                   </div>
                   <div class="icons">
                       <li class="search"><a class="link" href="#"><fa :icon="['fab', 'facebook-f']"/></fa></a></li>
                       <li class="search"><a class="link" href="#"><fa :icon="['fab', 'twitter']"/></fa></a></li>
                       <li class="search"><a class="link" href="#"><fa :icon="['fas', 'basketball-ball']"/></fa></a></li>
                       <li class="search"><a class="link" href="#"><fa :icon="['fab', 'instagram']"/></fa></a></li>
                       <li class="search"><a class="link" href="#"><fa :icon="['fab', 'pinterest']"/></fa></a></li>
                   </div>
                </div>

            </div>
        </div>
        <div class="menu">
            <nav class="nav">
                <ul class="nav-bar">
                    <li class="nav-item"><a class="lin active" href="#"><div class="link-item"><span>Home</span></div></a></li>
                    <li class="nav-item"><a class="lin" href="#"><div class="link-item"><span>About</span></div></a></li>
                    <li class="nav-item"><a class="lin" href="#"><div class="link-item"><span>Service</span></div></a></li>
                    <li class="nav-item"><a class="lin" href="#"><div class="link-item"><span>Portfolio</span></div></a></li>
                    <li class="nav-item"><a class="lin" href="#"><div class="link-item"><span>Blog</span></div></a></li>
                    <li class="nav-item"><a class="lin" href="#"><div class="link-item"><span>Events</span></div></a></li>
                    <li class="nav-item"><a class="lin" href="#"><div class="link-item"><span>Contact Us</span></div></a></li>
                </ul>
            </nav>

        </div>

    </header>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.header{
    width: 100%;
    height: 170px;
}
.contact{
    height: 40px;
    width: 100%;
    background: #222222;
}
.main-nav  {
    height: 80px;
    width: 100%;
}
.hcontainer{
    max-width: 960px;
    width: 100%;
    margin: auto;
    height: 100%;
    /*background:pink; */
}
.list{
     list-style: none;
     margin: 0;
     padding: 0;
     height: 100%;
}
.left{
    float: left;
}
.right{
    float: right;
}
.list-item{
    float: left;
    padding-right: 15px;
    padding-left: 15px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.link{
    text-decoration: none;
}
.menu{
    background: #1E90FF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    padding-left: 10px;
    padding-right: 10px;
    height: 50px;
}

.nav-bar{
    margin: 0;
    padding: 0;
    list-style: none;
}
.nav-item{
    float: left;
    color: white;
    padding-left: 30px;
}
.contact .link{
    color: white;
}
.left .list-item:first-child{
    padding-left: 0;
}
.right .list-item:last-child{
    padding-right: 0;
}
.link{
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 12px;
    transition: color 0.4s ease;
    color: #404749;
  }
  .lin{
      color: white;
      text-decoration: none;
      padding-left: 10px;
      padding-right: 10px;
  }
.flex-col{
    display: flex;
    flex-flow: row;
    width: 100%;
    height: 100%;
}
.language{
    flex: 0 1 180px;
    height: 100%;
    padding-top:30px;
    padding-left: 18px;
}
.icons{
    flex: 0 1 180px;
    height: 100%;
    list-style: none;
    display: flex;
    padding-top: 30px;
}

.logo{
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.search{
      padding-left: 9px;
    padding-right: 9px;
}

</style>
