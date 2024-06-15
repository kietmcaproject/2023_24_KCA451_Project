<?php
include '123.php';
if(isset($_POST['emp_id'])){
    $d="DELETE FROM `uploadexam` WHERE examcode='".$_POST['emp_id']."'";
    $dd=mysqli_query($con,$d);
    if($dd){
        echo'deleted';
    }
}