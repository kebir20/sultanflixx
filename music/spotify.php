<?php

$client_id = "3f7c081894114ff0ae4139fb0e633ba2";
$client_secret = "0ba52b56f6724128ba9dc447c00ce187";

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://accounts.spotify.com/api/token");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, "grant_type=client_credentials");

$headers = [
"Authorization: Basic ".base64_encode($client_id.":".$client_secret),
"Content-Type: application/x-www-form-urlencoded"
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);

echo $result;

?>
