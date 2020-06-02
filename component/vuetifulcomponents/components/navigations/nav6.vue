<template>
    <header class="header">
			<div class="menu">
				<div class="hcontainer">
					<div class="social">
						<ul class="social-list">
							<li class="social-item"><a class="link" href="#"><fa :icon="['fab', 'facebook-f']"/></a></li>
							<li class="social-item"><a class="link" href="#"><fa :icon="['fab', 'twitter']"/></a></li>
							<li class="social-item"><a class="link" href="#"><fa :icon="['fab', 'instagram']"/></a></li>
							<li class="social-item"><a class="link" href="#"><fa :icon="['fab', 'google-plus-g']"/></a></li>
						</ul>
					</div>
					<div class="logo">
						<span><a href="#">
									<img src="~/assets/nav6/logo.png" alt=""></a>
							</span>
					</div>
					<div class="search">
						<div class="box">
      					<input type="text" id="search" placeholder="Search..." />
      				<a href="#"><span class="icon "><fa :icon="['fas', 'search']"/></span></a>
						</div>
					</div>
				</div>
			</div>
			<div class="main-nav">
				<div class="hcontainer">
					<nav class="nav">
						<ul class="nav-bar">
							<li class="nav-item"><a class="link active" href="#"><div class="link-item"><span>Home </span></div></a></li>
							<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>About us </span></div></a></li>
							<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Services </span></div></a></li>
							<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Gallery </span></div></a></li>
							<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Shop </span></div></a></li>
							<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Blog </span></div></a></li>
							<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Contact us </span></div></a></li>
							<li class="nav-item right"><a class="link" href="#"><div class="link-item"><span><fa :icon="['fas', 'bars']"/></span></div></a></li>
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
::placeholder { /* Firefox, Chrome, Opera */
    color: #CCC;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #CCC;
}

::-ms-input-placeholder { /* Microsoft Edge */
    color: #CCC;
}
@media screen and (min-width: 960px) {
	.menu{
		height: 80px;
		width: 100%;
		background-color: #3174ff ;
	}
	.search{
		height: 80px;
    color: black!important;
	}
  input:focus {
    outline: none;
  }
	.box{
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.box input#search{
  width: 200px;
  height: 40px;
  border: none;
  font-size: 10pt;
  float: left;
  color: #63717f;
  padding-left: 15px;
  border-radius: 40px;
	 -webkit-appearance:none;
	 padding-right: 25px;
}
.box .icon{
  display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	z-index: 1;
	margin-left: -30px;
  color: #4f5b66;
}

	.social{
		height: 100%;
		width: 30%;
		float: left;
	}
	.social-list{
		margin: auto;
		padding: 0;
		height: 100%;
		width: 100%;

	}
	.nav-bar .link{
  text-decoration: none;
	text-transform: uppercase;
	color: #A9B0B3;
	font-weight: 800;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
	transition: color 0.4s ease;
	}
	.menu .link{
    color: white;
    font-size: 14px;
  }
	.social-item{
	list-style: none;
	float: left;
	margin-left: 20px;
	height: 100%;
	display: flex;
	flex-direction: colmn;
	justify-content: center;
	align-items: center;
	}
	.logo{
		float: left;
		width: 40%;
		height: 100%;;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.search{
		float:left;
		height: 100%;
		width: 30%;
	}
	.header{
		width: 100%;
		height: 140px;
	}
	.main-nav{
		height: 60px;
		width: 100%;
	}
	.nav{
		height: 60px;
		width: 100%;
	}
	.nav-bar{
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;

	}
	.nav-item{
		list-style:none;
		float: left;
		height: 100%;
		margin-left: 20px;
		margin-right: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.main-nav .link:hover {
		color: black;
	}
	.nav-bar .active{
		color:black;
	}
	.right{
		float: right;
	}
	.hcontainer{
		max-width: 960px;
    width: 100%;
    margin: auto;
		height: 100%;
	}
}
</style>
