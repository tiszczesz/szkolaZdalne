<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
require_once 'functions.php';
if(filter_has_var(INPUT_GET,'id')){
    $id = filter_input(INPUT_GET,'id',FILTER_VALIDATE_INT);
    echo "Zmiana rekordu o id ={$id} <br>";    
    $row = getById($id);
    echo <<<TEXT
    <form method="post">
    <fieldset>
        <legend>Zmień produkt</legend>
        <input type='hidden' name='id' value='{$row[0]}'>
        <div class="line">
            <input type="text" name="nazwa" id="nazwa" value='{$row[1]}'>
        </div>
        <div class="line">
            <input type="number" name="cena" id="cena" value='{$row[2]}' step="0.01">
        </div>
        <div class="line">
            <input type="text" name="opis" id="opis" value='{$row[3]}'>
        </div>
        <input type="submit" value="Zapisz dane">
    </fieldset>
</form>
TEXT;
if(filter_has_var(INPUT_POST,'nazwa')){
    updateById($id,[
            filter_input(INPUT_POST,'nazwa'),
            filter_input(INPUT_POST,'cena'),
            filter_input(INPUT_POST,'opis')]
    );
    echo "zapisano <a href='cw1.php'>Powrót</a>";
}else{
    echo "<br>Coś nie tak";
}
} 
?>

</body>
</html>

