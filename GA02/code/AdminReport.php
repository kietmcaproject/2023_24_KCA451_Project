<?php
session_start();
if($_SESSION['username']==NULL){
    header("Location:index.php");
    exit();
}
$sname = "localhost";
$uname = "root";
$password = "";
$db_name = "my_db";
$conn = mysqli_connect($sname, $uname, $password, $db_name);
if (!$conn) {
    echo "Connection failed";
    exit();
}
function call()
{
    global $conn;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST['options'] == 'student') {
            // return (getTotalStudents());
            $query = "SELECT * FROM student";
            $result = mysqli_query($conn, $query);

            if (mysqli_num_rows($result) > 0) {
                echo '<div id="report-section" class="table-responsive">
                <table class="table table-bordered table-hover">
                <thead class="table-info">
                <tr>
                              <th>Student Name</th>
                              <th>Course</th>
                              <th>Section</th>
                              <th>Email</th>
                              <th>Project</th>
                              <th>Progress</th>
                          </tr></thead>';

                while ($row = mysqli_fetch_assoc($result)) {
                    global $projectTitle;
                    $pid = $row['pid'];
                    if ($pid) {
                        $pr = "SELECT ProjectTitle FROM record WHERE pid=$pid";
                        $resultt = mysqli_query($conn, $pr); // Fixing the query variable name
                        if ($resultt) {
                            $projectRow = mysqli_fetch_assoc($resultt); // Fetching the row
                            $projectTitle = $projectRow['ProjectTitle']; // Extracting ProjectTitle

                        }
                    } else {
                        $projectTitle = "NOT WORKING";
                    }
                    if($row['progress']==NULL){
                        $row['progress']=0;
                    }
                    echo '<tr>
                                        <td>' . $row['StudentName'] . '</td>
                                        <td>' . $row['course'] . '</td>
                                        <td>' . $row['sec'] . '</td>
                                        <td>' . $row['mailId'] . '</td>
                                        <td>' . $projectTitle . '</td> 
                                        <td>' . $row['progress'] . '</td>

                                        
                                        </tr>';
                }
                echo '</table>';
            } else {
                echo '<p>No Students found.</p>';
            }
        }





        if ($_POST['options'] == 'master') {
            // return (getTotalStudents());
            $query = "SELECT * FROM student";
            $result = mysqli_query($conn, $query);



            if (mysqli_num_rows($result) > 0) {
                echo '<div id="report-section" class="table-responsive">
                <table class="table table-bordered table-hover">
                <thead class="table-info">
                <tr>
                              <th>Student Name</th>
                              <th>Course</th>
                              <th>Section</th>
                              <th>Project Title</th>
                              <th>Project Description</th>
                              <th>Project Technology</th>
                              <th>Project SDG Level</th>
                              <th>Progress</th>
                          </tr> </thead>';

                while ($row = mysqli_fetch_assoc($result)) {
                    global $projectTitle;
                    global $projectDesc;
                    global $projectTech;
                    global $projectSDG;
                    $pid = $row['pid'];
                    if ($pid) {
                        $pr = "SELECT ProjectTitle,ProjectDesc,ProjectTech,SDG FROM record WHERE pid=$pid";
                        $resultt = mysqli_query($conn, $pr); // Fixing the query variable name
                        if ($resultt) {
                            $projectRow = mysqli_fetch_assoc($resultt); // Fetching the row
                            $projectTitle = $projectRow['ProjectTitle'];
                            if ($projectTitle != null) {
                                $projectDesc = $projectRow['ProjectDesc']; // Extracting ProjectTitle
                                $projectTech = $projectRow['ProjectTech']; // Extracting ProjectTitle
                                $projectSDG = $projectRow['SDG']; // Extracting ProjectTitle
                            }
                        }
                    } else {
                        $projectTitle = "NULL";
                        $projectDesc = "NULL";
                        $projectTech = "NULL";
                        $projectSDG = "NULL";
                    }
                    echo '<tr>
                                        <td>' . $row['StudentName'] . '</td>
                                        <td>' . $row['course'] . '</td>
                                        <td>' . $row['sec'] . '</td>
                                        <td>' . $projectTitle . '</td> 
                                        <td>' . $projectDesc . '</td> 
                                        <td>' . $projectTech . '</td> 
                                        <td>' . $projectSDG . '</td> 
                                        <td>' . $row['progress'] . '</td>
                                        </tr>';
                }
                echo '</table>';
            } else {
                echo '<p>No Students found.</p>';
            }
        }




        if ($_POST['options'] == 'out') {
            $query = "SELECT * FROM out_record";
            $result = mysqli_query($conn, $query);

            if (mysqli_num_rows($result) > 0) {
?> <div id="report-section" class="table-responsive">
<table class="table table-bordered table-hover">
<thead class="table-info"> <tr>
                        <th> University Roll No </th>
                        <th> Name </th>
                        <th> Date and Time </th>

                    </tr> </thead>
                    <?php
                    while ($rows = mysqli_fetch_assoc($result)) {
                        $roll = $rows['username'];
                        $name = $rows['name'];
                        $time = $rows['time'];

                    ?>
                        <tr>
                            <td><?php echo $roll ?></td>
                            <td><?php echo $name ?></td>
                            <td><?php echo $time ?></td>

                        </tr>
                    <?php
                    }
                    ?>
                </table>
            <?php } else {
                echo '<p>No Reports found.</p>';
            }
        }








        if ($_POST['options'] == 'request') {
            $query = "SELECT * FROM request";
            $result = mysqli_query($conn, $query);

            if (mysqli_num_rows($result) > 0) {
            ?> <div id="report-section" class="table-responsive">
            <table class="table table-bordered table-hover">
            <thead class="table-info">
                <tr>
                        <th> Requested By </th>
                        <th> Requested To </th>
                        <th> Requested For </th>
                        <th> Status </th>
                    </tr>
            </thead>
                    <?php
                    while ($rows = mysqli_fetch_assoc($result)) {
                        $fid = $rows['fid'];
                        $id = $rows['id'];
                        $innerquery = "SELECT name FROM users WHERE id = '$fid'";
                        $innerResult = mysqli_query($conn, $innerquery);
                        $fname = "";
                        $innerquery = "SELECT name FROM users WHERE id = '$id'";
                        $innerResult2 = mysqli_query($conn, $innerquery);
                        $Sname = "";
                        if ($innerResult && $innerResult2) {

                            $rowa = mysqli_fetch_assoc($innerResult);
                            $fname = $rowa['name'];

                            $rowa = mysqli_fetch_assoc($innerResult2);
                            $Sname = $rowa['name'];
                        } else {
                            echo "Error in the query: " . mysqli_error($conn);
                        }

                    ?>
                        <tr>
                            <td><?php echo $Sname ?></td>
                            <td><?php echo $fname ?></td>
                            <td><?php echo $rows['ProjectTitle']; ?></td>
                            <td><?php echo $rows['status']; ?></td>
                        </tr>
                    <?php
                    }
                    ?>
                </table>
                </div>
<?php } else {
                echo '<p>No Reports found.</p>';
            }
        }
        if ($_POST['options'] == 'suggestion') {
            $query = "SELECT * FROM suggestion";
            $result = mysqli_query($conn, $query);

            if (mysqli_num_rows($result) > 0) {
                echo ' <div id="report-section" class="table-responsive">
                <table class="table table-bordered table-hover">
                <thead class="table-info">
                <tr>
                <th> Given By </th>
                <th> Given To </th>
                <th> Project-Title </th>
                <th> Project-Description </th>
                <th> Time </th>
                <th> Action </th> <!-- Add this column for the ADD button -->
            </tr>
            </thead>';
                while ($row = mysqli_fetch_assoc($result)) {
                    $fid=$row['fid'];
                    $internal1="SELECT `name` from users where id=$fid";
                    $internal1Result=mysqli_query($conn,$internal1);
                    $name=mysqli_fetch_assoc($internal1Result);

                    $uid=$row['Sname'];
                    $internal1="SELECT `name` from users where username=$uid";
                    $internal1Result=mysqli_query($conn,$internal1);
                    $name2=mysqli_fetch_assoc($internal1Result);
                    echo '<tr>
              <td>' . $name2['name'] . '</td>
              <td>' . $name['name'] . '</td>
              <td>' . $row['ProjectTitle'] . '</td>
              <td>' . $row['ProjectDesc'] . '</td>
              <td>' . $row['Time'] . '</td>
              <td>' . $row['status'] . '</td>
              </tr>';
                }
                echo '</table> </div>';
            } else {
                echo '<p>No Suggestions found.</p>';
            }
        }
       

       

        if ($_POST['options'] == 'faculty') {
            $query = "SELECT * FROM users WHERE role = 'faculty'";
            $result = mysqli_query($conn, $query);

            if (mysqli_num_rows($result) > 0) {
                echo '<ol id="report-section" class="list-group list-group-numbered">';
                while ($row = mysqli_fetch_assoc($result)) {
                    $facultyId = $row['id'];
                    $query2 = "SELECT * FROM student WHERE pid IN (SELECT pid FROM record WHERE fid=$facultyId)";
                    $result2 = mysqli_query($conn, $query2);
                    echo '<li class="list-group-item d-flex justify-content-between align-items-start">';
                    echo '<div class="ms-2 me-auto">';
                    echo '<div class="fw-bold">' . $row['name'] . '</div>'; // Outputting faculty name as subheading
                    echo '<ul class="student-list">';
                    while ($roww = mysqli_fetch_assoc($result2)) {
                        echo '<li>' . $roww['StudentName'] . '</li>'; // Outputting student name
                    }
                    echo '</ul>';
                    echo '</div>';
                    // You can add the badge here if needed
                    echo '</li>';
                }
            } else {
                echo '<li class="list-group-item">No Suggestions found.</li>';
            }
        }

        echo "</ol>";
    }
}
?>
<script>
    function showStudents(facultyId) {
        var studentLists = document.querySelectorAll('.student-list');
        studentLists.forEach(function(list) {
            list.style.display = 'none';
        });
        var facultyList = document.getElementById('student-list-' + facultyId);
        facultyList.style.display = 'block';
    }
</script>
<script>
        function printData() {
            window.print();
        }

        window.onload = function () {
            setTimeout(function () {
                if (document.getElementById('report-section')) {
                    document.getElementById('report-section').scrollIntoView({ behavior: 'smooth' });
                }
            }, 1500);
        };
    </script>

<!DOCTYPE html>
<html>

<head>
    <title>Report</title>
    <link rel="stylesheet" href="mystyle.css" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        /* body {
            display: flexbox;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        } */

        .cen {
            position: static;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .faculty-container {
            width: 80%;
            text-align: center;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            width: 40%;
        }

        .faculty-name {

            margin-bottom: 10px;
            font-size: 20px;
            color: #ccc;
        }

        .student-list {

            list-style-type: none;
            padding: 0;
        }

        .student-list li {
            margin-bottom: 5px;
            font-size: 16px;
        }

        .progress {
            height: 20px;
            margin-top: 20px;
        }

        .progress-bar {
            background-color: #42b883;
        }

        @media print {
            body * {
                visibility: hidden;
            }

            #printable-content,
            #printable-content * {
                visibility: visible;
            }

            #printable-content {
                position: absolute;
                left: 0;
                top: 0;
            }
        }

        .center-content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20vh;
        }

        #output {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .table-responsive {
            overflow-x: auto; /* Ensure horizontal scrolling if the content overflows */
        }

        .table th, .table td {
            padding: 10px;
            word-wrap: break-word; /* Ensure long words break into a new line */
        }

        .table th {
            width: 150px; /* Adjust the width as needed */
        }

        .table td {
            width: 200px; /* Adjust the width as needed */
        }
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </style>
    <!-- Add this script for the print functionality -->
    <script>
        function printData() {
            window.print();
        }
    </script>


</head>

<body>
    <!-- <input type="button" onclick="printData()" style="position: fixed; top: 10px; right: 50px;" value="Print"> -->
    <!--Code to insert vertical sidebar -->
    <input type="checkbox" id="menu-toggle" checked>
    <div class="menu dflex">
        <div id="logoCSS3" class="text-center">
            <i class="fa fa-css3"></i>
        </div>
        <div class="elements-container dflex">
            <a class="element" href="DashboardA.php">
                <i class="fa fa-dashboard"></i> Student Record
            </a>
            <a class="element" href="AddUser.php">
                <i class="fa fa-user-plus"></i> Add a New User
            </a>
            <a class="element" href="RemoveUser.php">
                <i class="fa fa-user-times"></i> Remove a User
            </a>
            <a class="element" href="AdminReport.php">
                <i class="fa fa-leaf"></i> Generate Report
            </a>
            <a class="element" href="send_notificationadmin.php">
                <i class="fa fa-bell"></i> Send Notification
            </a>
            <a class="element" href="set_time.php">
                <i class="fa fa-calendar"></i> Set Document Timer
            </a>
           
        </div>
        <div class="menu-container-btn">
            <div class="menu-toggle-btn">
                <label class="menu-btn text-center" for="menu-toggle">
                    <i class="fa fa-close"></i>
                    <i class="fa fa-bars"></i>
                </label>
            </div>
        </div>
    </div>
    <div class="container d-flex justify-content-center align-items-center" style="min-height:100vh; color:white;">
    <div style="box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.5); background-color: #333; padding: 20px; border-radius: 10px;">
        <form id="reportform" action="" method="POST" class="border shadow p-3 rounded">
        <h1 class="text-center p-3 mb-5 colbl" style="background-color: #555; padding: 10px; border-radius: 5px; font-family: 'Arial', sans-serif; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Select the report type</h1>
                        
                            <label for="options" class="form-label">Select an option:</label>
                            <select name="options" id="options" class="form-select">
                                <option value="student">Students Status</option>
                                <option value="request">Requests Status</option>
                                <option value="suggestion">Suggestion Status</option>
                                <option value="faculty">Faculty Status</option>
                                <option value="master">Master</option>
                                <option value="out">Past Participants</option>
                            </select>
                            <button type="submit" class="btn btn-primary" style="margin-top:10px;">Generate</button>
                        </form>
        
            </div>
        </div>
    </div>
    <div><?php echo call(); ?></div>
</body>

</html>