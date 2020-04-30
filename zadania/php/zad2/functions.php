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
function getAllByRow(){
  $conn = getConnection();
  if($conn==null) return;
  $sql = "SELECT * FROM tab1";
  $result = $conn->query($sql);
  //var_dump($result);
  if($result){
    echo "<table><tr><th>Id</th><th>Nazwa</th><th>Cena</th><th>Opis</th></tr>\n";
    while($row = $result->fetch_row()){
      echo "<tr>".
      "<td>{$row[0]}</td><td>{$row[1]}</td><td>{$row[2]}</td><td>{$row[3]}</td>".
      "</tr>";
    }
    echo "</table>";
  }else{
    echo "ERROR QUERY!!!!!";
  }
  $conn->close();
}
function insertRow(array $dane){
  $conn = getConnection();
  if($conn==null) return;
  $sql = "INSERT INTO tab1(nazwa,cena,opis) VALUES('{$dane[0]}',{$dane[1]},'{$dane[2]}')";
  $result=$conn->query($sql);
  $conn->close();
}
function insertRowNew(array $dane){
  $conn = getConnection();
  if($conn==null) return;
  $sql = "INSERT INTO tab1(nazwa,cena,opis) VALUES(?,?,?)";
  $stm = $conn->prepare($sql);
  $result = $stm->bind_param("sds",$dane[0],$dane[1],$dane[2]);
  $stm->execute();
  var_dump($result,$stm);

  $conn->close();
}