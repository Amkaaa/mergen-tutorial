<template>
    <header class="header">
        <div class="contact">
            <div class="hcontainer">
							<ul class="contact-list">
								<li><div class="contact-context"><span>Wonderful serenity has taken possension of my entire soul...</span></div></li>
						 		<li>
						 			<ul class="contact-social">
                    <li class="contact-social-item"><a class="link" href="#"><fa class="icon" :icon="['fab', 'linkedin']"/></a></li>
						 				<li class="contact-social-item"><a class="link" href="#"><fa class="icon" :icon="['fab', 'instagram']"/></a></li>
						 				<li class="contact-social-item"><a class="link" href="#"><fa class="icon" :icon="['fab', 'twitter-square']"/></a></li>
						 				<li class="contact-social-item"><a class="link" href="#"><fa class="icon" :icon="['fab', 'facebook-square']"/></a></li>
						 			</ul>
						 		</li>
							</ul>
            </div>
        </div>
        <div class="head">
            <div class="hcontainer">
							<div class="logo">
								<a href="#">
									<img src="~/assets/nav3/logo.png" alt="">
								</a>
							</div>
							<div class="ad">
								<img src="~/assets/nav3/ad.png" alt="">
							</div>
            </div>
        </div>
        <div class="main-nav">
            <div class="hcontainer">
							<nav class="nav">
								<ul class="nav-bar">
									<li class="nav-item"><a class="link active" href="#"><div class="link-item"><span>Home</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>About</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Service</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Project</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Blog</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Contact Us</span></div></a></li>
									<li class="nav-item-right"><a class="link" href="#"><fa :icon="['fas','search']"/></a> </li>
									<li class="nav-item-right"><a class="link" href="#"><fa :icon="['fas','heart']"/></a> </li>
									<li class="nav-item-right"><a class="link" href="#"><fa :icon="['fas','shopping-cart']"/></a> </li>
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

<style lang="css">
@media screen and (min-width: 960px) {

	.contact{
		height: 40px;
		width: 100%;
	}
	.contact-list{
		height: 100%;
		margin: 0;
		padding: 0;
		list-style: none;
		margin-top:
	}
	.contact .link{
		height: 40px;
		display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
		color: #A9B0B3;
	}
  .contact .link:hover{
    color: black;
  }
	.contact-social{
		height: 40px;
		width: 100%;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.contact-social-item{
		float: right;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: right;
		align-items: right;
	}
	.contact-context{
		float: left;
		height: 40px;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
    font-weight: 700;
    font-family: 'Roboto Condensed', sans-serif;
		font-size: 12px;
		color: #A9B0B3;
	}
	.nav{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 60px;
	}
	.nav .nav-bar {
		margin: 0;
		padding: 0;
		list-style: none;
		width: 100%;
		height: 100%;
	}
	.nav .link-item{
		height: 80px;
		display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
	}
	.main-nav .nav .link-item:last-child{
		margin-left: 0;
		padding-left: 0;
	}
	.main-nav .nav .link:first-child{
		margin-left: 0;
		padding-right: 0;
	}
	.contact-social .li :last-child{
		padding-right: 0;
	}
	.nav .link{
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 12px;
    transition: color 0.4s ease;
    color: white;
  }
	.nav .link:hover{
		color: black;

	}
	.nav .active{
    color: black !important;
  }
	.nav-item{
		float: left;
	}
	.link-item{
		width: 100%;
		height: 100%;
	}
	.link{
		text-decoration: none;
		height: 60px;
		color: white;
		display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
	}
	.header{
		height: 200px;
		width: 100%;;
	}
	.hcontainer{
		width: 910px;
		margin: auto;
	}
	.contact{
		width: 100%;
		height: 40px;
	}
	.head{
		width: 100%;
		height: 100px;
		background-color: #F3F4E5;
	}
	.logo{
		width: 30%;
		height: 100px;
		float: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}
	.ad{
		width: 70%;
		height: 100px;
		float: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}

	.ad img{
		width: 100%;
	}

	.main-nav{
		width: 100%;
		height: 60px;
		background-color: #3174ff;
	}
	.main-nav .nav .nav-bar .nav-item-right{
		float: right;
		margin-right: 10px;
		margin-left: 10px;
		margin: 0;
		padding: 0;
		height: 100%;
		margin-left: 10px;
		margin-right: 10px;
	}
  .icon{
    font-size: 16px;
    width: 16px;
    height: 16px;
    color: inherit;
    transition: all 0.3s ease;
  }
}
</style>
