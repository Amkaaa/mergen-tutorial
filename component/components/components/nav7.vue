<template>
	<header class="header">
		<div class="container">
			<div class="flex-col">	
				<div class="logo left">
				 <img src="~/assets/nav7/logo.png">
				</div>
				<nav class="nav">
					<div class="nav-list">
      	   <ul class="nav-bar">
            <li class="nav-item"><a class="link active" href="#"><div class="link-item"><span>Home</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>About</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Service</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Project</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Blog</span></div></a></li>
            <li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Contact Us</span></div></a></li>
         	 </ul>
					</div>
			</nav>
						
			<div class="contact right">
				<ul class="contact-social">
					<li class="contact-social-item"><a class="link" href="#"><font-awesome-icon :icon="['fas', 'search']"/></a></li>
					<li class="contact-social-item">|</li>
          <li class="contact-social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'facebook-square']"/></a></li>
          <li class="contact-social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'twitter-square']"/></a></li>
          <li class="contact-social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a></li>
          <li class="contact-social-item"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'linkedin']"/></a></li>
	      </ul>
			</div>
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
			 height: 100px;
			 width:100%;
		 }
		 .nav-bar{
			 display: flex;
			 height: 100%;
			 display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		 }
		 .nav-item{
			 float: right;
			 padding-left: 10px;
			 padding-right: 10px;
			 height: 100px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		 }
	 	.link:hover {
			color:black;
		}
		.nav .active{
		color:black;
		}	
		.link-item{
			height: 100%;
			text-transform: uppercase;
			margin: 0;
			padding: 0;
		}
		 .container{
			max-width: 1200px;
			width: 100%;
			height: 100%;
			margin: auto;
		 }
		 .link{
			 text-decoration: none;
			 color: rgb(168, 168, 168);
			transition: color 0.4s ease;
			font-weight: 600;
			font-family: 'Roboto Condensed', sans-serif;
		 }
		 .nav-bar{
			 	list-style: none;
				margin: 0;
				padding: 0;
				height: 100%;
		 }
		 .contact-social{
			 list-style: none;
			 margin: 0;
				padding: 0;
				height: 100%;				
		 }

		.contact-social-item{
			float: left;
			height: 100%;
			padding-right: 10px;
			padding-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.right .contact-social-item:last-child{
			padding-right: 0;
		}
		.nav{
				flex: 1 1 auto;
				height: 100%;
		}
			.logo{
				height: 100%;
			flex:0 1 100px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			}
			.contact{
				height: 100%;
				flex:0 1 200px;
				display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			}
		.flex-col{
			display: flex;
			flex-flow: row;
			width: 100%;
			height: 100%;
		}



</style>
