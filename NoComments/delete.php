<?php
include "config.php";

$condition = "1";
if(isset($_GET['id'])){
   $condition = " id=".$_GET['id'];
   mysqli_query($connection,"delete from comments where".$condition);
}
$comments = mysqli_query($connection,"select * from comments group by date desc");

$response = array();

while($row = mysqli_fetch_assoc($comments)){

   $response[] = $row;
}

echo json_encode($response);
exit;