"use strict"; 
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const resultat1 = 2 + 3 * 2 - 4 * 6;
const resultat2 = 2 + (3 * (2 - 4) * 6);
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
const hoursInDay = 24;
const minutesInHour = 60;
const secondsInMinute = 60;
const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 *24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days;
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut ("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinute;
const part4_Seconds = Math.floor(part4_Calc);
printOut("seconds = " + part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut (amountUSD + " dollar is " + amountNOK + " kroner ");
amountUSD = Math.round(amountNOK * USD);
printOut (amountNOK + " kroner is " + amountUSD + " dollars ");
printOut (newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tekst = "There is much between heaven and earth that we do not understand.";

printOut(tekst.length.toString())
printOut(tekst.charAt(19))
printOut(tekst.substring(35,43))
printOut(tekst.indexOf("earth").toString()) //33 er index på e 

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// 1. Er 5 større enn 3?
printOut("Er 5 større enn 3?", 5 > 3);

let test = "noe" // string
let x = 5; // integer
let y = 3;
let z = x > y; //boolean
console.log(z); //true på console
printOut(z.toString());

// 2. Er 7 større enn eller lik 7?
printOut("Er 7 større enn eller lik 7?", 7 >= 7);

let a = 7;
let b = 7;
let c = a >= b;
console.log(c); //true på console
printOut(c.toString());

// 3. Er "a" større enn "b"?
printOut('Er "a" større enn "b"?', "a" > "b");

let aa = "a";
let bb = "b";
let cc = aa > bb;
console.log(cc); //false på console
printOut(cc.toString());

// 4. Er "1" mindre enn "a"?
printOut('Er "1" mindre enn "a"?', "1" < "a");

let aaa = "1";
let bbb = "a";
let ccc = aaa < bbb;
console.log(ccc); //true på console
printOut(ccc.toString());

// 5. Er "2500" mindre enn "abcd"?
printOut('Er "2500" mindre enn "abcd"?', "2500" < "abcd");

let tjuefemhundre = "2500";
let abcd = "abcd";
let svar = tjuefemhundre < abcd;
console.log(svar); //true på console
printOut(svar.toString());

// 6. Er "arne" ikke lik "thomas"?
printOut('"arne" er ikke lik "thomas"?', "arne" !== "thomas");

let arne = '"arne" er ikke lik "thomas"?';
let thomas = "thomas";
let svar2 = arne !== thomas;
console.log(svar2); //true på console, som vil si at at arne er ikke lik thomas
printOut(svar2.toString());

// 7. Er (2 lik 5) dette utsagnet sant?
printOut('Er (2 lik 5) dette utsagnet sant?', 2 === 5);

let to = 2;
let fem = 5;
let svar3 = to === fem;
console.log(svar3); //false på console
printOut(svar3.toString()); //viser false på siden

// 8. Er ("abcd" større enn "bcd") dette utsagnet feil?
printOut('Er ("abcd" større enn "bcd") dette utsagnet feil?', !("abcd" > "bcd"));

let nice = "abcd";
let notnice = "bcd";
let svar4 = nice > notnice;
console.log(svar4);
printOut(svar4.toString());

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(parseInt("254").toString()); //printer string til tall som gjøres til tekst for å printes ut på siden.
printOut(parseFloat("57.23").toString());

let tjuefemkroner = "25 kroner";
let tall2 = parseInt(tjuefemkroner);
console.log(tall2);
printOut(tall2.toString());


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360) + 1;
console.log(r);
printOut(r.toString());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totaleDager = 131;
let uker2 = Math.floor(totaleDager / 7);  // Antall hele uker
let dager2 = totaleDager % 7;  // Resterende dager etter uker

console.log(uker2 + " uker og " + dager2 + " dager");
printOut(uker2 + " uker og " + dager2 + " dager");
printOut(newLine);
