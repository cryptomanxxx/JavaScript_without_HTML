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

function parse(e1, e2) {
  console.log("e2 = " + e2);
  if (e1.keyCode == 13) { // keycode for enter 
    event.preventDefault();

    try {
      var inId = e2.id;
      console.log("inId = " + inId);
      outId = "output" + inId.substring(5);
      console.log("outId = " + outId);

      var inz = input.innerText;

      // check if input contains a colon. Hides output if colon exist. 
      if (inz.indexOf(':') > -1) {
        var inz = input.innerText.replace(/:/g, '');
        console.log("input with colon = " + inz);
        var outz = eval(inz);
        console.log("hidden out = " + outz);
        CreateOutputDiv();
        CreateInputDiv();
      }
      else { // no colon = display and revaluate input
        if (document.getElementById(outId)) {
          console.log("Already created");
          inz = document.getElementById(inId).innerText;
          console.log("inz = " + inz);
          var outz = eval(inz);
          console.log("outz = " + outz);
          document.getElementById(outId).innerHTML = outz;

          // set focus to the input after revalue input
          var ref1 = 1 + + inId.substring(5);
          var ref2 = "input" + ref1;
          console.log("refocus = " + ref2);
          document.getElementById(ref2).focus();
        }
        else { // no colon = display output and create new lines 
          CreateOutputDiv();
          // calculate and assign output value to output div  
          // console.log("input = " + inz);
          var outz = eval(inz);
          output.innerHTML = outz;
          CreateInputDiv();
        }
      }
    } catch (err) {
      console.log(err);
      output.innerHTML = err;
      CreateInputDiv();

    }
  }
}

// function parse that can be experimented on 
function parse2(e1, e2) {
  console.log("e2 = " + e2);
  if (e1.keyCode == 13) { // keycode for enter 
    event.preventDefault();

    try {
      var inId = e2.id;
      console.log("inId = " + inId);
      outId = "output" + inId.substring(5);
      console.log("outId = " + outId);

      var inz = input.innerText;

      // check if input contains a colon. Hides output if colon exist. 
      if (inz.indexOf(':') > -1) {
        var inz = input.innerText.replace(/:/g, '');
        console.log("input with colon = " + inz);
        var outz = eval(inz);
        console.log("hidden out = " + outz);
        CreateOutputDiv();
        CreateInputDiv();
      }
      else { // no colon = display and revaluate input
        if (document.getElementById(outId)) {
          console.log("Already created");
          inz = document.getElementById(inId).innerText;
          console.log("inz = " + inz);
          var outz = eval(inz);
          console.log("outz = " + outz);
          document.getElementById(outId).innerHTML = outz;

          // set focus to the input after revalue input
          var ref1 = 1 + + inId.substring(5);
          var ref2 = "input" + ref1;
          console.log("refocus = " + ref2);
          document.getElementById(ref2).focus();
        }
        else { // no colon = display output and create new lines 
          CreateOutputDiv();
          // calculate and assign output value to output div  
          // console.log("input = " + inz);
          var outz = eval(inz);
          output.innerHTML = outz;
          CreateInputDiv();
        }
      }
    } catch (err) {
      console.log(err);
      output.innerHTML = err;
      CreateInputDiv();

    }
  }
}


function help() {
  var x =
    "1) Function help() gives you command help" + "<br>" +
    "2) Function rand(n) gives you a 1D array with length n with random numbers between -1 and 1" + "<br>" +
    "3) Function rw(n) gives you a 1D array with length n with a pure random walk" + "<br>" +
    "4) Function seq(a,b) gives you a 1D array with data from a to b" + "<br>" +
    "5) Function sum(a) gives you a sum of a 1D array a" + "<br>" +
    "6) Function count(a,b) counts the number of elements b in array a. If parameter b is not specified then the count of a is return" + "<br>" +
    "7) Function ticker() gives you the ticker symbols for the 100 crypto currencies with the largest market cap" + "<br>" +
    "8) Function crypto(ticker) gives you historial crypto currency price data for a specified ticker symbol string" + "<br>" +
    "9) Function plot(z) gives you a plot of a 1D array z." + "<br>" +
    "10) Function clear() gives you a clean workspace" + "<br>" +
    "11) Function save(x) where x is a file name string that ends with .html saves a html file of the current workspace session locally" + "<br>" +
    "12) Function load() loads a html workspace file from a previous session" + "<br>" +
    "13) Please also note that an input that ends with a colon : hiddes output from view" + "<br>";
  return x;
}

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
  for (var i = 1; i < n; i++) {
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

function T(UNIX_timestamp) {
  var MyDate = new Date(UNIX_timestamp * 1000);
  var MyDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
  return JSON.stringify(MyDateString);
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
  return A;
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
    D1.push(T(y[i].time));
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
    paper_bgcolor: 'LightBlue',
    plot_bgcolor: 'LightBlue',
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
  event.preventDefault();
  increment.n = 0;
  var zz = document.getElementById('calc');
  while (zz.firstChild) { zz.removeChild(zz.firstChild); };
  console.clear();
  return "";
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
  return "current workspace saved";
}

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
  return "loads a previous workspace";
}
