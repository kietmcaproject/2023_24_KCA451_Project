<?php
    session_start();
    if(!isset($_SESSION['emailid'])){
        header('location:login.php');
    }
?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <!-- js file -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    
    <title>Hello, world!</title>
    <style>
        .navbar-lt {
            background-color: #073d70;
        }

        a {
            color: #edf3f3;
        }

        a:hover {
            color: rgb(225, 231, 235);
        }

        .form-group {
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="container">
        <!--Navbar-->
        <nav class="navbar navbar-expand-lg navbar-lt">

            <!-- Navbar brand -->
            <a class="navbar-brand rrr" href="#">User Side</a>

            <!-- Collapse button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapsible content -->
            <div class="collapse navbar-collapse" id="basicExampleNav">

                <!-- Links -->
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active rrr">
                        <a class="nav-link" href="#">Enroll Exam
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link rrr" href="studentprofile.php">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link rrr" href="logout.php">Logout</a>
                    </li>

        </nav>
    </div>
    <div class="col-lg-3 m-auto d-block">
    <form method="post" action="userside.php">
        <div class="form-group">
            <label for="sel1">Select Exam:</label>
            <select name="ss" class="form-control" onchange="this.form.submit()">
            <?php 
                include '123.php';
                $q="SELECT `examtitle`,'examcode' FROM `listofexams`,studentregisteration,registration WHERE studentregisteration.course=registration.course";
                $r=mysqli_query($con,$q);
                echo'<option>----</option>';
                while($retrieve=mysqli_fetch_array($r)){
                 ?>
                    <option  id="<?php echo $retrieve['examcode'];?>" ><?php echo $retrieve['examtitle'];?></option>
                    <?php
                }
            ?>
                
               
            </select>
            <?php
if(isset($_POST['ss'])){
include '123.php';
$output='';
  
     $abc=$_POST['ss'];
       
      $q = "SELECT * FROM `listofexams` WHERE examtitle = '$abc'";  
      $r=mysqli_query($con,$q);
      $output .= '  
      <div class="table-responsive">  
           <table class="table table-bordered">';  
      while($row = mysqli_fetch_array($r))  
      {  
           $output .= '  
                <tr>  
                     <th width="30%"><label>Examtitle</label></th>  
                     <td width="70%">'.$row["examtitle"].'
                     </td>  
                </tr>  
                <tr>  
                     <th width="30%"><label>ExamCode</label></th>  
                     <td width="70%">'.$row["examcode"].'</td>  
                </tr>  
                <tr>  
                     <th width="30%"><label>Date and Time</label></th>  
                     <td width="70%">'.$row["datentime"].'</td>  
                </tr>  
                <tr>  
                     <th width="30%"><label>Duration</label></th>  
                     <td width="70%">'.$row["duration"].'</td>  
                </tr>  
                <tr>  
                     <th width="30%"><label>Right answermarks</label></th>  
                     <td width="70%">'.$row["rightanswermarks"].'</td>  
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" class="view_data" id="'.$row["examcode"].'" name="submit1" value="Start"></td>
                </tr>';  
      }  
      $output .= "</table></div>";  
      echo $output;
    }
 ?>
            
        </div>
    </form>
    </div>

<script>  
 $(document).ready(function(){ 
      $('.view_data').click(function(){  
           var employee_id = $(this).attr("id");  
           $.ajax({  
                url:"goto.php",  
                method:"post",  
                data:{employee_id:employee_id},  
                success:function(data){  
                     location.href="questionpaper.html";  
                }  
           });  
      });  
 });  
 </script>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    
    
</body>
</html>