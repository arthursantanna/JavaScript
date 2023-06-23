// utilizando o spread, for e switch case

function soma(...valores) {
    let res = 0
    for (let i = 0; i < valores.length; i++) {
        res += valores[i]  
    }
    switch (res) {
        case 5:
            console.log("ano e mês do seu niver")
            break;
        case 3:
            console.log("dia do seu niver")
            break;
    
        default:
            break;
    }
    console.log(res + typeof(res))
}
soma(2, 3)