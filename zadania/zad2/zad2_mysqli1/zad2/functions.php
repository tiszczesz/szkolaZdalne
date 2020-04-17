<?php

function getConnection(){
  $conn = new mysqli("localhost","root","","pierwsza");
  if($conn->connect_errno >0){
    echo $conn->connect_error;
    return null;
  }
  $conn->query("SET NAMES utf8");
  return $conn;
}

function getAll(){
  $conn = getConnection();
  if($conn==null) return;
  $sql = "SELECT * FROM tab1";
  $result = $conn->query($sql);
  while($dane = $result->fetch_assoc()){
    echo "<div>Id: {$dane['id']} nazwa: {$dane['nazwa']} "
      ."cena: {$dane['cena']} zł opis: {$dane['opis']}</div>";
  }
  
  $conn->close();
  //return $dane;  
}