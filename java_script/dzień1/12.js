if (localStorage.getItem('uzytkownik') === null) {
    // Jeśli nie ma użytkownika - tworzymy go
    const nowyUzytkownik = {
        imie: prompt("Jak masz na imię?"),
        wizyty: 1
    };
    
    // ZAPISUJEMY (tego brakowało)
    localStorage.setItem('uzytkownik', JSON.stringify(nowyUzytkownik));
    console.log(`Cześć ${nowyUzytkownik.imie}! Zostałeś zarejestrowany.`);

} else {
    // Jeśli użytkownik istnieje - wczytujemy go
    let uzytkownik = JSON.parse(localStorage.getItem('uzytkownik'));
    
    uzytkownik.wizyty++; // Zwiększamy licznik
    
    console.log(`Witaj ponownie ${uzytkownik.imie}! To Twoja ${uzytkownik.wizyty} wizyta.`);
    
    // ZAPISUJEMY ZMIANY (tutaj dodałem klucz 'uzytkownik')
    localStorage.setItem('uzytkownik', JSON.stringify(uzytkownik));
}