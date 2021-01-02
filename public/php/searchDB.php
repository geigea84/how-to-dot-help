<?php

/*
$Sequelize = require("sequelize");
require("dotenv").config();
*/

//search query
$search = $_GET["search"];

/* 
//number of previously loaded results
$offset = $_GET["loaded"];
*/

//db creds, can't keep hard code in, must use .env
$host = "localhost";
$user = "root";
$password = "uwoshFS28Apollo11";
$dbName = "how_to_dot_help_db";

//connect to db (use mysqli or mysql)
$con = new mysqli($host, $user, $password, $dbName);

if ($con->connect_error) {
    echo "Connection Failed: ".$con->connect_error;
}
else {
    //query the db (add limit for previously loaded results if desired)
    $sql = "SELECT * FROM User WHERE first_name, last_name LIKE '%$search%'";

    //array to store results
    $output = array();

    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            //add row to output array
            echo $output[] = array(
                "first_name" => $row["first_name"],
                "last_name" => $row["last_name"],
                "city" => $row["city"],
                "state" => $row["state"],
                "bio" => $row["bio"],
                "phone_number" => $row["phone_number"],
                "email" => $row["email"]
            );
        }
    }
}

//close db connection
$con->close();

//convert to JSON and output
echo(json_encode($output));

?>