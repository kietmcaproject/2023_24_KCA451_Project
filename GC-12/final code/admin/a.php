<?php
$login = false;
$showError = false;

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    include 'partial/_dbconnect.php';
  
    $username = $_POST["username"];
   
    $password = $_POST["password"];

    //$sql = "SELECT * FROM `users`.`users1` WHERE username = '$username' AND password = '$password'";
    $sql = "SELECT * FROM `users`.`users1` WHERE username = '$username'";
    $result = mysqli_query($conn,$sql);
    
    $num = mysqli_num_rows($result);
    if($num == 1){
        while($rows = mysqli_fetch_assoc($result)){
            if(password_verify($password,$rows['password'])){
                 $login = true;
            
                session_start();
                $_SESSION['loggedin'] = true;

                $_SESSION['username'] = $username;
                header("location: welcome.php");  
            }
            else{
                $showError = "Invalid Credentials";
            }
        }
    }
      else{
           $showError = "Invalid Credentials";
      }
}
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>login</title>
  </head>
  <body>
    <?php require 'partial/_nav.php'?>
    <?php
    if ($login)
    {
        
      echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>SUCCESS!!!</strong> You are logged in.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
        </div>';
    }
      if ($showError)
    {
        
      echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>OOPS!!!</strong> '.$showError.'
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
        </div>';
    }
    ?>
    <div class="container mt-6">
      <h2>Enter the values to enter the website</h2>
      <br>
      <form action="/loginsystem/login.php" method = "post">
        <div class="form-group  col-md-6">
        <label for="username">Email address</label>
        <input type="text" class="form-control" id="username" name = "username" aria-describedby="emailHelp" placeholder="Enter username">
        
        </div>
        <div class="form-group  col-md-6">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" name = "password" placeholder="Password">
        </div>
       
        
        <br>
          <div class="form-group  col-md-6">
        <button type="submit" class="btn btn-primary">Log in</button>
          </div>
    </form>
  </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>