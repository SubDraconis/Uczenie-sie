// 1. Deklarujemy zmienną wcześniej, żeby była widoczna w całym pliku
let mojeZadania;

if (localStorage.getItem("listazadan") === null) {
    mojeZadania = [];
} else {
    mojeZadania = JSON.parse(localStorage.getItem("listazadan"));
}

// 2. Tworzenie obiektu
const zadanie = {
    id: mojeZadania.length, // Dynamiczne ID na podstawie długości listy
    tekst: prompt("Co masz do zrobienia?"),
    pilne: confirm("Czy to zadanie jest pilne?")
};

// 3. Logika tablic
mojeZadania.push(zadanie);

const tylkoPilne = mojeZadania
    .filter(z => z.pilne === true)
    .map(z => z.tekst);

// 4. Zapis
localStorage.setItem("listazadan", JSON.stringify(mojeZadania));

// 5. Wyświetlanie (poprawione .length)
console.log(`Masz ${mojeZadania.length} zadań. Twoje pilne sprawy to: ${tylkoPilne}`);

// 7/10 od ai(gemini)