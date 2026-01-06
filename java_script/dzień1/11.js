const profil = { imie: "Michał", poziom: 5 };
localStorage.setItem('gracz', JSON.stringify(profil));
let gracz_t = localStorage.getItem("gracz")
let gracz = JSON.parse(gracz_t)

console.log(gracz)