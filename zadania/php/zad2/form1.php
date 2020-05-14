<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dodawanie rekordu</title>
    <style>
    .line {
        margin: 20px;
    }
    </style>
</head>

<body>
    <h1>Dodawanie rekordu</h1>

    <div id="content">
        <form method="post">
            <fieldset>
                <legend>Nowy produkt</legend>
                <div class="line">
                    <input type="text" name="nazwa" id="nazwa" placeholder="Wstaw nazwę">
                </div>
                <div class="line">
                    <input type="number" name="cena" id="cena" placeholder="Wstaw cenę" step="0.01">
                </div>
                <div class="line">
                    <input type="text" name="opis" id="opis" placeholder="Opis towaru">
                </div>
                <input type="submit" value="Zapisz dane">
            </fieldset>
        </form>
    </div>

    <div>
    <?php
    require_once("functions.php");
    if(filter_has_var(INPUT_POST,"nazwa")){ //isset($_POST['nazwa'])
      $nazwa = trim(filter_input(INPUT_POST,"nazwa",FILTER_SANITIZE_STRING));
      $cena = filter_input(INPUT_POST,"cena",FILTER_VALIDATE_FLOAT);
      $opis = trim(filter_input(INPUT_POST,"opis"));
      //var_dump($nazwa,$cena,$opis);
      if($nazwa!="" && $cena!=false && $opis != ""){
        insertRowNew([$nazwa,$cena,$opis]);
      } 
      else{
          echo "<div>Błędne dane!!!</div>";
      } 
    }


    ?>
    <div><a href="cw1.php">Powrót</a></div>
    </div>
</body>

</html>