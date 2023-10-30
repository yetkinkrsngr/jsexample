let myName = document.getElementById("myName");
let name = prompt("Adınızı giriniz");
myName.innerHTML = name;
function showTime() {
  let myClock = document.getElementById("myClock");
  let date = new Date();
  let day = date.getDay();
  switch (day) {
    case 0:
      day = "pazar";
      break;
    case 1:
      day = "pazartesi";
      break;
    case 2:
      day = "salı";
      break;
    case 3:
      day = "çarşamba";
      break;
    case 4:
      day = "perşembe";
      break;
    case 5:
      day = "cuma";
      break;
    default:
      day = "cumartesi";
  }
  myClock.innerHTML = date.toLocaleTimeString() + " " + day.toUpperCase();
  setInterval(showTime, 1000);
}

window.addEventListener("load", showTime);
