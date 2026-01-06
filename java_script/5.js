let cel = prompt("Na co zbierasz pieniądze?");
let stanKonta = Number(prompt("Ile masz już odłożone?"));
let cenaCelu = Number(prompt("Ile kosztuje " + cel + "?"));
let brakujaca_kwota = cenaCelu-stanKonta
if (brakujaca_kwota <=0){
    console.log(`Gratulacje! Możesz już kupić ${cel}!`)
}
else {
    console.log(`"Na cel ${cel} brakuje Ci jeszcze ${brakujaca_kwota} zł!`)
}