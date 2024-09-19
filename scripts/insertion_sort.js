function insertionSort() {
  c_delay = 0;
  //Setting Time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N)";

  //Setting Space complexity
  document.getElementById("Space_Worst").innerText = "O(1)";
  for (var j = 0; j < array_size; j++) {
    div_update(divs[j], div_sizes[j], "yellow");

    var key = div_sizes[j];
    var i = j - 1;

    while (i >= 0 && div_sizes[i] > key) {
      div_update(divs[i], div_sizes[i], "red");

      div_sizes[i + 1] = div_sizes[i];
      div_update(divs[i + 1], div_sizes[i + 1], "red");

      i--;
    }

    div_sizes[i + 1] = key;
    div_update(divs[i + 1], div_sizes[i + 1], "yellow");

    for (var t = 0; t <= j; t++) {
      div_update(divs[t], div_sizes[t], "green");
    }
  }
}
