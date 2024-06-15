<?php
    session_start();
    if(!isset($_SESSION['username'])){
        header('location:Adminlogin.php');
    }
?>
<?php
if($_SERVER['REQUEST_METHOD']=="POST"){
    include '123.php';
    $mail=$_SESSION['username'];
    $examtitle=$_POST['examtitle'];
    $datentime=$_POST['online_exam_datetime'];
    $duration=$_POST['duration'];
    $rightanswermarks=$_POST['marks'];
    $query="INSERT INTO `listofexams`(`email`, `examtitle`, `datentime`, `duration`, `rightanswermarks`, `status`) VALUES('$mail','$examtitle','$datentime','$duration','$rightanswermarks','pending')";
    $result=mysqli_query($con,$query);
    
    header('location:exam.php');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exam creation</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <script src="newexam.js"></script>



    <link rel="stylesheet" href="jsandcss/jquery.datetimepicker.css" />
    <script src="jsandcss/jquery.js"></script>
    <script src="jsandcss/jquery.datetimepicker.js"></script>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>


    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/guillaumepotier/Parsley.js@2.9.1/dist/parsley.js"></script>

    <link rel="stylesheet" href="bootstrap-datetimepicker.css" />
    <script src="bootstrap-datetimepicker.js"></script>
    <style>
        #link{color: white};
    </style>
</head>
<?php include 'base.php';?>
<body>

    <div class="container">
        <h3>Admin Side</h3>
        <ul class="nav grey lighten-4 py-4">
            <li class="nav-item">
                <a class="nav-link" href="#!">Exam</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#!">logout</a>
            </li>
        </ul>
    </div>


    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-9">
                        <h2>List of Exams</h2>
                    </div>
                    <!-- add exam button -->
                    <div class="col-3">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalLoginForm">Add Exam</button>
                    </div>
                </div>
            </div>
            <div class="card-body p-1">
                <div class="table-responsive border-">
                    <div class="col-sm-12">
                        <table class="table table-bordered table-striped table-hover dataTable no-footer ">
                            <!-- exam title -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Exam Title</th>
                            <!-- date and time -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Date And Time</th>
                            <!-- duration -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Duration</th>
                            <!-- right answer marks -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Right Answer Marks</th>
                            <!-- status -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Status</th>
                            <!--action-->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Action</th>
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending"></th>
                            <tbody>
                                <?php
                                include '123.php';
                                $mail=$_SESSION['username'];
                                $q="SELECT `email`, `examtitle`, `datentime`, `duration`, `rightanswermarks`, `status` FROM `listofexams` WHERE email='$mail'";
                                $r=mysqli_query($con,$q);
                                $retrive=mysqli_fetch_array($r);
                                echo $retrive['examtitle'];

                                    while($retrive=mysqli_fetch_array($r)){
                                        ?>
                                        <tr>
                                            <td><?php echo $retrive['examtitle'];?></td>
                                            <td><?php echo $retrive['datentime'];?></td>
                                            <td><?php echo $retrive['duration'];?></td>
                                            <td><?php echo $retrive['rightanswermarks'];?></td>
                                            <td><?php echo $retrive['status'];?></td>
                                            <td><?php echo '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalLoginForm">Edit</button>';?>
                                            <td><button  class="btn btn-info" ><A id="link"HREF ='addq.html'>Add Questions</A></button>&nbsp;<strong>/</strong>&nbsp;<button class="btn btn-info"><A id="link"HREF ='addq.html'>Edit Questions</button> </td>
                                       
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

    <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <form method="post" id="exam_form">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Create Exam</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mx-3">
                    <div class="md-form mb-3">
                        <!-- exam title -->
                        <i class="fas fa-envelope prefix grey-text"></i>
                        <label data-error="wrong" data-success="right" for="examtitle">Exam Title</label>
                        <input type="text" id="examtitle" name="examtitle" class="form-control validate m-0">

                    </div>

                    <!-- exam date -->
                    <input type="text" name="online_exam_datetime" id="online_exam_datetime" class="form-control" readonly>

                    <!-- exam duration -->
                    <div class="row mt-3">
                        <div class="col-7">
                            <div class="md-form mb-3">
                                <i class="fas fa-envelope prefix grey-text"></i>
                                <label data-error="wrong" data-success="right" for="duration">Select Duration</label>

                                <br>
                                <select id="department" name="duration" class="form-control mb-4 mt-2">
                                    <label for=""></label>
                                    <option">Select Duration</option>
                                    <option>15 min</option>
                                    <option>1 Hour</option>
                                    <option>2 Hour</option>
                                    <option>3 Hour</option>
                                </select>

                            </div>
                        </div>
                        <!-- number of questions -->

                    </div>
                    <!-- right answer marks -->
                    <div class="">
                        <label data-error="wrong" data-success="right" for="marks">Enter marks for right answer</label>
                        <input type="text" id="marks" name="marks" class="form-control validate m-0">
                    </div>

                    <!-- Submit button -->
                    <div class="modal-footer d-flex justify-content-center">
                        <button class="btn btn-danger" type="submit">Set</button>
                        <button class="btn btn-primary" id="closebtn" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </form>
</body>
<script>
    var date = new Date();

    date.setDate(date.getDate());

    $('#online_exam_datetime').datetimepicker({
        startDate: date,
        format: 'yyyy-mm-dd hh:ii',
        autoclose: true
    });
</script>
</html>