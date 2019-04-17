function process(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
        run();
    }
}

function run() {
    var input = document.getElementById('inputbox');
    var output = eval(inputbox.value);
    if (output == undefined) {
        output = "";
    }
    $('#outputbox').append(output + "<br/>");
}


function Matrix(d) {
    var data = d;
    var html = document.createElement('table');
    html.setAttribute("border", "1");
    html.style.borderCollapse = "collapse";

    for (var i = 0; i < data.length; i++) {
        html += '<tr>';
        for (var j = 0; j < data[i].length; j++) {
            html += '<td>' + data[i][j] + '</td>';
        }
        html += "</tr>";
    }
    $('#outputbox').append(html);

}
