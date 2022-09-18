var triangleHeight = 10
var counter = 0

for (var i = 0; i < triangleHeight; i++){
        var row = "";
    for (var j = 0; j < counter; j++) {
        row += "*";
    }
    console.log(row)
    counter++
}