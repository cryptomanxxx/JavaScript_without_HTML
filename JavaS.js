// counts the number of input divs created
function increment() {
  increment.n = increment.n || 0;
  return ++increment.n;
}

// creates an input div
function CreateInputDiv() {
  increment();
  cc = increment.n;
  console.log("increment.n = " + cc);

  input = document.createElement("div");
  input.setAttribute("id", "input" + cc);
  input.setAttribute("class", "input");
  input.setAttribute("contenteditable", "true");
  input.setAttribute("onkeypress", "parse(event, this)");
  document.getElementById('calc').appendChild(input);
  input.focus();
}

// creates an output div 
function CreateOutputDiv() {
  output = document.createElement("div");
  output.setAttribute("id", "output" + cc);
  output.setAttribute("class", "output");
  output.setAttribute("contenteditable", "false");
  document.getElementById('calc').appendChild(output);
}

// handles the input, output and does the expression parsing
function parse(e1, e2) {
  // console.log("e2 = " + e2);
  if (e1.keyCode == 13) { // keycode for enter 
    event.preventDefault();
    var inId = e2.id;
    console.log("inId = " + inId);
    outId = "output" + inId.substring(5);
    console.log("outId = " + outId);
    var inz = input.innerText;

    try {
      // check if input contains a colon. Hides output if colon exist. 
      if (inz.indexOf(':') > -1) {
        var inz = input.innerText.replace(/:/g, '');
        console.log("input with colon = " + inz);
        var outz = eval(inz);
        // console.log("hidden out = " + outz);
        CreateOutputDiv();
        CreateInputDiv();
      }
      // check if input contains a #. Input after a # is defined as text.  
      else if (inz.indexOf('#') > -1) {
        CreateOutputDiv();
        CreateInputDiv();
      }
      // revaluates input
      else if (document.getElementById(outId)) {
        console.log("Already created");
        inz = document.getElementById(inId).innerText;
        console.log("inz = " + inz);

        // revaluated input contained hash or colon
        var containedHashOrColon = true;
        var outz = reparse(inz);

        // revaluated input did not contained hash or colon
        if (!outz) { outz = eval(inz); containedHashOrColon = false; }
        // console.log("outz = " + outz);
        document.getElementById(outId).innerHTML = outz;

        // check if contained colon or #  
        if (containedHashOrColon) { document.getElementById(outId).hidden = true; } else {
          document.getElementById(outId).hidden = false;
        }
        // set focus to the input after revalue input
        var ref1 = 1 + + inId.substring(5);
        var ref2 = "input" + ref1;
        console.log("refocus = " + ref2);
        document.getElementById(ref2).focus();
      }
      // no colon and no # = display output and create new lines
      else {
        CreateOutputDiv();
        // calculate and assign output value to output div  
        var outz = eval(inz);
        // console.log("out = " + outz);
        output.innerHTML = outz;
        CreateInputDiv();
      }
    } catch (err) {
      console.log(err);
      output.innerHTML = err;
      CreateInputDiv();
    }
  }
}

// does the re-evaluation of an input in function parse
function reparse(inz) {
  var outz;
  if (inz.indexOf(':') > -1) {
    inz = inz.replace(/:/g, '');
    console.log("input with colon = " + inz);
    outz = eval(inz);
    console.log("hidden out = " + outz);
  }
  // check if input contains a #. Input after a # is defined as text.  
  else if (inz.indexOf('#') > -1) {
    outz = 0;
  }
  return outz != undefined ? true : false;
}

// gives you help regarding different functions
function help() {
  var x =
    "1) Function help() gives you command help" + "<br>" +
    "2) Function round(x,z) rounds a number, 1D array or a 2D array x to z decimal points" + "<br>" +
    "3) Function array(z) returns a javascript array from function's parameters z" + "<br>" +
    "4) Function arrayMult(d1,d2) multiply two arrays d1 and d2" + "<br>" +
    "5) Function rand(n) returns a 1D array with length n with random numbers between -1 and 1" + "<br>" +
    "6) Function rw(n) returns a 1D array with length n with a pure random walk" + "<br>" +
    "7) Function seq(a,b) gives you a 1D array with data from a to b" + "<br>" +
    "8) Function sum(a) gives you a sum of a 1D array a" + "<br>" +
    "9) Function count(a,b) counts the number of elements b in array a. If parameter b is not specified then the count of a is return" + "<br>" +
    "10) Function ticker() gives you the ticker symbols for the 100 crypto currencies with the largest market cap" + "<br>" +
    "11) Function time(w) converts a unix timestamp w to a date string " + "<br>" +
    "12) Function crypto(ticker) gives you historial crypto currency price data for a specified ticker symbol string" + "<br>" +
    "13) Function plot(z) gives you a plot of a 1D array z." + "<br>" +
    "14) Function clear() gives you a clean workspace" + "<br>" +
    "15) Function save(x) where x is a file name that ends with .html in enclosed in a string will save a copy of the current workspace locally" + "<br>" +
    "16) Function load() loads a html workspace file from a previous session" + "<br>" +
    "Please note that an input that ends with : hiddes output from view" + "<br>" +
    "Please note that an input that starts with # is defined as text";
  return x;
}

// rounds a number, a 1D or a 2D array array a to z decimal points
function round(x,z) { 
if (z == undefined) {z=2;}
// console.log("type of = " + typeof(x)); 
  if(typeof(x)=="number"){x=x.toFixed(z)}
  else if (x[0].length == undefined) {
    for (var i = 0; i < x.length; i++) {
      x[i] = JSON.parse(x[i].toFixed(z));
    }
  } else
    for (var i = 0; i < x.length; i++) {
      for (var j = 0; j < x[0].length; j++) {
        x[i][j]= JSON.parse(x[i][j].toFixed(z));
      }
    }
  console.log(x); 
  return x;
}

// returns a javascript array from a function's parameters (arguments)
function array() {
  var a = Array.from(arguments);
  console.log(a);
  return a;
}

// multiply two arrays 
function arrayMult(d1, d2) {
  var out = [];
  for (var i = 0; i < d1.length; i++) {
    out.push(d1[i] * d2[i]);
  }
  console.log(out);
  return out;
}

// an array with random numbers between -1 and 1
function rand(n) {
  x = [];
  for (var i = 0; i < n; i++) {
    x[i] = Math.random() * 2 - 1;
  }
  var xx = round(x,4); 
  // console.log(xx);
  return xx;
}

// an array with a random walk 
function rw(n) {
  var x = [];
  x[0] = 100;
  for (var i = 1; i < n; i++) {
    x[i] = x[i - 1] + (Math.random() * 2 - 1);
  }
  var xx = round(x,2); 
  // console.log(xx);
  return xx;
}

// an array with data from a to b
function seq(a, b) {
  var data = [];
  for (var i = a; i <= b; i++) {
    data.push(i);
  }
  console.log(data);
  return data;
}

// calculates the sum of a given array a
function sum(a) {
  var z = 0;
  for (var i = 0; i < a.length; i++) {
    z = z + a[i];
  }
  var zz = round(z,2); 
  console.log(zz); 
  return zz; 
}

// counts the number of elements b in a given array a
function count(a, b) {
  if (b == undefined) {
    var count = a.length;
  } else {
    var count = 0;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] == b)
        count++;
    }
  }
  return count;
}

// ticker symbols for the 100 crypto currencies with the largest market cap
function ticker() {
  var ApiKey = "ddd85b386e1a7c889e468a4933f75f22f52b0755b747bdb637ab39c88a3bc19b";
  var urlA = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=" + ApiKey;

  var result = null;

  $.ajax({
    url: urlA,
    async: false,   // makes a synchronous data call to cryptocompare's api
    dataType: "json",
    success: function (data) { result = data; }
  });

  var y = result.Data;
  var A = [];
  for (var i = 0; i < y.length; i++) {
    A.push([y[i].CoinInfo.Name]);
  }
  console.log(A); 
  return A;
}

// converts a unix timestamp to a date string  
function time(w) {
  var MyDate = new Date(w * 1000);
  var MyDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
  return JSON.stringify(MyDateString);
}

// historial crypto currency price data for a specified ticker symbol string
function crypto(ticker) {
  var ApiKey = "ddd85b386e1a7c889e468a4933f75f22f52b0755b747bdb637ab39c88a3bc19b";
  var urlA = "https://min-api.cryptocompare.com/data/histoday?fsym=" + ticker + "&tsym=USD&limit=1000&api_key=" + ApiKey;

  var result = null;

  $.ajax({
    url: urlA,
    async: false,   // makes a synchrously data call to cryptocompare
    dataType: "json",
    success: function (data) { result = data; }
  });

  var y = result.Data;
  var D1 = [];
  var D2 = [];

  for (var i = 0; i < y.length; i++) {
    D1.push(time(y[i].time));
    D2.push(y[i].close);
  }
  console.log(D2);
  return D2;
}

// plots a given data array z 
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
    width: 950,
    height: 300,
    paper_bgcolor: 'lightblue',
    plot_bgcolor: 'lightblue',
    margin: { l: 60, b: 60, r: 20, t: 20 },
    xaxis: { title: 'x-axis', titlefont: { family: 'Courier New, monospace', size: 18, color: 'black' } },
    yaxis: { title: 'y-axis', titlefont: { family: 'Courier New, monospace', size: 18, color: 'black' } },
    xaxis: { tickfont: { size: 12, color: 'black' }, showgrid: true, gridcolor: 'black', linecolor: 'black' },
    yaxis: { tickfont: { size: 12, color: 'black' }, showgrid: true, gridcolor: 'black', linecolor: 'black' }
  };

  setTimeout(function () { Plotly.newPlot(outId, data, layout, { displayModeBar: false, staticPlot: true }); }, 10);
  return ' ';

}

// clears the workspace
function clear() {
// event.preventDefault();
// increment.n = 0;
// var zz = document.getElementById('calc');
// while (zz.firstChild) { zz.removeChild(zz.firstChild); };
// console.clear();
// return "";
location.reload();
return "" ;
};

// saves the current workspace to a local html file
function save(x) {
  var textToSave = document.getElementById("calc").innerHTML;
  var textToSaveAsBlob = new Blob([textToSave], { type: "text/plain" });
  var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
  var fileNameToSaveAs = x;

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  downloadLink.href = textToSaveAsURL;
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  return "workspace saved";
}

// destroy temperary element 
function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

// loads a previous saved workspace html file
function load() {
  var input = document.createElement('input');
  input.type = 'file';

  input.onchange = e => {

    // getting a hold of the file reference
    var file = e.target.files[0];

    // setting up the reader
    var reader = new FileReader();
    reader.readAsText(file, 'UTF-8');

    // here we tell the reader what to do when it's done reading...
    reader.onload = readerEvent => {
      var content = readerEvent.target.result; // this is the content!
      console.log(content);
      document.getElementById('calc').innerHTML = content;
    }
  }
  input.click();
  return "";
}
