function quickSort() {
  c_delay = 0;
  //Setting Time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N log N)";
  document.getElementById("Time_Best").innerText = "Ω(N log N)";

  //Setting Space complexity
  document.getElementById("Space_Worst").innerText = "O(log N)";
  quick_sort(0, array_size - 1);
}

function quick_partition(low, high) {
  var i = low + 1;
  var piv = div_sizes[low]; //make the first element as pivot element.
  div_update(divs[low], div_sizes[low], "yellow");

  for (var j = low + 1; j <= high; j++) {
    if (div_sizes[j] < piv) {
      div_update(divs[j], div_sizes[j], "yellow");

      div_update(divs[i], div_sizes[i], "red");
      div_update(divs[j], div_sizes[j], "red");

      var temp = div_sizes[i];
      div_sizes[i] = div_sizes[j];
      div_sizes[j] = temp;

      div_update(divs[i], div_sizes[i], "red");
      div_update(divs[j], div_sizes[j], "red");

      div_update(divs[i], div_sizes[i], "blue");
      div_update(divs[j], div_sizes[j], "blue");

      i += 1;
    }
  }
  div_update(divs[low], div_sizes[low], "red");
  div_update(divs[i - 1], div_sizes[i - 1], "red");

  var temp = div_sizes[low];
  div_sizes[low] = div_sizes[i - 1];
  div_sizes[i - 1] = temp;

  div_update(divs[low], div_sizes[low], "red");
  div_update(divs[i - 1], div_sizes[i - 1], "red");

  for (var t = low; t <= i; t++) {
    div_update(divs[t], div_sizes[t], "green");
  }

  return i - 1;
}

function quick_sort(low, high) {
  if (low < high) {
    var piv_pos = quick_partition(low, high);
    quick_sort(low, piv_pos - 1); //sorts the left side of pivot.
    quick_sort(piv_pos + 1, high); //sorts the right side of pivot.
  }
}
