<?php
$login=false; 
    
    include '123.php';
    if($_SERVER['REQUEST_METHOD']=="POST"){
    $email=$_POST['email'];
    $pass=$_POST['pasd'];
    $q="SELECT `email`, `password` FROM `studentregisteration` WHERE email='$email'";
    $result = mysqli_query($con,$q);
    $num= mysqli_num_rows($result);
    if($num ==1){

        while($rows = mysqli_fetch_array($result)){
            echo $rows['password'];
            //var_dump($rows);
            if(password_verify($pass,$rows['password'])){
                 $login = true;
            
                session_start();
                $_SESSION['loggedin'] = true;

                $_SESSION['emailid'] = $email;
                header("location: student enroll.php");  
            }
            else{
                $showError = "Invalid Credentials";
                echo $showError;

            }
        }
        /*while($rows=mysqli_fetch_assoc($result)){
            echo "fff";
            if(password_verify('$pass',$rows['password'])){
                echo "abc";
                $go=true;
                session_start();
                $_SESSION['emailid']=$email;
                header('location:student enroll.php');
        
            }
            
        }*/
        
            
        
    }
}
?>
<!doctype html>
<html>
    <head>
        <title>Student login</title>
        <link rel="stylesheet" href="studentlogin.css">
        <body>
            <div class="login">
            <form id="login_form" action="login.php" method="post">
                <h1>
                    Login
                </h1>
                <div class="textbox">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <input type="email" placeholder="Email" name="email" required>
                </div>
                <div class="textbox">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    <input type="password" placeholder="password" name="pasd" required="">
                </div>
                <button  class="btn" type="submit" name="sign in" value="">Sign in</button>
                <p>Not a member- <a href="studentsign up.php">Sign up</a></p>
            </form>
            </div>
        
        </body>

    </head>
</html>