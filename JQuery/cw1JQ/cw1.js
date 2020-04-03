//window.onload = function(){};
//   $ --> document.querySelector()
$(document).ready(function () {
  $("#btn1").click(function () {
    //alert("gggg");
    let imie = $("#imie").val();
    if (imie.trim() != "") {
      $("#wynik").html(imie + " Dzisiaj jest: " + (new Date()));
    } else {
      $("#wynik").html("Szkoda, że się nie przedstawiłeś Dzisiaj jest: " + (new Date()));
    }

  });
});