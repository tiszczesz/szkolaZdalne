<?php
require_once "functions.php";
if(filter_has_var(INPUT_GET,'id')){
    //echo "Usuwanie rekordu o id ={$_GET['id']} <br>";
    $id = filter_input(INPUT_GET,'id',FILTER_VALIDATE_INT);//$id = $_GET['id'];
    // if(deleteRow($id)){
    //     echo "Usunięto rekord o id: {$id}<br>";
     //       echo "<div><a href='cw1.php'>Powrót</a></div>"
    // }else{
    //     echo "Nie można usunąć rekordu o id: {$id}<br>";
    // }
        if(deleteRow($id)){
            echo "<div>Usunięto rekord o id: {$id}</div>";
        }else{
            echo "<div>Błąd przy usuwaniu rekordu o id: {$id}</div>";
            
        }
}
//header("Location: cw1.php");
