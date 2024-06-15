<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"><?php
include '123.php';
$output='';
     echo'ccess';
     $abc=$_POST['ss'];
     echo gettype($abc);  
      $q = "SELECT * FROM `listofexams` WHERE examtitle = '$abc'";  
      $r=mysqli_query($con,$q);
      $output .= '  
      <div class="table-responsive">  
           <table class="table table-bordered">';  
      while($row = mysqli_fetch_array($r))  
      {  
           $output .= '  
                <tr>  
                     <td width="30%"><label>Name</label></td>  
                     <td width="70%">'.$row["examtitle"].'
                     </td>  
                </tr>  
                <tr>  
                     <td width="30%"><label>Address</label></td>  
                     <td width="70%">'.$row["examcode"].'</td>  
                </tr>  
                <tr>  
                     <td width="30%"><label>Gender</label></td>  
                     <td width="70%">'.$row["datentime"].'</td>  
                </tr>  
                <tr>  
                     <td width="30%"><label>Designation</label></td>  
                     <td width="70%">'.$row["duration"].'</td>  
                </tr>  
                <tr>  
                     <td width="30%"><label>Age</label></td>  
                     <td width="70%">'.$row["rightanswermarks"].'</td>  
                </tr>  
                ';  
      }  
      $output .= "</table></div>";  
      echo $output;
 ?>