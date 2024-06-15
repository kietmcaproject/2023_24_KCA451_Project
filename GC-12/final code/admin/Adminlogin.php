<?php 
    include '123.php';
if($_SERVER['REQUEST_METHOD']=="POST"){
    $email=$_POST['email'];
    $pass=$_POST['password'];
    $q="select * from registration where email='$email'";
    $result = mysqli_query($con,$q);
    $num= mysqli_num_rows($result);
    if($num ==1){
       
        while($rows = mysqli_fetch_array($result)){
            echo $rows['password'];
            //var_dump($rows);
            if(password_verify($pass,$rows['password'])){
                 $login = true;
            
                session_start();
                $_SESSION['username']=$email;
                header('location:exam.php'); 
            }
            else{
                echo'invalid';
            }
        
    }
    
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Admin Login </title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="adminlogin.css">

</head>

<body>
    <!-- <img class="image" alt="" src="https://images2.alphacoders.com/261/26102.jpg"> -->
    <div class="image "></div>


    <div class="container " style="padding: 250px; z-index: 2;">
        <!-- Default form login -->
        <form class="text-center  p-5" action="#!" method="POST">

            <p class="h4 mb-4"> Admin Sign in</p>

            <!-- Email -->
            <input type="email" id="defaultLoginFormEmail" class="form-control mb-4 " name="email" placeholder="E-mail">

            <!-- Password -->
            <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" name="password" placeholder="Password">

            <!-- Sign in button -->
            <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

            <!-- Register -->
            <p class="member">Not a member?
                <a href="Admin registration.php">Register</a>
            </p>
        </form>
    </div>
   

</body>

</html>