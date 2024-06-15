<?php
session_start();

include "..//db_conn.php";
if (!isset($_SESSION['temp_user'])) {
    header("Location: login.php");
    exit();
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_otp = $_POST['otp'];
    $stored_otp = $_SESSION['temp_user']['otp'];
    $username = $_SESSION['temp_user']['username'];

    $sql = "SELECT * FROM users WHERE username='$username' AND otp='$user_otp'";
    $query = mysqli_query($conn, $sql);
    $data = mysqli_fetch_array($query);

    if ($data) {
        $otp_expiry = strtotime($data['otp_expiry']);
        if ($otp_expiry >= time()) {
            
            $_SESSION['name']=$data['name'];
            $_SESSION['id']=$data['id'];
            $_SESSION['role']=$data['role'];
            $_SESSION['username']=$data['username'];
            unset($_SESSION['temp_user']);
            if($_SESSION['role']=='faculty')
                header("Location: ../Deshboardf.php");
            else if($_SESSION['role']=='hod')
                header("Location: ../DashboardA.php");
            else if($_SESSION['role']=='coordinator')
                header("Location: ../DashboardC.php");
            else
            header("Location: ../myproject.php");
            
            exit();
        } else {
            ?>
                <script>
    alert("OTP has expired. Please try again.");
    function navigateToPage() {
        window.location.href = 'login.php';
    }
    window.onload = function() {
        navigateToPage();
    }
</script>
            <?php 
        }
    } else {
        echo "<script> alert('Invalid OTP. Please try again.');</script>";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <style type="text/css">
    
       body{
        background-image: url('background.jpg'); 
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: white;
        backdrop-filter: blur(3px);
        }
        .border {
    border: var(--bs-border-widthj) var(--bs-border-style) white !important;}
   .colblk{
    color:white;
   }
    
        #container{
            border: 1px solid black;
            width: 400px;
            margin-left: 400px;
            margin-top: 150px;
            height: 330px;
        }
        form{
            margin-left: 50px;
        }
        p{
            margin-left: 50px;
        }
        h1{
            margin-left: 50px;
        }
        input[type=number]{
            width: 290px;
            padding: 10px;
            margin-top: 10px;

        }
        button{
            background-color: orange;
            border: 1px solid orange;
            width: 100px;
            padding: 9px;
            margin-left: 100px;
        }
        button:hover{
            cursor: pointer;
            opacity: .9;
        }
    </style>
</head>
<body>
    <div id="container">
        <h1>Two-Step Verification</h1>
        <p>Enter the 6 Digit OTP Code that has been sent <br> to your email address: <?php echo $_SESSION['email']; ?></p>
        <form method="post" action="otp_verification.php">
            <label style="font-weight: bold; font-size: 18px;" for="otp">Enter OTP Code:</label><br>
            <input type="number" name="otp" pattern="\d{6}" placeholder="Six-Digit OTP" required><br><br>
            <button type="submit">Verify OTP</button>
        </form>
    </div>
</body>
</html>

