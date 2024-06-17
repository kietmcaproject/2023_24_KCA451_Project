<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="register.css">
    
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <header>
        <div class="logo">
            <img src="logo2.png" alt="This is a logo" width="100px">
            <h1 id="auto">Automotive Services</h1>
        
            </div>
        <nav class="navbar">
            <a href="index.html">Home</a>&emsp;&emsp;&emsp;
            <a href="about.html">About</a>&emsp;&emsp;&emsp;
            <a href="indexService1.html">Services</a>&emsp;&emsp;&emsp;
            <a href="register.html">Sign Up</a>&emsp;&emsp;&emsp; 
            <a href="login.php">Login</a>
    
        </nav>   
    </header>
    <div class="wrapper">
        <form action="register.php" method="post" class="form">
            <div class="signup">
                <h1>Sign Up</h1>

            </div>
           
           
            <div class="input-box">
                <input type="text" placeholder="Name" name="Name">
               <i class='bx bxs-user'></i> 
            </div>
            <div class="input-box">
                <input type="text" placeholder="Username" name="Username" >
               <i class='bx bxs-user'></i> 
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" name="Password" >
               <i class='bx bxs-lock-alt'></i> 
            </div>
            <div class="input-box">
                <input type="text" placeholder="Email" name="Email">
                <i class='bx bxs-envelope'></i>
            </div>
            <div class="input-box">
                <input type="text" placeholder="Mobile no" name="Mobile" >
                <i class='bx bxs-phone' ></i>
            </div>
            <button type="submit" class="btn" name="submit">Create Account</button>

        </form>
    </div>
    
    
</body>
</html>

<?php
//echo'Connected successfuly';
//echo"<script>alert('Account created successfully.')</script>";
if(isset($_POST["submit"]))
{
    echo'Connected successfuly';
    
    $con = mysqli_connect('localhost', 'root', '', 'vehicle');
    
    $Name=$_POST["Name"];
    $Username=$_POST["Username"];
    $Password=$_POST["Password"];
    $Email=$_POST["Email"];
    $Mobile=$_POST["Mobile"];

   
    $sql="insert into register values('$Name','$Username','$Password',' $Email','$Mobile')";
    mysqli_query($con,$sql);

    echo"<script>alert('Account created successfully.')</script>";
    
}

?>