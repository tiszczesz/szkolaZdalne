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
    <div id='content'>
        <div id="list">
            <?php
            require_once "functions.php";
            $towary = getAllTowars();
            foreach ($towary as $t) {
                echo $t->getFormToAdd();
            }
            ?>
        </div>
        <div id="card">
            <?php
            var_dump($_POST);
            if(filter_has_var(INPUT_POST,'id')){
                $id = filter_input(INPUT_POST,'id',FILTER_VALIDATE_INT);
                addToOrder($id);
            }
            ?>
        </div>
    </div>

</body>

</html>