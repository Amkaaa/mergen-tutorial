<template lang="html">
  <header class="header">
    <div class="contact">
      <div class="hcontainer">
        <ul class="contact-list">
          <li class="contact-item">
            <ul class="contact-social">
              <li class="contact-social-item"><a class="link" href="#"><fa :icon="['fab', 'facebook-square']"/></a></li>
              <li class="contact-social-item"><a class="link" href="#"><fa :icon="['fab', 'twitter-square']"/></a></li>
              <li class="contact-social-item"><a class="link" href="#"><fa :icon="['fab', 'instagram']"/></a></li>
              <li class="contact-social-item"><a class="link" href="#"><fa :icon="['fab', 'linkedin']"/></a></li>
            </ul>
          </li>
          <li class="contact-item"><a class="link" href="tel:99873993"><fa :icon="['fas', 'phone']"/> (+967) 99873993 </a></li>
          <li class="contact-item"><a class="link" href="mailto:ub1o1genko@gmail.com"><fa :icon="['fas', 'envelope']"/> ub1o1genko@gmail.com </a></li>
        </ul>
      </div>
    </div>
    <div class="main-nav">
      <div class="hcontainer">
        <nav class="nav">
          <ul class="nav-bar">
            <li class="nav-item"><a class="link active" href="#"><div class="link-item"><span>Home</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>About</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Service</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Portfolio</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Blog</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Events</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Contact Us</span></div></a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="logo">
      <img src="~/assets/nav16/logo.png" alt="">
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
@media screen and (min-width: 960px) and (max-width: 1070px){
  .hcontainer{
    width: 100% !important;
    margin: 0 !important;
  }
  .logo{
    left: 0 !important;
  }
}
@media screen and (min-width: 960px){
  .nav{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 70px;;
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
  .nav-bar{
    height: 100%;
    margin: 0;
    padding: 0;
    float:right;
    list-style: none;
  }
  .nav-item{
    height: 100%;
    float: left;
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
  .contact-social{
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .contact-social-item{
    float: right;
    margin-left: 10px;
    margin-right: 10px;
  }
  .contact-social-item:last-child{
    margin-right: 0;
  }
  .link{
    text-decoration: none;
  }
  .contact .link{
    color: #404749;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 14px;
  }
  .header{
    height: 110px;
    width: 100%;
    position: relative;
  }
  .contact{
    width: 100%;
    height: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
  .contact .contact-list{
    list-style: none;
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 0;
  }
  .contact .contact-list .contact-item{
    float: right;
    height: 100%;
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contact .contact-list .contact-item:first-child{
    margin-right: 20px;
  }
  .main-nav{
    width: 100%;
    height: 70px;
  }
  .hcontainer{
    width: 80%;
    margin: auto;
  }
  .logo{
    position: absolute;
    height: 110px;
    width: 170px;
    top: 0;
    left: 10%;
    background: #3174ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;

  }
}
</style>
