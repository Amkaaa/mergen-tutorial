<template>
  <header class="header">
	  <div class="top">
			<div class="container">
				<div class="info">
					<ul class="info-bar">
						<li class="info-item">
							<ul class="contact-social">
								<li class="contact-social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'facebook-square']"/></a></li>
								<li class="contact-social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'twitter-square']"/></a></li>
								<li class="contact-social-item"><a class="link" href="#"><font-awesome-icon :icon="['fas', 'basketball-ball']"/></a></li>
								<li class="contact-social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a></li>
								<li class="contact-social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'pinterest']"/></a></li>
							</ul>
						</li>
						<li class="info-item"><a href="#"><div class="link link-item slide"><span>|</span></div></a></li>
						<li class="info-item"><a class="link" href="#"><div class="link-item"><span>Login / Register</span></div></a></li>
						<li class="info-item"><a class="link" href="#"><div class="link-item"><span><font-awesome-icon :icon="['fas', 'map-marker-alt']"/> 3655 Jefferson Street Norfalk, Virginia</span></div></a></li>
					</ul>
				</div>
				<div class="contact">
					<ul class="contact-list">
							<li class="contact-item">
								<div class="clock-icon">
									<a class="link" href="#"><font-awesome-icon :icon="['fas', 'clock']"/></a>
										<ul class="clock">
											<li class="clock-item"><a class="link" href="08:30amto09:00pm">Open Weekdays:</a></li>
											<li class="clock-item">08:30AM to 09:00PM</li>
										</ul>
								</div>
							</li>
							<li class="contact-item">
								<div class="phone-icon">
									<a class="link" href="#"><font-awesome-icon :icon="['fas', 'phone']"/></a>
										<ul class="phone">
											<li class="phone-item"><a class="link" href="tel:99873993">Call Us:</a></li>
											<li class="phone-item">(+967) 99873993</li>
										</ul>
								</div>
							</li>
						<li class="contact-item"><div class="logo"><img src='~/assets/nav13/logo.png' alt=""></div></li>
					</ul>
				</div>
				<nav class="nav">
					<ul class="nav-bar">
						<li class="nav-item"><a class="link active" href="#"><div class="link-item"><span>Home <font-awesome-icon :icon="['fas','caret-down']"/></span></div></a></li>
						<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>About</span></div></a></li>
						<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Service</span></div></a></li>
						<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Portfolio <font-awesome-icon :icon="['fas','caret-down']"/></span></div></a></li>
						<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Blog</span></div></a></li>
						<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Events <font-awesome-icon :icon="['fas','caret-down']"/></span></div></a></li>
						<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Contact Us</span></div></a></li>
							<div class="search-container">
						<li class="nav-item">		
								<input type="text" placeholder="Search" size="16px"><button type="submit"><span><font-awesome-icon :icon="['fas', 'search']"/></span></button>
						</li>

							</div>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>

	export default{
}
</script>

<style lang="css" scoped>
@media screen and (min-width: 960px){
	.top{
		width: 100%;
		height: 40px;
		background-color:rgb(34, 144, 255);
	}
	.link{
		text-decoration: none;
	}
	.info .link{
		color: white;
		font-family: 'Roboto Condensed', sans-serif;
		font-size: 14px;
		transition: color 0.4s ease;
	}

	.phone-link .clock-link{
		color: rgb(34, 144, 255) !important;
	}

	.search-container{
		height: 100%;
		width: 200px;
		float: right;
	}

	.search-container .nav-item{
		height: 100%;
		background: blue;
		float: right;
		width: 200px;

	}

	

	.info .info-item .link .link-item .slide{
		cursor: pointer;
		margin-right: 0px;
		margin-left: 0px;
	}

	.phone-icon a, .clock-icon a{
		color: rgb(34, 144, 255);
		transition: color 0.4s ease;
		
	}


	.info .info-item .link .link-item {
		margin-right: 0px;
		margin-left: 0px;
	}

	.contact-item .phone-item .link:first-child,.contact-item .clock-item .link:first-child{
		font-family: 'Roboto Condensed', sans-serif;
		color: black;
		font-size: 13px;
		font-weight: bold;


	}
	input:focus, textarea:focus, select:focus {
		outline: none;
}

	.contact-item .phone-item, .contact-item .clock-item{
		font-family: 'Roboto Condensed', sans-serif;
		color: grey;
		font-size: 11px;
		margin-left: 10px;
		margin-top: 5px;
	}


	.header{
		height: 160px;
		width: 100%;
		background-color: white;
	}

	.container{
		width:70%;
		margin: auto;
	}

	.info{ 
		height: 40px; 
		width: 100%;
		
	}

	.info .info-bar{
		list-style: none;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	.info .info-bar .info-item{
		float: right;
		height: 100%;
		margin-left: 0px;
		margin-right: 0px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.info .info-bar .info-item:first-child{
		margin-right: 0;
	}

	.info .info-bar .info-item:last-child{
		float: left;
		margin-left: 0;
	}


	.info-item .contact-social{
		list-style: none;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.info-item .contact-social .contact-social-item{
		float: right;
		margin-left: 10px;
		margin-right: 10px;
	}

	.info-item .contact-social .contact-social-item:first-child{
		margin-left: 0px;
	}

	.info-item .contact-social .contact-social-item:last-child{
		margin-right: 0px;
	}

	.contact{
		height: 100px;
		width: 100%;

	}

	.contact .phone{
		list-style: none;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.contact .clock{
		list-style: none;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.contact .contact-list{
		list-style: none;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;

	}

	.phone-icon, .clock-icon{
		text-decoration: none;
		margin-left: 10px;
		margin-right: 10px;
		color: rgb(34, 144, 255);
		display: flex;
		font-size: 25px;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.contact .contact-list .contact-item{
		float: right;
		height: 100%;
		margin-left: 10px;
		margin-right: 10px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.contact .contact-list .contact-item:last-child{
		float:left;
		margin-left: 0px;

	}

	.nav{
		height: 50px;
		width: 100%;
		background-color: rgb(34, 144,255);
	}

	.nav .nav-bar{
		list-style: none;
		float: right;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.nav .nav-bar .nav-item{
		float: left;
		height: 100%;
	}

	.link-item{
		height: 100%;
		width: auto;
		margin-right: 20px;
		margin-left: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.search-container button{
		height: 100%;
		width: auto;
		margin-right: 20px;
		margin-left: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: blue;
		border: none;
		color: white;
		transition: color 0.4s ease;
	}
	button:hover{
		color: red;
	}

	.nav .link{
		text-transform: uppercase;
		font-weight: 700;
		font-family: 'Roboto Condensed', sans-serif;
		font-size: 11px;
		color: white;
		transition: color 0.4s ease;
	}

	.nav .link:hover, .info .link:hover, .phone-icon a:hover, .clock-icon a:hover{
		color: #002966;
	}

	.search-container input[type=text]{
		    float: left;
			border: none;
			height: 48px;
			background-color: blue;
			display: flex;
			color: white;
			margin-left: 10px;
	

			
	}



	::placeholder{
		color: white;
		opacity: 1;
	}

}
</style>