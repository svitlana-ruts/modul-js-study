//const
//let



//let a = 10;
//function foo() {
//console.log("foo", a)
//function boo() {
//console.log ("boo", a)
//}
//boo();
//}

//console.log("global", a)
//foo();

// foo 10
//boo 10
//global 10



//function foo() {
 //   let a = 10;
//console.log("foo", a)
//function boo() {
//console.log ("boo", a)
//}
//boo();
//}

//console.log("global", a)
//foo();

//Uncaught ReferenceError: a is not defined
  
//function foo() {
//let a = 10;
//console.log("foo", a)
//function boo() {
//console.log ("boo", a)
//}
//boo();
//}

//foo();
//console.log("global", a)

//foo 10
//boo 10
//Uncaught ReferenceError: a is not defined

//function foo() {
    //console.log("foo", a)
    //function boo() {
    //let a = 10;
    //console.log ("boo", a)
//}
//boo();
//}

/* foo();
console.log("global", a) */

//Uncaught ReferenceError: a is not defined

/* function foo() {

    function boo() {
        let a = 10;
        console.log("boo", a)

        return a;
    }
    return boo();
    console.log("foo", a)
}

foo();
console.log("global", a); */

//return ні на що не впливає
// boo 10, т.я змінна в цій функції. а далі помилка т.я тільки змінна може повернути значення

/* let a = 10;
function foo() {
let a = 115;
    function boo() {
        let a = 500;
        console.log("boo", a)

        return a;
    }
    console.log("foo", a)
    return boo();
}

foo();
console.log("global", a); */

// foo 115
// boo 500
// global 10


/* let a = 10;
function foo() {
let a = 115;
    function boo() {
        
        console.log("boo", a)

        return a;
    }
    console.log("foo", a)
    return boo();
}

foo();
console.log("global", a); */

// foo 115
// boo 115
// global 10


//одноразова функція

/* (() => {
    console.log('hello')
})(); */
 
//hello

//var

/* console.log(value);
var value = 10; */

//ось така поведінка

/* var value;
console.log(value);
var value = 10;
var value = 10;
var value = 10;
var value = 10;
var value = 10; */

//виглядає як перевизначення змінної

/* if (true) {
    let a = 10;
}
console.log(a); // Error

if (true) {
    const a = 10;
}
console.log(a); // Error

if (true) {
    var a = 10;
}
console.log(a); // 10

function foo() {
    var a = 10;
}

foo();
console.log(a); */

//в такому випадку помилка Error - тільки фуекція обмежує дію var


//примітивні типи данних

//Number

/* const value = 1;
const value2 = 2.5;
const value3 = NaN; */

// String

/* const str = `${}`; //приклад інтерполяції де ми можемо робити математичні операції, чи підставляти значення
const str1 = ''; //шаблонні лапки
const str1 = 'some text 'lusi''; //помилка не можна два рази використовувати шаблонні лапки тому що программа розуміє як закривання
const str11 = 'some text "lusi"'; //добре
const str2 = ""; */

//Boolean

//Null

//undefined

// Методи для роботи з числами (тип данних Number)

//Number

/* const value = '26';
console.log(Number(value)); //26

const value = '26.a';
console.log(Number(value)); //NaN */

/* //Number.parseInt()
const value = '26.a';
console.log(Number.parseInt(value)) //26

const value = 'a26.a';
console.log(Number.parseInt(value)) //NaN

// Number.parseFloat()

const value = '26.45a';
console.log(Number.parseFloat(value)) //26.45

const value = '26.45a45';
console.log(Number.parseFloat(value)) //26.45

const value = '26a.45a45';
console.log(Number.parseFloat(value)) //26

const value = 'a26.45a45';
console.log(Number.parseFloat(value)) //NaN */


//методи Number.isNaN() та метод isNaN

/* console.log(null === null) //true
console.log(undefined === undefined) //true
console.log(NaN === NaN) //false
 */
/* const value = 'a26.45a45';
console.log(Number.isNaN(value)) //string - не робить примусоваго приведення до числа

console.log(isNaN(value)) // Number(value) переводить результат до числа та оцінює чи це є NaN - чи ні і далі виконує дії
 */
/* console.log(100 + undefined)
if (isNaN(100 + 25)) {
    console.log ("con't be placed")
}

const value = 25;// NaN
console.log(Number.isNaN(value)) // false NaN
console.log(isNaN(value)) // false NaN */


//function expression

/* const add = function (a, b) {
    console.log(a)
    console.log(b)
}
add(5, 22) // 5 22 */
//дані аргументи потрапляють в параметри нашої функціїї, 
//назва параметрів не принципова, в залежності яку сутність ми описуємо
// перший аргумент це перший параметр, другий аргумент це другий параметр, важливий порядок передачі
// параметр який не отримав свого аргументу за замовчення дорівнює undefined,  b= 0 значення за замовченням
// виклик функції після оголошення функції, інакше помилка

/* const add = function (a, b = 0) {
    console.log(a)
    console.log(b)
}
add(5) // 5 0
add(5, 22) // 5 22 */

//function declaration

//виклик функції в різних місцях, за це відповідає поведінка хойстингу
/* add(10, 20);
function add(a, b = 0) {
    console.log(a)
}

add(35, 10);
add(); */

/* function getTotal(sum, delivery) {
    return `Total sum ${sum + delivery}`
}

console.log(getTotal(100, 25)) // Total sum 125 */

//методи isNaN, Number.isNaN

/* const totalPrice = 100;
const delivery = undefined;

const result = totalPrice + delivery; */
/* 
console.log('Total sum', result); //Total sum NaN
//перевірка результату на число
console.log (Number.isNaN(result)) // true
console.log(isNaN(result)) // true */

//якщо прийшли данні у вигляді string;
/* const totalPrice = 100;
const delivery = '25';
const delivery = 'a';
const delivery = 'not found';

const result = totalPrice + delivery;

console.log('Total sum', result); //Total sum 100 not found

console.log(Number.isNaN(result)) // false
console.log(isNaN(result)) // true
console.log (Number.isNaN(Number(result))) // true */