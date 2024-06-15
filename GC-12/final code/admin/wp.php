<?php include 'base.php';?>

<?php
    session_start();
    if(!isset($_SESSION['username'])){
    header('location:Adminlogin.php');
    }
?>
<?php
    include '123.php';
    $mail=$_SESSION['username'];
    $query=mysqli_query($con,"SELECT  `firstname`, `lastname`, `course`, `email` FROM `registration` WHERE email='$mail'");
    $retrive=mysqli_fetch_array($query);
    $firstname=$retrive['firstname'];
    $lastname=$retrive['lastname'];
    $course=$retrive['course'];
    $email=$retrive['email'];

    
    if(isset($_POST['submit'])){
        $fname=$_POST['firstname'];
        $lname=$_POST['lastname'];
        $ccourse=$_POST['course'];
        $query=mysqli_query($con,"UPDATE `registration` SET `firstname`=$fname,`lastname`=$lname,`course`=$ccourse, WHERE email='$mail'");
        if($q){
        header('location:studentprofile.php');
        }
        else{
            echo'by';
        }
    
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
<link rel="stylesheet" href="addexam1.css">
    <link rel="stylesheet" href="profile.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <Style>
        .btn1{
            background-color: rgb(33, 34, 34);
    padding: .375rem .75rem;
    border-radius: .35rem;
    color: white;
    float:right;

        }
    </Style>
</head>

<body>
<div class="col-lg-12 logo">
    ExamBaBa.com
    </div>
<?php
include 'nevbar.php';
?>
<form  method="POST">
    <div class="row py-5 px-4">
        <div class="col-md-5 mx-auto">
            <!-- Profile widget -->
            <div class="bg-white shadow rounded overflow-hidden">
                         
                <div class="px-4 py-3">
                <button
                                class="btn1" id="btn1" type="button" onclick="myFunction()">
                                Edit Profile
                            </button>
                    <br><br><br><br>
                    <h5 class="mb-3">About</h5>
                    <div class="p-4 rounded shadow-sm bg-light">
                        
                        <!-- NAME -->
                        <label for="inputname">First Name</label>
                        <input type="name" class="form-control" id="inputname" name='firstname'  value="<?php echo $firstname; ?>"disabled>
                        <!-- gender -->
                        <label for="inputgender">Last Name</label>
                        <input type="gender" class="form-control" id="inputgender" name='lastname'  value="<?php echo $lastname; ?>" disabled>

                        <!-- Courses -->
                        <label for="inputcourse">Course</label>
                        <input type="text" class="form-control" id="inputcourse" name="course"  value="<?php echo $course; ?>" disabled>
                    <input type="submit" class="form-control mt-3" value="save" id="btnn" disabled>
                    
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
</form>
</body>
<script>
    
        function myFunction() {
            document.getElementById("inputname").disabled = false;
            document.getElementById("inputgender").disabled = false;
            document.getElementById("inputcourse").disabled = false;
            document.getElementById("btnn").disabled = false;

        }

</script>

</html>