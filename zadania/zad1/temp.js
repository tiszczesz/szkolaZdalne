window.onload = function () {
  window.history.replaceState('', '', window.location.href);
  document.querySelector("#data").valueAsDate = new this.Date();
}