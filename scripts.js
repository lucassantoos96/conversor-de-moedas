const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConvert = document.querySelector(".currency-select-convert") // DESAFIO SUPREMO 





const convertValues = async () => {



    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")  

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,ARS-BRL").then(response => response.json())

 



    const dollarToday = data.USDBRL.high
    const euroTodday = data.EURBRL.high
    const libraTodday = data.GBPBRL.high
    const bitcoinTodday = data.BTCBRL.high
    const pesoArgTodday = data.ARSBRL.high
    const realTodday = 1.0



    if (currencySelectConvert.value == "dolar") { 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    if (currencySelectConvert.value == "euro") { 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    }

    if (currencySelectConvert.value == "libra") {  
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    if (currencySelectConvert.value == "bitcoin") { 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvert.value == "peso") { 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)

    }

    let x = document.querySelector(".input-currency").value

    if (currencySelectConvert.value == "real") {
        x = document.querySelector('.input-currency').value * realTodday
    }

    if (currencySelectConvert.value == "dolar") {
        x = document.querySelector(".input-currency").value * dollarToday
    }

    if (currencySelectConvert.value == "euro") {
        x = document.querySelector(".input-currency").value * euroTodday
    }

    if (currencySelectConvert.value == "libra") {
        x = document.querySelector(".input-currency").value * libraTodday
    }

    if (currencySelectConvert.value == "bitcoin") {
        x = document.querySelector(".input-currency").value * bitcoinTodday
    }

    if (currencySelectConvert.value == "peso") {
        x = document.querySelector(".input-currency").value * pesoArgTodday
    }


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(x / dollarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(x / euroTodday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP"
        }).format(x / libraTodday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(x / bitcoinTodday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BRL"
        }).format(x / realTodday)
    }

    if (currencySelect.value == "peso") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(x / pesoArgTodday)
    }




}




function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyNameConvert = document.querySelector(".currency-name-convert")  
    const currencyImageConvert = document.querySelector(".currency-img-to-convert")  

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
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/brasil 2.png"

    }

    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/arg.png"

    }

   


    if (currencySelectConvert.value == "dolar") {  
        currencyNameConvert.innerHTML = "Dólar Americano"
        currencyImageConvert.src = "./assets/eua.png"
    }

    if (currencySelectConvert.value == "real") {  
        currencyNameConvert.innerHTML = "Real Brasileiro"
        currencyImageConvert.src = "./assets/brasil 2.png"
    }

    if (currencySelectConvert.value == "libra") {  
        currencyNameConvert.innerHTML = "Libra"
        currencyImageConvert.src = "./assets/libra 1.png"
    }

    if (currencySelectConvert.value == "bitcoin") {    
        currencyNameConvert.innerHTML = "Bitcoin"
        currencyImageConvert.src = "./assets/bitcoin 1.png"
    }

    if (currencySelectConvert.value == "euro") {  
        currencyNameConvert.innerHTML = "Euro"
        currencyImageConvert.src = "./assets/euro.png"
    }

    if (currencySelectConvert.value == "peso") {  
        currencyNameConvert.innerHTML = "Peso Argentino"
        currencyImageConvert.src = "./assets/arg.png"
    }


    convertValues()

}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
currencySelectConvert.addEventListener("change", changeCurrency) // DESAFIO SUPREMO 
