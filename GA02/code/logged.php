<?php
    include '../includes/db_conn.php';
    
    $eid=$_SESSION['id'];
    $sql = "SELECT name,username from  users where id=:eid";
    $query = $dbh -> prepare($sql);
    $query->bindParam(':eid',$eid,PDO::PARAM_STR);
    $query->execute();
    $results=$query->fetchAll(PDO::FETCH_OBJ);
    $cnt=1;

    if($query->rowCount() > 0){
        foreach($results as $result)
    {    ?>
        <p style="color:white;"><?php echo htmlentities($result->FirstName." ".$result->LastName);?></p>
        <span><?php echo htmlentities($result->EmpId)?></span>
<?php }
    } 
?>