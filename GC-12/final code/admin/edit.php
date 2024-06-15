<?php
    session_start();
    if(!isset($_SESSION['username'])){
        header('location:Adminlogin.php');
    }
?>
<?php
include '123.php';
if(isset($_POST['submit'])){
    if($_POST['employee_id']!=""){
        $query="DELETE FROM `listofexams` WHERE examcode= '".$_POST['employee_id']."'";
        mysqli_query($con,$query);
    }
    else{
        echo'failed';
    }
    

}
?>
<?php
include '123.php';
if(isset($_POST['submit1'])){
    $examtitle=$_POST['examtitle'];
    $datentime=$_POST['datentime'];
    $duration=$_POST['duration'];
    $examcode=$_POST['examcode'];
    if($_POST['emp_id']!=""){
        echo'success';
        $q="UPDATE `listofexams` SET `examtitle`='".$examtitle."',`examcode`='".$examcode."',`datentime`='".$datentime."',`duration`='".$duration."' WHERE examcode='".$_POST['emp_id']."'";
        mysqli_query($con,$q);
    }
    else{
        echo'failed';
    }
}
?> 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit And Remove</title>
    <!-- css file -->
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <!-- js file -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

    <style>
    @import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

        .logo {
            font-family: 'typo';
            font-size: 35px;
            color: #ffbb33;
            background-color: rgb(33, 34, 34);
        }
        
        .nev {
            font-family: 'typo';
            background-color: rgb(33, 34, 34);
        }
    </style>

</head>

<?php include 'base.php';?>

<body>
    <div class="col-lg-12 logo">
        TestTime.com
    </div>
    <!--Navbar-->
    <div class="nev">
        <nav class="navbar navbar-expand-lg navbar-dark primary-color">

            <!-- Navbar brand -->
            <a class="navbar-brand  " href="#">Admin </a>

            <!-- Collapse button -->
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapsible content -->
            <div class="collapse navbar-collapse" id="basicExampleNav">

                <!-- Links -->
                <ul class="navbar-nav mr-auto">
                    </li>
                    <!-- exam List -->
                    <li class="nav-item ">
                        <a class="nav-link " href="exam.php">Exam List</a>
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
    <div class="modal fade" id="remove" role="dialog">
    <form method="post">
        <div class="modal-dialog">

            <!-- Modal content for Remove model model-->
            <div class="modal-content">
                <div class="modal-header text-center">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="bodycontent">

                </div>
                <div class="modal-footer">
                    <p style="color: red;">Removing This Exam Will Also Remove The Question Paper Created With The Above Exam Code</p>
                    <input type="hidden" name="employee_id" id="employee_id"/>
                    <input type="submit" name="submit" value="Remove" class="btn btn-danger">
                </div>
            </div>

        </div>
    </form>
    </div>
    <div class="container mt-5">
    
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-10">
                        <h2>List of Exams</h2>
                    </div>
                </div>
            </div>
        <form method="post">
            <div class="card-body p-1">
                <div class="table-responsive border-">
                    <div class="col-sm-12">
                        <table class="table table-bordered table-striped table-hover dataTable no-footer ">
                            <!-- exam title -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Exam Title</th>
                            <!-- date and time -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Date And Time</th>
                            <!-- edit/remove -->
                            <th class="sorting" tabindex="0" aria-controls="exam_data_table" rowspan="1" colspan="1" aria-label="Exam Title: activate to sort column ascending">Schedule</th>
                            <tr>
                            <?php
                                include '123.php';
                                $mail=$_SESSION['username'];
                                $q="SELECT   `examtitle`, `examcode`, `datentime`FROM `listofexams` WHERE email='$mail'";
                                $r=mysqli_query($con,$q);

                                    while($retrive=mysqli_fetch_array($r)){
                                        ?>
                                        <tr>
                                            <td><?php echo $retrive['examtitle'];?></td>
                    
                                            <td><?php echo $retrive['datentime'];?></td>
                                            <td><input type=button name="remove" value="Remove" class="btn btn-danger view_data" id="<?php echo $retrive['examcode'];?>">
                                            <input type="button" value="Edit" class="btn btn-dark  edit_data" id="<?php echo $retrive['examcode'];?>"></td>
                                       
                                        </tr>
                                        <?php
                                    }
                                 ?>      
                            </tbody>
                    
                                </td>
                            </tr>
                        </table>
                    </div>
                </form>
                    <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                                        <input type="text" name="datentime" id="datentime" class="form-control" readonly>

                                        <!-- exam duration -->
                                        <div class="row mt-3">
                                            <div class="col-7">
                                                <div class="md-form mb-3">
                                                    <i class="fas fa-envelope prefix grey-text"></i>
                                                    <label data-error="wrong" data-success="right" for="duration">Select Duration</label>

                                                    <br>
                                                    <select id="duration" name="duration" class="form-control mb-4 mt-2">
                                            <label for=""></label>
                                            <option >15 min</option>
                                            <option >30 min</option>
                                            <option >1 hour</option>

                                          </select>

                                                </div>
                                            </div>
                                        </div>

                                        <!-- Submit button -->
                                        <div class="modal-footer d-flex justify-content-center">
                                        <input type="hidden" name="emp_id" id="emp_id"/>
                                        <input type="submit" name="submit1" value="Set" class="btn btn-danger">
                                        <button class="btn btn-primary" id="closebtn" data-dismiss="modal">Close</button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                            <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

<script>
    function myFunction() {
        confirm("Press a button!");
    }
</script>
<script>
    $(document).ready(function(){
        $('.view_data').click(function(){
            var employee_id= $(this).attr('id');
           /* $.ajax({
                url:"select.php",
                method:"post",
                data:{employee_id:employee_id},
                datatype:"json",
                success:function(data){*/
            $('#employee_id').val(employee_id);
            $('#remove').modal('show');
        });
    });
    </script>
    <script>
    $(document).on('click','.edit_data',function(){  
           var emp_id= $(this).attr("id");  
           $.ajax({  
                url:"select.php",  
                method:"POST",  
                data:{emp_id:emp_id},  
                dataType:"json",  
                success:function(data){  
                     $('#examtitle').val(data.examtitle);  
                     $('#examcode').val(data.examcode);  
                     $('#datentime').val(data.datentime);  
                     $('#duration').val(data.duration);  
                     $('#rightanswermarks').val(data.rightanswermarks);  
    
                     $('#emp_id').val(emp_id);
                     $('#modalLoginForm').modal('show');  
                }  
           });  
      });  
</script>
</html>