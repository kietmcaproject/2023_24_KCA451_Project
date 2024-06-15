  <!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css" type="text/css">
    <style>
     
  body{
    background-color:#000000;
          /* background-image:url("web-1012467_1280.webp"); */
  }
 
  .aboutus
  {
    color:#e0dbc1;
    padding-top:50px;
    font-family: 'Libre Baskerville';
    text-align: center;
    font-weight:900;
    font-size:50px;
    white-space: nowrap;
    overflow: hidden;
  }

.aboutcon
{
  color:white;
  padding-top:30px;
  /* text-align: justify;
  justify-content: center;*/
  margin-left: 10%;
  margin-right: 10%; 
  font-size:30px;
}
.sec1{
  
  /* text-align:justify; */
  position:relative;
  float:right;
} 
.pic1{
  padding-top:10px;
  width:300px;
  height:225px;
}
.pic2{
 
  width:300px;
  height:225px;
}
.sec1 img {
 float: left;
 margin-right: 10px;
}
.sec1 p {
 margin-left:400px;
 padding-left:300px;
 text-align:justify;
 color: #e0dbc1;
}
.sec2{
  margin-top:15px;
  text-align:left;
  position:relative;
  float:left;
}
.sec2 img{
float: right;
margin-left: 10px; 
} 
.sec2 p {
  margin-right: 700px;
  text-align:justify;
  color: #e0dbc1;
}
.aboutus span {
display: inline-block;
opacity: 0;
transition: opacity 0.5s, color 0.5s;

}
.word {
display: inline-block;
opacity: 0;
transition: opacity 0.5s;
margin: 0 3px;
}
.custom-button {
    width: 134px;
    height: 60px;
    background: transparent;
    border: 1px solid white;
    border-radius:25px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: block; 
    text-align: center; 
    text-decoration: none; 
    color:#e0dbc1;
  }
  .logi{
    position:absolute;
    right:60px;
    top:50px;
  }
  .loo{
    font-size:40px;
    color:#e0dbc1;
    text-decoration:none;
  }
  .loo:hover{
    color:black;
  }
  .custom-button:hover {
    
    background-color: aqua;
    
  }
  .custom-button:hover .loo {
    color:black;
  }
  
    </style>
</head>
<body>
<div>
<div class="aboutus">
  <span class="word" style="color: #e0dbc1;">Welcome</span>
  <span class="word" style="color: #e0dbc1;">to</span>
  <span class="word" style="color: #e0dbc1;">Project</span>
  <span class="word" style="color: #e0dbc1;">Catalyst</span>
  <div class="logi">
    <button class="custom-button">
    <a href="login.php" class="loo">Login</a>
    </button>
    
  </div>
</div>
   <div class="aboutcon" >
    <div class="sec1">
     <img src="pic1.jpg" alt="" class="pic1">
     <p>
     Project Link Hub is your one-stop platform for fostering collaboration and innovation between students and faculty. Whether you're an eager learner with a passion for projects or a knowledgeable professor ready to mentor, our platform is designed to make the connection seamless and efficient.
      </p>
    </div>
    <div class="sec2">
     <img src="pic2.jpg" alt="" class="pic2">
     <p>
     Empower the Future
     Share your expertise with the next generation of professionals. Create and post projects in your area of expertise, and help students gain valuable insights and skills. Nurturing talent is one of the most rewarding aspects of academia, and Project Link Hub makes it easier than ever.
      
      </p>
    </div>
    </div>
  </div>
  


<script>
  document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".word");
    let delay = 0;

    words.forEach((word) => {
      word.style.transitionDelay = delay + "s";
      delay += 0.5; // Adjust the delay (0.5s) as needed for the desired speed.

      setTimeout(() => {
        word.style.opacity = 1;
      }, delay * 300);
    });
  });
</script>
</body>
</html>