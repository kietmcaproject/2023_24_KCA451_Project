<?php
session_start();
include "..//db_conn.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
error_log("Attempting to include Exception.php");

require __DIR__ . '/vendor/phpmailer/phpmailer/src/Exception.php';

error_log("Attempting to include PHPMailer.php");
require 'vendor/PHPMailer/PHPMailer/src/PHPMailer.php';
require 'vendor/PHPMailer/PHPMailer/src/SMTP.php';
    if(isset($_POST['username']) && isset($_POST['password'])){

        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
          }
          $username = test_input($_POST['username']);
          $password = test_input($_POST['password']);
         
          if((empty($username))){
            header("Location: ../login.php?error= User Name is Requires");    
          }
          
          else if((empty($password))){
            header("Location: ../login.php?error= Password is Requires");    
          }
        
          else{
            //Hashing the password
            //$password = md5($password);
            $sql = "Select * from users where username='$username' and password='$password'";
            $result = mysqli_query($conn,$sql);
            

            if(mysqli_num_rows($result)===1)
            {
                $row=mysqli_fetch_assoc($result);
                
                   
                    $email=$row['email'];
                    //OTP code
                    $_SESSION['email']=$email;
                    $otp = rand(100000, 999999);
                    $otp_expiry = date("Y-m-d H:i:s", strtotime("+3 minute"));
                    $subject= "Your OTP for Login";
                    $message="Your OTP is: $otp";
                    $mail = new PHPMailer(true);
                    $mail->isSMTP();
                    $mail->Host = 'smtp.gmail.com';
                    $mail->SMTPAuth = true;
                    $mail->Username = 'as2842558@gmail.com'; //host email 
                    $mail->Password = 'dupx oisg swmo yrgf'; // app password of your host email
                    $mail->Port = 465;
                    $mail->SMTPSecure = 'ssl';
                    $mail->isHTML(true);
                    $mail->setFrom('as2842558@gmail.com', 'Project Catalyst');//Sender's Email & Name
                    $name="Name";
                    $mail->addAddress($email,$name); //Receiver's Email and Name
                    $mail->Subject = ("$subject");
                    $mail->Body = $message;
                    $mail->send();

                    $sql1 = "UPDATE users SET otp='$otp', otp_expiry='$otp_expiry' WHERE username='".$row['username']."'";
                    $query1 = mysqli_query($conn, $sql1);
                    
                    $_SESSION['temp_user'] = ['username' => $row['username'], 'otp' => $otp];
                    header("Location: otp_verification.php");
                    exit();
                    //OTP code end


                  
            }
            else{
                header("Location: ../login.php?error= Incorrect username or password");    
                
            }
          }
          
    }
    else{
        header("Location: ../login.php");
    }
?>