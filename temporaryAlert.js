// script.js
document.addEventListener("DOMContentLoaded", function () {
  const showAlertButton1 = document.getElementById("showAlertButton1");
  const showAlertButton2 = document.getElementById("showAlertButton2");
  const showAlertButton3 = document.getElementById("showAlertButton3");

  const tempAlert = document.getElementById("tempAlert");

  function showTempAlert() {
    tempAlert.classList.remove("d-none"); // Show the alert

    // Automatically hide the alert after 3 seconds (3000 milliseconds)
    setTimeout(function () {
      tempAlert.classList.add("d-none"); // Hide the alert
    }, 3000);
  }

  showAlertButton1.addEventListener("click", showTempAlert);
  showAlertButton2.addEventListener("click", showTempAlert);
  showAlertButton3.addEventListener("click", showTempAlert);
});
