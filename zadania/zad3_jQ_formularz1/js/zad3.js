$(document).ready(function () {//window.onload = function(){}
  $("#oblicz").click(function () {//document.querySelector("#oblicz") = ...

    let a = parseFloat($("#a").val());//document.querySelector("#a").value
    let b = parseFloat($("#b").val());// .......
    //alert(a + b);
    if (!isNaN(a) && !isNaN(b)) {
      $("#wynik").html(a + " + " + b + " = " + (a + b));
      //document.querySelector("#wynik").innerHTML = .....
    } else {
      alert("Błędne dane");
    }
  });
});