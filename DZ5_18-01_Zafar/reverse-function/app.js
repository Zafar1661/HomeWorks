var number = "123456789" ;

var result = myFunction(number);

function myFunction(number) {
    if (isNaN(number)){
        console.log("Неверное число")
    }else {
        var result = number.split("").reverse().join("")
        console.log(result)
    }

}