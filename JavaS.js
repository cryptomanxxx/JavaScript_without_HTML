function setfocus() {
  var input = document.getElementById('inputbox');
  input.focus();
}

function parse(e) {
  var key = window.event.keyCode;
  if (key == 13) { //keycode for enter 
    input = document.getElementById('inputbox');
    output = eval(input.value);
    var out = document.getElementById("outputbox").value
    if (out == "" || out.length == 0 || out == null) {
      document.getElementById("outputbox").value += output;
    } else {
      document.getElementById("outputbox").value += '\n' + output;
    }
  }
}

// clear the input and output boxes
function clear() {
  event.preventDefault();
  input = "";
  output = "";
  document.getElementById('inputbox').value = "";
  document.getElementById('outputbox').value = "";
  return "";
};

// gives you an array with data from a to b
function seq(a, b) {
  var data = [];
  for (var i = a; i <= b; i++) {
    data.push(i);
  }
  return data;
}

// calculates the sum of a given array a
function sum(a) {
  var z = 0;
  for (var i = 0; i < a.length; i++) {
    z = z + a[i];
  }
  return z;
}
