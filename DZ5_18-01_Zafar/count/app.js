function count(){
    var word = "Hello World"
    var letter = "h"
    var counter = 0
    var newWord = word.toLowerCase().split("")

    for (var i = 0; i < newWord.length; i++){
        if (newWord[i] === letter){
            counter++
        }
    }
    console.log('CountChar("' + word + '","' + letter + '") -> ' + counter)
}

var result = count()