var stars = require("./stars");

function updateDate() {
  document.getElementById("date").innerHTML = new Date().getFullYear();
}

window.addEventListener("DOMContentLoaded", function() {
  stars();
  updateDate();
});
