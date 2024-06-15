
<?php
session_start();
if(!isset($_SESSION['emailid'])){
    header('location:login.php');
}
?>
<?php
include '123.php';
$ee=$_SESSION['emailid'];
$ecode=$_GET['ecode'];
$ik="SELECT 'score' FROM `result` WHERE email='$ee' AND examcode='$ecode'";
$tr=mysqli_query($con,$ik);
while($ss=mysqli_fetch_array($tr)){
    if($ss){
        header('location:student enroll.php');
        }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="TimeCircles.js"></script>
    <link rel="stylesheet" href="addexam1.css">
    <link href="TimeCircles.css" rel="stylesheet">
    <style>
            .nv{
        overflow: hidden;
        background-color: #333;
        position: fixed;
        top: 0;
        width: 100%;
        
}
.aaa{
    color:#ffbb33;
}
.abb{
    position:unset;
}
.cc{
    color: antiquewhite;
    background-color: #343a40;
}
.cr{
    background-color:#6c757d;
     
}

    </style>
</head>
<script>
    window.history.forward();
    function preventBack() {
        window.history.forward();
    }
</script>

<body>
<?php include 'base.php';?>
    <div class="col-lg-12 logo">
        ExamBaBa.com
    </div>
    <!--Navbar-->
    <div class="nev">
        <nav class="navbar navbar-expand-lg navbar-dark primary-color">

            <!-- Navbar brand -->
            <a class="navbar-brand rrr" href="#">User Side</a>

            <!-- Collapse button -->
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            
        </nav>
    </div>
    <?php 
       
        
        $_SESSION['ecode']=$ecode;
        include '123.php';
        $t="SELECT `duration` FROM `listofexams` WHERE examcode='$ecode'";
        $tq=mysqli_query($con,$t);
        while($tq1=mysqli_fetch_array($tq)){
            $tt=$tq1['duration'];
            
        }
        if($tt="15 min"){
            $a=900;
        }
        elseif($tt="30 min"){
            $a=1800;
        }
        elseif($tt="1 Hour"){
            $a=3600; 
        }
        ?>
    <div class="nv">
    <div class="col-lg-12 logo">
        ExamBaBa.com
    </div>
    <div id="DateCountdown" data-timer="<?php echo $a;?>" class="aaa"
        style="max-width: 400px; width: 50%; height: 100px;"></div>
</div>
   
    

    
        
    <div class="container col-md-6 form-con mt-5 abb">
        <form action="result.php" method="POST">
            <?php
                $i=1;
                $x=1;
                    include '123.php';
                    $ecode=$_GET['ecode'];
                    $_SESSION['ecode']=$ecode;
                    $q= "SELECT * FROM `questions` WHERE examcode='$ecode'";
                    $result=mysqli_query($con,$q);
                    while($retrive=mysqli_fetch_array($result)){
                    ?>
            <table class="table table-borderless">
                <thead>
                    
                    <tr class="table cc">
                        <th><?php echo $x?>
                            <?php echo $retrive['question']?>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="table cr"><input type="radio" id="0" name="anscheck[<?php echo $i;?>]"
                                value="option1"> <label>
                                <?php echo $retrive['option1']?>
                                </lable>
                        </td>
                    </tr>
                    <tr>
                        <td class="table cr"><input type="radio" id="1" name="anscheck[<?php echo $i;?>]"
                                value="option2"> <label>
                                <?php echo $retrive['option2']?>
                            </label></td>
                    </tr>
                    <tr>
                        <td class="table cr"><input type="radio" id="2" name="anscheck[<?php echo $i;?>]"
                                value="option3"> <label>
                                <?php echo $retrive['option3']?>
                            </label></td>
                    </tr>
                    <tr>
                        <td class="table cr"><input type="radio" id="3" name="anscheck[<?php echo $i;?>]"
                                value="option4"> <label>
                                <?php echo $retrive['option4']?>
                            </label></td>
                    </tr>
                </tbody>
            </table>
            <?php
                    $i++;
                    $x++;
                    }
                ?>
            <center><input type="submit" name="submit" value="Submit" class="btn" style="background-color:#333;color:white;"></center>
        </form>
    </div>


</body>
<script>
    $("#DateCountdown").TimeCircles({

        "time": {
            "Days": {

                "show": false
            },
            "Hours": {
                "text": "Hours",
                "color": "#007bff",
                "show": true
            },
            "Minutes": {
                "text": "Minutes",
                "color": "#BBFFBB",
                "show": true
            },
            "Seconds": {
                "text": "Seconds",
                "color": "#FF9999",
                "show": true
            }
        }
    }); 
</script>

</html>