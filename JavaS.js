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

// clears the input and output boxes
function clear() {
  event.preventDefault();
  input = "";
  output = "";
  document.getElementById('inputbox').value = "";
  document.getElementById('outputbox').value = "";
  document.getElementById('mydiv').innerHTML = "";
  return "";
};

// an array with random numbers between -1 and 1
function rand(n) {
  x = [];
  for (var i = 0; i < n; i++) {
    x[i] = Math.random() * 2 - 1;
  }
  console.log("x = " + x);
  return x;
}

// an array with a random walk 
function rw(n) {
  var x = [];
  x[0] = 100;
  for (var i = 1; i <= n; i++) {
    x[i] = x[i - 1] + (Math.random() * 2 - 1);
  }
  console.log("x = " + x);
  return x;
}

// an array with data from a to b
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

// plots a give data array 
function plot(z) {
  var yy = z;
  var xx = [];

  for (var i = 0; i <= yy.length; i++) {
    xx[i] = JSON.stringify(i);
  }

  var data = [{
    x: xx,
    y: yy,
    type: 'scatter',
    line: { color: 'green', width: 2 }
  }];

  var layout =
  {
    paper_bgcolor: 'lightgrey',
    plot_bgcolor: 'lightgrey',
    margin: { l: 60, b: 60, r: 20, t: 20 },
    title: "",
    xaxis: {
      title: 'x-axis', titlefont: {
        family: 'Courier New, monospace', size: 18,
        color: 'black'
      }
    },
    yaxis: {
      title: 'y-axis', titlefont: { family: 'Courier New, monospace', size: 18, color: 'black' },
      width: 1000, height: 380,
      xaxis: {
        tickfont: { size: 12, color: 'black' }, showgrid: true, tickmode: "linear",
        gridcolor: 'black', linecolor: 'black'
      },
      yaxis: {
        tickfont: { size: 12, color: 'black' }, showgrid: true,
        gridcolor: 'black', linecolor: 'black'
      }
    }
  };
  Plotly.newPlot('mydiv', data, layout, { displayModeBar: false, staticPlot: true });
  return "plot";
}
