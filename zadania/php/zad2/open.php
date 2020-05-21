<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Przeglądanie towarów</title>
    <link rel="stylesheet" href="zad2.css">
</head>

<body>
    <h1>Przeglądanie towarów</h1>
    <?php
    require_once "functions.php";
    $towary = getAllTowars();
    foreach($towary as $t){
        echo $t->getFormToAdd();
    }
    ?>
</body>

</html>