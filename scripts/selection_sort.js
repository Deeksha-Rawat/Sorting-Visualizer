function selectionSort() {
  c_delay = 0;
  //Setting Time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N^2)";

  //Setting Space complexity
  document.getElementById("Space_Worst").innerText = "O(1)";
  for (var i = 0; i < array_size - 1; i++) {
    div_update(divs[i], div_sizes[i], "red"); //this is the minimum element for now
    var min_idx = i;
    for (var j = i + 1; j < array_size; j++) {
      div_update(divs[j], div_sizes[j], "yellow");
      if (div_sizes[j] < div_sizes[min_idx]) {
        if (min_idx != i) {
          div_update(divs[min_idx], div_sizes[min_idx], "blue");
        }
        min_idx = j;
        div_update(divs[min_idx], div_sizes[min_idx], "red");
      } else {
        div_update(divs[j], div_sizes[j], "blue");
      }
    }
    if (min_idx != i) {
      var temp = div_sizes[min_idx];
      div_sizes[min_idx] = div_sizes[i];
      div_sizes[i] = temp;

      div_update(divs[min_idx], div_sizes[min_idx], "red");
      div_update(divs[i], div_sizes[i], "red");
      div_update(divs[min_idx], div_sizes[min_idx], "blue");
    }
    div_update(divs[i], div_sizes[i], "green");
  }
  div_update(divs[i], div_sizes[i], "green");
}

// red indicates the current element being examined.
// yellow indicates the element being compared.
// blue indicates elements that are not the minimum.
// green shows the elements that have been sorted and are in their correct position.
