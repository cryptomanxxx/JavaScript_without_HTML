// displays a html table and returns a 2D array
function matrix(z) {
  var table = document.createElement('table');
  table.setAttribute("class", "matrix");
  var tableBody = document.createElement('tbody');
  z.forEach(function (rowData) {
    var row = document.createElement('tr');
    rowData.forEach(function (cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);
  console.log(z);
  output.innerHTML = table.outerHTML;
  return z;
}

// calculates the inverse of matrix m with gaussian elimination 
function matrixInv(m) {
  //if the matrix isn't square: exit (error)
  if (m.length !== m[0].length) { return; }

  //create the identity matrix (I), and a copy (C) of the original
  var i = 0, ii = 0, j = 0, dim = m.length, e = 0, t = 0;
  var I = [], C = [];
  for (i = 0; i < dim; i += 1) {
    // Create the row
    I[I.length] = [];
    C[C.length] = [];
    for (j = 0; j < dim; j += 1) {

      //if we're on the diagonal, put a 1 (for identity)
      if (i == j) { I[i][j] = 1; }
      else { I[i][j] = 0; }

      // Also, make the copy of the original
      C[i][j] = m[i][j];
    }
  }

  // Perform elementary row operations
  for (i = 0; i < dim; i += 1) {
    // get the element e on the diagonal
    e = C[i][i];

    // if we have a 0 on the diagonal (we'll need to swap with a lower row)
    if (e == 0) {
      //look through every row below the i'th row
      for (ii = i + 1; ii < dim; ii += 1) {
        //if the ii'th row has a non-0 in the i'th col
        if (C[ii][i] != 0) {
          //it would make the diagonal have a non-0 so swap it
          for (j = 0; j < dim; j++) {
            e = C[i][j];       //temp store i'th row
            C[i][j] = C[ii][j];//replace i'th row by ii'th
            C[ii][j] = e;      //repace ii'th by temp
            e = I[i][j];       //temp store i'th row
            I[i][j] = I[ii][j];//replace i'th row by ii'th
            I[ii][j] = e;      //repace ii'th by temp
          }
          //don't bother checking other rows since we've swapped
          break;
        }
      }
      //get the new diagonal
      e = C[i][i];
      //if it's still 0, not invertable (error)
      if (e == 0) { return }
    }

    // Scale this row down by e (so we have a 1 on the diagonal)
    for (j = 0; j < dim; j++) {
      C[i][j] = C[i][j] / e; //apply to original matrix
      I[i][j] = I[i][j] / e; //apply to identity
    }

    // Subtract this row (scaled appropriately for each row) from ALL of
    // the other rows so that there will be 0's in this column in the
    // rows above and below this one
    for (ii = 0; ii < dim; ii++) {
      // Only apply to other rows (we want a 1 on the diagonal)
      if (ii == i) { continue; }

      // We want to change this element to 0
      e = C[ii][i];

      // Subtract (the row above(or below) scaled by e) from (the
      // current row) but start at the i'th column and assume all the
      // stuff left of diagonal is 0 (which it should be if we made this
      // algorithm correctly)
      for (j = 0; j < dim; j++) {
        C[ii][j] -= e * C[i][j]; //apply to original matrix
        I[ii][j] -= e * I[i][j]; //apply to identity
      }
    }
  }
  console.log(I);  // C should be the identity and matrix I should be the inverse:
  return matrix(round(I, 2));
}

// multiply two matricies
function matrixMult(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
    bNumRows = b.length, bNumCols = b[0].length,
    m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  var d = round(m, 2);
  return matrix(d);
}

// creates an identity matrix with n number of rows and columns
function matrixId(n) {
  var data = Array.from(Array(n), () => new Array(n));
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i === j) { data[i][j] = 1; }
      else { data[i][j] = 0; }
    }
  }
  return matrix(data);
}

// returns the maximum value of an array
function max(array) {
  return Math.max.apply(null, array);
}

// returns the minimum value of an array
function min(array) {
  return Math.min.apply(null, array);
}

// calculates the range of an array
function range(array) {
  return max(array) - min(array);
}

// calculates the median of an array
function median(array) {
  array.sort(function (a, b) { return a - b; });
  var mid = array.length / 2;
  return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
}

// calculates the sum of a given array
function sum(array) {
  var z = 0;
  for (var i = 0; i < array.length; i++) {
    z = z + array[i];
  }
  console.log(z);
  return z;
}

// calculates the expected value (arithmetic mean) of an array
function ex(array) {
  return sum(array) / array.length;
};

// calculates the sum of squared errors (sse) of an array
function sse(array) {
  var mean = ex(array);
  var sum = 0;
  var i = array.length;
  var tmp;
  while (--i >= 0) {
    tmp = array[i] - mean;
    sum += tmp * tmp;
  }
  return sum;
};

// calculates the variance of an array. If flag = 0 then population. If flag = 1 then sample. 
function variance(array, flag) {
  if (flag == undefined) { flag = 1; }
  return sse(array) / (array.length - (flag ? 1 : 0));
};

// calculates standard deviation of an array. If flag = 0 then population. If flag = 1 then sample. 
function stdev(array, flag) {
  if (flag == undefined) { flag = 1; }
  return round(Math.sqrt(variance(array, flag)));
};

// calculates the covariance of two arrays
function covariance(array1, array2) {
  var u = ex(array1);
  var v = ex(array2);
  var arr1Len = array1.length;
  var sq_dev = new Array(arr1Len);
  for (var i = 0; i < arr1Len; i++)
    sq_dev[i] = (array1[i] - u) * (array2[i] - v);
  return sum(sq_dev) / (arr1Len - 1);
};

// calculates the coefficient of variation for an array
function coeffvar(array) {
  return stdev(array, 1) / ex(array);
};

// calculates the pearson's correlation coefficient
function corr(array1, array2) {
  return round(covariance(array1, array2) / stdev(array1, 1) / stdev(array2, 1));
};

// gives you help regarding different functions. Add all the above functions to help
function help() {
  var x =
    "1) Function help() gives you command help" + "<br>" +
    "2) Function round(x,z) rounds a number, 1D array or a 2D array x to z decimal points" + "<br>" +
    "3) Function array(z) returns a javascript array from function's parameters z" + "<br>" +
    "4) Function arrayMult(d1,d2) multiply two arrays d1 and d2" + "<br>" +
    "5) Function rand(n) returns a 1D array with length n with random numbers between -1 and 1" + "<br>" +
    "6) Function rw(n) returns a 1D array with length n with a pure random walk" + "<br>" +
    "7) Function seq(a,b) gives you a 1D array with data from a to b" + "<br>" +
    "8) Function count(a,b) counts the number of elements b in array a. If parameter b is not specified then the count of a is return" + "<br>" +
    "9) Function ticker() gives you the ticker symbols for the 100 crypto currencies with the largest market cap" + "<br>" +
    "10) Function time(w) converts a unix timestamp w to a date string " + "<br>" +
    "11) Function crypto(ticker) gives you historial crypto currency price data for a specified ticker symbol string" + "<br>" +
    "12) Function plot(z) gives you a plot of a 1D array z." + "<br>" +
    "13) Function clear() gives you a clean workspace" + "<br>" +
    "14) Function save(x) where x is a file name that ends with .html in enclosed in a string will save a copy of the current workspace locally" + "<br>" +
    "15) Function load() loads a html workspace file from a previous session" + "<br>" +
    "16) Function matrix(z) creates and displays a html table from a 2D array z and returns z" + "<br>" +
    "17) Function matrixInv(m) calculates the inverse of matrix m with gaussian elimination " + "<br>" +
    "18) Function matrixMult(a,b) multiplies two matrices a and b" + "<br>" +
    "19) Function matrixId(n) returns an identity matrix with n number of rows and columns" + "<br>" +
    "20) Function max(array) returns the maximum value of an array" + "<br>" +
    "21) Function min(array) returns the minimum value of an array" + "<br>" +
    "22) Function range(array) calculates the range (max - min) of an array" + "<br>" +
    "23) Function median(array) calculates the median of an array" + "<br>" +
    "24) Function sum(array) calculates the sum of a given array" + "<br>" +
    "25) Function ex(array) calculates the expected value (arithmetic mean) of an array" + "<br>" +
    "26) Function sse(array) calculates the sum of squared errors (sse) of an array" + "<br>" +
    "27) Function variance(array, flag) calculates the variance of an array. If flag = 0 then population. If flag = 1 then sample" + "<br>" +
    "28) Function stdev(array, flag) calculates the standard deviation of an array. If flag = 0 then population. If flag = 1 then sample" + "<br>" +
    "29) Function covariance(array1, array2) calculates the covariance of two arrays" + "<br>" +
    "30) Function coeffvar(array) calculates the coefficient of variation for an array" + "<br>" +
    "31) Function corr(array1, array2) calculates the pearson's correlation coefficient for two arrays" + "<br>" +
    "Please note that an input that ends with : hiddes output from view" + "<br>" +
    "Please note that an input that starts with # is defined as text";
  return x;
}
