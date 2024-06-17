<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="login.css"> 
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
   </head>
<body>
    <header>
        <div class="logo">
            <img src="logo2.png" alt="This is a logo" width="100px">
            <h1 id="auto">Automotive Services</h1>
        
            </div>
        <nav class="navbar">
            <div class="navi">
            <a href="index.html">Home</a>&emsp;&emsp;&emsp;
            <a href="about.html">About</a>&emsp;&emsp;&emsp;
            <a href="indexService1.html">Services</a>&emsp;&emsp;&emsp;
            <a href="register.php">Sign Up</a>&emsp;&emsp;&emsp; 
            <a href="login.html">Login</a>

            </div>
               
        </nav>
       
    </header>
    <div class="wrapper">
        <form action="login.php" method="post" class="form">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" name="Username" required>
                <i class='bx bxs-user'></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" name="Password" required>
                <i class='bx bxs-lock-alt'></i>
            </div>
           <!--  <div class="remember-forget">
                <label><input type="checkbox">Remember Me</label>
                <a href="#">Forgot Password?</a>
            </div> -->
            <button type="submit" class="btn" name="submit">Login</button>
            <div class="register-link">
                <p>
                    Don't have an account? <a href="register.php">Register</a>
                </p>
            </div>
        </form>
    </div>
    
</body>
</html>

<?php
if(isset($_POST["submit"]))
{

$con = mysqli_connect('localhost' , 'root', '' , 'vehicle');

$Username=$_POST["Username"];
$Password=$_POST["Password"];

$sql="select Username,Password from register where Username='$Username' and Password='$Password'";
$data=mysqli_query($con,$sql);
//first method
if(mysqli_num_rows($data)>0)
echo"<script>alert('Logged in successfully')</script>";
else
echo"<script>alert('Invalid User')</script>";

//end of first method

/*Other Method
$found=false;
while($row=mysqli_fetch_assoc($data))
{
 $found=true;
}

if($found==true)
echo"<script>alert('Logged in successfully')</script>";
//end other method */
   
}
?> 
