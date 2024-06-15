<?php session_start();
if($_SESSION['username']==NULL){
  header("Location:index.php");
  exit();
}
?>
<html>
<head>	
<title>Project Link Hub</title>
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
</style>
</head>
<body >

<!--
    Code to insert vertical sidebar 
-->

  <input type="checkbox" id="menu-toggle" checked>
  <div class="menu dflex">
    <div id="logoCSS3" class="text-center">
      <i class="fa fa-css3"></i>
    </div>
    <div class="elements-container dflex">
      
    <a class="element" href="Deshboardf.php">
        <i class="fa fa-dashboard"></i> Dashboard
      </a>
    <a class="element" href="suggestions.php">
        <i class="fa fa-leaf"></i> Suggestions
      </a>
    <a class="element" href="AddProject.php">
        <i class="fa fa-pencil-square-o"></i> Add Projects
      </a>
      <a class="element" href="request.php">
        <i class="	fa fa-hourglass-start"></i> Pending Requests
      </a>
      <a class="element" href="logout.php">
          <i class="fa fa-sign-out"></i> Logout
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
                  <h1 class="text-center p-3 mb-5 colbl" style="background-color: #555; padding: 10px; border-radius: 5px; font-family: 'Arial', sans-serif; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Add a New Project Idea</h1>

      <div class="mb-3 m-4">
              <label for="ProjectTitle" 
                  class="form-label colblk"
                  ><b>Title</b> 
              </label>
              <input type="text" 
                  class="form-control" 
                  name="ProjectTitle"
                  id="ProjectTitle" placeholder="Enter Project Title"
                  style="color:white;background-color:rgb(34, 34, 31);">
      </div>
      <div class="mb-3 m-4" >
              <label for="ProjectDesc" 
                  class="form-label colblk"><b>Description</b></label> <br>
                  <textarea name="ProjectDesc" id="ProjectDesc" cols=60" rows="10" placeholder="Enter project description"
                  style="color:white;background-color:rgb(34, 34, 31);"></textarea>
      </div>
      <div class="mb-3 m-4">
              <label for="ProjectTech" 
                  class="form-label colblk"><b>Required Technology</b> </label>
              <input type="text" 
                  class="form-control" 
                  name="ProjectTech"
                  id="ProjectTech" placeholder="Enter project technologies eg: Java, Python, .Net etc" 
                  style="color:white;background-color:rgb(34, 34, 31);">
      </div>
      <div class="mb-3 m-4" >
              <label for="ProjectSDG" class="form-label colblk"><b>Select SDG</b></label> <br>
              <select  class="first" name="sdg" id="sdg" required>
                <option id="sdg" value="GOAL 1: No Poverty">GOAL 1: No Poverty </option>
              <option id="sdg" value="GOAL 2: Zero Hunger>" >GOAL 2: Zero Hunger </option>
                <option id="sdg" value="GOAL 3: Good Health and Well-Being" >GOAL 3: Good Health and Well-Being </option> 
                <option name="sdg" id="sdg" value="GOAL 4: Quality Education" >GOAL 4: Quality Education </option> 
                <option id="sdg" value="GOAL 5: Gender Equality" >GOAL 5: Gender Equality </option> 
                <option id="sdg" value="GOAL 6: Clean Water and Sanitation" >GOAL 6: Clean Water and Sanitation </option> 
                <option id="sdg" value="GOAL 7: Affordable and Clean Energy" >GOAL 7: Affordable and Clean Energy </option> 
                <option id="sdg" value="GOAL 8: Decent Work and Economic Growth" >GOAL 8: Decent Work and Economic Growth </option> 
                <option id="sdg" value="GOAL 9: Industry, Innovation and Infrastructure" >GOAL 9: Industry, Innovation and Infrastructure </option> 
                <option id="sdg" value="GOAL 10: Reduced Inequalities" >GOAL 10: Reduced Inequalities </option> 
                <option id="sdg" value="GOAL 11: Sustainable Cities and Communities" >GOAL 11: Sustainable Cities and Communities </option> 
                <option id="sdg" value="GOAL 12: Responsible Consumption and Production" >GOAL 12: Responsible Consumption and Production </option> 
                <option id="sdg" value="GOAL 13: Climate Action" >GOAL 13: Climate Action </option> 
                <option id="sdg" value="GOAL 14: Life Below Water" >GOAL 14: Life Below Water </option> 
                <option id="sdg" value="GOAL 15: Life On Land" >GOAL 15: Life On Land </option> 
                <option id="sdg" value="GOAL 16: Peace, Justice and Strong Institutions" >GOAL 16: Peace, Justice and Strong Institutions </option> 
                <option id="sdg" value="GOAL 17: Partnerships for the Goals" >GOAL 17: Partnerships for the Goals </option></div>
              </select>
      </div>


            <div class="row justify-content-center">
                <input style="width: 90%; border-radius: 20px;" class="btn btn-success m-4" name="ADD" type="submit" value="SUBMIT">
                <input style="width: 90%; border-radius: 20px;" class="btn btn-danger" type="RESET" value="RESET">
            </div>
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

  $username=$_SESSION['username'];
  $role=$_SESSION['role'];

  $query = "SELECT id FROM users WHERE username = '$username' AND role = '$role' ";
  $result = mysqli_query($conn, $query);


  if(isset($_POST['ADD']))
    {
    $ProjectTitle=$_POST['ProjectTitle'];	
    $ProjectDesc=$_POST['ProjectDesc'];
    $ProjectTech=$_POST['ProjectTech'];
    $SDG=$_POST['sdg'];
    $id=$_SESSION['id'];
    if (empty($ProjectTitle)) {
      echo '<script>alert("Title is required");</script>';
  } elseif (empty($ProjectDesc)) {
    echo '<script>alert("Project Description is required");</script>';
  } 
  elseif (ctype_space($ProjectTitle)) {
    echo '<script>alert("Title should not contain only white spaces");</script>';
  }elseif (empty($ProjectTech)) {
    echo '<script>alert("Project Techlonogy is required");</script>';
  } 
  elseif (ctype_space($ProjectTitle)) {
    echo '<script>alert("Project Techlonogy should not contain only white spaces");</script>';
  } 
   elseif (ctype_space($ProjectDesc)) {
    echo '<script>alert("Project Description should not contain only white spaces");</script>';
  } else {
    $ProjectTitle = mysqli_real_escape_string($conn, $ProjectTitle);
    $ProjectDesc = mysqli_real_escape_string($conn, $ProjectDesc);
    $ProjectTech = mysqli_real_escape_string($conn, $ProjectTech);
    $SDG = mysqli_real_escape_string($conn, $SDG);
      // Your existing code for database insertion goes here
      $sql = "INSERT INTO record (fid,ProjectTitle, ProjectDesc,ProjectTech,SDG) 
      VALUES('$id','$ProjectTitle', '$ProjectDesc','$ProjectTech','$SDG');";
      
      if(mysqli_query($conn,$sql)) {
          echo '<script>
          document.getElementById("popupMessage").innerHTML = "New project has been added successfully!";
          document.getElementById("myModal").style.display = "block";
          </script>';
      } else {
          echo '<script>
          document.getElementById("popupMessage").innerHTML = "Something went wrong!";
          document.getElementById("myModal").style.display = "block";
          </script>';
      }
  }
  }?>
  </div>
  </body>
</html>