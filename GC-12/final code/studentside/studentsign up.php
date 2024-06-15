<?php
    $showAlert= false;
    $showError= false;
    $exists=false;
    if($_SERVER['REQUEST_METHOD']=="POST"){
        include '123.php';
        $name=$_POST['name'];
        $gender=$_POST['gender'];
        $dob=$_POST['dob'];
        $course=$_POST['course'];
        $year=$_POST['year'];
        $email=$_POST['email'];
        $password=$_POST['password'];
        $cpassword=$_POST['cpassword'];
        $emailquery= "select * from studentregisteration where email='$email'";
        $query=mysqli_query($con,$emailquery);
        $emailcount=mysqli_num_rows($query);
        if($emailcount>0){
            $exists=true;
        }
    else{
        if($password==$cpassword && $exists==false){
            $hash=password_hash($password,PASSWORD_DEFAULT);
            $s="INSERT INTO `studentregisteration`(`name`, `gender`, `DOB`, `course`, `year`, `email`, `password`, `dt`) VALUES('$name','$gender','$dob','$course','$year','$email','$hash', CURRENT_TIMESTAMP())";
           
            
            $r= mysqli_query($con,$s);
           
            if($r){
                $showAlert=true;
            }
        }
        elseif($password!=$cpassword){
            $showError=true;
        }
    }

    }
?>
<!doctype html>
<html lang="en">

<head>
    <link rel="stylesheet" href="studentsign up.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        
    <title>Student Registration Form</title>
</head>

<body>
<?php
if($showAlert){ 
    echo'<div class="alert alert-success" role="alert">
    <span class="close" data-dismiss="alert"  >&times;</span>
    <i class="fa fa-check" aria-hidden="true"></i><strong>Registration Succesful</strong><br>now you can login your account.<a href="login.php">Login</a>
    </div>';
}
?>
<?php
    if($exists){
    echo'<div class="alert" id="al" role="alert">
    <span class="close" data-dismiss="alert"  >&times;</span>
    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>&ensp;<strong> Email already Exist</strong>
    </div>';
    } 
?>
<?php
    if($showError){
        echo'<div class="alert" id="al" role="alert">
        <span class="close" data-dismiss="alert"  >&times;</span>
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>&ensp;<strong>Passwords do not match</strong>
        </div>';
        }
?> 

    <div class="signup">
        <!-- Default form register -->
        <form id="student_register_form" action="#!" method="POST">

            <h2>Sign up</h2>
            <label><strong> Name :</label>
            <div class="textbox1">
                    
                    <input type="text" class="tt" id="defaultRegisterFormLastName" name="name" class="form-control" Required>
            </div>
            <label>Gender</label>
        <div class="gender1">
            <label>Male</label>
            <input type="radio" id='male' name='gender' value='male' Required>&ensp;
            <label>Female</label>
            <input type="radio" id='female' name='gender' value='female'>&ensp;
            <label>Other</label>
            <input type="radio" id='Other' name='gender' value='Other'>
        </div>
            <div class="date1">
                <label> D.O.B :</label>
                <input type="date" id="date" name="dob" Required>
            </div>
            <label>Course :</label>
            <div class="textbox1">
                <input type="text" class="tt" id="course" name="course" Required>
            </div>
           
        <div class="select1">
            <label> Year :</label>
            <select class="form-control" id="sel1" name="year" Required>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
            </select>
        </div>


            <!-- E-mail -->
            <label> Email :</label>
        <div class="textbox1">
            <input type="email" class="tt" id="defaultRegisterFormEmail" name="email"Required>
        </div>  
           
            
            <!-- Password -->
        <label>Password :</label>
        <div class="textbox1">
            <input type="password" class="tt" id="defaultRegisterFormPassword" name="password" class="form-control"  Required>
        </div>
            
        <label>Confirm Password :</label>
        <div class="textbox1">
            <input type="password" class="tt" id="defaultRegisterCPassword" name="cpassword" class="form-control"  Required>
        </div>
            <!-- Sign up button -->
            <button class="btnn" id="btn" type="submit">Sign up </button>


        </form>
    </div>

    
    <!-- Default form register -->

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>
</body>

</html>