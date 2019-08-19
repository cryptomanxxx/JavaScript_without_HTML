function process(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13) { //Enter keycode
    run();
  }
}

function run() {
  var input = document.getElementById('inputbox');

  var lines = input.value.split('\n')

  var results = [];

  var parser = math.parser();
  for (var i = 0; i < lines.length; i++) {
    var q = trim(lines[i])
    if (q.length > 0) {
      try {
        results.push('= ' + math.format(parser.eval(q)));
      }
      catch (err) {
        results.push(err.toString());
      }
    }
    else {
      results.push("");
    }
  }

  var output = results.join('\n')
  
  $('#outputbox').val(output);
}

/**
 * Trim a string
 * http://stackoverflow.com/a/498995/1262753
 * @param str
 * @return {*|void}
 */
function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}