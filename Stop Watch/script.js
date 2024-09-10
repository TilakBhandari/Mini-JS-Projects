const display = document.querySelector(".display");
display.innerText = "00:00:00";
let m = 0,
  s = 0,
  ms = 0;
var interval = null;
function start() {
  if (interval) {
    reset();
  }
  interval = setInterval(() => {
    display.innerText = `${m}:${s}:${ms} `;
    ms++;
    if (ms == 10) {
      ms = 0;
      s++;
    }
    if (s == 60) {
      s = 0;
      m++;
    }
  }, 100);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  stop();
  display.innerText = " 00:00:00";
  (m = 0), (s = 0), (ms = 0);
}

// Still need to add more
