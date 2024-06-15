<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('location:Adminlogin.php');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Questions</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <script src="newexam.js"></script>



    <link rel="stylesheet" href="jsandcss/jquery.datetimepicker.css" />
    <script src="jsandcss/jquery.js"></script>
    <script src="jsandcss/jquery.datetimepicker.js"></script>

    <link rel="stylesheet" href="addquestions.css">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>



</head>
<?php include 'base.php';?>
<body>
    <?php
    include '123.php';
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $mail = $_SESSION['username'];
        $examcode = $_POST['examcode'];
        $count = count($_POST["question"]);
        $question = $_POST['question'];
        $option1 = $_POST['option1'];
        $option2 = $_POST['option2'];
        $option3 = $_POST['option3'];
        $option4 = $_POST['option4'];
        $correctanswer = $_POST['correctanswer'];
        if ($count >= 1) {
            for ($i = 0; $i < $count; $i++) {
                $query = mysqli_query($con, "INSERT INTO `questions`(`email`, `question`, `option1`, `option2`, `option3`, `option4`, `correct answer`, `examcode`) VALUES ('$mail','$question[$i]','$option1[$i]','$option2[$i]','$option3[$i]','$option4[$i]','$correctanswer[$i]','$examcode')");

            }
            if ($query) {
                echo '<div class="alert alert-success" role="alert">
                <span class="close" data-dismiss="alert"  >&times;</span>
                <i class="fa fa-check" aria-hidden="true"></i><strong>Question Paper Saved</strong>
                </div>';
                header('location:exam.php');
            }
        }
        /*$q="INSERT INTO `questions`(`email`,`examcode`) VALUES ('$mail','$examcode')";
        mysqli_query($con,$q);
        foreach($question as $key=>$value){
           // $query="INSERT INTO `questions`( `question`, `option1`, `option2`, `option3`, `option4`, `correct answer`) VALUES ('".$value."','".$option1[$key]."','".$option3[$key]."','".$option4[$key]."','".$correctanswer[$key]."')";

            /*$query="UPDATE `questions`   SET `question`='".$value."',`option1`='".$option1[$key]."',`option2`='".$option2[$key]."',`option3`='".$option3[$key]."',`option4`='".$option4[$key]."',`correct answer`='".$correctanswer[$key]."' WHERE email='$mail' AND examcode='$examcode'";
            $result=mysqli_query($con,$query);*/
        
    }
    ?>
    <div class="col-lg-12 logo">
    ExamBaBa.com
    </div>
    <div class="container">
        <center>
            <h2><b>Enter Questions Here</b></h2>
        </center>
    </div>
    <form method="POST">

        

        <div class="container">

            <lable for="examcode">
                Exam Code
            </lable>
            <select id="examcode" name="examcode" class="form-control" style="width: 10%;">
                <?php
                include '123.php';
                $mail = $_SESSION['username'];
                $q = "SELECT `examcode` FROM `listofexams` WHERE email='$mail'";
                $r = mysqli_query($con, $q);
                while ($retrive = mysqli_fetch_array($r)) {
                ?>
                    <option value="<?php echo $retrive['examcode']; ?>"><?php echo $retrive['examcode']; ?></option>
                <?php
                }
                ?>
            </select>
            <br>
        </div>


        <div class="container  col-md-6 form-con mt-5">
            <div class="con mt-5" id="form-quetions">
                <p><b>Question No. 1:</b> </p>
                <textarea class="form-control" rows="3" cols="45" placeholder="Write question number 1 here..." required name="question[]"></textarea>
                <!-- option a -->
                <div class="col-md-12">
                    <label for="11"></label>
                    <input type="text" class="form-control input-md" placeholder="Enter option a" required id="1" name="option1[]">
                </div>
                <!-- option b -->
                <div class="col-md-12">
                    <label for="12"></label>
                    <input type="text" class="form-control input-md" placeholder="Enter option b" required id="2" name="option2[]">
                </div>
                <!-- option c -->
                <div class="col-md-12">
                    <label for="13"></label>
                    <input type="text" class="form-control input-md" placeholder="Enter option c" required id="3" name="option3[]">
                </div>
                <!-- option d -->
                <div class="col-md-12">
                    <label for="14"></label>
                    <input type="text" class="form-control input-md" placeholder="Enter option d" required id="4" name="option4[]">
                </div>
                <div class="col-md-12">
                    <br>
                    <p><b>Correct Answer:</b></p>
                    <select id="ans1" class="form-control input-md" name="correctanswer[]" required>
                        <option value="">Select answer for question 1</option>
                        <option>option1</option>
                        <option>option2</option>
                        <option>option3</option>
                        <option>option4</option>
                    </select>
                </div>

            </div>
        </div>
        <div>
            <label for=""></label>
            <center><button class="add mt-5 btn btn-info" id="addq" type="button">Add Question</button>&ensp;&ensp;<button class="mt-5 btn btn-danger" type='submit' id="">Submit</button></center>


        </div>
    </form>



</body>
<script>
    $(document).ready(function() {
        var i = 1;
        
         //var element = document.getElementById('#table').outerHTML
        $('.add').click(function() {

            $('#form-quetions').clone().appendTo('.form-con');
             //$('.form_name').append(element);

        });
    });
</script>


</html>