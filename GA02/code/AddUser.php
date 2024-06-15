<?php
session_start();
include_once("db_conn.php");
if($_SESSION['username']==NULL){
    header("Location:index.php");
    exit();
}
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
error_log("Attempting to include Exception.php");
require 'C:\xampp\htdocs\GA02new\php\vendor\phpmailer\phpmailer\src\Exception.php';
error_log("Attempting to include PHPMailer.php");
require 'C:\xampp\htdocs\GA02new\php\vendor\PHPMailer\PHPMailer\src\PHPMailer.php';
require 'C:\xampp\htdocs\GA02new\php\vendor\phpmailer\phpmailer\src\SMTP.php';
$username = $_SESSION['username'];
$role = $_SESSION['role'];

if (isset($_POST['ADD'])) {
    $UserName = $_POST['UserName'];
    $StudentName = $_POST['StudentName'];
    $mailId = $_POST['mailId'];
    $course = $_POST['course'];
    $sec = $_POST['sec'];
    $phone = $_POST['phone'];
    $sem = $_POST['sem'];
    $role = $_POST['role'];
    
    // Generate a random password
    $password = bin2hex(random_bytes(8)); // Generates an 8-character random hex string
    $sql_check = "SELECT * FROM users WHERE id = ? OR username = ?";
    $stmt = $conn->prepare($sql_check);
    $stmt->bind_param("ss", $course, $UserName);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        echo '<script>alert("Error: A user with the same ID or username already exists");</script>';
    }
    else{
    $sql_user = "INSERT INTO users (id,role,username,password,name,email) VALUES ('$course','$role', '$UserName', '$password','$StudentName','$mailId')";
    try {
        if(mysqli_query($conn, $sql_user)){
            $message = "
            <html>
            <head>
                <title>Welcome to Our Service</title>
            </head>
            <body>
                <p>Dear {$UserName},</p>
                <p>Welcome to our service! Your account has been successfully created.</p>
                <p><strong>Your login credentials are as follows:</strong></p>
                <ul>
                    <li><strong>Username:</strong> {$UserName}</li>
                    <li><strong>Password:</strong> {$password}</li>
                </ul>
                <p>For your security, please log in and change your password as soon as possible.</p>
                <p>Thank you for choosing our service. If you have any questions, feel free to contact our support team.</p>
                <p>Sincerely,<br>The Support Team</p>
            </body>
            </html>
        ";
        
            $email=$mailId;
            $subject= 'Registration completed successfully';
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'as2842558@gmail.com'; 
            $mail->Password = 'dupx oisg swmo yrgf'; 
            $mail->Port = 465;
            $mail->SMTPSecure = 'ssl';
            $mail->isHTML(true);
            $mail->setFrom('as2842558@gmail.com', 'Project Catalyst');//Sender's Email & Name
            $name="Name";
            $mail->addAddress($email,$name); 
            $mail->Subject = ("$subject");
            $mail->Body = $message;
            $mail->send();

            echo '<script>alert("New User Added Successfully");</script>';
        } else {
            throw new Exception("Error: " . mysqli_error($conn));
        }
    } catch (Exception $e) {
        echo '<script>alert("Error: ' . $e->getMessage() . '");</script>';
    }

    // If the role is a student, insert into students table as well
    if ($role == 'student') {
        $sql_student = "INSERT INTO student (id,UserName, StudentName, mailId, sec, phone, sem) 
                        VALUES ('$course','$UserName', '$StudentName', '$mailId', '$sec', '$phone', '$sem')";
        mysqli_query($conn, $sql_student);
    }
}
}
?>

<html>
<head>
    <title>Admin</title>
    
<link rel="stylesheet" href="mystyle.css" type="text/css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>  
  .border {
    border: var(--bs-border-widthj) var(--bs-border-style) white !important;}
    #ProjectDesc::placeholder,#ProjectTitle::placeholder,#ProjectTech::placeholder{
      color:white;
    }
    .colblk{
      color:white;
      font-size: 20px;
    }
    .colbl{
      color:white;

    }
     ::placeholder {
        color: rgba(255, 255, 255, 0.5) !important; /* Light white color for the placeholder text */
    }
</style>
</head>
<body>
    <!-- Your sidebar and other HTML content here -->
    <!--
    Code to insert vertical sidebar 
-->

<input type="checkbox" id="menu-toggle" checked>
<div class="menu dflex">
  <div id="logoCSS3" class="text-center">
    <i class="fa fa-css3"></i>
  </div>
  <div class="elements-container dflex">
            <a class="element" href="DashboardA.php">
                <i class="fa fa-dashboard"></i> Student Record
            </a>
            <a class="element" href="AddUser.php">
                <i class="fa fa-user-plus"></i> Add a New User
            </a>
            <a class="element" href="RemoveUser.php">
                <i class="fa fa-user-times"></i> Remove a User
            </a>
            <a class="element" href="AdminReport.php">
                <i class="fa fa-leaf"></i> Generate Report
            </a>
            <a class="element" href="send_notificationadmin.php">
                <i class="fa fa-bell"></i> Send Notification
            </a>
            <a class="element" href="set_time.php">
                <i class="fa fa-calendar"></i> Set Document Timer
            </a>
           
        </div>
  <div class="menu-container-btn">
    <div class="menu-toggle-btn">
      <label class="menu-btn text-center" for="menu-toggle">
          <i class="fa fa-close"></i>
          <i class="fa fa-bars"></i>
        </label>
    </div>
  </div>
</div>
<div id="myModal" class="modal1">
  <div class="modal-content">
    <span class="close" id="closeModal">&times;</span>
    <p id="popupMessage">Sorry! The Project is Unavailable</p>
  </div>
</div>
<script>
    // Function to close the modal
    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }
    document.getElementById("closeModal").addEventListener("click", closeModal);
  window.addEventListener("click", function(event) {
        if (event.target == document.getElementById("myModal")) {
            closeModal();
        }
    });
</script>
<div class="container d-flex justify-content-center align-items-center" style="min-height:100vh; color:white;">
    <div style="box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.5); background-color: #333; padding: 20px; border-radius: 10px;">
        <form action="" method="POST" class="border shadow p-3 rounded">
            <h1 class="text-center p-3 mb-5 colbl" style="background-color: #555; padding: 10px; border-radius: 5px; font-family: 'Arial', sans-serif; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Add a New User</h1>

            <div class="row mb-3">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="UserName" class="form-label colblk"><b>Username</b></label>
                        <input type="text" class="form-control" name="UserName" id="UserName" placeholder="Enter Username" style="color:white;background-color:rgb(34, 34, 31);">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="StudentName" class="form-label colblk"><b>Full Name</b></label>
                        <input type="text" class="form-control" name="StudentName" id="StudentName" placeholder="Enter Student Name" style="color:white;background-color:rgb(34, 34, 31);">
                    </div>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="course" class="form-label colblk"><b>Unique Id</b></label>
                        <input type="text" class="form-control" name="course" id="course" placeholder="Enter Course" style="color:white;background-color:rgb(34, 34, 31);">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="mailId" class="form-label colblk"><b>Email</b></label>
                        <input type="email" class="form-control" name="mailId" id="mailId" placeholder="Enter Email" style="color:white;background-color:rgb(34, 34, 31);">
                    </div>
                </div>
                
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="sec" class="form-label colblk"><b>Section</b></label>
                        <input type="text" class="form-control" name="sec" id="sec" placeholder="Enter Section" style="color:white;background-color:rgb(34, 34, 31);">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="phone" class="form-label colblk"><b>Phone</b></label>
                        <input type="text" class="form-control" name="phone" id="phone" placeholder="Enter Phone Number" style="color:white;background-color:rgb(34, 34, 31);">
                    </div>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="sem" class="form-label colblk"><b>Semester</b></label>
                        <input type="text" class="form-control" name="sem" id="sem" placeholder="Enter Semester" style="color:white;background-color:rgb(34, 34, 31);">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="role" class="form-label colblk"><b>Role</b></label>
                        <select class="form-control" name="role" id="role">
                            <option value="admin">Faculty</option>
                            <option value="student">Student</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <input style="width: 90%; border-radius: 20px;" class="btn btn-success m-4" name="ADD" type="submit" value="SUBMIT">
                <input style="width: 90%; border-radius: 20px;" class="btn btn-danger" type="RESET" value="RESET">
            </div>
        </form>
    </div>
</div>


</body>
</html>
