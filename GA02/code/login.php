<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="mystyle.css" type="text/css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <style>
       body{
        background-image: url('background.jpg'); 
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: white;
        backdrop-filter: blur(3px);
        }
        .border {
    border: var(--bs-border-widthj) var(--bs-border-style) white !important;}
   .colblk{
    color:white;
   }
   ::placeholder {
        color: rgba(255, 255, 255, 0.5) !important; /* Light white color for the placeholder text */
    }
    </style>
</head>
<body>
    <div class="container d-flex justify-content-center 
    align-items-center"
    style="min-height:100vh; color:white">
    <div style="box-shadow: 0 0 10px 3px  rgba(255, 255, 255, 0.5);">
    
        <form class="border shadow p-3 rounded" 
            action="php/check-login.php"
            method="post"
            style="width:450px;">
            
            <div id="logo-container" class="text-center p-3 colblk">
        <img src="downloadlogo2.png" alt="Project Catalyst Logo" style="width: 220px; height: 190px;">
    </div>
            <?php if(isset($_GET['error'])){ ?>
            <div class="alert alert-danger" role="alert">
                  <?=$_GET['error']?>
            </div>
            <?php } ?>
    <div class="mb-3">
    <label for="username" class="form-label colblk"><b>Username </b></label>
        <div class="input-group">
            <span class="input-group-text"><i class="fas fa-user"></i></span>
            <input type="text" id="username" class="form-control" name="username"  placeholder="e.g. 2200290140001" style="color:white;background-color: rgb(34, 34, 31); border-color: white;">
        </div>
    </div>
       
        <div class="mb-3">
        <label for="password" 
            class="form-label colblk">
            <b>Password</b></label>
            <div class="mb-3 input-group">
                    <span class="input-group-text"><i class="fas fa-lock"></i></span>
                    <input type="password" class="form-control" name="password" placeholder="e.g. xyz@123" id="password" placeholder="Password" style="color:white;background-color:rgb(34, 34, 31);">
                </div>
        </div>
        
       
       
            <div class="mb-3" style="text-align: center; margin-top:20px"> <!-- Center-align the content inside this div -->
    <button style="width: 90%; border-radius: 20px;" type="submit" class="btn btn-success">Submit</button>
</div>

        </form>
            </div>
    </div>
</body>
</html>
