<template>
    <header>
	    <img class="logo" 
			src="https://i.im.ge/2024/03/15/RjEAe6.AQ-Tech-Solutions-logo-wider.jpeg" 
			alt="Logo">
	    <nav>
		    <ul class="navigation">
			    <li id="nav_word"><router-link to="/" id="anc"> Home </router-link></li>
				<li id="nav_word"><a @click="naviScroll" id="anc"> Contact </a></li>	
                <li id="nav_word" style="text-decoration: underline; color: white;"><router-link to="/info" id="anc"> Info </router-link></li>				 
			</ul>  
		    <a href="mailto:aqtechinfor@gmail.com"><button id="but"> Email </button></a>
		</nav>	
	</header>

    <a id="anc-f" href="https://m.facebook.com/profile.php/?id=100087924349577"> 
	    <i id="facebook" class="fa-brands fa-facebook fa-2xl"></i>
	</a>
    <a id="anc-in" href="https://instagram.com/kennykompi?igshid=MzRlODBiNWFlZA==">
		<i id="insta" class="fa-brands fa-instagram fa-2xl"></i>
    </a>

    <div class="container">
	    <hr>
	    <h1> AQ Tech Solutions</h1>
	    <hr>
		 
	    <h2> About us </h2>
		 
		<img id="AQ-team" src="https://i.im.ge/2024/03/15/RjH2R6.AQ-team.jpeg" border="3" width="580" height="360" alt="AQ Tech Solutions team">
	    <p><font face="tahoma" size="4"> AQ Tech Solutions is a company with a major focus in prefabricated infrastructure, electrical projects, construction and property development in all 3 spheres of our society i.e. residential, commercial and industrial areas. The company seeks to add value to the massive drive of development currently taking place in both rural and urban areas of South Africa and African countries.</font></p>
        <p><font face="tahoma" size="4"> The company is 100% black-owned by individuals from previously disadvantage background. Our mandate is to be active role players and part of the solution in combating the scourge of Unemployment, poverty and inequality that plagues our societies.</font></p>
        <p><font face="tahoma" size="4"> The company focuses on projects with in the in prefabricated infrastructure, electrical projects, construction and property development industry on a local and cross boarder scale. Out sourcing skilled personnel and professional expects with over 10 years of experience with in the field.</font></p>
         
		<h3> Why you should consider us?</h3>
		 
	    <p><font face="tahoma" size="4"> What makes us unique and stand out in the midst of our competitors is the drive and commitment we foster and enhance in providing quality and reliable service from experienced and qualified personnel, efficient and effective project management expertise, guaranteed completion dates and meeting production set targets. AQ TECH SOLUTIONS OFFERES HARD WORKING, SKILLED, DEDICATED TO HIGH QUALITY PREFABICATED BUILDING AND ELECTRICAL WORKS. OUR PERSONEL HAVE WORKED ON VARIOS PROJECTS AROUND SOUTH AFRICA AND MANY AFRICAN COUNTRIES.</font></p>
        <p><font face="tahoma" size="4"> Our number one priority is our client’s satisfaction through the services we offer which will eventually make us the number one preferred company in the industry.</font></p>
         
		<h3> What to expect:</h3>
		 
	    <ul>
	        <li><font face="tahoma" size="4"> Customer and employee satisfaction</font></li>
            <li><font face="tahoma" size="4"> Professionalism in our work and conduct</font></li>
            <li><font face="tahoma" size="4"> Integrity in conducting business</font></li>
            <li><font face="tahoma" size="4"> Resilience to obstruction</font></li>
            <li><font face="tahoma" size="4"> Innovation in the field</font></li>
            <li><font face="tahoma" size="4"> Sustainability of all products and on the environment</font></li>
		</ul>
		 
	    <h3> Services</h3>
	   
	    <ul>
		    <li><font face="tahoma" size="4"> Building Prefabricated Construction (classrooms, clinics, mine offices, containers, residential)</font></li>
			<li><font face="tahoma" size="4"> Prefabricated renovations, refurbishing and maintenance</font></li>
			<li><font face="tahoma" size="4"> Electrical wiring, installations and maintanance</font></li>
			<li><font face="tahoma" size="4"> Fault finding &amp; repairs</font></li>
			<li><font face="tahoma" size="4"> Repairs of electrical appliances.</font></li>
			<li><font face="tahoma" size="4"> Solar and hybrid converters installations</font></li>
			<li><font face="tahoma" size="4"> Plumbing</font></li>
			<li><font face="tahoma" size="4"> Manpower</font></li>
			<li><font face="tahoma" size="4"> Building, renovating and tubing of house</font></li>
			<li><font face="tahoma" size="4"> Steel erecting</font></li>
			<li><font face="tahoma" size="4">  Sustainability of all products and on the environment</font></li>
			<li><font face="tahoma" size="4">  Sheeting / Roofing</font></li>
			<li><font face="tahoma" size="4">  Air condition installations</font></li>
			<li><font face="tahoma" size="4">  Raft foundations</font></li>
		</ul>
		 
	    <h3> Our projects</h3>
		
		<img id="construction-img" src="https://i.im.ge/2024/03/15/RjHc4G.construction.png" alt="Construction project"> 
		<img id="construction-img" src="https://i.im.ge/2024/03/15/RjHe1M.Construction-2.jpeg" alt="Construction project">
		<img id="construction-img" src="https://i.im.ge/2024/03/15/RjpXhC.Construction-3.jpeg" alt="Construction project"> 
		<img id="construction-img" src="https://i.im.ge/2024/03/15/RjpPGK.Construction-4.jpeg" alt="Construction project">

        <img id="electric-layout" src="https://i.im.ge/2024/03/15/Rjpk2f.AQ-electrical-layout-diagram.jpeg" alt="Electrical layout"> 
		<img id="AQ-constructing" src="https://i.im.ge/2024/03/15/Rjv1MF.AQ-team-workin.jpeg" alt="AQ team constructing"> 
		<img id="AQ-constructin" src="https://i.im.ge/2024/03/15/Rjvmd1.AQ-team-workin-2.jpeg" alt="AQ team constructing">
	 </div>

</template>

<script>

export default {
    methods: {
        naviScroll() {
            this.$router.push('/home').then(() => {
            const element = document.querySelector('.form');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            });
        },
    },
};

</script>


<style scoped>

    .container {
        border: double 7px;
        text-align: center;
        margin: 100px auto;
        padding: 20px 35px;
    }
    .container img {
        border: 3px solid;
    }
    h1 { 
        font-family: rubik;
        font-size: 58px;
        color: #0b1742;	
        text-shadow: 0px 5px 0px lightblue;
    }
    hr {
        border: inset 3px lightblue;
    }
    h2 {
        font-family: rubik;
        font-size: 44px;
        color: lightblue;	
        border: outset 3px lightblue;
        padding-top: 8px;
        padding-bottom: 8px;
        background-color: #000;
    }
    #AQ-team {
        width: 580px;
        height: 360px;
    }
    h3 {
        font-family: rubik;
        font-size: 35px;
        color: lightblue;
        border: outset 3px lightblue;
        padding-top: 8px;
        padding-bottom: 8px;
        background-color: #000;
    }
    li {
        text-align: left;
    }
    #construction-img {
        width: 400px;
        height: 222px;
    }
    #AQ-constructin, #electric-layout {
        margin-top: 18px;
        width: 200px;
        height: 310px;
    }
    #AQ-constructing {
        margin-bottom: 25px;
        width: 250px;
        height: 250px;
    }

/* Media queries for different devices */

/* For Mini Tablet View */

    @media only screen and (max-width: 850px) {
        
        /* Navigation bar styling */
        
        header {
            height: 60px;
            flex-basis: 150px;
        }
        .navigation {
            font-size: 16px;
            position: relative;
            right: 40px;
        }
        #nav_word, #anc {
            font-size: 16px;
            position: relative;
            right: 20px;
        }
        .logo {
            height: 60px;
            width: 150px;
            position: relative;
            left: 40px;
            margin-left: -40px;
        }
        #but {
            display: none;
        }
        
    }

/* Phone portrait view  styling */
	 
    @media only screen and (max-width: 435px) {
                    
        /* Nav bar styling */
            
        .navigation {
            left: -80px;
        } 
        #nav_word, #anc {
            margin-right: 0;
        }
        
        /* Floating icons styling */

        #facebook {
            right: 8px;
            margin: 8px 0px;
        }
        #insta {	
            right: 10px;
            margin: 20px 0px;
        }

        /* Contaner and children styling */
        
        .container {
            padding: 20px 15px;
        }
        h1 {
            font-size: 38px;
        }
        h2 {
            font-size: 30px;
        }
        h3 {
            font-size: 24px;
        }
        #AQ-team {
            width: 320px;
            height: 180px;
        }
        #construction-img {
            width: 320px;
            height: 200px;
        }
        #AQ-constructin, #electric-layout {
            margin-top: 1.5px;
            width: 200px;
            height: 310px;
        }
        #AQ-constructing {
            margin-bottom: 1.5px;
            width: 250px;
            height: 250px;
        }
        
    }

</style>
