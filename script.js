
var button = document.getElementById("switch-button");

var mode = "light";

button.addEventListener("click", function() {
  var body = document.body;

  if (mode === "light") {
    // Mode to Dark
    mode = "dark";

    // Dark Mode GIF
    body.style.backgroundImage = "url('https://media1.giphy.com/media/qTeiUJNlcoMe3LOMkk/giphy.gif?cid=ecf05e475cfhbotf1cihgxif1mslerua9wb4biu4j4pkyhbm&ep=v1_gifs_related&rid=giphy.gif&ct=g')";

  } else {
    // Mode to Light
    mode = "light";

    // Light Mode GIF
    body.style.backgroundImage = "url('https://media0.giphy.com/media/ddfb7PvwyzrepUhsdZ/giphy.gif?cid=ecf05e475cfhbotf1cihgxif1mslerua9wb4biu4j4pkyhbm&ep=v1_gifs_related&rid=giphy.gif&ct=g')";

  }
});