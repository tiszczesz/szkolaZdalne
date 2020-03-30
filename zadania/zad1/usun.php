<?php
var_dump($_GET['id']);
if(isset($_GET['id'])){
  require_once("functions.php");
  $dane = getAllFromFile("dane.txt");
  $id = intval($_GET['id']);
  if(array_key_exists($id,$dane)){
    unset($dane[$id]);
    saveAll("dane.txt",$dane);
    
  }
}
header("Location: temp.php");