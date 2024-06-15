<?php
 include "123.php";
if (isset($_POST['e_mail'])){
    # code...
    $email=$_POST['e_mail'];
    $query= "select * from registration where email='"$email"'";
    $result=mysql_query($con,$query);
    if(mysqli_num_rows($result)==0){
        $output=array('success' => true);
        echo json_encode($output);	
    }
}
?>
