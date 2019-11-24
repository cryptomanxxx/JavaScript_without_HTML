# JavaScript_without_HTML
A basic JavaScript command execution web editor where you can run your own user defined JavaScript functions from. The editor currently has 34 user defined functions on top of the functions required to get the web editor to work: 

1) Function help() gives you command help
2) Function example() gives you a worksheet with all working functions. This function will clear everything previously entered
3) Function rand(n1,n2,e) returns an array with dimensions n1 and n2 and with random numbers and expected value e
4) Function round(x,z) rounds a number, 1D array or a 2D array x to z decimal points
5) Function array(z) returns a javascript array from the function's parameters z
6) Function rw(n) returns a 1D array with length n with a pure random walk
7) Function seq(a,b) gives you a 1D array with data from a to b
8) Function count(a,b) counts the number of elements b in array a. If parameter b is not specified then the count of a is return
9) Function ticker() gives you the ticker symbols for the 100 crypto currencies with the largest market cap
10) Function time(w) converts a unix timestamp w to a date string 
11) Function crypto(t) gives you historial crypto currency price data for a specified ticker symbol string t
12) Function plot(z) gives you a plot of a 1D array z.
13) Function clear() gives you a clean workspace
14) Function save(x) where x is a file name that ends with .html in enclosed in a string will save a copy of the current workspace locally
15) Function load() loads a html workspace file from a previous session
16) Function matrix(z) creates and displays a html table from a 1D or 2D dimensional array z and returns z
17) Function matrixMult(a,b) multiplies two matrices a and b
18) Function matrixInv(m) calculates the inverse of matrix m with gaussian elimination 
19) Function matrixId(n) returns an identity matrix with n number of rows and columns
20) Function max(a) returns the maximum value of an array a
21) Function min(a) returns the minimum value of an array a
22) Function range(a) calculates the range (max - min) of an array a
23) Function median(a) calculates the median of an array a
24) Function sum(a) calculates the sum of a given array a
25) Function ev(a) calculates the expected value (arithmetic mean) of an array a
26) Function sse(array) calculates the sum of squared errors (sse) of an array
27) Function variance(array, flag) calculates the variance of an array. If flag = 0 then population. If flag = 1 then sample
28) Function stdev(array, flag) calculates the standard deviation of an array. If flag = 0 then population. If flag = 1 then sample
29) Function covariance(array1, array2) calculates the covariance of two arrays
30) Function coeffvar(array) calculates the coefficient of variation for an array
31) Function correlation(array1, array2) calculates the pearson's correlation coefficient for two arrays
32) Function getColumn(a,c) gives you a specific column c from a 2D array a
33) Function getRow(a,r) gives you a specific row r from a 2D array a
34) Function transpose(a) gives you the transpose of a 1D row array, a 1D column array or a 2D array a

Please note that an input that ends with : hiddes output from view
Please note that an input that starts with # is defined as text  

You can fork or clone the code and write and add your own user defined JavaScript functions that you want to run in the web editor.
![github](https://user-images.githubusercontent.com/48676920/65815971-73a66580-e1f6-11e9-8814-0c2babd9706b.JPG)
