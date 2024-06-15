<!DOCTYPE HTML>
<html>
    <head>
    <title>ExamBaBa.com</title>
    <link rel="stylesheet" href="homepage.css">
  <link rel="stylesheet" href="addexam.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <style>
            .container {
                position: relative;
            }

            .image {
                opacity: 1;
                display: block;
                width: 100%;
                height: auto;
                transition: .5s ease;
                backface-visibility: hidden;
            }

            .middle {
                transition: .5s ease;
                opacity: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%)
            }

            .container:hover .image {
                opacity: 0.3;
            }

            .container:hover .middle {
                opacity: 1;
            }

            .text {
                background-color: #4CAF50;
                color: white;
                font-size: 16px;
                padding: 16px 32px;
            }
            
            .t {font-size:18px;}
            
            .pd {margin-left: 50px;}
            
            .bk {background-color: rgba(0,0,0,0.8);
               color: rgb(255,255,255);}
        </style>

    </head>
    <body>

    <div class="col-lg-12 logo">
    ExamBaBa.com

  </div>
  <!--Navbar-->
  <div class="nev">
    <nav class="navbar navbar-expand-lg navbar-dark primary-color">

      <!-- login -->
      <ul class="navbar-nav mr-auto">
        <!-- empty ul but important -->
      </ul>
      <ul class='nav'>

        <div class="dropdown a">
          <a class="dropdown-toggle " style="
    color: gray;
    text-decoration: none;
    background-color: transparent;
" data-toggle="dropdown" href="#">Login</a>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><a href="admin/Adminlogin.php">Admin</a></li>
            <li><a href="studentside/login.php">USer</a>
            <li class="divider"></li>
          </ul>
        </div>

        <!-- signup -->
        <ul class='nav'>

          <div class="dropdown mx-3">
            <a class="dropdown-toggle" style="
    color: gray;
    text-decoration: none;
    background-color: transparent;" data-toggle="dropdown" href="#">Signup</a>
            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
              <li><a href='admin/Admin registration.php'>Admin</a></li>
              <li><a href='studentside/studentsign up.php'>User</a>
              <li class="divider"></li>
            </ul>
          </div>


  </div>
  </nav>


       <br><br>

       
        <div class="jumbotron ">
            <center>
                <h2><strong>Online Examination System</strong></h2>
                <h4>Have you ever wanted a simple and a convenient way to make or take exam Online easily , If yes then this webste is just perfect for you.
                    <br>signup today and start making and talking your exams today for Free. 
                </h4>  
            </center>
        </div><br>
        
        <br><br><br><br>
        <div class="row">
            <center>
                
                <div class="col-xs-4 jumbotron col-xs-offset-1">
                    <div class="container">
                        <span class="glyphicon glyphicon-calendar" style="font-size:50px"></span>
                        <br><br><p><strong>online exam made easy</strong><br>
                        While making this website our main priority to reduce teachers work load.<br> and makeing a user interface that is very easy to understand.<br>
                        Making exam online is entirely web based <br>so you can create exam & give exam from anywhere. </p>
                    </div>
                </div>
                
                <div class="col-xs-4 jumbotron col-xs-offset-2">
                    <div class="container">
                        <span class="glyphicon glyphicon-heart" style="font-size:50px"></span><br><br>
                    <p><strong> easy to use</strong><br>
                    While making this website our main priority is to make it as user friendly as possibe. 
                    If you think that a page needs more improvemrnt feel free to provide feedbacks.
                    </p>         <br>
                </div>
            </center>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          
               
        </div> 
        <div>
        </div>
        <br><br><br><br><br><br>
        <div class="row container-fluid bk">
            <div class="col-xs-2 pd">
            <h3><b> Features: </b></h3>
            <ul class="t">
                <li>Fast and Easy</li>
                <li>Admin and User<br> Dashboard</li>
            </ul>
            </div>
            <div class="col-xs-2 pd">
            <h3><b>  Benefits: </b></h3>
            <ul class="t">
                <li>Track Result<br> anywhere</li>
                <li>Perfect for any class</li>
                <li>Priced Right(It's free!)</li>
            </ul>
            </div>
            <div class="col-xs-2 pd">
            <h3><b> Pages: </b></h3>
            <ul class="t">
                <li>Register</li>
                <li>Login</li>
                <li>Features</li>
                <li>About</li>
            </ul>
            </div>
            <div class="col-xs-3 pd">
                <h3><strong> About ExamBaBa.com </strong></h3>
                <p>We are a group of college students. We start developing this website 
                    during this pandemic as our college project. Our mission is to provede teachers and students a 
                    website where they can easily create,take and check results with no for free . 
                    <br>
                </p>
            </div>
        </div>
    </body>
</html>
