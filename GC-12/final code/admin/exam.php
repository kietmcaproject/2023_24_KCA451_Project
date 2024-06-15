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
    $examcode=$_POST['examcode'];
    $course=$_POST['examcourse'];
    $query="INSERT INTO `listofexams`(`email`, `examtitle`, `examcode`, `datentime`, `duration`,`status`,`Course`) VALUES ('$mail','$examtitle','$examcode','$datentime','$duration','pending','$course')";
    /*INSERT INTO `listofexams`(`email`, `examtitle`,'examcode', `datentime`, `duration`, `rightanswermarks`, `status`) VALUES('$mail','$examtitle','$examcode','$datentime','$duration','$rightanswermarks','pending')";*/
    $result=mysqli_query($con,$query);
    
    header('location:exam.php');
    
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Exam</title>
    <!-- css file -->

    <link rel="stylesheet" href="addexam1.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <!-- js file -->
    <!--<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/guillaumepotier/Parsley.js@2.9.1/dist/parsley.js"></script>

    <link rel="stylesheet" href="bootstrap-datetimepicker.css" />
    <script src="bootstrap-datetimepicker.js"></script>


</head>

<body>
<?php include 'base.php'?>
    <div class="col-lg-12 logo">
        ExamBaBa.com
    </div>
    <!--Navbar-->
    <?php
    include 'nevbar.php';
    ?>
    <br>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-10">
                        <h2>List of Exams</h2>
                    </div>
                    <div class="col-2">
                        <button class="btn1"><A id="link" HREF='Add Questions.php'>Create Question Paper</A></button>
                    </div>
                </div>
            </div>
            <div class="card-body p-1">
                <div class="table-responsive border-">
                    <div class="col-sm-12">
                        <table class="table table-bordered table-striped table-hover dataTable no-footer ">
                            <!-- exam title -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1"
                                aria-label="Exam Title: activate to sort column ascending">Exam Title</th>
                            <!--exam code-->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1"
                                aria-label="Exam Title: activate to sort column ascending">Exam Code</th>
                            <!-- date and time -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1"
                                aria-label="Exam Title: activate to sort column ascending">Date And Time</th>
                            <!-- duration -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1"
                                aria-label="Exam Title: activate to sort column ascending">Duration</th>
                            
                            <!-- enroll -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="2"
                                aria-label="Exam Title: activate to sort column ascending">Action</th>

                            <form method="post">
                                <tbody>
                                
                                    <?php
                                    $msg="";
                                include '123.php';
                                $mail=$_SESSION['username'];
                                $q="SELECT `examtitle`, `examcode`, `datentime`, `duration` FROM `listofexams` WHERE email='$mail'";
                                $r=mysqli_query($con,$q);
                                
                                    while($retrive=mysqli_fetch_array($r)){
                                        ?>
                                    <tr>
                                        <td><?php echo $retrive['examtitle'];?></td>
                                        <td><?php echo $retrive['examcode'];?></td>
                                        <td><?php echo $retrive['datentime'];?></td>
                                        <td><?php echo $retrive['duration'];?></td>
                                        <input type="hidden" name="code" value="<?php echo $retrive['examcode'];?>">
                                        <td><button type="button" value="Upload" class="btn2 edit_data"  data-toggle="tooltip" data-placement="top" title="<?php
                                
                                
                                            
                                            $xx=$retrive['examcode'];
                                            $ch="SELECT * FROM `questions` WHERE examcode='$xx'";
                                            $z=mysqli_query($con,$ch);
                                            $zz=mysqli_fetch_array($z);
                                            $up="SELECT * FROM `uploadexam` WHERE examcode='$xx'";
                                            $upd=mysqli_query($con,$up);
                                            $check=mysqli_fetch_array($upd);
                                            if($check){
                                                $msg="Uploaded";
                                            }
                                            elseif($zz){
                                                $msg="Ready";
                                            }
                                            else{
                                                $msg="Question Paper Not Created";
                                            }
                                            echo $msg;?>"
                                                id="<?php echo $retrive['examcode'];?>">Upload <i class="fa fa-upload"
                                                aria-hidden="true"></i></button>
                                        </td>
                                        <td><input type="button" value="Remove" class="btn3 remove_data"
                                        data-toggle="tooltip" data-placement="top" title="<?php 
                                        if($check){
                                            $msg="";
                                        }
                                        else{
                                            $msg="Exam not Uploaded";
                                        }
                                        echo $msg;
                                        ?>"
                                                id="<?php echo $retrive['examcode'];?>"><i class="fa fa-times"
                                                aria-hidden="true"></i>
                                        </td>
                                    </tr>
                                    <?php
                                    }
                                 ?>
                                </tbody>
                            </form>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <form method="POST">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h4 class="modal-title w-100 font-weight-bold">Create Exam</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body mx-3">
                        <div class="md-form mb-3">
                            <label data-error="wrong" data-success="right" for="examcourse">Enter Course Name</label>
                            <input type="text" id="examcourse" name="examcourse" class="form-control validate m-0">
                        </div>
                        <div class="md-form mb-3">
                            <!-- exam title -->
                            <i class="fas fa-envelope prefix grey-text"></i>
                            <label data-error="wrong" data-success="right" for="examtitle">Exam Title</label>
                            <input type="text" id="examtitle" name="examtitle" class="form-control validate m-0">

                        </div>
                        <div>
                            <label data-error="wrong" data-success="right" for="examtcode">Exam Code</label>
                            <input type="text" id="examcode" name="examcode" class="form-control validate m-0">
                        </div>

                        <!-- exam date -->
                        <label for="">Exam Date & Time</label>
                        <input type="text" name="online_exam_datetime" id="online_exam_datetime" class="form-control"
                            readonly>

                        <!-- exam duration -->
                        <div class="row mt-3">
                            <div class="col-7">
                                <div class="md-form mb-3">
                                    <i class="fas fa-envelope prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="duration">Select
                                        Duration</label>

                                    <br>
                                    <select id="duration" name="duration" class="form-control mb-4 mt-2">
                                        <label for=""></label>
                                        <option>15 min</option>
                                        <option>30 min</option>
                                        <option>1 Hour</option>
                                    </select>

                                </div>
                            </div>
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
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
</script>
<script>
    var date = new Date();

    date.setDate(date.getDate());

    $('#online_exam_datetime').datetimepicker({
        startDate: date,
        format: 'yyyy-mm-dd hh:ii',
        autoclose: true
    });

    function myFunction() {
        alert("This can delete ");
    }
</script>
<!--<script>
    edits = document.getElementsByClassName('edit');
          Array.from(edits).forEach((element) =>{
              element.addEventListener("click",(e) =>{
                  console.log("edit",);
                  tr = e.target.parentNode.parentNode;
                  examcodeEdit.value = e.target.id;
                  console.log(e.target.id);

-->
<script>
    $(document).on('click', '.edit_data', function () {
        var emp_id = $(this).attr("id");
        $.ajax({
            url: "upload.php",
            method: "POST",
            data: { emp_id: emp_id },
            //dataType:"json", 
            success: function (data) {

                location.reload();

            }
        });
    });
</script>
<script>
    $(document).on('click', '.remove_data', function () {
        var emp_id = $(this).attr("id");
        $.ajax({
            url: "remove.php",
            method: "POST",
            data: { emp_id: emp_id },
            //dataType:"json", 
            success: function (data) {

                location.reload();
            }
        });
    });
</script>

</html>