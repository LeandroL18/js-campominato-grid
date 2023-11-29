// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// selezione griglia
const grid = document.getElementById("grid");

// selezione bottoni
const buttonPlay = document.getElementById("play");


// far apparire la griglia al click del bottone
buttonPlay.addEventListener("click",
    function(){
        grid.style.display = "block";
    }
)

// creazione celle
for(let i = 1; i <= 100; i++){
    const newElement = createMyElement("div","square");
    grid.append(newElement);
    newElement.append(i);

    // colorare la cella al suo click
    newElement.addEventListener("click",
    function(){
        newElement.classList.add("clicked");
        console.log("Cella " + i);
        }
    )
}




// funzione per la creazione dell'elemento
function createMyElement(tagtype, classname){
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement;
}