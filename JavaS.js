function countline(element) {
  var text = $(element).val();
  var lines = text.split("\n");
  var count = 0;
  for (var i = 0; i < lines.length - 1; i++) {
    if (lines[i].trim() != "" && lines[i].trim() != null) {
      count += 1;
    }
  }
  return count + 1;
}

function get(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13) { //Enter keycode
    var input = document.getElementById('inputbox');
    var output = eval(input.value);
    count = countline(document.getElementById('inputbox'));
    console.log("Calculation " + "number " + count + " = " + output);
    document.getElementById("outputbox").innerHTML += output + '\n';
  }
}

// Gives you an array with data from a to b
function seq(a, b) {
  var data = [];
  for (var i = a; i <= b; i++) {
    data.push(i);
  }
  return data;
}

// Calculates the sum of a given array a
function sum(a) {
  var z = 0;
  for (var i = 0; i < a.length; i++) {
    z = z + a[i];
  }
  return z;
}

// clears the input and output box
function clear() {
  document.getElementById('inputbox').value = "";
  document.getElementById('outputbox').value = "";
};
