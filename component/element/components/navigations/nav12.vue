<template>
	<header class="header">
		<div class="hcontainer">
			<div class="contact">
				<ul class="contact-list">
					<li class="contact-list-item"><a class="link" href="#"><span><fa class="icon" :icon="['fas', 'phone']"/>(+976)99873993</span></a></li>
					<li class="contact-list-item"><a class="link" href="#"><span><fa class="icon" :icon="['fas', 'envelope']"/>ub1o1genko@gmail.com </span></a></li>
					<li class="contact-list-item"><a class="link" href="#"><span><fa class="icon" :icon="['fas', 'clock']"/>Mon-Fri: 09:00AM to 10:30PM</span></a></li>
					<li class="contact-list-item right"><a class="link" href="#"><span>Register Now</span></a></li>
					<li class="contact-list-item right"><a class="link" href="#"><span>Login</span></a></li>
				</ul>
			</div>
			<div class="overflow">
				<div class="hcontainer">
					<div class="main-nav">
						<div class="logo">
							<span>
								<img src="~/assets/nav12/logo.png" alt="">
							</span>
						</div>
						<div class="nav">
							<nav class="">
								<ul class="nav-bar">
									<li class="nav-item"><a class="link " href="#"><div class="link-item active"><span>Home</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>About</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Service</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Project</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Blog</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Contact Us</span></div></a></li>
								</ul>
							</nav>
						</div>
						<div class="social">
							<ul class="social-list">
								<li class="social-list-item"><a class="link-social" href="#"><fa class="icon" :icon="['fab', 'facebook-square']"/></a></li>
								<li class="social-list-item"><a class="link-social" href="#"><fa class="icon" :icon="['fab', 'twitter-square']"/></a></li>
								<li class="social-list-item"><a class="link-social" href="#"><fa class="icon" :icon="['fab', 'instagram']"/></a></li>
								<li class="social-list-item"><a class="link-social" href="#"><fa class="icon" :icon="['fab', 'linkedin']"/></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
export default {
}
</script>
<style lang="css"scoped>
	.header{
		height: 60px;
		width: 100%;
		background-color: #3174ff;
		position: relative;
	}
	.overflow{
		left: 0;
		position: absolute;
		width: 100%;
	}
	.hcontainer{
		max-width: 960px;
		margin: auto;
	}
	.icon{
		margin-right: 5px;
		margin-left: 5px;
		width: 14px;
		height: 14px;
		font-size: 14px;
	}
	.contact{
		height: 35px;
		width: 100%;
		background-color: #3174ff;
	}
	.contact .contact-list{
		list-style: none;
		height: 100%;
		margin: 0;
		padding: 0;
		height: 35px;
	}
	.contact-list-item .link span{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.contact .contact-list .contact-list-item{
		 float: left;
    height: 100%;
		margin-right: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: 'Roboto Condensed', sans-serif;
    font-size: 14px;
	}
	.contact .contact-list .contact-list-item:nth-last-child(2){
		margin-right: 0;
	}
	.main-nav{
		height: 60px;
		width: 100%;
		background-color: white;
		padding: 0;
		margin: 0;
	}
	.logo{
		width: 20%;
		height: 100%;
		float: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.nav nav{
		height: 100%;
		width: 60%;
		float: left;
		padding: 0;
		margin: 0;
	}
	.nav .nav-bar{
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

	}
	.social{
		width: 20%;
		height: 100%;
		float: left;
	}
	.social-list{
		float: left;
		height: 100%;
		width: 100%;
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.social-list-item{
		margin:auto;
		list-style: none;
		font-size: 18px;
	}
	.link-social:hover{
		color: black;
	}
	.right{
		float: right !important;
	}
	.link{
		text-decoration: none;
		color: white;
	}
	.link-social{
		text-decoration: none;
		height: 100%;
		transition: color 0.4s ease;
    color: #A9B0B3;
	}
	.link-item{
    transition: color 0.4s ease;
    color: #A9B0B3;
		float: left;
		height: 60px;
		display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
		font-family: 'Roboto Condensed', sans-serif;
    font-size: 14px;
		font-weight: 700;
	}
	.link-item:hover{
		color: black;
	}
	.active{
		color: black !important;
	}
	.nav-item{
		list-style: none;
		margin: auto;
	}
</style>
