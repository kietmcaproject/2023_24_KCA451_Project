<?php
    $showAlert= false;
    $showError= false;
    $exists=false;
    if($_SERVER['REQUEST_METHOD']=="POST"){
        include '123.php';
        $name=$_POST['name'];
        $lastname=$_POST['lastname'];
        $course=$_POST['course'];
        $email=$_POST['email'];
        $password=$_POST['password'];
        $cpassword=$_POST['cpassword'];
        $emailquery= "select * from registration where email='$email'";
        $query=mysqli_query($con,$emailquery);
        $emailcount=mysqli_num_rows($query);
        if($emailcount>0){
            $exists=true;
        }
        if($password==$cpassword && $exists==false){
            $hash=password_hash($password,PASSWORD_DEFAULT);
            $sql="INSERT into `registration` (`firstname`, `lastname`,  `course`, `email`, `password`, `dt`) VALUES ('$name','$lastname','$course','$email','$hash', CURRENT_TIMESTAMP())";
            $result= mysqli_query($con,$sql);
            if($result){
                $showAlert=true;
            }
        }
        elseif($password!=$cpassword){
            $showError=true;
        }

    }
?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="registrationfile.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <title>Registeration form</title>
    <link rel="stylesheet" href="adminlogin.css">

</head>

<body>
<?php
if($showAlert){ 
    echo'<div class="alert alert-success" role="alert">
    <span class="close" data-dismiss="alert"  >&times;</span>
    <i class="fa fa-check" aria-hidden="true"></i><strong>Registration Succesful</strong><br>now you can login your account.<a href="Adminlogin.php">Login</a>
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
    <div class="image "></div>
    <div class="container" style="padding: 250px; z-index: 2;">

        <form class="text-center border border-light p-5 " style="background-color:white;" id="admin_register_form" action="#!" method="POST">
            <p class="h4 mb-4" style="color:black;">Sign up</p>

            <div class="form-row mb-4">
                <div class="col">
                    <!-- First name -->
                    <input type="text" id="defaultRegisterFormFirstName" name="name" class="form-control tt" placeholder="First name" required data-parsley-trigger="keyup">
                </div>
                <div class="col">
                    <!-- Last name -->
                    <input type="text" id="defaultRegisterFormLastName" name="lastname" class="form-control tt" placeholder="Last name" required data-parsley-trigger="keyup">
                </div>
            </div>

            <!-- department -->
            <select id="department" name="course" class="form-control mb-4">
                <option value="Select Department">Select Department</option>
                <option value="MCA">MCA</option>
                <option value="M.col">M.COM</option>
                <option value="MBA">MBA</option>
                
              </select>

            <!-- E-mail -->
            <input type="email" id="UserEmail" name="email" class="form-control mb-4 tt" placeholder="E-mail" required data-parsley-type="email" data-parsley-trigger="focusout">


            <!-- Password -->
            <input type="password" id="pw" name="password" class="form-control tt" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" required data-parsley-length='[8,16]' data-parsley-trigger='keyup'>
            <br>
            <input type="password" id="pwtwo" name="cpassword" class="form-control tt" placeholder="Confirm Password" aria-describedby="defaultRegisterFormConfirmPasswordHelpBlock" required data-parsley-equalto="#pw" data-parsley-trigger='keyup'><br>

            <!-- Sign up button -->
            <button class="btn btn-info my-4 btn-block" type="submit" id='submit' name="submit">Sign up</button>

            <hr>

        </form>

        <!-- Optional JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/parsleyjs@2.9.2/dist/parsley.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        
</body>

</html>