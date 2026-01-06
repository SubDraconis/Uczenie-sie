const statystyki = {
    sila: 15,
    inteligencja: 25,
    zrecznosc: 10,
    szczescie: 5
}

let nowe = Object.values(statystyki)
let nowes = nowe.reduce((suma, n) => suma + n, 0)
console.log(nowes)