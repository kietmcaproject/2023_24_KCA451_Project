<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Periodic Service</title>
    <link rel="stylesheet" href="periodic.css">
</head>
<header>
    <div class="logo">
        <img src="logo2.png" alt="This is a logo" width="100px">
        <h1 id="auto">Automotive Services</h1>

    </div>

    <nav class="navbar">
        <a href="index.html">Home</a>&emsp;&emsp;&emsp;
        <a href="about.html">About</a>&emsp;&emsp;&emsp;
        <a href="carousel.html">Services</a>&emsp;&emsp;&emsp;
        <!--   <a href="">Our Staff</a>&emsp;&emsp;&emsp; -->
        <a href="login.html">Login</a>

    </nav>
</header>

<body>
    <h1 id="ps">Periodic Service</h1>
    <div class="card-container">
        <div class="service-container1">
            <div class="service1">
                <img src="Basic Service.png" alt="This is an image">
            </div>
            <div class="card-content">
                <h2>Basic Service</h2>
                <p>1000 Kms or 1 Month Warranty <br>
                    Every 5000 Kms or 3 Months (Recommended) <br>
                    Engine Oil Replacement<br>
                    Oil Filter Replacement <br>
                    Air Filter Cleaning <br>
                    Coolant Top up <br>
                    Wiper Fluid Replacement <br>
                    Battery Water Top up <br>
                    Heater/ Spark Plugs Checking <br>
                    Car Wash <br>
                    Interior Vacuuming ( Carpet & Seats )</p>

             <!--    <h3>INR 10499</h3>

                <button class="btn"> Add Service</button> -->

            </div>
        </div>
        <div class="service-container2">
            <div class="service2">
                <img src="Standard Service.png" alt="This is an image">
            </div>
            <div class="card-content">
                <h2>Standard Service</h2>
                <p>1000 Kms or 1 Month Warranty <br>
                    Every 10,000 Kms or 6 Months (Recommended) <br>
                    Engine Oil Replacement<br>
                    Oil Filter Replacement<br>
                    Air Filter Replacement<br>
                    Fuel Filter Checking<br>
                    Cabin Filter / AC Filter Cleaning<br>
                    Coolant Top up (200 ml)<br>
                    Wiper Fluid Replacement<br>
                    Brake Fluid Top up (50 ml)<br>
                    Battery Water Top up<br>
                    Heater/Sparks Plugs Checking<br>
                    Car Wash<br>
                    Interior Vacuuming ( Carpet & Seats )<br>
                    Scanning<br>
                    Rear Brake Shoes Serviced<br>
                    Front Brake Pads Serviced


                </p>
               <!--
                <h3>INR 12499</h3>
                <button class="btn">Add Service</button>  --> 


            </div>
        </div>
        <div class="service-container3">
            <div class="service3">
                <img src="Comprehensive Service.png" alt="This is an image">
            </div>
            <div class="card-content">
                <h2>Comprehensive Service</h2>
                <p> 1000 Kms or 1 Month Warranty <br>
                    Every 20,000 Kms or 12 Months (Recommended)<br>
                    Engine Oil Replacement<br>
                    Oil Filter Replacement<br>
                    Air Filter Replacement<br>
                    Fuel Filter Replacement<br>
                    Cabin Filter / AC Filter Cleaning<br>
                    Coolant Top up (200 ml)<br>
                    Wiper Fluid Replacement<br>
                    Brake Fluid Top up(50 ml)<br>
                    Battery Water Top upHeater / Spark Plugs Checking<br>
                    Car WashInterior Vacuuming ( Carpet & Seats )<br>
                    Scanning<br>
                    Rear Brake Shoes Serviced<br>
                    Front Brake Pads Serviced<br>
                    Wheel Balancing<br>
                    Wheel Alignment<br>
                    Tyre Rotation<br>
                    Throttle Body <br>
                    Cleaning<br>
                    Gear Oil Top up</p>
                      <!-- 
                <h3>INR 15499</h3>
                <button class="btn">Add Service</button> -->


            </div>
        </div>
    </div>
    <div class="service">
        <div class="request">
            <h1>Send the Request</h1>
        </div>

        <div class="formdiv">


            <form action="periodic.php" method="post">
            <label for="" class="label">Username : </label><br>
                <input type="text" class="input" name="username" required placeholder="Enter your username"> <br><br>
                          
                <label for="" class="label">Address : </label><br>
                <input type="text" class="input" name="address" required placeholder="Enter your address"> <br><br>


                <label for="" class="label">Brand : </label><br>
                <select id="cars" name="brand" class="input">
                    <option value="NA">Select your brand</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Saab">Saab</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                </select><br>
                <br>
                <label for="" class="label">Model : </label><br>
                <input type="text" class="input" name="model" required placeholder="Enter your model of your car"> <br><br>

                <label for="" class="label">Fuel-type : </label><br>
                <select id="cars" name="fueltype" class="input">
                    <option value="NA">Select your fuel type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="CNG">CNG</option>
                </select><br><br>

                <label for="" class="label">Service-plan : </label><br>
                <select id="cars" name="serviceplan" class="input">
                    <option value="NA">Select your service plan</option>
                    <option value="Basic Service">Basic Service</option>
                    <option value="Standard Service">Standard Service</option>
                    <option value="Comprehensive Service">Comprehensive Service</option>

                </select><br><br>


                
                <input type="submit" name="submit" class="requestbtn">

            </form>
        </div>
    </div>

    </div>

</body>

</html>
<?php

//echo'Connected successfuly';
//echo"<script>alert('Account created successfully.')</script>";
if(isset($_POST["submit"]))
{
    echo'Connected successfuly';
    
    $con = mysqli_connect('localhost', 'root', '', 'vehicle');
    
    $Address=$_POST["address"];
    $Brand=$_POST["brand"];
    $Model=$_POST["model"];
    $Fuel=$_POST["fueltype"];
    
    $Servi=$_POST["serviceplan"];
    
    $Username=$_POST["username"];


    $sql="insert into request values('$Username','$Address','$Brand','$Model','$Fuel','$Service','$Servi','$Additional')";
    mysqli_query($con,$sql);

    echo"<script>alert('Request send successfully. Within 30 minutes our team will contact you.')</script>";

}

?>
