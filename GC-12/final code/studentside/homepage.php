<?php include 'base.php';?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ExamBaBa.com</title>
  <!-- css file -->
  <link rel="stylesheet" href="homepage.css">
  <link rel="stylesheet" href="addexam1.css">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  <link rel="stylesheet" href="index.css">
  <style>
    .card {
      box-shadow: 10px 10px 40px rgb(240, 243, 240);
    }
  </style>
  <!-- js file -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
    integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
    crossorigin="anonymous"></script>

</head>

<body>
  <div class="col-lg-12 logo">
    ExamBaBa.com
  </div>
  <!--Navbar-->
  <div class="nev">
    <nav class="navbar navbar-expand-lg navbar-dark primary-color">

      <!-- Navbar brand -->
      <a class="navbar-brand nav-link " href="#">Admin </a>

      <!-- Collapse button -->
      <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#basicExampleNav"
        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible content -->
      <div class="collapse navbar-collapse" id="basicExampleNav">

        <!-- Links -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active nav-link ">
            <a class="nav-link " href="#">Exam
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active nav-link">
            <a class="nav-link " href="Add Exam.html">Exam List</a>
          </li>

          
        </ul>
        <ul class='nav'>
  
  <div class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Login</a>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">            
      <li><a href="#">Admin</a></li>
      <li><a href="#">USer</a>
      <li class="divider"></li>
    </ul>
  </div>   
  
  <!-- signup -->
  <ul class='nav'>

  <div class="dropdown mx-3">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Signup</a>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">            
      <li><a href='signup.php'>Admin</a></li>
      <li><a href=\studentside\studentsignup.php'>User</a>
      <li class="divider"></li>
    </ul>
  </div> 
      </div>
    </nav>
      </div>
    </nav>

  </div>
  <div class="container">
    <br><br><br>
    <h1>ExamBaBa.com</h1>
    <p>ExamBaBa.com is a free website for making exam with ease, where students can come and take exams.</p>
    <p>
      <a href="#" class="btn btn-primary btn-lg" role="button">Learn More</a>
    </p>
  </div>
  <br><br><br>
  <div class="container">
    <div class="row">
      <div class="col-md-4 card border-0 mt-2">
        <div class="container " style="background-color: rgba(194, 194, 204, 0.767);">
          <h3><b> easy to use</b></h3>
          <p>While making this website our main priority is to make it as user friendly as possibe.
          </p>
          <p>
            <a href="#" class="btn btn-primary btn-lg" role="button">Learn More</a>

          </p>
        </div>

      </div>
      <div class="col-md-4 card border-0 mt-2">
        <div class="container " style="background-color: rgba(194, 194, 204, 0.767);">
          <h3><b> online exam made easy</b></h3>
          <p>While making this website our main priority to reduce teachers work load.
          </p>
          <p>
            <a href="#" class="btn btn-primary btn-lg" role="button">Learn More</a>
          </p>
        </div>
      </div>
      <div class="col-md-4 card border-0 mt-2">
        <div class="container " style="background-color: rgba(194, 194, 204, 0.767);">
          <h3><b> Free to use </b></h3>
          <p>
          <p>The website is completely free to use.So signup and start creating your exam today.
          </p>
          <a href="#" class="btn btn-primary btn-lg" role="button">Learn More</a>

          </p>
        </div>

      </div>
    </div>
  </div>


  <!-- image work -->

  <div class="container mt-5">
    <div class="row border">
      <!-- ishika -->
      <div class="col-lg-4 col-md-6 col-sm-12 col-12  mt-3">
        <center><div class="container">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="ishika.png" alt="Card image cap" width="250" height="300">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div></center>
        
      </div>
<!-- manish -->
      <div class="col-lg-4 col-md-6 col-sm-12 col-12 mt-3">
        <center>
          <div class="container">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="manish.png" alt="Card image cap" width="250" height="300">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </center>
       
      </div>
<!-- ravi -->
      <div class="col-lg-4 col-md-6 col-sm-12 col-12 mt-3">
        <center>
          <div class="container">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="ravi.jpg" alt="Card image cap" width="250" height="300">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </center>
        
     
      </div>
<!-- sahil -->
      <div class="col-lg-6 col-md-4 col-sm-12 col-12 mt-3">
        <center>
          <div class="container">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="sahil.png" alt="Card image cap" width="250" height="300">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </center>
        
      </div>
<!-- shubham -->
      <div class="col-lg-6 col-md-4 col-sm-12 col-12 mt-3">
        <center>
          <div class="container">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="shubham.png" alt="Card image cap" width="250" height="300">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </center>
        
      </div>
  
    </div>


  </div>

  <!-- <div class="container">
    <div class="row">
      
      <div class="col-lg-6 col-md-4 col-sm-12 col-12">
        <center>
          <div class="container">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="manish.png" alt="Card image cap" width="250" height="300">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </center>
        
      </div>
    </div>
  </div> -->

  <!-- Sahil -->

  









</body>

</html>