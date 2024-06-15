<?php
include '123.php';
if(isset($_POST['emp_id'])){
  $q="SELECT * FROM `listofexams` WHERE examcode='".$_POST['emp_id']."'";
    $result=mysqli_query($con,$q);
    $row=mysqli_fetch_array($result);
    echo json_encode($row); 
       
}
?>