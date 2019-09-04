// first row cursor position in textarea inputbox on page load
function setfocus() {
  var input = document.getElementById('inputbox');
  input.focus();
}

// counts the number of times the user push enter
function increment() {
  increment.n = increment.n || 0;
  console.log("increment.n = " + increment.n);
  return ++increment.n;

}

function parse(e) {
  var key = window.event.keyCode;
  if (key == 13) { //keycode for enter 

    var input = document.getElementById('inputbox');
    var output = eval(input.value);

    var cc = increment();
    console.log("cc = " + cc);
    var out = document.getElementById("outputbox").value
    if (out == "" || out.length == 0 || out == null) {
      document.getElementById("count1").value += eval(cc + 1) + '\n';
      document.getElementById("count2").value = eval(cc);
      document.getElementById("outputbox").value += output;
    } else {
      document.getElementById("count1").value += eval(cc + 1) + '\n';
      document.getElementById("count2").value += '\n' + eval(cc);
      document.getElementById("outputbox").value += '\n' + output;
    }
  }

  if (cc == 0) { document.getElementById("count2").value = "" };

}

// clears the input and output boxes
function clear() {
  event.preventDefault();
  increment.n = -1;
  document.getElementById('count1').value = "";
  document.getElementById('count2').value = "";
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

function help() {
  document.getElementById('mydiv').innerHTML =
    "1) Function rand(n) gives you a 1D array with length n with random numbers between -1 and 1." + "<br>" +
    "2) Function rw(n) gives you a 1D array with length n with a pure random walk." + "<br>" +
    "3) Function seq(a,b) gives you a 1D array with data from a to b." + "<br>" +
    "4) Function sum(a) gives you a sum of a 1D array a." + "<br>" +
    "5) Function plot(z) gives you a plot of a 1D array z." + "<br>" +
    "6) Function clear() gives you a clean input-, output- and plot- box plus restarts row counters." + "<br>" +
    "7) Function help() gives you command help."
  return "help";
}

// plots a give data array 
function plot(z) {

  document.getElementById('mydiv').innerHTML = "";

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
