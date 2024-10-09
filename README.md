# FrontEnd Zaliczenie KM

Aplikacja typu Todo list przygotowana pod testowanie.

## 🛠️ Instalacja:

1. `git clone https://github.com/Kacegz/frontend-zaliczenie`

2. `cd frontend-zaliczenie`

3. `npm install`

4. `npm run dev`

## 🧪 Testowanie:

1. `git clone https://github.com/Kacegz/frontend-zaliczenie`

2. `cd frontend-zaliczenie`

3. `npm install`

4. `npm test`

## 🗺️ Tworzenie projektu

1. Inicjalizacja projektu za pomocą Vite
2. Dodanie funkcjonalności aplikacji oraz stylów
3. Dodanie bibliotek do testowania oraz konfiguracji
4. Dodanie testów

## 📊 Porównanie bibliotek Mocha, Chai oraz Jasmine

1. **Mocha**
   Mocha jest to framework do testowania. Nie posiada on assertion library dlatego do jego pełnego działania potrzebujemy bibliotekę która umożliwi nam porównywanie wartości (np. Chai lub expect.js). Idealnie nadaje się do testowania back-endu.
2. **Chai**
   Chai jest to assertion library, który wymaga połączenia z frameworkiem aby moć uruchamiać testy (np. Mocha lub Karma)
3. **Jasmine**
   Jasmine jest to framework do testowania zawierający bibliotekę assert. Oferuje wiele funkcji out of the box co czyni go idealnym rozwiązaniem do mniejszych projektów oraz pozwala na szybsze wykorzystanie. Jest także bardzo popularny w ekosystemie Angulara. Wykorzystałem ten framework ze względu na prostszą dokumentację, łatwiejszą integrację z React oraz lepsze przystosowanie do testowania DOM (z pomocą biblioteki jasmine-dom).

## ✅ Dobre praktyki testowania

1. Sprawdzanie jednego przypadku testowego jednym testem
2. Używanie klarownego nazewnictwa testów
3. Izolacja testów
4. Mockowanie zewnętrznych API oraz zapytań do baz danych
5. Unikanie zbędnych testów
