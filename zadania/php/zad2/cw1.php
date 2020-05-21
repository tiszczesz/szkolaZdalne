<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sklep1 - 2020</title>
  <style>
    #footer{position: absolute;bottom: 0; width: 100%;text-align: center;
    padding: 20px;background-color: yellow;}
  </style>
</head>
<body>
<h1>Praca z Mysqli</h1>
<?php 
  require_once("functions.php");
  $amount = getAmount();
  $total = round(getTotal(),2);
  $minPrice = getMinPrice();
  $towar = getTowarWithMaxPrice();
?>
<div id="inf">
  <div>Ilość towarów w sklepie: <?php echo $amount ?></div>
  <div>Całkowity koszt towarów w sklepie: <?php echo $total ?> zł</div>
  <div>Najtańszy towar w sklepie ma cenę: <?php echo $minPrice ?> zł</div>
  <div>Najdroższy towar w sklepie : <?php echo $towar[1] ."w cenie: ".$towar[2]  ?> zł</div>
</div>
<div>
<a href="form1.php">Wstaw dane</a>
</div >
  <?php
    
  //getAll();
  //insertRow(["test1",56.99,"opis testowy"]);
  getAllByRow();
  // echo "<pre>";
  // var_dump($r);
  // echo "</pre>";
  // -- zadanie
  // wyświetlić dane w tabelce HTML używając fetch_row()
  ?>

<div>
      <a href="open.php">Przeglądanie towarów</a>
</div>
<div id="footer">
  <?php $dane = updateLicznik();
  echo "Liczba odwiedzin: ".($dane[0]+1)." data: ".$dane[1];
  ?>
  </div>
  
</body>
</html>