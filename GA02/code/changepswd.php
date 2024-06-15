<?php session_start(); ?>
<html>
<head>	
<title>Project Link Hub</title>
<link rel="stylesheet" href="mystyle.css" type="text/css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
    
   .border {
    border: var(--bs-border-widthj) var(--bs-border-style) #0e4379!important;
}
.colblk
{
  color:white;
  font-size:20px;
}
.colbl{
  color:white;
}    
#ProjectDesc::placeholder,#ProjectTitle::placeholder,#ProjectTech::placeholder{
      color:white;
    }
</style>
</head>
<body>

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
        <form id="reportform" action="" method="POST" class="border shadow p-3 rounded">
        <h1 class="text-center p-3 mb-5 colbl" style="background-color: #555; padding: 10px; border-radius: 5px; font-family: 'Arial', sans-serif; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Chance password</h1>
              
<div class="mb-3 m-4">
        <label for="ProjectTitle" 
            class="form-label colblk"
            ><b>New Password</b> 
        </label>
        <input type="password" 
            class="form-control" 
            name="newPassword"
            id="newPassword" placeholder="Enter Password"
            style="color:white;background-color:rgb(34, 34, 31);">
</div>
<div class="mb-3 m-4">
        <label for="confirmPassword" 
            class="form-label colblk"
            ><b>Confirm Password</b> 
        </label>
        <input type="password" 
            class="form-control" 
            name="confirmPassword"
            id="confirmPassword" placeholder="Enter Password Again"
            style="color:white;background-color:rgb(34, 34, 31);">
</div>

<input class="btn btn-success m-4" name="ADD" type="submit" value="SUBMIT" >
<input class="btn btn-primary" type="submit" name="cancel" value="Cancel" id="out"> 
</form>
  </div>
<?php
$sname="localhost";
$uname="root";
$password="";
$db_name="my_db";
$conn=mysqli_connect($sname,$uname,$password,$db_name);
if(!$conn){
    echo "Connection failed";
    exit();
}


if (isset($_POST['ADD'])) {
  $password = $_POST['newPassword'];
  $password1 = $_POST['confirmPassword'];
  if(ctype_space($password))
  {
    echo '<script>
    document.getElementById("popupMessage").innerHTML = "Password Invalid";
    document.getElementById("myModal").style.display = "block";
    </script>';
      exit();
  }

  if ($password != $password1) {
    echo '<script>
    document.getElementById("popupMessage").innerHTML = "Password Mismatch";
    document.getElementById("myModal").style.display = "block";
    </script>';
      exit();
  } else {
      $id = $_SESSION['id'];
      // Fix the typo in variable name and enclose the password value in single quotes
      $sql = "UPDATE `users` SET `password`='$password' WHERE `id`='$id'";
      
      if (mysqli_query($conn, $sql)) {
          echo '<script>
          document.getElementById("popupMessage").innerHTML = "Your password has been changed";
          document.getElementById("myModal").style.display = "block";
          </script>';
          session_unset();
          session_destroy(); 
          header("Location: index.php"); 
          exit; 
      } else {
          echo "Something went wrong! Please try after some time";
          echo mysqli_error($conn);
      }
  }
}
if (isset($_POST['cancel'])) {
  if ($_SESSION['role'] == "faculty") {
      header("Location: Deshboardf.php");
  } else if ($_SESSION['role'] == "coordinator") {
      header("Location: DashboardC.php");
  } else if ($_SESSION['role'] == "hod") {
      header("Location: DashboardA.php");
  } else {
      header("Location: myproject.php");
  }
  exit(); // Always use exit() after header() to stop script execution
}

?>


</div>
</body>
</html>
