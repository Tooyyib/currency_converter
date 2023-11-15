// let btn = document.getElementById("btn");

let select = document.querySelectorAll('.currency'),
input_currency = document.querySelectorAll('input_currency'),
output_currency = document.querySelectorAll('output_currency');



const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(resp => resp.json())
  .then((data) => {
    const entries = Object.entries(data)
    // all most all contries 
    // console.log(entries)
    // alert(`10 GBP = ${data.rates.USD} USD`);
    for(i =0; i < entries.length; i++){
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;

    }
  });


function converter (){
    let input_currency_val = input_currency.value;
    if(select[0].value != select[1].value){
        // alert("right")
        const host = 'api.frankfurter.app';
         fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
        .then(val => val.json())
        .then((val) => {
            output_currency.value= Object.value(val.rates)[0]
        // alert(`10 GBP = ${data.rates.USD} USD`);
  });
    }else{
        alert("please select two different currency")
    }
}














// btn.addEventListener("click", function(clicker) {
// let naira = document.getElementById("naira").Value;
// let dollar = document.getElementById("dollar")
// let euro = document.getElementById("euro")


// });
