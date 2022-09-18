for (var i = 0; i < 6; i++){
    var row = "";
    for (var j = 0; j < 10; j++) {
        if (i % 2 === 0){
            row += j % 2 === 0 ? " " : "#";
        }
        else {
            row += j % 2 === 0 ? "#" : " ";
        }
    }
    console.log(row)
}