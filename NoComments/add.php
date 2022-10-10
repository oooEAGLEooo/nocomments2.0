<?php
include "config.php";

if ((isset($_GET['username']))&&(isset($_GET['comment']))){
    mysqli_query($connection,"insert into comments (username, date, comment) values ('".$_GET['username']."', NOW(), '".$_GET['comment']."')");
}

$comments = mysqli_query($connection,"select * from comments group by date desc");

$response = array();

while($row = mysqli_fetch_assoc($comments)){

   $response[] = $row;
}

echo json_encode($response);
exit;