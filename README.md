# FrontEnd Zaliczenie

Aplikacja typu Todo list przygotowana pod testowanie

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

## Porównanie bibliotek Mocha, Chai oraz Jasmine

1. **Mocha**
   Mocha jest to framework do testowania. Nie posiada on assertion library dlatego do jego pełnego działania potrzebujemy bibliotekę która umożliwi nam porównywanie wartości (np. Chai lub expect.js). Idealnie nadaje się do testowania back-endu.
2. **Chai**
   Chai jest to assertion library, który wymaga połączenia z frameworkiem aby moć uruchamiać testy (np. Mocha lub Karma)
3. **Jasmine**
   Jasmine jest to framework do testowania zawierający bibliotekę assert, co pozwala na szybsze wykorzystanie. Wykorzystałem ten framework ze względu na prostszą dokumentację, łatwiejszą integrację z React oraz lepsze przystosowanie do testowania DOM (z pomocą biblioteki jasmine-dom).
