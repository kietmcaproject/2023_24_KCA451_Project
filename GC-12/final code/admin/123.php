

<?php
	$server="127.0.0.1";
	$user="root";
	$passsword="";
	$databasename="signup";
	$con=mysqli_connect($server,$user,$passsword,$databasename);
	if(!$con){
		echo("please try again");
	}
	?>
