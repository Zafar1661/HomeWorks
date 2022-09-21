var numbers = [30,20]

var result = comparison(numbers)

function comparison(numbers){
    var first = numbers[0]
    var second = numbers[1]
    if (first > second){
       console.log(second)
   }else if(first < second){
        console.log(first)
    }else {
        console.log("Они равны")
    }
}