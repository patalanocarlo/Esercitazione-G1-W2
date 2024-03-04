/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

//JavaScript a differenza di CSS e HTML è un vero e proprio linguaggio di programmazione e serve a capire concretamente cosa fa un oggetto in un sito web.
//Javascript è formato da una serie di datatype principali i quali sono: Le stringhe, Numeri, valori booleani,null e undefined

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Carlo";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let Number1 = 12;
let Number2 = 20;
number3 = Number1 + Number2;
console.log("Risultato finale", number3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Patalano";
const Epicode = "Epicode";
//Epicode = "Diverso"; //Mi da errore sul browser nella sezione console perchè ho cambiato variabile a un elemento costante

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let Number5 = 4;
Number6 = x - Number5;
console.log("Sottrazione", Number6);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "Jhon";
console.log("Verifica:", name1 === name2);
let LowerCaseString1 = name1.toLowerCase;
let LowerCaseString2 = name2.toLowerCase;
console.log("Seconda Verifica:", LowerCaseString1 === LowerCaseString2);
