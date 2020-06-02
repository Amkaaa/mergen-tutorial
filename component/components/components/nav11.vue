<template>
	<header class="header">
		<div class="container">
			<nav class="nav">
				<ul class="nav-bar">
					<li class="nav-item"><a class="link nav-item-extra" href="#"><div class="link-item"><span><font-awesome-icon :icon="['fas', 'sign-in-alt']"/>&nbsp;Sign In</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Contact Us</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Page</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Blog</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Portfolio</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Services</span></div></a></li>
					<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>About</span></div></a></li>
					<li class="nav-item"><a class="link active" href="#"><div class="link-item"><span>Home</span></div></a></li>
					<li class="logo"><a class="link" href="#"><img src="~/assets/nav11/logo.png" alt=""></a></li>
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
	@media screen and (min-width: 960px){

		.link{
			text-decoration: none;
		}

		.nav .link{
			text-transform: uppercase;
			font-weight: 700;
			font-family: 'Roboto Condensed', sans-serif;
			font-size: 13px;
			color: rgb(178, 192, 209);
			transition: color 0.5s ease;
			height: 100%;
		}

		.nav .active{
			color: black !important;

		}

		.nav .nav-bar .nav-item-extra{
			color: rgb(38, 143, 254) !important;
			margin-left: 100px;	
			height:100%;
		}
		
		.nav .link:hover {
			color:black;
		}


		.nav-item{
			height: 80px !important;
			float: left;
		}

		.link-item{
			height: 100%;
			width: auto;
			padding-left: 10px;
			padding-right: 10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.header {
			height: 80px;
			width: 100%;

	}
		.container{
			width: 95%;
			margin: auto;
		}
		.logo{
			height: 80px;
			width: 150px;
		}
		.logo a{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.nav .nav-bar{
			list-style: none;
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
		}
		.nav .nav-bar .nav-item{
			float:right;
			height: 100%;
			margin-right:10px;
			margin-left:10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

	}


</style>
