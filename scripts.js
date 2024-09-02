const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConvert = document.querySelector(".currency-select-convert") // DESAFIO SUPREMO 


    


const convertValues = async () => {

  

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outros Valores 

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())

    console.log(data) // DESAFIO SUPREMO



    const dollarToday = data.USDBRL.high
    const euroTodday = data.EURBRL.high
    const libraTodday = data.GBPBRL.high
    const bitcoinTodday = data.BTCBRL.high
    const realTodday = 1.0



    if (currencySelect.value == "dolar" ) { // SE o select estiver selecionado o valor de dolar
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)

    }

    if (currencySelect.value == "euro") { // SE o select estiver selecionado o valor de euro 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroTodday)

    }

    if (currencySelect.value == "libra") { // SE o select estiver seleciondo o valor de libra 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / libraTodday)

    }

    if (currencySelect.value == "bitcoin") { // SE o select estiver seleciondo o valor de bitcoin
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinTodday)
    }
    
    if (currencySelect.value == "real") { // SE o select estiver seleciondo o valor de real
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    //DESAFIO SUPREMO 

   
}




function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyNameConvert = document.querySelector(".currency-name-convert")  // DESAFIO SUPREMO 
    const currencyImageConvert = document.querySelector(".currency-img-to-convert")  // DESAFIO SUPREMO 

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/eua.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"

    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = " Real Brasileiro "
        currencyImage.src = "./assets/brasil 2.png"

    }

    // DESAFIO SUPREMO 


    if (currencySelectConvert.value == "dolar") {  // DESAFIO SUPREMO 
        currencyNameConvert.innerHTML = "Dólar Americano"
        currencyImageConvert.src = "./assets/eua.png"
    }

    if (currencySelectConvert.value == "real") {  // DESAFIO SUPREMO 
        currencyNameConvert.innerHTML = "Real Brasileiro"
        currencyImageConvert.src = "./assets/brasil 2.png"
    }

    if (currencySelectConvert.value == "libra") {  // DESAFIO SUPREMO 
        currencyNameConvert.innerHTML = "Libra"
        currencyImageConvert.src = "./assets/libra 1.png"
    }

    if (currencySelectConvert.value == "bitcoin") {  // DESAFIO SUPREMO  
        currencyNameConvert.innerHTML = "Bitcoin"
        currencyImageConvert.src = "./assets/bitcoin 1.png"
    }

    if (currencySelectConvert.value == "euro") {  // DESAFIO SUPREMO 
        currencyNameConvert.innerHTML = "Euro"
        currencyImageConvert.src = "./assets/euro.png"
    }


    convertValues()

}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
currencySelectConvert.addEventListener("change", changeCurrency) // DESAFIO SUPREMO 
