<?php
    $database= new mysqli("localhost","root","","edoc");
    if ($database->connect_error){
        die("Connection failed:  ".$database->connect_error);
    }
    $query="SELECT doctor.docid, doctor.docname, doctor.specialties, specialties.sname AS Specialization
    FROM doctor
    INNER JOIN specialties ON doctor.specialties = specialties.id;";
    $result=$database->query($query);
    
    
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Doctors</title>
</head>
<body class="bg-dark">
    <div class="container">
        <div class="row mt-5"> 
            <div class="col">
                <div class="card mt-5">
                    <div class="card-header">
                        <h2 class="display-6 text-center"> List of Doctors </h2>
                         </div>
                         <div class="card-body">
                         <table class="table table-bordered">
                            <tr >
                                <th class="bg-dark text-white">Doctor ID</th>
                                <th class="bg-dark text-white">Name</th>
                                <th class="bg-dark text-white">Specialization</th>
                                <th class="bg-dark text-white">Book Appointment </th>
                            </tr>
                            <tr> 
                            <?php
                            while($row = mysqli_fetch_assoc($result)) 
                             { 
                                ?>
                                <td><?php echo $row["docid"]; ?> </td>
                                <td><?php echo $row["docname"];?> </td>
                                <td><?php echo $row["Specialization"];?></td>
                                <td><a href="login.php" class="btn btn-primary">Book Appointment </a> </td>
                             </tr>
                             <?php
                              }
                              ?>
   



                         </div>
                </div>
            </div>
        </div>
</div>
    
    
  
</table> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
</body>
</html>