<?php
require_once "functions.php";
$r = deleteAllInCard();
var_dump($r);
if($r){
    echo "usunęto wszystko";
}else{
    echo "error";
}
echo "<br><a href='open.php'>Powrót</a>";