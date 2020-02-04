<?php
$ville=(isset($_GET['ville'])?$_GET['ville']:null);

$ch = curl_init();

// configuration des options
curl_setopt($ch, CURLOPT_URL, "http://api.openweathermap.org/data/2.5/weather?q=".$ville."&units=metric&appid=5d4ba1ecef7ac559a7ec413dc2225adb");
curl_setopt($ch, CURLOPT_HEADER, 0);

// exécution de la session
curl_exec($ch);

// fermeture des ressources
curl_close($ch);

json_encode($ch);