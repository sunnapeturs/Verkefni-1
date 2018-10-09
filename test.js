// 1. = halló heimur
var test1 = "halló " + "heimur";

// 2. = 144
var test2 = 12 * 12;

// 3. = string(truthy) eða (false & true:sem er false) = True
var test3 = ("sunna"||(false && true));

// 4. = false
var test4 = 4 === 5;

// 5. = false
var test5 = 10 !== 10;

// 6. = True
var aboutKalli = "kalli er góður strákur";
var isItTrueWhatTheySayAboutKalli = aboutKalli === "kalli er góður strákur";
/* breytan (isItTrueWhatTheySayAboutKalli) inniheldur boolean gildið true,
 samanburður á breytunni "aboutKalli" sem er sú sama og strengurinn "kalli er góður strákur"*/
var svar = true === true

//7. = False 
var aboutPalli = "palli er vondur strákur";
var isItTrueWhatTheySayAboutPalli = aboutPalli==="palli er vondur strákur" && !"palli er góður strákur";
//=== oparator tekur forgang yfir &&.
var svar = true === true && !true

//8. 
var a = !!0;// False = 0 er falsy, !! er tvöföld neitun.
var b = !!-2;// True = -2 er truthy.
var c = !!"";// False = tómur strengur er falsy.
var d = !!"kalli";// True = strengur er truthy.

//9.
// Forgangur goggsins, > hefur forgang yfir <
var myNumber = 5;
var ismyNumberBetween2and9 = myNumber < 9 > 2;
var tests = 5 < true;

//10.
/*
You meet two inhabitants: Zoey and Mel. Zoey tells you that Mel is a knave. 
Mel says, “Neither Zoey nor I are knaves.”
Can you determine who is a knight and who is a knave?

Ef Mel er að seigja satt, að hvorugar séu Knaves,
 myndi það þýða að Zoey sé að seigja ósatt(sem þýddi að Zoey sé Knaves)
Sem þýðir að Mel er að seigja ósatt og Zoey seigjir satt.*/



