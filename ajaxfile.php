<?php
include "config.php";

$condition = "1";
if(isset($_GET['id'])){
   $condition = " id=".$_GET['id'];
   $commentData = mysqli_query($con,"select * from comments WHERE ".$condition. " GROUP BY `date` DESC");
}
$commentData = mysqli_query($con,"select * from comments WHERE ".$condition. " GROUP BY `date` DESC");

$response = array();

while($row = mysqli_fetch_assoc($commentData)){

   $response[] = $row;
}

echo json_encode($response);
exit;