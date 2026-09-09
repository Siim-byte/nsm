if (true){
    //tehakse mingi tegevus
}
else if (false){
    //kontrollitakse järgmist avaldist, kui on tõene, siis 
    // tehajse alternatiivtegevus
}
else {
    //kui avaldis ei täitu tehakse mingit muyuud tegevust
}

const month: number = 9
let monthName: string
switch (month) {
    case 1:
        monthName = "jaanuar";
        break;
    case 5:
        monthName = "mai";
        break;
    case 9:
        monthName = "september";
        break;

    default:
        monthName = "unknown";
        break;
}
console.log(monthName)

let isThisOddOrEven = 9
let oddEvenBool = isThisOddOrEven % 2 == 0 ? "even" : "odd";
console.log(oddEvenBool)

//loogilised operaatorid
if (month && monthName) {
    console.log("on mõlemad")
}
if (month || monthName) {
    console.log("On üks või teine")
}
if (!month) {
    console.log("kuu arv puudub")
}
