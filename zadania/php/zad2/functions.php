<?php
require_once ("Towar.php");
function getConnection()
{
  $conn = new mysqli("localhost", "pierwsza", "pierwsza", "pierwsza");
  if ($conn->connect_errno > 0) {
    echo $conn->connect_error;
    return null;
  }
  $conn->query("SET NAMES utf8");
  return $conn;
}

function getAll()
{
  $conn = getConnection();
  if ($conn == null) return;
  $sql = "SELECT * FROM tab1";
  $result = $conn->query($sql);
  while ($dane = $result->fetch_assoc()) {
    echo "<div>Id: {$dane['id']} nazwa: {$dane['nazwa']} "
      . "cena: {$dane['cena']} zł opis: {$dane['opis']}</div>";
  }

  $conn->close();
  //return $dane;  
}
function getAllByRow()
{
  $conn = getConnection();
  if ($conn == null) return;
  $sql = "SELECT * FROM tab1";
  $result = $conn->query($sql);
  //var_dump($result);
  if ($result) {
    echo "<table><tr><th>Id</th><th>Nazwa</th><th>Cena</th>"
      . "<th>Opis</th><th>Operacje</th></tr>\n";
    while ($row = $result->fetch_row()) {
      echo "<tr>" .
        "<td>{$row[0]}</td><td>{$row[1]}</td><td>{$row[2]}</td><td>{$row[3]}</td>" .
        "<td><a href='delete.php?id={$row[0]}'>Usuń</a> "
        . "<a href='update.php?id={$row[0]}'>Zmień</a></td></tr>";
    }
    echo "</table>";
  } else {
    echo "ERROR QUERY!!!!!";
  }
  $conn->close();
}
function insertRow(array $dane)
{
  $conn = getConnection();
  if ($conn == null) return;
  $sql = "INSERT INTO tab1(nazwa,cena,opis) VALUES('{$dane[0]}',{$dane[1]},'{$dane[2]}')";
  $result = $conn->query($sql);
  $conn->close();
}
function insertRowNew(array $dane)
{
  $conn = getConnection();
  if ($conn == null) return;
  $sql = "INSERT INTO tab1(nazwa,cena,opis) VALUES(?,?,?)";
  $stm = $conn->prepare($sql);
  $result = $stm->bind_param("sds", $dane[0], $dane[1], $dane[2]);
  $stm->execute();
  var_dump($result, $stm);

  $conn->close();
}
function deleteRow($id)
{
  $conn = getConnection();
  if ($conn == null) return false;
  $sql = "DELETE FROM tab1 WHERE id={$id}";
  $result =  $conn->query($sql);
  $conn->close();
  return $result;
}
function getById($id){
  $conn = getConnection();
  if($conn==null) return null;
  $sql = "SELECT * FROM tab1 WHERE id={$id}";
  if($result = $conn->query($sql)){
    $row = $result->fetch_array();
  }
  $conn->close();
  return $row;
}
function updateById($id,array $dane){
  $conn = getConnection();
  if($conn==null) return null;
  $sql = "UPDATE tab1 set nazwa='{$dane[0]}', cena='{$dane[1]}',"
      ."opis='{$dane[2]}' WHERE id='{$id}'";
  $result = $conn->query($sql);
  $conn->close();
}
function updateLicznik(){
  $conn = getConnection();
  if($conn==null) return null;
  $sql1 = "SELECT * FROM licznik limit 1";
  $result1 = $conn->query($sql1);
  $number = $result1->fetch_row();  
  $newNumber = ++$number[0];//tutaj dałem $dane[0]++ czyli rosło o 1 dopiero po zapisaniu
  $sql2 = "UPDATE licznik SET number={$newNumber}, LastDate=current_timestamp() ";
  $result2 = $conn->query($sql2); 
   $conn->close();
  return $number;
 
}
function getAmount(){
  $conn = getConnection();
  if($conn==null) return null;
  $sql = "select count(*) from tab1";
  $result = $conn->query($sql);
  $amount = $result->fetch_row()[0];  
  $conn->close();
  return intval($amount);
}
function getTotal(){
  $conn = getConnection();
  if($conn==null) return null;
  $sql = "select sum(cena) from tab1";
  $result = $conn->query($sql);
  $total = $result->fetch_row()[0];  
  $conn->close();
  return floatval($total);
}
function getMinPrice(){
  $conn = getConnection();
  if($conn==null) return null;
  $sql = "select min(cena) from tab1";
  $result = $conn->query($sql);
  $minPrice = $result->fetch_row()[0];  
  $conn->close();
  return floatval($minPrice);
}
function getTowarWithMaxPrice(){
  $conn = getConnection();
  if($conn==null) return null;
  $sql = "select * from tab1 order by cena desc limit 1";
  $result = $conn->query($sql);
  $towar = $result->fetch_row();  
  $conn->close();
  return $towar;
}
function getAllTowars(){
  $conn = getConnection();
  if($conn==null) return null;
  $sql = "SELECT * FROM tab1";
  $towary = [];
  if($result = $conn->query($sql)){
    while($row = $result->fetch_assoc()){
      $towary[] = new Towar($row['id'],$row['nazwa'],$row['cena'],$row['opis']);
    }
  }
  $conn->close();
  return $towary;
}

