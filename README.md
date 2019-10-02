# JavaScript_without_HTML
A basic JavaScript command execution web editor where you can run your own user defined JavaScript functions from. I have at the moment created 12 user defined functions (on top of the functions required to get the web editor to work) just to show the basic concept: 

1) Function help() gives you command help
2) Function rand(n) gives you a 1D array with length n with random numbers between -1 and 1
3) Function rw(n) gives you a 1D array with length n with a pure random walk
4) Function seq(a,b) gives you a 1D array with data from a to b
5) Function sum(a) gives you a sum of a 1D array a
6) Function count(a,b) counts the number of elements b in array a. If parameter b is not specified then the count of a is return
7) Function ticker() gives you the ticker symbols for the 100 crypto currencies with the largest market cap
8) Function crypto(ticker) gives you historial crypto currency price data for a specified ticker symbol string for example "BTC"
9) Function plot(z) gives you a plot of a 1D array z.
10) Function clear() gives you a clean workspace
11) Function save(x) where x is a file name string that ends with .html (for example "workspace1.html" saves a html file of the current workspace session locally
12) Function load() loads a html workspace file from a previous session

Please note that an input that ends with a colon : hiddes long output from view and that an input that starts with # is defined as text.

Currently the colon and text notation does not work if you re-evaluate input by for example putting in 5+5 and press enter and then go back and put in 5+5: or #5+5. It will unfortunatly give you errors. I will try to fix this or maybe someone can help me fix this?

You can fork or clone the code and write and add your own user defined JavaScript functions that you want to run in the web editor.

![github](https://user-images.githubusercontent.com/48676920/65815971-73a66580-e1f6-11e9-8814-0c2babd9706b.JPG)
