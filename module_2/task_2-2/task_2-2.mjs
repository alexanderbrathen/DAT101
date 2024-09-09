"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let resultat1 = 2 + 3 * 2 - 4 * 6;
let resultat2 = 2 + (3 * (2 - 4) * 6);

printOut(resultat2.toString());
printOut("The answer is: " + resultat2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meter = 25;
let centimeter = 34; 
let millimeter = meter * 1000 + centimeter * 10;
let inches = millimeter / 25.4;


printOut(inches.toFixed(2).toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45;
let totalMinutes = days * 24 * 60 + hours * 60 + minutes + seconds / 60;

printOut(totalMinutes.toFixed(0).toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalMin = 6322.52;
let timMinSek = 60;
let timDag = 24;
let dager2 = Math.floor(totalMin / timMinSek / timDag); //math.floor runder jeg ned. Her får jeg 4 dager uten desimaler.



let timer2 = dager2 * timDag;
let minutter2 = totalMin;
let sekunder2 = totalMin * timMinSek;



printOut("Det blir " + dager2 + " dager, " + timer2 +" timer, " + minutter2 + " minutter og " + sekunder2 + " sekunder." );
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);