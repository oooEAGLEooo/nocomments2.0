<?php
include "config.php";

$comments = mysqli_query($connection,"select * from comments group by date desc");

$response = array();

while($row = mysqli_fetch_assoc($comments)){

   $response[] = $row;
}

echo json_encode($response);
exit;