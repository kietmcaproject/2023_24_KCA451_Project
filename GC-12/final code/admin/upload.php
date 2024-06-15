<?php
include '123.php';
if(isset($_POST['emp_id'])){
    $check=true;
    $ch="SELECT * FROM `questions` WHERE examcode='".$_POST['emp_id']."'";
    $r=mysqli_query($con,$ch);
    $r1=mysqli_fetch_array($r);
    $a="SELECT * FROM `uploadexam` WHERE examcode='".$_POST['emp_id']."'";
    $a1=mysqli_query($con,$a);
    $a2=mysqli_fetch_array($a1);
    if($a2){
        $check=false;
    }
    else{
            if($r1)
            {
            $q="SELECT * FROM `listofexams` WHERE examcode='".$_POST['emp_id']."'";
            $result=mysqli_query($con,$q);
            $row=mysqli_fetch_array($result);
            $email=$row['email'];
            $examtitle=$row['examtitle'];
            $examcode=$row['examcode'];
            $datentime=$row['datentime'];
            $duration=$row['duration'];
            $course=$row['Course'];
            $q1="INSERT INTO `uploadexam`(`email`, `examtitle`, `examcode`, `datentime`, `duration`,`Course`) VALUES( '$email','$examtitle','$examcode','$datentime','$duration','$course')";
            $up=mysqli_query($con,$q1);
            
        }
    }
    

    
}
?>