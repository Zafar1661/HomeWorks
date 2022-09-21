var inn = "20808200400393"

var result = validity(inn)

function validity(inn){
    var firstDigit = inn[0]
    if (inn.length === 14){
        if (firstDigit !== 0 || firstDigit !== 1 || firstDigit !== 2) {
            console.log("Ваше ИНН правильное, вы прошли проверку")
        }else {
            console.log("Ваш ИНН неверный!!!")
        }
    }else {
        console.log("Ваш ИНН неверный")
    }
}
