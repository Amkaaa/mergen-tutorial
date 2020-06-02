<template>
    <header class="header">
        <div class="contact">
            <div class="container">
                <ul class="contact-list">

                        <div class="contact-connection">
                                <li class="right"><a class="link" href="#"><font-awesome-icon :icon="['fas', 'map-marker-alt']" style="color:#3174ff;"/>&nbsp;&nbsp;<span> 4535 Ashwood Drive Larchwood, Los Angles</span></a></li>
                                <li class="right"><a class="link" href="#"><font-awesome-icon :icon="['fas', 'phone']" style="color:#3174ff;"/>&nbsp;&nbsp;<span>202-555-0191</span></a></li>
                        </div>

                    <li>
                        <ul class="contact-social">
                            <li class="contact-title">Contact with Us:</li>
                            <li class="right"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'linkedin']" style="color:#3174ff;"/></a></li>
                            <li class="right"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'google']" style="color:red;"/></a></li>
                            <li class="right"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'twitter-square']" style="color:#4ac0f7;"/></a></li>
                            <li class="right"><a class="link" href="#"><font-awesome-icon :icon="['fab', 'facebook-square']" style="color:#22448a;"/></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="head">
            <div class="container">
							<div class="logo">
								<span>
									<img src="~/assets/nav4/Logo.png" alt="">
								</span>
							</div>
                            <div class="glogo">
                                <div class="logol">
                                    <img src="~/assets/nav4/homeicon.png" alt="">
                                </div>
                                <div class="ltitle"><b>Mail us:</b><br> ikhee@gmail.com</div>
                            </div>
                            <div class="glogo">
                                <div class="logol">
                                    <img src="~/assets/nav4/phoneicon.png" alt="">
                                </div>
                                <div class="ltitle"><b>Call us:</b><br> (+1)352-361-1779</div>
                            </div>
                            <div class="glogo">
                                <div class="logol">
                                    <img src="~/assets/nav4/mail line icon.png" alt="">
                                </div>
                                <div class="ltitle"><b>Visit us:</b><br>22 Rhapsody Street,Fl 344 </div>
                            </div>
            </div>
        </div>
        <div class="main-nav">
            <div class="container">
							<nav class="nav">
								<ul class="nav-bar">
									<li class="nav-item"><a class="link active" href="#"><div class="link-item"><span>Home</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>About</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Service</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Project</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Team</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>News</span></div></a></li>
									<li class="nav-item"><a class="link" href="#"><div class="link-item"><span>Contact Us</span></div></a></li>
									<li class="nav-item-right"><a class="link" href="#"><font-awesome-icon :icon="['fas', 'user-plus']"/>&nbsp;&nbsp;<span>Register Now</span></a> </li>
									<li class="nav-item-right"><a class="link" href="#"><span>Login</span></a> </li>
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
        background: #abd1f0;
		color: black;
		font-weight: 700;
        font-family: 'Roboto Condensed', sans-serif;
	}
	.contact-list{
		height: 100%;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.contact .link{
		height: 40px;
		display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
		color:black;
	}
	:hover.contact .link{
		color: rgb(44, 40, 40);
	}
    .contact-connection{
		float: left;
        font-weight: 700;
        font-family: 'Roboto Condensed', sans-serif;
		font-size: 12px;
		color:black;
    }

	.contact-social{
		height: 40px;
		width: 23%;
		margin: 0;
		padding: 0;
        list-style: none;
        float: right;
	}
    .right{
		float: right;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: right;
		align-items: right;
	}

	.contact-title{
        font-family: 'Roboto Condensed', sans-serif;
		float: left;
		margin-top: 13px;
        font-size: 13px;
        position: absolute;
    }
	.nav{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 50px;
	}
	.nav .nav-bar {
		margin: 0;
		padding: 0;
		list-style: none;
		width: 100%;
		height: 100%;
	}
	.nav .link-item{
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
        font-weight: 700;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 13px;
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
		height: 50px;
		color: white;
		display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
	}
	.header{
		height: 200px;
		width: 100%;;
	}
	.container{
		max-width: 960px;
    width: auto;
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
		width: 20%;
		height: 100px;
		float: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}
	.glogo{
		width: 20%;
		height: 100px;
		float: right;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}
    .logol{
        width: 15%;
		height: 100px;
		float: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
    }
    .ltitle{
        width: 80%;
		height: 100px;
		float: right;
		display: flex;
		flex-direction: column;
		justify-content: center;
        align-content: center;
        line-height: 0.5;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 13px;
    }
	.ad img{
		width: 100%;
	}

	.main-nav{
		width: 100%;
		height: 50px;
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

}
</style>
