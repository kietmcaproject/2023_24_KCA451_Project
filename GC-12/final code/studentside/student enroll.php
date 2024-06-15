<?php
    session_start();
    if(!isset($_SESSION['emailid'])){
        header('location:login.php');
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam Enrollment</title>
    <link rel="stylesheet" href="addexam1.css">
    <!-- css file -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <!-- js file -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script>
             window.history.forward();
            function preventBack(){
                window.history.forward();
            }
    </script>

</head>

<body>
<div class="col-lg-12 logo">
        ExamBaBa.com
    </div>
    <!--Navbar-->
    <div class="nev">
        <nav class="navbar navbar-expand-lg navbar-dark primary-color">

            <!-- Navbar brand -->
            <a class="navbar-brand rrr" href="#">User Side</a>

            <!-- Collapse button -->
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

            <!-- Collapsible content -->
            <div class="collapse navbar-collapse" id="basicExampleNav">

                <!-- enroll exam -->
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item  ">
                        <a class="nav-link " href="#">Enroll Exam 
    <span class="sr-only">(current)</span>
  </a>
                    </li>
                    <li class="nav-item  ">
                        <a class="nav-link " href="examhistory.php">History 
    <span class="sr-only">(current)</span>
  </a>
                    </li>
        </ul>
        <ul class="navbar-nav ">
                <!-- profile -->
                <li class="nav-item ">
                    <a class="nav-link " href="studentprofile.php"><i class="fa fa-user" aria-hidden="true"></i>Profile</a>
                </li>
                <!--logout  -->
                <li class="nav-item">
                    <a class="nav-link "href="logout.php"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
                </li>
                </ul>  
            </div>
        </nav>
    </div>
    
   
    
        <br>
        <div class="container">
        
         <div class="col-lg-3 m-auto d-block">
            <form method="post" action="">
            <div class="form-group">
                <label for="sel1">Select Course:</label>
                <select name="go" class="form-control" onchange="this.form.submit()">
                <?php 
                include '123.php';
                $q="SELECT `course` FROM `registration` GROUP BY course";
                $r=mysqli_query($con,$q);
                echo'<option>----</option>';
                while($retrieve=mysqli_fetch_array($r)){
                 ?>
                    <option  id="<?php echo $retrieve['course'];?>" ><?php echo $retrieve['course'];?></option>
                    <?php
                }
                ?>
                </select>
            </div>
          </div>
           
               
           
            <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-10">
                        <h2>List of Exams</h2>
                    </div>
                </div>
            </div>
            
            <div class="card-body p-1">
                <div class="table-responsive border-">
                    <div class="col-sm-12">
                        <table class="table table-bordered table-striped table-hover dataTable no-footer ">
                            <!-- exam title -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Exam Title</th>
                            <!--exam code-->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Exam Code</th>
                            <!-- date and time -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Date And Time</th>
                            <!--duration -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Duration</th>
                            <!-- status -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Course</th>
                            <!-- enroll -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Enroll</th>
                            
                            
                            <tbody>
                            <?php
                                if(isset($_POST['go'])){

                                    $cr=$_POST['go'];
                                    include '123.php';
                                    $q="SELECT `examtitle`, `examcode`, `datentime`, `duration`, `Course`  FROM `uploadexam` where Course='$cr'";
                                    $r=mysqli_query($con,$q);

                                    while($retrive=mysqli_fetch_array($r)){
                                        ?>
                                        <tr>
                                        
                                            <td><?php echo $retrive['examtitle'];?></td>
                                            <td><?php echo $retrive['examcode'];?></td>
                                            <td><?php echo $retrive['datentime'];?></td>
                                            <td><?php echo $retrive['duration'];?></td>
                                            <td><?php echo $retrive['Course'];?></td>
                                            
                                            <?php
                                            
                                            include '123.php';
                                            $ee=$_SESSION['emailid'];
                                            $xx=$retrive['examcode'];
                                            $ik="SELECT 'score' FROM `result` WHERE email='$ee' AND examcode='$xx'";
                                            $tr=mysqli_query($con,$ik);
                                            $ss=mysqli_fetch_array($tr);
                                                if($ss){
                                                    $ms="Submitted";
                                            }
                                            else{
                                                $ms='Start';
                                            }
                                            ?>
                                            <td><button class='btn1' id='12'><?php echo "<A  HREF ='questionsheet.php?ecode=$retrive[examcode]'>$ms</button>";?></td>
                                        </tr>
                                        <?php
                                        }
                                }
                            ?>      
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    <!--<div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <h3>Exam Details</h3>
                </div>
            </div>

            <div class="card-body">
                <table class="table table-bordered table-hover table-striped">
                    <tr>
                        <th>Exam Title</th>
                        <td id="et"></td>
                    </tr>
                    <tr>
                        <th>Exam Date & Time</th>
                        <td id="dt">date</td>
                    </tr>
                    <tr>
                        <th>Exam Duration</th>
                        <td id="ed">duration</td>
                    </tr>

                    <tr>
                        <th>Marks Per Right Answer</th>
                        <td class="ra">right marks</td>
                    </tr>

                </table>
                <center><button class="btn btn-success">Start</button></center>
            </div>-->
        </div>
    </div>
</body>
<script>
    $(document).ready(function(){ 
      $('.view_data').click(function(){  
           var employee_id = $(this).attr("id");  
           
           $.ajax({  
                url:"abc.php",  
                method:"post",  
                data:{employee_id:employee_id},
                datatype:"json",  
                success:function(data){
                    
                }  
           });  
      });  
 });  
</script>


</html>