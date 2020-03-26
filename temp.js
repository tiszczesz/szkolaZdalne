window.onload = function () {
  document.querySelector("#data").valueAsDate = new Date();
  document.querySelector("#add").onclick = function () {
    const temp = parseFloat(document.querySelector("#temperatura").value);
    const data = document.querySelector("#data").value;
    if (!isNaN(temp) && temp >= 35 && temp <= 43) {
      document.querySelector("#tempError").innerHTML = "";
      let row = document.createElement("tr");
      let tempTD = document.createElement("td");
      let dataTD = document.createElement("td");
      let buttonTD = document.createElement("td");
      tempTD.innerHTML = temp;
      dataTD.innerHTML = data;
      tempTD.className = "temps";
      buttonTD.innerHTML = "<input type='button' class='usun' value='Usuń'>";
      row.appendChild(tempTD);
      row.appendChild(dataTD);
      row.appendChild(buttonTD);
      document.querySelector("table").appendChild(row);
      update();
      //szukamy wszystkie przyciski usun
      let btns = document.querySelectorAll(".usun");
      btns.forEach((element) => {
        element.onclick = function () {
          //alert("usun");
          //musimy usunac wiersz tr z tabeli btn->td->tr
          //alert(this.parentElement.parentElement.nodeName);
          document.querySelector("table").removeChild(this.parentElement.parentElement);
          update();
        }
      });
    } else {
      document.querySelector("#tempError").innerHTML = "Nieporawne dane!!!";
    }

  };
};

function update() {
  let temps = document.querySelectorAll(".temps");
  if (temps != null && temps.length > 0) {
    console.log(temps);
    document.querySelector("#max").innerHTML = getMax(temps) + " <sup>o</sup>C";
    document.querySelector("#min").innerHTML = getMin(temps) + " <sup>o</sup>C";
    document.querySelector("#avg").innerHTML = getAvg(temps) + " <sup>o</sup>C";
  } else {
    document.querySelector("#max").innerHTML = ""
    document.querySelector("#min").innerHTML = "";
    document.querySelector("#avg").innerHTML = "";
  }

}
function getMax(temps) {
  let min = Number.MAX_VALUE;
  temps.forEach((element) => {
    let value = parseFloat(element.innerHTML);
    if (value < min) min = value;
  });
  return min;
}
function getMin(temps) {
  let max = Number.MIN_VALUE;
  temps.forEach((element) => {
    let value = parseFloat(element.innerHTML);
    if (value > max) max = value;
  });
  return max;
}
function getAvg(temps) {
  let sum = 0;
  temps.forEach((element) => {
    let value = parseFloat(element.innerHTML);
    sum += value;
  });
  return (sum / temps.length).toFixed(2);
}