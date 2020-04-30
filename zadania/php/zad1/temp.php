<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pomiar temperatury</title>
  <link rel="stylesheet" href="temp.css">
</head>

<body>
  <div id="ban">
    KONTROLA TEMPERATURY W DANYM OKRESIE
  </div>
  <div id="content">
    <div id="lewy">
      <form id="form1" method="post">
        <div class="line">
          <label for="temperatura">Temperatura: </label>
          <input type="number" name="temperatura" id="temperatura" min="35" max="43" step="0.1" value="36.6">
          <span class="error" id="tempError"></span>
        </div>
        <div class="line">
          <label for="data">Data: </label>
          <input type="date" name="data" id="data">
          <span class="error"></span>
        </div>
        <div class="line">
          <input type="submit" value="DODAJ DO TABELI" id="add">
        </div>
</form>
      <div>
        <?php
          require_once("functions.php");
          $dane = getallFromFile("dane.txt");
          echo update($dane);
        ?>
      </div>
    </div>
    <div id="prawy">
      <table>
        <tr>
          <th>Data</th>
          <th>Temperatura</th>
          <th></th>
        </tr>
        <?php
        
        if(isset($_POST['temperatura'])){
          $temperatura = trim($_POST['temperatura']);
          $data = trim($_POST['data']);
          if($temperatura!='' && $data!=''){
            addNewRow("dane.txt",[$data,$temperatura]);
          }
        }
        
        echo rowsToHtml($dane);
      ?>
      </table>
    </div>
  </div>
  <script src="temp.js" type="text/javascript"></script>
</body>

</html>