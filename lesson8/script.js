let a = 5
let b = 6
const c = 7

console.log(b)
console.log(a)
console.log(c)
let nameVar = "Zafar";
let nameLet = 'Zafar';

console.log()

nameVar = "Zafarbek"
nameLet = "Zafarbek"

var customer = {
    Name: "Zafar",
    Surname: "Absatarov",
    Account: {
        No: 4234234234234,
        Currency: "KGS",
        Balance: "384 345,25"
    },
    Card: 1
}

console.log(`Уважаемый ${customer.Name} ${customer.Surname}. Ваш счет ${customer.Account.No} заблокирован. Баланс ${customer.Account.Balance} ${customer.Account.Currency} `)

console.log([1,2,3].join())

function myJoin(array, separator){
    let result = "";
    separator = separator || ","
    for (let i = 0; i < array.length; i++) {
        result += array[i] + (i === (array.length - 1) ? "" : separator);
    }
    return result
}

console.log(myJoin([1,2,3]))


console.log((customer.Card && customer.Card.CardNo) ?? "Card Not Found")

const getDefaultSeparator = () => " | "
//
// function configureHttp(){
//     const httpProtokol = arguments[0];
//     const httpVerb = arguments[1];
//     const headers = [...armguments].slice(2);
//     return {
//         Protocol: httpProtokol,
//         Verb: httpVerb,
//         Headers: headers
//     }
// }
//
// console.log(configureHttp("HTTP", "GET", ":bearer54534543534534", 'ContentType: "application/json"', "Encoding: UTF-8" ))


function configureHttp(httpProtokol,httpVerb, ...headers){
    return {
        Protocol: httpProtokol,
        Verb: httpVerb,
        Headers: headers
    }
}

const backendConfigurationSettings = configureHttp("HTTP", "GET", "TOKEN:bearer54534543534534", 'ContentType: "application/json"', "Encoding: UTF-8" )

backendConfigurationSettings.UserCertificate = backendConfigurationSettings.Protocol === "HTTPS";

console.log(configureHttp(backendConfigurationSettings))