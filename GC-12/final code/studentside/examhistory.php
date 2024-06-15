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
    <title>Exam History</title>
    <!-- css file -->

    <link rel="stylesheet" href="addexam1.css">

    <link rel="stylesheet" href="addquestions.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <!-- js files -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>


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
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapsible content -->
            <div class="collapse navbar-collapse" id="basicExampleNav">

                <!-- enroll exam -->
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active ">
                        <a class="nav-link " href="student enroll.php">Enroll Exam
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item  ">
                        <a class="nav-link " href="examhistory.php">Exam History 
    <span class="sr-only">(current)</span>
  </a>
                    </li>
</ul>
<ul class="navbar-nav ">
            <li class="nav-item ab">
                        <a class="nav-link " href="wp.php"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link " href="logout.php"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
                    </li>
            </ul>    
            </div>
        </nav>
    </div>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-10">
                        <h2>Exam History</h2>
                    </div>

                </div>
            </div>
        </div>
        <div class="card-body p-1 ">
            <div class="table-responsive border">
                <div class="col-sm-12">
                    <table class="table table-bordered table-striped table-hover dataTable no-footer ">
                        <!-- Name -->
                        
                        <!--Exam Title-->
                        <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1"
                            aria-label="Exam Title: activate to sort column ascending">Exam Title</th>
                        <!--Exam code -->
                        <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1"
                            aria-label="Exam Title: activate to sort column ascending">Exam code</th>
                        <!--Score-->
                        <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1"
                            aria-label="Exam Title: activate to sort column ascending">Score</th>
                    
                    <tbody>
                    <?php
                               

                                    $mail=$_SESSION['emailid'];
                                    include '123.php';
                                    $q="SELECT `name`, `examcode`, `examtitle`, `score` FROM `result` WHERE Email='$mail'";
                                    $r=mysqli_query($con,$q);

                                    while($retrive=mysqli_fetch_array($r)){
                                        ?>
                                        <tr>
                                        
                                            <td><?php echo $retrive['examtitle'];?></td>
                                            <td><?php echo $retrive['examcode'];?></td>
                                            <td><?php echo $retrive['score'];?></td>
                                            
                                       
                                        </tr>
                                        <?php
                                        }
                                
                            ?>   
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
</body>

</html>