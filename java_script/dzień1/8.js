const koszyk = [
    { nazwa: "Chleb", cena: 5 },
    { nazwa: "Monitor", cena: 1000 },
    { nazwa: "Masło", cena: 7 },
    { nazwa: "Telefon", cena: 2500 }
]

const drogie = koszyk.filter(przedmiot => przedmiot.cena >100).map(przedmiot => przedmiot.nazwa)

console.log(drogie)