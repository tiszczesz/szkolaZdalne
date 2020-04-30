<?php

function getAllFromFile($filename){
  $dane = file($filename,FILE_IGNORE_NEW_LINES);
  //var_dump($dane);
  $result = [];
  foreach($dane as $row){
    $line = explode("|",$row);
    $result[]=$line;
  }
  return $result;
}

function rowsToHtml(array $rows){
  $html = "";
  foreach($rows as $k => $row){
   $html .= "<tr><td>".$row[0]."</td><td>".$row[1]
       ."</td><td><a class='btn' href='usun.php?id={$k}'>USUŃ</a></td></tr>";
  }
  return $html;
}
function addNewRow($filename, array $row){
  $f = fopen($filename,"a");
  if($f){
    fwrite($f,implode("|",$row).PHP_EOL);
    fclose($f);
  }
}
function saveAll($filename,array $dane){
  $f = fopen($filename,"w");
  if($f){
    foreach($dane as $row){
      fwrite($f,implode("|",$row).PHP_EOL);
    }
    fclose($f);
  }
}
function update(array $dane){
  if(isset($dane) && count($dane)>0){
    $min = PHP_INT_MAX;
    $max = -PHP_INT_MAX;
    $sum = 0;
    foreach($dane as $row){
      if($row[1]>$max) $max = $row[1];
      if($row[1]<$min) $min = $row[1]; 
      $sum += $row[1];
    }
    $avg = round($sum/count($dane),2);
  }else{
    $min = "---";
    $max = "---";
    $avg = "---";
  }
  $html = "Obliczenia:<br>Maksymalna temperatura: {$max}<br>Minimalna temperatura: {$min}"
          ."<br>Średnia temperatura: {$avg}";
  return $html;
}
