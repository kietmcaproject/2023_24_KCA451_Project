
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="mystyle.css" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
      html,body{
        overflow: hidden;
      }
         body{
        background-image: url('background.jpg'); 
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: white;
        backdrop-filter: blur(3px);
        }
        .col{
          font-size: 20px;
        }
        .col2{
          font-size: 30px;
        }
    </style>
</head>
<body>
    

<div class="container d-flex justify-content-center 
    align-items-center"
    style="margin-top:200px;width:400px;">
<form action="" method="POST"> 
  
<div class="card" style="width: 600px;">

  <div class="card-body">
    <h5 class="card-title col2" style="text-align:center">Logout</h5>
    <p class="card-text col">Do you really want to logout? </p>
    <input class="btn btn-danger" type="submit" name="Logout" value="Logout" id="out"> 
    <input class="btn btn-primary" type="submit" name="cancel" value="Cancel" id="out"> 
    
  </div>
</div>
   
</form> 
</div>
<?php 
session_start();

if(isset($_POST['Logout']))
{
  session_unset();
  session_destroy(); 
  header("Location: index.php"); 
  exit; 
}if (isset($_POST['cancel'])) {
  if ($_SESSION['role'] == "faculty") {
      header("Location: Deshboardf.php");
  } else if ($_SESSION['role'] == "coordinator") {
      header("Location: DashboardC.php");
  } else if ($_SESSION['role'] == "hod") {
      header("Location: DashboardA.php");
  } else {
      header("Location: myproject.php");
  }
  exit();
}

?> 


</body>
</html>