<?php
    session_start();
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