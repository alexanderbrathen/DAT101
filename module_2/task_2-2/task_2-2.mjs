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

const numberOfMinutes = 6322.52;  // dette er antall minutter
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
const amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut (amountUSD + " dollar is " + amountNOK + " kroner ");
amountUSD = Math.round(amountNOK * USD);
printOut (amountNOK + " kroner is " + amountUSD + " dollars ");
printOut (newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const tekst = "Dette er en konstant tekst.";
console.log(tekst);  // Resultat: "Dette er en konstant tekst."

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
const r = Math.floor(Math.random() * 360) + 1;
printOut("Random number:" + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);