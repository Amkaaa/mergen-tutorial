<template>
	<header class="header">
		<div class="contact">
			<div class="container">
				<ul class="contact-list">
					<li class="contact-item">
						<ul class="contact-social">
							<li class="contact-social-item"><a class="link" href="#"><div class="link-item"><span><font-awesome-icon :icon="['fab', 'facebook-square']"/></span></div></a></li>
							<li class="contact-social-item"><a class="link" href="#"><div class="link-item"><span><font-awesome-icon :icon="['fab', 'twitter-square']"/></span></div></a></li>
							<li class="contact-social-item"><a class="link" href="#"><div class="link-item"><span><font-awesome-icon :icon="['fab', 'linkedin']"/></span></div></a></li>
							<li class="contact-social-item"><a class="link" href="#"><div class="link-item"><span><font-awesome-icon :icon="['fab', 'google-plus-square']"/></span></div></a></li>
						</ul>
					</li>
					<li class="contact-item"><a class="link" href="#"><div class="link-item"><span><font-awesome-icon :icon="['fas', 'flag-usa']"/> Eng</span></div></a></li>
					<li class="contact-item"><a class="link" href="#"><div class="link-item"><span><font-awesome-icon class="map" :icon="['fas', 'map-marker-alt']"/> 3655 Jefferson Street Norfalk, Virginia</span></div></a></li>
				</ul>
			</div>
		</div>
		<div class="main-nav">
			<div class="container">
				<ul class="nav-bar">
					<li class="nav-item"><a class="link" href="#"><div class="link-item" id="join"><span>Join Now</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Contact</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Blog</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Pricing</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Portfolio</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Services</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>About</span></div></a></li>
					<li class="nav-item"><a class="link active" href="#"><div class="link-item"><span>Home</span></div></a></li>
					<li class="nav-item"><div class="logo"><img src='~/assets/nav5/logo.png' alt=""></div></li>
				</ul>
			</div>
		</div>

	</header>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
	.header{
		height: 120px;
		width: 100%;
	}
	.map{
		color: rgb(34,144,255);
	}
	
	.container{
		width: 80%;
		margin: auto;
	}
	.contact{
		height: 40px;
		background-color: rgb(235, 239, 242);
	}
	.contact-social{
		height: 40px;
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.contact-social-item{
		float: left;
		margin-left: 10px;
		margin-right: 10px;
		transition: color 0.4s ease;
	}
	.contact-social-item:last-child{
		margin-right: 0;
		float: right;
	}
	.contact .contact-list{
		list-style: none;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	.contact .contact-list .contact-item{
		float: right;
		height: 40px;
		margin-right: 10px;
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.contact .contact-list .contact-item:last-child{
		float: left;
		margin-left: 0px;
	}
	
	.contact .social{
		list-style: none;
		height: 100%;
		width: 100%;
	}
	.main-nav{
		width: 100%;
		height: 80px;
	}
	.main-nav .nav-bar{
		list-style: none;
		height: 80px;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	.main-nav .nav-bar .nav-item{
		height: 100%;
		float: right;
	}
	.main-nav .nav-bar .nav-item:last-child{
		float: left;
	}
	.main-nav .link{
		text-transform: Uppercase;
		font-weight: 700;
		font-family: 'Roboto Condensed', sans-serif;
		font-size: 12px;
		color: rgb(163, 181, 201);
		transition: color 0.4s ease;
	}
	.main-nav .link:hover{
		color: black;
	}
	.link{
		text-decoration: none;
	}
	.main-nav .link-item{
		height: 100%;
		float: right;
		width: auto;
		padding-left: 20px;
		padding-right: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

	}
	.contact .link{
		color: rgb(105, 106, 108);
	}
	.contact .link:hover{
		color: rgb(34,144,255);
	}
	.main-nav .active{
		color: black;
	}
	.logo{
		height:100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.nav-bar .nav-item:first-child{
		height: 80px;
	}
	.nav-bar #join{
		color: white;
		background-color: rgb(34,144,255);
		margin-top: 20px;

		width: 100px;
		height: 40px;
		margin-right: 20px;
		margin-left: 20px;
		border-radius: 50px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	

</style>