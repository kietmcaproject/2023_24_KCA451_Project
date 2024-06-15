<?php
include '123.php';
if(isset($_POST['employee_id'])){
    $abc=$_POST['employee_id'];
    $q="SELECT * FROM `listofexams` WHERE examcode='$abc'";
    $result=mysqli_query($con,$q);
    $row=mysqli_fetch_array($result);
    echo json_encode($row); 
       
}
?>