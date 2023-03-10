# 馃 DOM Memory Game

En aquesta activitat crear脿s un joc de memoria amb el DOM, HTML i CSS.

## Objectius

- Manipular el DOM directament, afegint i eliminant elements.
- Fer servir CSS per donar estils als elements de la p脿gina.
- Afegir gestors d'esdeveniments (event handlers) per interactuar amb les accions que l'usuari faci a la p脿gina.
- Gestionar les dades del joc de manera ordenada i estructurada, separades de la visualitzaci贸
- Implementar la l貌gica de funcionament del joc de manera ordenada i estructurada, dividint el codi en tantes funcions com calgui.
- Separar la l貌gica de funcionament del codi de la visualitzaci贸.

## Configuraci贸

- `npm install` per instal路lar Tailwind CSS.
- `npm start` per a inicialitzar el compilador de Tailwind CSS.
- Obre `index.html` al navegador amb el Live Server de VS Code.

## Requisits b脿sics

- Crearem un joc de memoria amb 4 x 4 = 16 cartes (茅s a dir, 8 parelles).
  Les cartes estaran barrejades de manera aleat貌ria cada vegada que comencem un joc nou.
- Les cartes es presentaran cap per avall.
- Fer click a una carta li donar脿 la volta per mostrar-ne el contingut.
- Fer click en dues cartes que formin una parella far脿 que les cartes queduin descobertes.
- Si descobrim dues cartes que no formen una parella, les cartes tornaran a mostrar-se cap per avall autom脿ticament.
- El joc s'acabar脿 quan tots els parelles estiguin descobertes.

### 1. Preparaci贸 de la baralla

- [ ] Completa la funci贸 `generateCards`.

  - Aquesta funci贸 reb una mida `size` i genera una baralla de cartes amb `size` / 2 parelles.
  - Utilitza almenys un loop per a generar les cartes.
  - La baralla de cartes es guarda a la variable global `cards`.
  - Cada carta t茅 un `id` 煤nic i un valor de 1 a 8 (per parelles). 脡s a dir, la baralla contindr脿 dues cartes amb el valor 1, dues amb el valor 2, etc. fins al valor 8.
  - Pots generar les cartes de manera ordenada i despr茅s utilitzar la funci贸 `shuffle` per a barrejar la baralla (veure seg眉ent punt).

- [ ] Completa la funci贸 `shuffle`.

  - Aquesta funci贸 reb un array i ordena els seus elements de manera aleat貌ria.
  - Utilitza un loop descendent utilitzant una variable `i`. Selecciona una posici贸 aleat貌ria `j` entre 0 i `i` i intercanvia els elements de la posici贸 seleccionada `j` amb la posici贸 `i`. Aquesta operaci贸 es repeteix fins que tots els elements del array han estat intercanvats.
  - Utilitza la funci贸 [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) per a seleccionar un n煤mero aleat貌riament.
  - Utilitza la funci贸 [`Math.floor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) per a arrodonir el n煤mero aleatori.

### 2. Mostrar la baralla

![Mostrar la baralla](img/img1.png)

- [ ] Crea la quadr铆cula

  - Genera un contenidor grid de 4 x 4 a l'arxiu HTML
  - Aquest grid haur脿 d'estar posicionat al centre de la p脿gina

- [ ] Completa la funci贸 `showCards`.

  - Genera un element `div` per a cada carta de la baralla, i mostra'l dins del grid. D贸na a l'element una classe CSS `card`.
  - El contingut del `div` 茅s el valor de la carta.

- [ ] Afegeix un bot贸 "New Game".

  - Fer click a aquest bot贸 haur脿 de crear un joc nou.

- [ ] D贸na estils visuals al joc
  - L'estil 茅s lliure. Fes-ho com vulguis.

### 3. Donar la volta a les cartes

![Donar la volta a les cartes](img/img2.png)

- [ ] Marca les cartes com a descobertes.

  - Fer click en una carta ha de marcar-la com a "descoberta". Utilitza `handleCardClick` com a gestor de l'esdeveniment `click` de la carta.
  - Afegeix una propietat nova a cada objecte carta si ho necessites.
  - Completa la funci贸 `flipCard` per a fer aix貌.

- [ ] Visualitza la cara i el revers de cada carta

  - Ara mateix estem mostrant un n煤mero per cada carta.
  - Enlloc d'aix貌, s'hauria de mostrar el contingut de la carta nom茅s quan aquesta est脿 descoberta.
  - Per aix貌, farem que l'element visual que mostra la carta contingui dos elements:
    - Un element `div` amb una classe `back` que contindr脿 un color de fons.
    - Un element `div` amb una classe `front` que contindr脿 el valor de la carta.
    - Per tal de no mostrar mai el valor i el revers de la carta a la vegada, fem que els elements `back` i `front` tinguin una posici贸 `absolute` i que l'element `card` tingui una posici贸 `relative`.
  - Enlloc de mostrar un n煤mero, mostra-hi una imatge. Pots utilitzar les teves propies imatges (anomena els arxius `1.png`, `2.png`, etc.) per a una f脿cil identificaci贸. Tamb茅 pots utilitzar imatges de [Lorem Picsum](https://picsum.photos/) o un altre servei.

- [聽] Completa la funci贸 `updateCards`.

  - Aquesta funci贸 ha d'afegir o treure la classe `flipped` a cada carta, en funci贸 del seu estat (si est脿 descoberta o no).
  - Selecciona totes les cartes del DOM, i per a cada una de elles, comprova si la carta est脿 descoberta o no (mirant a l'array `cards`).
  - En fer click a cada carta, a m茅s de marcar-la com a descoberta, s'ha de cridar la funci贸 `updateCards` per a actualitzar-ne la visualitzaci贸.

- [ ] Afegeix estils
  - Quan una carta t茅 la classe `flipped`, s'hauria de veure nom茅s el `front` de la carta.
  - Quan una carta no t茅 la classe `flipped`, s'hauria de veure nom茅s el `back` de la carta.
  - Pots crear un efecte visual per a aix貌 utilitzant la propietat CSS `transform` i aplicant-hi una rotaci贸 [`rotateY`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY). Combina les rotacions de `0deg` i `180deg` en els elements `front` i `back` per crear l'efecte de girar una carta. Per tal de no mostrar la part del darrera d'un element HTML, utilitza la propietat [`backface-visibility: hidden;`](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility)
  - Utilitza [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) per a animar l'efecte de rotaci贸 de cada carta.

### 4. Aplica la l貌gica del joc al codi

![Cartes aparellades](img/img3.png)

- [ ] Nom茅s dues cartes poden estar descobertes al mateix temps.

  - Fes-ho a la funci贸 `flipCard`. Assegura't de donar la volta a una carta nom茅s si hi menys de dues cartes descobertes.

- [ ] Marca les cartes com a `matched` quan s'han trobat.

  - Completa la funci贸 `checkMatched` per a fer aix貌. Aquesta funci贸 s'ha de cridar cada cop que donem la volta a una carta.
  - Afegeix una propietat nova a cada objecte carta si ho necessites.
  - Hem trobat una parella si tenim dues cartes destapades i el seu valor es el mateix.
  - Si hem trobat una parella, les cartes s'han de marcar com a `matched`.
  - A la funci贸 `flipCard`, haur脿s de tenir en compte les cartes que ja han estat `matched`.

- [ ] Torna a tapar les cartes

  - Completa la funci贸 `flipBack` per a fer aix貌.
  - Aquesta funci贸 marca les cartes com a "no destapades" si n'hem destapat dues pero no s贸n parella.
  - No tinguis en compte les cartes `matched` com a cartes destapades.
  - Aquesta funci贸 s'ha de cridar autom脿ticament al cap d'un segon de destapar cada carta, utilitzant la funci贸 [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout).

- [ ] Afegeix un estil visual per a les cartes aparellades

  - Pots remarcar la vora amb un color diferent, mostrar una icona 鉁? o algun altre element visual.

- [ ] Comprova si s'han trobat totes les parelles

  - Cada cop que es faci click, cal comprovar si hem acabat el joc.
  - Hem acabat el joc si totes les cartes han estat aparellades.
  - Mostra un missatge de felicitaci贸 quan el joc s'hagi acabat.

### 5. Millora el joc (OPCIONAL)

- [ ] Afegeix un comptador de "n煤mero de moviments".
- [ ] Afegeix un comptador de temps.
- [ ] ...

## Recursos

- [MDN - Manipulating the DOM Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Plain JS - Common DOM Manipulation methods](https://plainjs.com/javascript/manipulation/)
- [Eloquent JavaScript - The DOM](https://eloquentjavascript.net/14_dom.html)
- [Eloquent JavaScript - Handling Events](https://eloquentjavascript.net/15_event.html)

## Notes

_Aquest 茅s un projecte d'estudiant creat a [CodeOp](http://CodeOp.tech), al bootcamp de Front End Development a Barcelona._
