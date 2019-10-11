# JavaScript_without_HTML
A basic JavaScript command execution web editor where you can run your own user defined JavaScript functions from. I have at the moment created 20 user defined functions on top of the functions required to get the web editor to work: 

1) Function help() gives you command help
2) Function round(x,z) rounds a number, 1D array or a 2D array x to z decimal points
3) Function array(z) returns a javascript array from the function's parameters z
4) Function arrayMult(d1,d2) multiply two arrays d1 and d2
5) Function rand(n) returns a 1D array with length n with random numbers between -1 and 1
6) Function rw(n) returns a 1D array with length n with a pure random walk
7) Function seq(a,b) gives you a 1D array with data from a to b
8) Function sum(a) gives you a sum of a 1D array a
9) Function count(a,b) counts the number of elements b in array a. If parameter b is not specified then the count of a is return
10) Function ticker() gives you the ticker symbols for the 100 crypto currencies with the largest market cap
11) Function time(w) converts a unix timestamp w to a date string
12) Function crypto(ticker) gives you historial crypto currency price data for a specified ticker symbol string
13) Function plot(z) gives you a plot of a 1D array z.
14) Function clear() gives you a clean workspace
15) Function save(x) where x is a file name that ends with .html in enclosed in a string will save a copy of the current workspace locally
16) Function load() loads a html workspace file from a previous session
17) Function matrix(z) creates and displays a html table from a 2D array z and returns z
18) Function matrixInv(m) calculates the inverse of matrix m with gaussian elimination
19) Function matrixMult(a,b) multiplies two matrices a and b
20) Function matrixId(n) returns an identity matrix with n number of rows and columns.

An input that ends with : hiddes output from view and an input that starts with # is defined as text.
Please note that matrix function does not currently work on an re-evaluated input line. I will try to solve this problem.  

You can fork or clone the code and write and add your own user defined JavaScript functions that you want to run in the web editor.
![github](https://user-images.githubusercontent.com/48676920/65815971-73a66580-e1f6-11e9-8814-0c2babd9706b.JPG)
