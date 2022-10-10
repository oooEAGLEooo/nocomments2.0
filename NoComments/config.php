<?php

$host = "localhost"; /* Host name */
$user = "root"; /* User */
$password = ""; /* Password */
$dbname = "nocomments_db"; /* Database name */

$connection = mysqli_connect($host, $user, $password,$dbname);

if (!$connection) {
  die("Connection failed: " . mysqli_connect_error());
}