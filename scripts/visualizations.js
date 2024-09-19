var c_delay = 0;
var delay_time;

var speed = 10000;
algo_speed.addEventListener("input", algoSpeedInput);
function algoSpeedInput() {
  var array_speed = algo_speed.value;
  switch (array_speed) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  delay_time = 1000000 / (Math.floor(array_size / 10) * speed);
}
delay_time = 1000000 / (Math.floor(array_size / 10) * speed);
function div_update(div, height, color) {
  window.setTimeout(function () {
    div.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}
