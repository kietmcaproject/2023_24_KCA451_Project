<?php
session_start();
$examcode=$_SESSION['ecode'];
$checked=false;
include '123.php';
if(isset($_POST['submit'])){
    if(!empty($_POST['anscheck'])){
        $count=count($_POST['anscheck']);
    $result=0;
    $i=1;
    $selected=$_POST['anscheck'];
    $q="SELECT * FROM `questions` WHERE examcode='$examcode'";
    $r=mysqli_query($con,$q);
    while($retrive =mysqli_fetch_array($r)){

        if($retrive['correct answer']==$selected[$i]){
          $checked=true;
        };
        if($checked){
            $result++;
        }
        $i++;
    }
    
    }
}

$mail=$_SESSION['emailid'];
$q="SELECT `name` FROM `studentregisteration` WHERE email='$mail'";
$n=mysqli_query($con,$q);
while($r=mysqli_fetch_array($n)){
    $nm=$r['name'];
}
$q1="SELECT  `examtitle` FROM `listofexams` WHERE examcode='$examcode'";
$n1=mysqli_query($con,$q1);
while($r1=mysqli_fetch_array($n1)){
    $nm1=$r1['examtitle'];
   
}
$finalresult="INSERT INTO `result`(`Email`, `name`, `examcode`, `examtitle`, `score`) VALUES ('$mail','$nm','$examcode','$nm1','$result')";
$q2=mysqli_query($con,$finalresult);

    
?>
<html>

  <head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="student login.css">
    <link rel="stylesheet" href="addexam1.css">

  </head>

<body>
<div class="nev">
    <nav class="navbar navbar-expand-lg navbar-dark primary-color">

      <!-- Navbar brand -->
      <a class="navbar-brand rrr" href="#">User Side</a>

      <!-- Collapse button -->
      <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#basicExampleNav"
        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible content -->
      <div class="collapse navbar-collapse" id="basicExampleNav">

        <!-- enroll exam -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link " href="student enroll.php">Enroll Exam
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ">
          <!-- profile -->
          <li class="nav-item ">
            <a class="nav-link " href="studentprofile.php"><i class="fa fa-user" aria-hidden="true"></i>Profile</a>
          </li>
          <!--logout  -->
          <li class="nav-item">
            <a class="nav-link " href="logout.php"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
<div class="container col-md-6 form-con mt-5">
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="row" colspan="2"><center><h3><strong>RESULT</strong></h3></center></th>
      </tr>
    </thead>
    <?php
    include '123.php';
    $q5="SELECT * FROM `result` WHERE Email='$mail' and examcode='$examcode'";
    $qr=mysqli_query($con,$q5);
    while($rr=mysqli_fetch_array($qr)){

    ?>
    <tbody>
      <tr>
        <th scope="row" width="50%">Name</th>
        <td width="50%"><?php echo $rr['name'];?></td>
      </tr>
      <tr>
        <th scope="row" width="50%">Examtitle</th>
        <td width="50%"><?php echo $rr['examtitle'];?></td>
      </tr>
      <tr>
        <th scope="row" width="50%">Examcode</th>
        <td width="50%"><?php echo $rr['examcode'];?></td>
      </tr>
      <tr>
        <th scope="row" width="50%">Score</th>
        <td width="50%"><?php echo $rr['score'];?></td>
      </tr>
    </tbody>
    <?php
    }
  ?>
  </table>
  <center>
  <i class="fa fa-arrow-circle-left ss" aria-hidden="true"></i>
  <a href="student enroll.php">Go Back</a>
  </center>
</div>
<body>
<html>