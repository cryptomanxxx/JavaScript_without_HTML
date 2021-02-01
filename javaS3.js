// gives you help regarding different functions.
function help() {
  var x =
    "1) Function help() gives you command help" + "<br>" +
    "2) Function example() gives you a worksheet with working functions. This function will clear everything previously entered" + "<br>" +
    "3) Function rand(n1,n2,e) returns an array with dimensions n1 and n2 and with random numbers and expected value e" + "<br>" +
    "4) Function round(x,z) rounds a number, 1D array or a 2D array x to z decimal points" + "<br>" +
    "5) Function array(z) returns a javascript array from the function's parameters z" + "<br>" +
    "6) Function rw(n) returns a 1D array with length n with a pure random walk" + "<br>" +
    "7) Function seq(a,b) gives you a 1D array with data from a to b" + "<br>" +
    "8) Function count(a,b) counts the number of elements b in array a. If parameter b is not specified then the count of a is return" + "<br>" +
    "9) Function ticker() gives you the ticker symbols for the 100 crypto currencies with the largest market cap" + "<br>" +
    "10) Function time(w) converts a unix timestamp w to a date string " + "<br>" +
    "11) Function crypto(t) gives you historial crypto currency price data for a specified ticker symbol string t" + "<br>" +
    "12) Function plot(z) gives you a plot of a 1D array z." + "<br>" +
    "13) Function clear() gives you a clean workspace" + "<br>" +
    "14) Function save(x) where x is a file name that ends with .html in enclosed in a string will save a copy of the current workspace locally" + "<br>" +
    "15) Function load() loads a html workspace file from a previous session" + "<br>" +
    "16) Function matrix(z) creates and displays a html table from a 1D or 2D dimensional array z and returns z" + "<br>" +
    "17) Function matrixMult(a,b) multiplies two matrices a and b" + "<br>" +
    "18) Function matrixInv(m) calculates the inverse of matrix m with gaussian elimination " + "<br>" +
    "19) Function matrixId(n) returns an identity matrix with n number of rows and columns" + "<br>" +
    "20) Function max(a) returns the maximum value of an array a" + "<br>" +
    "21) Function min(a) returns the minimum value of an array a" + "<br>" +
    "22) Function range(a) calculates the range (max - min) of an array a" + "<br>" +
    "23) Function median(a) calculates the median of an array a" + "<br>" +
    "24) Function sum(a) calculates the sum of a given array a" + "<br>" +
    "25) Function ev(a) calculates the expected value (arithmetic mean) of an array a" + "<br>" +
    "26) Function sse(a) calculates the sum of squared errors (sse) of an array a" + "<br>" +
    "27) Function variance(a, flag) calculates the variance of an array a. If flag = 0 then population. If flag = 1 then sample" + "<br>" +
    "28) Function stdev(a, flag) calculates the standard deviation of an array a. If flag = 0 then population. If flag = 1 then sample" + "<br>" +
    "29) Function covariance(array1, array2) calculates the covariance of two arrays" + "<br>" +
    "30) Function coeffvar(a) calculates the coefficient of variation for an array a" + "<br>" +
    "31) Function correlation(array1, array2) calculates the pearson's correlation coefficient for two arrays" + "<br>" +
    "32) Function getColumn(a,c) gives you a specific column c from a 2D array a" + "<br>" +
    "33) Function getRow(a,r) gives you a specific row r from a 2D array a" + "<br>" +
    "34) Function transpose(a) gives you the transpose of a 1D row array, a 1D column array or a 2D array a" + "<br>" +
    "35) Function LS(a,b) solves the least square equation for a 2D array a and a 1D column array b with matrix algebra" + "<br>" +
    "36) Function SHA256(s) returns the hash of a string s using the SHA-256 cryptographic hash algorithm" + "<br>" +
    "37) Function nRows(a) returns the number of rows in a 2D array a" + "<br>" +
    "38) Function nColumns(a) returns the number of columns in a 2D array a" + "<br>" +
    "Please note that an input that ends with : hiddes output from view" + "<br>" +
    "Please note that an input that starts with # is defined as text";
  return x;
}

// gives you a new worksheet with examples of different working functions 
function example() {
  clear();
  function createExample(a,b) {
     if(cc !== 1){ CreateInputDiv(); }
     CreateOutputDiv();
     document.getElementById("input" + cc).innerHTML = "#" + a;
     CreateInputDiv();
     CreateOutputDiv();
     document.getElementById("input" + cc).innerHTML = b;
     outId = "output" + cc;
     let result = eval(b);
     if(!toggleOrCheckIfFunctionCall())
     document.getElementById("output" + cc).innerHTML = result;   
  }
  createExample("Example-1. One random number between -1 and +1", "rand()");
  createExample("Example-2. A 1D array with 1 row and 5 columns with random numbers", "matrix(rand(1,5))");
  createExample("Example-3. A 1D array with 5 rows and 1 column with random numbers", "matrix(rand(5,1))");
  createExample("Example-4. A 2D array with 3 rows and 4 columns with random numbers", "matrix(rand(3,4))");
  createExample("Example-5. A 2D array with 3 rows and 4 columns with random numbers with expected value 0.5", "matrix(rand(3,4,0.5))");
  createExample("Example-6. Get a specific row from a 2D matrix", "matrix(getRow(rand(4,4),2))");
  createExample("Example-7. Get a specific column from a 2D matrix", "matrix(getColumn(rand(4,4),2))");
  createExample("Example-8. Get the transpose of a matrix", "transpose(rand(3,4))"); 
  createExample("Example-9. Get the transpose of a matrix with 1 row and 3 columns with random numbers", "transpose(rand(1,3))");
  createExample("Example-10. Get the transpose of a matrix with 3 rows and 1 column with random numbers", "transpose(rand(3,1))");
  createExample("Example-11. Plot a column from a random matrix", "plot(transpose(getColumn(rand(10,5),1)))");
  createExample("Example-12. Plot a row from a random matrix", "plot(getRow(rand(10,5),2))");
  createExample("Example-13. Plot historical price data for the crypto-currency bitcoin", "plot(crypto('BTC'))");
  createExample("Example-14. Plot a pure random walk", "plot(rw(50))");
  createExample("Example-15. Plot a random walk with an expected value of 0.1", "plot(rw(50,0.1))");
  createExample("Example-16. Get the inverse of a matrix with gaussian elimination", "matrixInv([[4,7],[2,6]])");
  createExample("Example-17. Multiply a matrix by its inverse", "matrixMult(matrixInv([[4,7],[2,6]]),matrix([[4,7],[2,6]]))");
  createExample("Example-18. Get a 4 dimensional identity matrix", "matrixId(4)");
  createExample("Example-19. Multiply an identity matrix with a 2 row and 4 column matrix", "matrixMult(matrixId(2),matrix([[1,2,3,4],[5,6,7,8]]))");
  createExample("Example-20. Get the expected value of an array", "ev([4,2,5,8,6])");
  createExample("Example-21. Get the expected value of a 1D random matrix", "ev(rand(1,25,0.5))");
  createExample("Example-22. Get the population standard deviation of an array", "stdev([4,2,5,8,6],0)");
  createExample("Example-23. Get the population variance of an array", "variance([4,2,5,8,6],0)");
  createExample("Example-24. Get the sample standard deviation of an array", "stdev([4,2,5,8,6],1)");
  createExample("Example-25. Get the sample variance of an array", "variance([4,2,5,8,6],1)");
  createExample("Example-26. Get the correlation of two arrays", "correlation([1, 2, 4, 5, 8],[5, 20, 40, 80, 100])");
  createExample("Example-27. Get the covariance of two arrays ", "covariance([5, 12, 18, 23, 45],[2, 8, 18, 20, 28])");
  createExample("Example-28. Get a 1D matrix with numbers from 0 to 25", "matrix(seq(0,25))");
  createExample("Example-29. Get the least square solution with matrix algebra", "LS([[-12,9],[13,14],[-5,-16]],transpose([-100,-5,14]))");
  createExample("Example-30. Get the hash of a string using the SHA-256 cryptographic hash algorithm", "SHA256('hello')");
  createExample("Example-31. Get the number of rows in 2D array", "nRows(rand(4,5))");
  createExample("Example-32. Get the number of columns in 2D array", "nColumns(rand(4,5))");
  return "";
}  

function SHA256(s){
 var chrsz  = 8;
 var hexcase = 0;
 function safe_add (x, y) {
 var lsw = (x & 0xFFFF) + (y & 0xFFFF);
 var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
 return (msw << 16) | (lsw & 0xFFFF);
 }
 function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
 function R (X, n) { return ( X >>> n ); }
 function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
 function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
 function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
 function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
 function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
 function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
 function core_sha256 (m, l) {
 var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
 var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
 var W = new Array(64);
 var a, b, c, d, e, f, g, h, i, j;
 var T1, T2;
 m[l >> 5] |= 0x80 << (24 - l % 32);
 m[((l + 64 >> 9) << 4) + 15] = l;
 for ( var i = 0; i<m.length; i+=16 ) {
 a = HASH[0];
 b = HASH[1];
 c = HASH[2];
 d = HASH[3];
 e = HASH[4];
 f = HASH[5];
 g = HASH[6];
 h = HASH[7];
 for ( var j = 0; j<64; j++) {
 if (j < 16) W[j] = m[j + i];
 else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
 T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
 T2 = safe_add(Sigma0256(a), Maj(a, b, c));
 h = g;
 g = f;
 f = e;
 e = safe_add(d, T1);
 d = c;
 c = b;
 b = a;
 a = safe_add(T1, T2);
 }
 HASH[0] = safe_add(a, HASH[0]);
 HASH[1] = safe_add(b, HASH[1]);
 HASH[2] = safe_add(c, HASH[2]);
 HASH[3] = safe_add(d, HASH[3]);
 HASH[4] = safe_add(e, HASH[4]);
 HASH[5] = safe_add(f, HASH[5]);
 HASH[6] = safe_add(g, HASH[6]);
 HASH[7] = safe_add(h, HASH[7]);
 }
 return HASH;
 }
 function str2binb (str) {
 var bin = Array();
 var mask = (1 << chrsz) - 1;
 for(var i = 0; i < str.length * chrsz; i += chrsz) {
 bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
 }
 return bin;
 }
 function Utf8Encode(string) {
 string = string.replace(/\r\n/g,"\n");
 var utftext = "";
 for (var n = 0; n < string.length; n++) {
 var c = string.charCodeAt(n);
 if (c < 128) {
 utftext += String.fromCharCode(c);
 }
 else if((c > 127) && (c < 2048)) {
 utftext += String.fromCharCode((c >> 6) | 192);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 else {
 utftext += String.fromCharCode((c >> 12) | 224);
 utftext += String.fromCharCode(((c >> 6) & 63) | 128);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 }
 return utftext;
 }
 function binb2hex (binarray) {
 var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
 var str = "";
 for(var i = 0; i < binarray.length * 4; i++) {
 str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
 hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8 )) & 0xF);
 }
 return str;
 }
 s = Utf8Encode(s);
 return binb2hex(core_sha256(str2binb(s), s.length * chrsz)).toUpperCase();
}
