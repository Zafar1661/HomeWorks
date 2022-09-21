var words = "а роза упала на лапу Азора"

var result = palindrop(words)

function palindrop(words){
    var lowerWord = words.toLowerCase()
    if (lowerWord === lowerWord.split("").reverse().join("")){
        console.log("Palindrop")
    } else {
        console.log("No palindrop")
    }
}
