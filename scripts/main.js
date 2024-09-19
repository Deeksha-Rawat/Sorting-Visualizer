var input_array_size = document.getElementById("a_size"),
  array_size = input_array_size.value;
var generateBtn = document.getElementById("a_generate");
var algo_speed = document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var algo_btn = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

//Array generation and updation.
input_array_size.addEventListener("input", updateArraySize);
generateBtn.addEventListener("click", generateNewArray);

function updateArraySize() {
  array_size = input_array_size.value;
  console.log(array_size, "size");
  generateNewArray();
}

function generateNewArray() {
  cont.innerHTML = "";

  for (var i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(
        Math.random() * 0.5 * (input_array_size.max - input_array_size.min)
      ) + 30;

    divs[i] = document.createElement("div");

    cont.appendChild(divs[i]);
    margin_size = 0.1;

    divs[i].style =
      "margin:0% 0.1%;" +
      "background-color:blue; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%";
  }
}

window.onload = generateNewArray();

algo_btn.forEach((el) => {
  el.addEventListener("click", runalgo);
});
function disable_buttons() {
  for (var i = 0; i < algo_btn.length; i++) {
   // algo_btn[i].classList = [];
    algo_btn[i].classList.add("butt_locked");

    // algo_btn[i].disabled = true;
    input_array_size.disabled = true;
    generateBtn.disabled = true;
     algo_speed.disabled = true;
  }
}

function runalgo() {
  

  this.classList.add("butt_selected");
  disable_buttons();
  switch (this.innerHTML) {
    case "Bubble":
      bubble();
      break;
    case "Selection":
      selectionSort();
      break;
    case "Insertion":
      insertionSort();
      break;
    case "Merge":
      mergeSort();
      break;
    case "Quick":
      quickSort();
      break;
  }
 
}

