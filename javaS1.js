// counts the number of input divs created
function increment() {
  increment.n = increment.n || 0;
  return ++increment.n;
}

// output has been assigned previously
function toggleOrCheckIfFunctionCall(newValue) {
  if (newValue != undefined || newValue != null) {
    isFunctionCall = newValue || false;
  }
  return isFunctionCall;
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
  console.log("input" + cc + " div created");
  input.focus();
}

// creates an output div 
function CreateOutputDiv() {
  output = document.createElement("div");
  output.setAttribute("id", "output" + cc);
  output.setAttribute("class", "output");
  output.setAttribute("contenteditable", "false");
  document.getElementById('calc').appendChild(output);
  console.log("output" + cc + " div created");
}

// handles the input, output and does the expression parsing
function parse(e1, e2) {
  if (e1.keyCode == 13) { // keycode for enter 
    event.preventDefault();
    inId = e2.id;
    console.log("inId = " + inId);
    var inz = document.getElementById(inId).innerText;
    outId = "output" + inId.substring(5);
    toggleOrCheckIfFunctionCall(false);
    console.log("outId = " + outId);
    try {
      // if 1 = a output div does not exist (new input line) and the input does not contain a # or colon 
      if (!document.getElementById(outId) && inz.indexOf('#') == -1 && inz.indexOf(':') == -1) {
        CreateOutputDiv();
        console.log("new input if 1 = " + inz);
        let result = eval(inz);
        if(!toggleOrCheckIfFunctionCall())
        document.getElementById(outId).innerHTML = result;
        CreateInputDiv();
      }
      // if 2 = a output div does not exist (new input line) and the input contains a # = text input   
      else if (!document.getElementById(outId) && inz.indexOf('#') > -1) {
        console.log("new input line with hash if 2");
        CreateOutputDiv();
        document.getElementById(outId).hidden = true;
        CreateInputDiv();
      }
      // if 3 = a output div does not exist (new input line) and the input contains a colon = hide output from view 
      else if (!document.getElementById(outId) && inz.indexOf(':') > -1) {
        var inz = inz.replace(/:/g, '');
        console.log("new input line with colon if 3 = " + inz);
        outz = eval(inz);
        CreateOutputDiv();
        document.getElementById(outId).hidden = true;
        CreateInputDiv();
      }
      // if 4 = a output div exist (re-evaluated input) and the input does not contain a # or colon 
      else if (document.getElementById(outId) && inz.indexOf('#') == -1 && inz.indexOf(':') == -1) {
        console.log("re-evaluated input without colon or hash if 4 = " + inz);
        document.getElementById(outId).hidden = false;
        let result = eval(inz);
        if(!toggleOrCheckIfFunctionCall())
        document.getElementById(outId).innerHTML = result;

        // set focus to the input after revalue input line
        var ref1 = 1 + + inId.substring(5);
        var ref2 = "input" + ref1;

        // if an input div does not exist then create one = try and catch error will not work without this line
        if(!document.getElementById(ref2)){CreateInputDiv();} 
 
        console.log("refocus = " + ref2);
        document.getElementById(ref2).focus();
      }
      // if 5 = a output div exist (re-evaluated input) and the input contains a # = text input 
      else if (document.getElementById(outId) && inz.indexOf('#') > -1) {
        document.getElementById(outId).hidden = true;
        console.log("re-evaluated input with hash if 5");

        // set focus to the input after revalue input line
        var ref1 = 1 + + inId.substring(5);
        var ref2 = "input" + ref1;
        console.log("refocus = " + ref2);
        document.getElementById(ref2).focus();
      }
      // if 6 = a output div exist (re-evaluated input) and the input contains a colon =  hide output from view 
      else if (document.getElementById(outId) && inz.indexOf(':') > -1) {
        document.getElementById(outId).hidden = true;
        var inz = inz.replace(/:/g, '');
        console.log("new input line with colon if 6 = " + inz);
        outz = eval(inz);

        // set focus to the input after revalue input line
        var ref1 = 1 + + inId.substring(5);
        var ref2 = "input" + ref1;
        console.log("refocus = " + ref2);
        document.getElementById(ref2).focus();
      }
    }
    catch (err) {
      console.log("err = " + err);
      console.log("error = " + outId);
      document.getElementById(outId).innerHTML = err;
    }
  }
}

// a random numbers between -1 and 1 with dimensions n1 and n2 and expected value e
function rand(n1,n2,e) {
  if (e == undefined) { e = 0; }
  if (n1 == undefined && n2 == undefined) { return Math.random() * 2 - 1; }
  var data = Array.from(Array(n1),() => new Array(n2)); 
  // benefit from creating array this way is a.length = number of rows and a[0].length = number of columns 
  for (var i = 0; i < n1; i++) {
  for (var j = 0; j < n2; j++) {
    data[i][j] = e + Math.random() * 2 - 1;
  }
  }
  return round(data,5);
}

// rounds a number, a 1D or a 2D array array x to z decimal points
function round(x, z) {
  if (z == undefined) { z = 2; }
  console.log("type of = " + typeof (x));
  if (typeof (x) == "number") { x = x.toFixed(z) }
  else if (x[0].length == undefined) { // 1D array
    for (var i = 0; i < x.length; i++) {
      x[i] = parseFloat(x[i].toFixed(z));
    }
  } else
    for (var i = 0; i < x.length; i++) { // 2D array 
      for (var j = 0; j < x[0].length; j++) {
        x[i][j] = parseFloat(x[i][j].toFixed(z));
      }
    }
  return x;
}

// creates an array from the functions's parameters 
function array() {
n = arguments.length; 
console.log("n = " + n);  
var data = Array.from(Array(1),() => new Array(n));
// the benefit from creating array this way is a.length = number of rows and a[0].length = number of columns  
for (var i = 0; i < n; i++) { data[0][i] = arguments[i];}
return matrix(data); 
}

// an array with a random walk with expected value ex 
function rw(n,ex) {
  if (ex == undefined) { ex = 0; }
  var x = [];
  x[0] = 100;
  for (var i = 1; i < n; i++) {
    x[i] = ex + x[i - 1] + Math.random() * 2 - 1;
  }
  var xx = round(x, 2);
  console.log(xx);
  return xx; 
}

// an array with data from a to b
function seq(a, b) {
  var data = Array.from(Array(1),() => new Array(b-a+1));
  // the benefit from creating array this way is a.length = number of rows and a[0].length = number of columns  
  for (var i = 0; i < data[0].length; i++) {
    data[0][i]= a + i;
  }
  return matrix(data);
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
function crypto(t) {
  var ApiKey = "ddd85b386e1a7c889e468a4933f75f22f52b0755b747bdb637ab39c88a3bc19b";
  var urlA = "https://min-api.cryptocompare.com/data/histoday?fsym=" + t + "&tsym=USD&limit=1000&api_key=" + ApiKey;

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
  document.getElementById(outId).innerHTML = "";
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
  toggleOrCheckIfFunctionCall(true);
  Plotly.newPlot(outId, data, layout, { displayModeBar: false, staticPlot: true });
}

// clears the workspace
function clear() {
  event.preventDefault();
  increment.n = 0;
  var zz = document.getElementById('calc');
  while (zz.firstChild) { zz.removeChild(zz.firstChild); };
  console.clear();
  CreateInputDiv(); 
  return "";
}

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
  return "";
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
