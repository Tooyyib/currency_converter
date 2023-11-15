const input = document.querySelector("input[type=text]")
const output = document.querySelector('h3')
const btn= document.querySelector('#btn')

const bitcoin = async ()=>{
    const output = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const facts = await output.json()
    return(facts.bpi.USD.rate_float)
}
 
 btn.addEventListener('click',async ()=>{
    let newPrice = await bitcoin ()
    output.textContent  = input.value* newPrice
 })