const auto = {
    model : "awd czterywyciagnik",
    spalanie : 5
}
function obliczKoszt(pojazd,dystans){
    let ileSpali = (dystans/100) * pojazd.spalanie
    let koszt = ileSpali*6.50
    return koszt.toFixed(2)
}

console.log(`Przejazd modelem ${auto.model} kosztował ${obliczKoszt(auto,2121)} zł`)