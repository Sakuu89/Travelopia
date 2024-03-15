document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
  });
  let popup = document.getElementById("popup");

  function showAlert() {
    popup.classList.add("open-popup");
  }
  function closePopup() {
    popup.classList.remove("open-popup");
  }