<?php
    session_start();
    if(!isset($_SESSION['emailid'])){
        header('location:login.php');
    }
?>
<?php
    include '123.php';
    $mail=$_SESSION['emailid'];
    $query=mysqli_query($con,"SELECT `name`, `gender`, `DOB`, `course`, `year`, `email` FROM `studentregisteration` WHERE email='$mail'");
    $retrive=mysqli_fetch_array($query);
    $name=$retrive['name'];
    $gender=$retrive['gender'];
    $Dob=$retrive['DOB'];
    $course=$retrive['course'];
    $year=$retrive['year'];
    $email=$retrive['email'];

    
    if(isset($_POST['submit'])){
        $Name=$_POST['Name'];
        $Gender=$_POST['Gender'];
        $dob=$_POST['Dob'];
        $Course=$_POST['Course'];
        $Year=$_POST['Year'];
        $q=mysqli_query($con,"UPDATE `studentregisteration` SET `name`=$Name,`gender`=$Gender,`D.O.B`=$dob,`course`=$Course,`year`=$Year where email='$mail'");
        header('location:studentprofile.php');
    
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="porfile.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Profile</title>
    <link rel="stylesheet" href="addquestions.css">

</head>
<?php include 'base.php';?>

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
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapsible content -->
            <div class="collapse navbar-collapse" id="basicExampleNav">

                <!-- enroll exam -->
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <a class="nav-link " href="student enroll.php">Enroll Exam
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
    <form method="POST">
        <div class="row py-5 px-4">
            <div class="col-md-5 mx-auto">
                <!-- Profile widget -->
                <div class="bg-white shadow rounded overflow-hidden abc">
                    <div>
                        <button class="btn btn-outline-dark btn-sm btn-block" type="button" onclick="myFunction()">
                            Edit Profile
                        </button>
                    </div>

                    <div class="px-4 py-3">
                        <h5 class="mb-0">About</h5>
                        <div class="p-4 rounded shadow-sm bg-light">

                            <!-- NAME -->
                            <label for="inputname">NAME</label>
                            <input type="name" class="form-control" id="inputname" name="Name"
                                value="<?php echo $name; ?>" disabled>
                            <!-- gender -->
                            <label for="inputgender">Gender</label>
                            <input type="gender" class="form-control" id="inputgender" name="Gender"
                                value="<?php echo $gender; ?>" disabled>

                            <!-- date of birth -->
                            <label for="inputdob">DOB</label>
                            <input type="text" class="form-control" id="inputdob" name="Dob" value="<?php echo $Dob; ?>"
                                disabled>
                            <!-- Courses -->
                            <label for="inputcourse">Course</label>
                            <input type="text" class="form-control" id="inputcourse" name="Course"
                                value="<?php echo $course; ?>" disabled>
                            <!-- Year -->
                            <label for="inputcourse">Year</label>
                            <input type="text" class="form-control" id="inputyear" name="Year"
                                value="<?php echo $year; ?>" disabled>
                            <!-- email -->

                            <input type="submit" class="btn btn-outline-dark btn-sm btn-block" id="btnn" type="submit"
                                value="Save" disabled>

                            </button>

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
        document.getElementById("inputdob").disabled = false;
        document.getElementById("inputcourse").disabled = false;
        document.getElementById("inputyear").disabled = false;
        document.getElementById("btnn").disabled = false;

    }

</script>

</html>