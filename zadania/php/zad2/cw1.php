<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sklep1 - 2020</title>
</head>
<body>
<h1>Praca z Mysqli</h1>
<div>
<a href="form1.php">Wstaw dane</a>
</div>
  <?php
  require_once("functions.php");
  //getAll();
  //insertRow(["test1",56.99,"opis testowy"]);
  getAllByRow();
  // echo "<pre>";
  // var_dump($r);
  // echo "</pre>";
  // -- zadanie
  // wyświetlić dane w tabelce HTML używając fetch_row()
  ?>
</body>
</html>