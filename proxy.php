<?php

$stream = $_GET['id'];

$base = "http://f335f3de.ottclub.xyz:80/iptv/QPRSSCLKLK6HZ2/";

$url = $base . $stream . "/index.m3u8";

header("Content-Type: application/vnd.apple.mpegurl");

$opts = [
 "http" => [
  "method" => "GET",
  "header" => "User-Agent: VLC/3.0\r\n"
 ]
];

$context = stream_context_create($opts);

echo file_get_contents($url, false, $context);

?>
