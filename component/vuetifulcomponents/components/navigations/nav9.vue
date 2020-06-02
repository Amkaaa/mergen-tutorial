<template lang="html">
    <header class="header">
        <div class="nav-main">
            <nav class="nav">
                <div class="nav-contact">
                    <div class="hcontainer">
                        <ul class="contact">
                            <li class="contact-social-item"><a class="link" href="#"><fa :icon="['fab', 'facebook-f']"/></a></li>
                            <li class="contact-social-item"><a class="link" href="#"><fa :icon="['fab', 'twitter']"/></a></li>
                            <li class="contact-social-item"><a class="link" href="#"><fa :icon="['fab', 'linkedin']"/></a></li>
                            <li class="contact-social-item"><a class="link" href="#"><fa :icon="['fab', 'google-plus-g']"/></a></li>
                            <li class="contact-social-item"><a class="link" href="#"><fa :icon="['fab', 'vimeo-v']"/></a></li>
                            <li class="contact-social-item-right"><a class="log link" href="#">Register</a></li>
                            <li class="contact-social-item-right"><a class="log link border" href="#">Login</a></li>
                        </ul>
                    </div>
                </div>
                <div class="nav-bar">
                    <div class="hcontainer">
                        <div class="nav-menu-logo">
                            <img src="~/assets/nav9/logo.png">
                        </div>
                        <div class="nav-menu-search-box">
                            <input class="search-bar" type="text" placeholder="Enter your Keyword">
                                <span class="search-icon"><a class="search-btn" href="#"><fa :icon="['fas', 'search']"/></a></span>
                            </input>
                        </div>
                        <div class="nav-menu nav-tools right">
                            <ul class="icon-menu">
                                <li class="nav-icon"><a class="icon" href="#"><fa :icon="['fas', 'search']"/></a></li>
								<li class="nav-icon"><a class="icon" href="#"><fa :icon="['fas', 'heart']"/></a></li>
								<li class="nav-icon"><a class="icon" href="#"><fa :icon="['fas', 'shopping-bag']"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="main-nav">
                    <div class="hcontainer">
                        <ul class="nav-list">
                            <li class="nav-item"><a class="item" href="#"><span>Home</span></a></li>
                            <li class="nav-item"><a class="item" href="#"><span>About</span></a></li>
                            <li class="nav-item"><a class="item" href="#"><span>Services</span></a></li>
                            <li class="nav-item"><a class="item" href="#"><span>Projects</span></a></li>
                            <li class="nav-item"><a class="item" href="#"><span>Team</span></a></li>
                            <li class="nav-item"><a class="item" href="#"><span>News</span></a></li>
                            <li class="nav-item"><a class="item" href="#"><span>Contact Us</span></a></li>
                            <li class="nav-item-right"><a class="item button" href="#"><span style="color: #2290ff;">View All</span></a></li>
                            <li class="nav-item-right"><span><b>70% Off</b> on Electronics</span></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="css" scoped>
@media screen and (min-width: 960px){
    input{
        border: #A9B0B3 1px solid;
        border-radius: 38px;
        text-align: start;
        height: 38px;
        width: 380px;
    }
    .search-icon{
        margin-left: -30px;
    }
    .search-box{
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .search-btn{
        height: 50px;
        position: relative;
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #A9B0B3;
    }
    .nav-menu-search-box input{
        padding-left: 20px;
        position: relative;
    }
    .nav-menu-search-box{
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
    }
    .button{
        padding: 8px 12px;
        align-items: center;
        background: #fff;
        height: 0px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 20px;
    }
    .main-nav{
        height: 69px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .main-nav .nav-list .nav-item-right{
		float: right;
        font-size: 13px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
		margin-right: 10px;
		margin-left: 10px;
		padding: 0;
		height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
	}
    .nav-item{
        padding-right: 20px;
    }
    .nav-menu-logo{
        height: 100%;
        width: 30%;
        float: left;
    }
    .nav-bar .nav-menu-search-box{
        height: 100%;
        width: 55%;
        float: left;
    }
    .item{
        height: 12px;
        color: white;
        float: right;
        text-decoration: none;
    }
    .nav-list{
        height: 100%;
        width: 100%;
    }
    .main-nav .nav-list .nav-item{
        height: 100%;
        float: left;
        color: white;
        font-size: 15px;
        font-family: 'Roboto Condensed', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .header{
        width: 100%;
        height: 230px;
    }
    .nav-main{
        width: 100%;
        height: 100%;
    }
    .nav{
        height:100%;
    }
    .nav .link{
        font-weight: 700;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 14px;
        transition: color 0.4s ease;
        color: #A9B0B3;
    }
    .nav .link:hover{
        color: black;
    }
    .hcontainer{
        width: 80%;
        margin: auto;
    }
    .contact {
        height: 46px;
        margin: 0;
        padding: 0;
        width: 100%;
        list-style: none;

    }
    .nav-contact{
        height: 46px;
        background-color: #f3f7fa;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .nav-contact .link{
        color: #A9B0B3;
    }
    .link{
        text-decoration: none;
    }
    .nav .log{
        color: black;
        font-weight: 600;
    }
    .border{
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px #d9dadce7 solid;
    }
    .nav-contact .contact .contact-social-item{
        float: left;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav-contact .contact .contact-social-item-right{
        float: right;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .right{
        float: right;
    }
    .nav-bar{
        width: 100%;
        height: 115px;
        background: #fff;
    }
    .main-nav{
        width: 100%;
        height: 30%;
        background: #2290ff;
    }
    .main-nav .nav-list span{
        color: white;
    }
    .contact-social-item:first-child{
        margin-left: 0;
    }
    .contact-social-item{
        margin-left: 5px;
        margin-right: 5px;
    }
    .icon-menu{
        margin: 0;
        padding: 0;
        height: 38px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .nav-menu .icon-menu .nav-icon{
        height: 16px;
        display: flex;
        flex-direction: center;
        justify-content: center;
        align-items: center;
    }
    .nav-tools .icon-menu .icon{
        color: #A9B0B3;
    }
    .nav-icon{
        list-style: none;
        margin-left: 25px;
    }
    .icon{
        float: right;
    }
    .search-box{
        width: 40%;
        height: 38px;
    }
    .logo{
        width: 162px;
    }
    .nav-bar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav-bar .nav-menu{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .left{
        float: left;
    }
    .nav-list{
        margin: 0;
        padding: 0;
        list-style: none;
        height: 69px;
    }
}
</style>
