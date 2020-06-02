nav10:
<template lang>
    <header class="header">
        <div class="contact">
            <div class="hcontainer">
                <ul class="contact-list">
                    <li class="contact-item"><a class="link" href="(+1)456 574 3487"><fa :icon="['fas', 'phone']"/></fa>Phone: (+1)456 574 3487</a></li>
                    <li class="contact-item"><a  class="link" href="mailto:support@sheuondolisa.com"><fa :icon="['fas', 'envelope']"/></fa>support@sheuondolisa.com</a></li>
                </ul>

            </div>
            <div class="icon">
                <ul class="icons">
                    <li class="search"><a class="search-icon"><fa :icon="['fas', 'search']"/></fa></a></li>
                    <li class="button"><a class="buttom">Get Started</a></li>
                </ul>

            </div>
        </div>
        <div class="main-nav">
            <div class="menu">
                  <div class="logo">
                        <img src="~/assets/nav10/logo.png" alt="logo">

                </div>
                <nav class="nav">
                    <ul class="nav-bar">
                     <li class="nav-item"><a class="link active" href="#"><div class="link-item"><span>EN</span></div></a></li>
                     <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Contact Us</span></div></a></li>
                     <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Events</span></div></a></li>
                     <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Blog</span></div></a></li>
                     <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Portfolio</span></div></a></li>
                     <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Service</span></div></a></li>
                     <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>About</span></div></a></li>
                     <li class="nav-item"><a class="link active" href="#"><div class="link-item"><span>Home</span></div></a></li>
                     </ul>
                </nav>
            </div>
        </div>

    </header>
</template>

<script>
export default {

}
</script>
<style lang="css" scoped>
/*doodiin dood*/
.header{
    height: 100px;
    width: 100%;
    position: relative;
    /*background: red;*/
}
/*dood*/
.main-nav{
    height: 70px;
    /*background: pink;*/
    width: 100%;
}
/*deed*/
.contact{
    height: 40px;
    background: #F0F8FF;

}
/*header1*/
.contact{
    list-style: none;
}
/*header2*/
.main-nav{

}
/*contact-list*/
.hcontainer{
    width: 25%;
    float: left;
}
/* menu */
.nav-bar{
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
    padding-right: 68px;
}

.nav-item{
    float: right;
    height: 100%;
}
.link{
    text-decoration: none;
}
.nav{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 80px;
  }
  .nav .link{
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 12px;
    transition: color 0.4s ease;
    color: #A9B0B3;
  }
  .nav .active{
    color: black !important;
  }
  .nav .link:hover{
    color: black;
  }
   .link-item{
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
.contact-item{
    float: right;
    margin-left: 10px;
    margin-right: 10px;
  }
  .logo{
     float: left;
     margin-top: 20px;
     margin-left: 100px;
  }
  .icons{
   margin: auto;
   list-style: none;
   float: right;
   display: flex;
  }
.contact .link{
    color:#A9B0B3;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 12px;
  }
.contact .contact-list{
    margin: 0;
    padding: 0;
    float: left;
    list-style: none;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    left: 100px;
    top: 13px;
}
.icons .search-icon{
    color: #A9B0B3;
    padding-right: 30px;
    size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 13px;
}
.button {
  background-color: #1E90FF;
  border: none;
  color: white;
  padding: 11px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0;
  cursor: pointer;
}
</style>
