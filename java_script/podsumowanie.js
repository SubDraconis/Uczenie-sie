// === 1. KOMENTARZE I WYŚWIETLANIE ===
// to jest odpowiednik # w Pythonie (komentarz liniowy)

/* to jest wieloliniowy komentarz 
(odpowiednik """ """ w Pythonie) */

// console.log to jest odpowiednik print() w Pythonie
console.log("To jest tekst w konsoli"); 

// === 2. ZMIENNE I STAŁE (PORÓWNANIE Z PYTHONEM) ===

// var - stary sposób (Python: x = 5). Unikaj go, bo "ucieka" z bloków kodu!
var staraZmienna = 5; 

// let - nowoczesny odpowiednik zmiennej (Python: x = 5). Można zmieniać wartość.
let x = 10; 
x = 15; // Modyfikacja działa

// const - stała (W Pythonie brak blokady, w JS nie możesz zmienić wartości).
const z = true; 
// z = false; // <-- TO BY DAŁO BŁĄD, dlatego jest zakomentowane.

// === 3. OPERACJE MATEMATYCZNE I METODY MATH ===
let a = 5;
let b = 10;

let sum = a + b;       // 15 (Dodawanie)
let diff = b - a;      // 5  (Odejmowanie)
let product = a * b;   // 50 (Mnożenie)
let quotient = b / a;  // 2  (Dzielenie)
let remainder = b % a; // 0  (Modulo - reszta z dzielenia)

let potega = a ** 2;             // 25 (Python: a ** 2)
let pierwiastek = Math.sqrt(16); // 4 (Python: math.sqrt(16))
let zaokraglenie = Math.round(4.6); // 5 (Python: round(4.6))

// === 4. PORÓWNYWANIE I LOGIKA (KLUCZOWE!) ===

// ==  Sprawdza tylko ZAWARTOŚĆ (5 == "5" to true)
// === Sprawdza ZAWARTOŚĆ I TYP (5 === "5" to false) - UŻYWAJ TEGO!
let isEqual = (a === b);    // false (Python: a == b)
let isNotEqual = (a !== b); // true  (Python: a != b)

// Operatory logiczne
let and = (a > 0) && (b < 20); // true (Python: a > 0 and b < 20)
let or = (a > 0) || (b > 20);  // true (Python: a > 0 or b > 20)
let not = !(a > b);            // true (Python: not a > b)

// === 5. INSTRUKCJE WARUNKOWE (IF, ELSE IF, ELSE) ===
if (a > b) {
    console.log("A jest większe");
} else if (a === b) {
    console.log("Są równe"); // Python: elif a == b:
} else {
    console.log("B jest większe");
}

// === 6. LISTY (ARRAYS) I ICH METODY ===
let owoce = ["Jabłko", "Banan"];

owoce.push("Mango");      // Dodaj na koniec (Python: .append())
owoce.pop();              // Usuń z końca (Python: .pop())
console.log(owoce.length); // Długość listy (Python: len(owoce))

// Pętla po liście (Python: for owoc in owoce:)
for (let owoc of owoce) {
    console.log("Owoc: " + owoc);
}

// === 7. METODY NA TEKSTACH (STRINGS) ===
let imie = "  Marek  ";
console.log(imie.trim());         // Usuwa spacje (Python: .strip())
console.log(imie.toUpperCase());  // Wielkie litery (Python: .upper())
console.log(`Cześć ${imie}`);     // F-string (Python: f"Cześć {imie}")

// === 8. PRZYPISYWANIE (SKRÓTY) ===
x += 5; // x = x + 5
x *= 2; // x = x * 2