/* 
if (condition) {
  // код, який виконується, якщо умова (condition) істинна
} */

//У наведених нижче прикладах код перевіряє значення змінної subscription і 
//залежно від нього встановлює значення змінної price.
//Якщо умова перетворюється до true, тобто subscription — це "pro", price встановлюється 100.

/* let price = 0;
const subscription = "pro";

if (subscription === "pro") {
  price = 100;
}

console.log(price); // 100 */

//Якщо умова перетворюється до false, код у фігурних дужках не буде виконуватися і price залишиться рівним 0.

/* let price = 0;
const subscription = "free";

if (subscription === "pro") {
  price = 100;
}

console.log(price); // 0 */

//Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення
//параметра age більше або дорівнює 18. Використай у тілі функції інструкцію if для перевірки значення age.
//Оголошена функція checkAge(age)
//Виклик checkAge(20) повертає рядок "You are an adult"
//Виклик checkAge(17) повертає undefined
//Виклик checkAge(10) повертає undefined
//Виклик checkAge(30) повертає рядок "You are an adult"
//Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

/* function checkAge(age) {
 if (age>=18) {
  return "You are an adult";
}
};

checkAge(20);
checkAge(17);
checkAge(10);
checkAge(30);


У наступному прикладі умова перетворюється до true, тому виконується код у тілі (фігурних дужках) блоку if, а тіло блоку else ігнорується.
 */
/* const grade = 85;

if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

Якщо умова перетворюється до false, код із тіла блоку if буде пропущений, і виконається код із тіла блоку else.
 */
/* const grade = 40;

if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
} */


//Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
// і повертає повідомлення про результат.Вона оголошує два параметри,
//значення яких будуть задаватися під час її виклику:

//available - доступна кількість товарів на складі
//ordered - кількість одиниць товару в замовленні
//Використовуючи розгалуження, доповни код функції таким чином, щоб:

//Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі,
//функція повертає рядок "Not enough goods in stock!"
//В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"
//Оголошена функція checkStorage(available, ordered).
//Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you"
//Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
//Виклик checkStorage(200, 20) повертає "Order is processed, our manager will contact you"
//Виклик checkStorage(200, 150) повертає "Order is processed, our manager will contact you"
//Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"
//Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

/* function checkStorage(available, ordered) {
  if (ordered > available) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}
 */

/* checkStorage(100, 50) //"Order is processed, our manager will contact you"
checkStorage(100, 130) //"Not enough goods in stock!"
checkStorage(200, 20) //"Order is processed, our manager will contact you"
checkStorage(200, 150) //"Order is processed, our manager will contact you"
checkStorage(150, 180) //"Not enough goods in stock!"
//Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
 */

/* 
if (condition_1) {
  // код, який виконується, якщо умова (condition_1) істинна
} else if (condition_2) {
  // код, який виконується, якщо умова (condition_2) істинна
} else if (condition_3) {
  // код, який виконується, якщо умова (condition_3) істинна
} else {
	// код, який виконується, якщо всі умови хибні
}
 */





/* const grade = 85;

if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}
 */
//У цьому прикладі спочатку перевіряється умова grade >= 90.
//Оскільки перша умова(grade >= 90) помилкова, то тіло if не виконується
 //і перевіряється наступна умова(grade >= 80).
 //Ця умова є істинною, тому виконується тіло else if, тобто console.log("Good").
//Подальші умови вже перевірятись не будуть.
 

//Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
// і повертає повідомлення про результат.
//Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

//available - доступна кількість товарів на складі
//ordered - кількість одиниць товару в замовленні
//Використовуючи розгалуження, доповни код функції таким чином, щоб:

//Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
//Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
//В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".
//Оголошена функція checkStorage(available, ordered)
//Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
//Виклик checkStorage(100, 130) повертає "Your order is too large, there are not enough items in stock!"
//Виклик checkStorage(70, 0)повертає "There are no products in the order!"
//Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
//Виклик checkStorage(200, 250) повертає "Your order is too large, there are not enough items in stock!"
//Виклик checkStorage(150, 0) повертає "There are no products in the order!"
//Виклик checkStorage(80, 80) повертає "The order is accepted, our manager will contact you"


/* checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);
checkStorage(80, 80);

function checkStorage(available, ordered) {
  if (ordered === 0) {
return "There are no products in the order!";
} else if (ordered > available) {
return "Your order is too large, there are not enough items in stock!";
} else {
return "The order is accepted, our manager will contact you";
}
} */


//Тернарний оператор
    
//<condition> ? <expression if condition is true> : <expression if condition is false>

     
// Ось приклад, як би це виглядало з використанням інструкції if...else
/* let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}

console.log(type); // 'adult'

//Той самий код можна переписати з використанням тернарного оператора:

const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type); // 'adult'


//Другий приклад: знаходження більшого числа із двох з використанням інструкції if...else:

const a = 5;
const b = 10;
let biggerNumber;

if (a > b) {
  biggerNumber = a;
} else {
  biggerNumber = b;
}

console.log(biggerNumber); // 10

"const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b;

console.log(biggerNumber); // 10


"	Використовуючи тернарний оператор, код вище можна спростити:
const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b;

console.log(biggerNumber); // 10 */


/* Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.

Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
В іншому випадку, функція повертала рядок "Access denied, wrong password!"
Оголошена функція checkPassword(password)
Використано тернарний оператор
Виклик checkPassword("jqueryismyjam") повертає "Access granted"
Виклик checkPassword("angul4r1sl1f3") повертає "Access denied, wrong password!"
Виклик checkPassword("r3actsux") повертає "Access denied, wrong password!"

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  checkPassword = password === correctPassword ? "Access granted" : "Access denied, wrong password!";
  return checkPassword;
} */

/* Оператор switch
switch (expression) {
  case value1:
    // код, що виконується, якщо вираз (expression) дорівнює value1
    break;
  case value2:
    // код, що виконується, якщо вираз (expression) дорівнює value2
    break;
  // ...
  default:
    // код, що виконується, якщо вираз (expression) не відповідає жодному значенню
} */

/* 
const fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('Apple selected');
    break;
  case 'banana':
    console.log('Banana selected');
    break;
  case 'orange':
    console.log('Orange selected');
    break;
  default:
    console.log('The fruit is unknown');
} */

/* Оператор break

const day = 3;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('This is a working day');
    break;
  case 6:
  case 7:
    console.log('It is a day off');
    break;
  default:
    console.log('Invalid');
}

У цьому прикладі кілька блоків(case 1, case 2, case 3, case 4, case 5) провалюються і у випадку їх рівності виразу виконається один і той самий код, тому що між ними немає операторів break.
 */
/* 
Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.

Якщо значення параметра type — це рядок:

"starter" — ціна передплати 0 кредитів.
"professional" — ціна передплати 20 кредитів.
"organization" — ціна передплати 50 кредитів.
Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".

Використай оператор switch для розв'язання цієї задачі!

Оголошена функція getSubscriptionPrice(type)
Використано оператор switch
Виклик getSubscriptionPrice("professional") повертає число 20
Виклик getSubscriptionPrice("organization") повертає число 50
Виклик getSubscriptionPrice("starter") повертає число 0
Виклик getSubscriptionPrice("random") повертає рядок "Invalid subscription type!"
Виклик getSubscriptionPrice("premium") повертає рядок "Invalid subscription type!"

function getSubscriptionPrice(type) {
  switch (type) {
      case 'starter':
      return 0;
      break;
    case 'professional':
      return 20;
      break;
    case 'organization':
      return 50;
      break;
    default:
      return `Invalid subscription type!`;
  }
}
 */

/* 
// Глобальна змінна
const value = "I'm a global variable";

if (true) {
	// Можна звернутися до глобальної змінної
  console.log(value); // "I'm a global variable"
}

// Можна звернутися до глобальної змінної
console.log(value); // "I'm a global variable" */




/* if (true) {
  // Локальна змінна
	const value = "I'm a local variable";
  console.log(value); // "I'm a local variable"
}

// Помилка: локальну змінну не видно за межами блоку
console.log(value); // ReferenceError: value is not defined */



/* 

const globalVar = "Global";

console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// Немає доступу до aVar, bVar і cVar */

/* if(true) {
	const aVar = "A";
	console.log(globalVar); // Доступ до globalVariable з блоку A
  console.log(aVar); // Доступ до aVar з блоку A
	// Немає доступу до bVar і cVar */

/* 	if(true) {
		const bVar = "B";
		console.log(globalVar); // Доступ до globalVariable з блоку B
	  console.log(aVar); // Доступ до aVar з блоку B
	  console.log(bVar); // Доступ до bVar з блоку B
		// Немає доступу до cVar
	}
} */

console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar
/* 
if(true) {
	const cVar = "C";
  console.log(globalVariable); // Доступ до globalVar з блоку C
  console.log(cVar); // Доступ до cVar з блоку C
	// Немає доступу до aVar і bVar
} */
/* 
console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar
 */


//Логічні оператори

//Логічні значення Логічні значення true та false залишаються незмінними.
//console.log(Boolean(true)); // true
//console.log(Boolean(false)); // false

//Числа

/* console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true */

// Значення в умові інструкцій if приводиться до false .Отже, виконується код із блоку else.

/* if(null) {
	console.log("Block if")
} else {
	console.log("Block else")
} */
/* 
if(0) {
	console.log("Block if")
} else {
	console.log("Block else")
} */

// Значення в умові інструкції if приводиться до true .
//Отже, виконується код із блоку if.

/* if(5) {
	console.log("Block if")
} else {
	console.log("Block else")
}
 */

//Рядки
//Порожній рядок ("") приводиться до false.
//Будь - які інші не пусті рядки приводяться до true.

/* console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true */


/* if("") {
	console.log("Block if")
} else {
	console.log("Block else")
} */
//У прикладі в умові інструкції if вказаний порожній рядок.
//Порожній рядок приводиться до false.Отже, виконується код із блоку else.

/* if("batman") {
	console.log("Block if")
} else {
	console.log("Block else")
}
 */

//В умові інструкції — рядок "batman".
//Отже, if наводиться до true. Виконується код із блоку if.


//Запам’ятай 6 випадків, які приводяться до false:
/* 1. 0
2. ""
3. Nan
4. null
5. underfined
6. false */


//Логічне «І»
//expression1 && expression2

/* console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"

console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3



console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ""); // 0
console.log("" && 0); // ""


const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200; */


/* if(screenWidth <= sm) {
	console.log("Mobile screen");
} else if(screenWidth > sm && screenWidth <= md) {
	console.log("Tablet screen");
} else if(screenWidth > md && screenWidth <= lg) {
	console.log("Desktop screen");
} else {
	console.log("Godzilla screen");
} */

/* null && true //null
"false" && 0 //0
"Mango" && "Poly" // "Poly" */

/* Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

number - число, входження якого перевіряється
start - початок числового проміжку
end - кінець числового проміжку
Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.

Оголошена функція isNumberInRange(start, end, number)
Використано оператор &&
Виклик isNumberInRange(10, 30, 17) повертає true
Виклик isNumberInRange(10, 30, 5) повертає false
Виклик isNumberInRange(20, 50, 24) повертає true
Виклик isNumberInRange(20, 50, 76) повертає false

function isNumberInRange(start, end, number){
 return number = number >= start && number <= end;
}

isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76); */

//Логічне «АБО
//Оператор "АБО"(||) перетворює всі операнди до логічного типу(true або false)
// і повертає значення одного з них.

/* expression1 || expression2

console.log(true || false); // true
console.log(false || true); // true

console.log(5 || false); // 5
console.log(false || 5); // 5

console.log("hello" || 0); // "hello"
console.log(0 || "hello"); // "hello"

console.log(5 || 3); // 5
console.log(3 || 5); // 3

console.log("mango" || "poly"); // "mango"
console.log("poly" || "mango"); // "poly"

console.log(0 || false); // false
console.log(false || 0); // 0

console.log(null || ""); // ""
console.log("" || null); // null

const a = 5;
console.log(a < 10 || a > 30); // true || false -> true */

/* const b = 50;
console.log(b < 10 || b > 30); // false || true -> true */

/* const c = 20;
console.log(c - 20 || c * 2); // 0 || 40 -> 40
 */
/* const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200; */
/* 
if(screenWidth <= sm || screenWidth > md) {
	console.log("Mobile or Desktop screen");
  // у консолі буде пусто, оскільки жодна з умов не перетворилась на true
} */
/* 
null || true //true
"false" || 0 // false
"Mango" || "Poly" //Mango */

/* Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.

Оголошена функція checkAccess(subType)
Використано оператор ||
Виклик checkAccess("pro") повертає true
Виклик checkAccess("starter") повертає false
Виклик checkAccess("vip") повертає true
Виклик checkAccess("free") повертає false

function checkAccess(subType) {
 return subType == `pro` || subType == `vip`;
}

checkAccess("pro");
checkAccess("starter");
checkAccess("vip");
checkAccess("free"); */

//Логічне «НІ» (!) — це унарний оператор — він виконує операцію над одним операндом праворуч.

//!expression
//Логічне «НІ» приводить операнд до логічного значення (true або false)
//і потім заперечує(інвертує) його, тобто заміняє на протилежне: true —> false, а false —> true.
/* 
console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true
console.log(!null); // !null -> !false -> true */

//На практиці логічне заперечення використовується для перевірки від зворотного.
//Наприклад, можна дозволити написати повідомлення в чаті, лише якщо користувач не заблокований.

/* const isBlocked = false;
const canChat = !isBlocked; // !false -> true

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
} */

//у прикладі вище бачимо, що значення змінної isBlocked — false .
//Користувач не заблокований.Результатом canChat буде true.
//Якщо значення змінної isBlocked — true, користувач заблокований.
//У такому разі результат обчислення canChat буде false.
//Отже, умова if заборонить користувачеві писати в чаті.
/* 
const isBlocked = true;
const canChat = !isBlocked; // !true -> false */

/* if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
} */



/* const isOnline = true;
const isBlocked = false;
const canChat = isOnline && !isBlocked; 
// true && !false -> true && true -> true

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
} */

/* !0//true
!"Poly" //false */
/* 
Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.

Оголошена функція toggleModalVisibility(isVisible)
Виклик toggleModalVisibility(true) повертає false
Виклик toggleModalVisibility(false) повертає true
Використано оператор!


 
function toggleModalVisibility(isVisible) {
  return !isVisible && !isVisible;
}
 */

//Методи рядків
/* 
властивість
objectName.property

Метод
objectName.method() */

/* Метод slice()

str.slice(startIndex, endIndex)

const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer' */

/* 
const fullName = "Jacob Mercer";
console.log(fullName.slice(1)); // 'acob Mercer'
console.log(fullName.slice(3)); // 'ob Mercer' */


/* const fullName = "Jacob Mercer";
console.log(fullName.slice()); // 'Jacob Mercer' */


/* const fullName = "Jacob Mercer";
const firstName = fullName.slice(0, 5);
const lastName = fullName.slice(6); */
/* 
console.log(fullName); // "Jacob Mercer"
console.log(firstName); // "Jacob"
console.log(lastName); // "Mercer" */

/* 
Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

string - оригінальний рядок
length - довжина нового підрядка
Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.

Оголошена функція getSubstring(string, length)
Виклик функції getSubstring("Hello world", 3) повертає "Hel"
Виклик функції getSubstring("Hello world", 5) повертає "Hello"
Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
Виклик функції getSubstring("Hello world", 0) повертає ""

const string = "Hello world";


function getSubstring(string, length) {
  return length = string.slice(0, length);
}

getSubstring("Hello world", 3);
getSubstring("Hello world", 5);
getSubstring("Hello world", 8);
getSubstring("Hello world", 11);
getSubstring("Hello world", 0); */

// Методи toLowerCase() і toUpperCase()

/* const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message); // "Welcome to Bahamas!"

const message = "Welcome to Bahamas!";
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

console.log('saMsUng' === 'samsung'); // false
console.log('saMsUng' === 'SAMSUNG'); // false


const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();

console.log(brandName); // 'samsung'
console.log(userInput); // 'saMsUng'
console.log(userInput === brandName); // false
console.log(lowercaseInput); // 'samsung'
console.log(lowercaseInput === brandName); // true */


/* Функція normalizeInput(input, to) оголошує два параметри:

input - рядок, який потрібно привести до певного регістру
to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
Доповни код функції таким чином, щоб:

Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
В іншому разі, функція повертала копію рядка inputу нижньому регістрі
Оголошена функція normalizeInput(input, to)
Виклик функції normalizeInput("This ISN'T SpaM", "lower") повертає "this isn't spam"
Виклик функції normalizeInput("This ISN'T SpaM", "upper") повертає "THIS ISN'T SPAM"
Виклик функції normalizeInput("Big SALE", "lower") повертає "big sale"
Виклик функції normalizeInput("Big SALE", "upper") повертає "BIG SALE"
Виклик функції normalizeInput("Stay Awhile and Listen", "lower") повертає "stay awhile and listen"
Виклик функції normalizeInput("Stay Awhile and Listen", "upper") повертає "STAY AWHILE AND LISTEN"

const input = "This ISN'T SpaM";

function normalizeInput(input, to) {
  if (to === "upper") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
} */

//Метод includes()

/* str.includes(substring) */


/* const username = 'Jacob Mercer';

console.log(username.includes('Jacob')); // true
console.log(username.includes('John')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('Doe')); // false

 */
/* const username = 'Jacob Mercer';

console.log(username.includes('Jacob')); // true
console.log(username.includes('jacob')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('mercer')); // false */


/* const message = "Please buy our stuff!";
const hasSpam = message.includes("buy"); */
/* 
if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
} */


/* Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.

fullName - рядок, що містить повне ім'я
firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

Оголошена функція checkForName(fullname, firstName)
Виклик функції checkForName("Jason Neis", "Jason") повертає true
Виклик функції checkForName("Jason Neis", "jAsOn") повертає true
Виклик функції checkForName("Jason Neis", "Jacob") повертає false
Виклик функції checkForName("Caty Stars", "Caty") повертає true
Виклик функції checkForName("Caty Stars", "cAtY") повертає true
Виклик функції checkForName("Caty Stars", "Andromeda") повертає false

function checkForName(fullName, firstName) {
fullName = fullName.toLowerCase();
firstName = firstName.toLowerCase();
  return fullName.includes(firstName);
} */

/* Методи startsWith() і endsWith()

Метод startsWith()
 */


/* Метод startsWith() перевіряє, чи починається рядок із зазначеного підрядка.

str.startsWith(substr)

const str = "Hello, world!";

console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false (метод чутливий до регістру) */

/* Метод endsWith()

str.endsWith(substr)

const str = "Hello, world!";

console.log(str.endsWith("world!")); // true
console.log(str.endsWith("World!")); // false (метод чутливий до регістру) */

/* Функція checkFileExtension(fileName, ext) приймає два параметри:

fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
Доповни код функції так, щоб:

Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
В іншому разі, функція повертала рядок "File extension does not match"
Оголошена функція checkFileExtension(fullname, name)
Виклик функції checkFileExtension("styles.css", ".css") повертає "File extension matches"
Виклик функції checkFileExtension("styles.css", ".js") повертає "File extension does not match"
Виклик функції checkFileExtension("app.js", ".js") повертає "File extension matches"
Виклик функції checkFileExtension("app.js", ".html") повертає "File extension does not match"
Виклик функції checkFileExtension("index.html", ".html") повертає "File extension matches"
Виклик функції checkFileExtension("index.html", ".css") повертає "File extension does not match"
Виклик функції checkFileExtension("index.html", ".js") повертає "File extension does not match"

function checkFileExtension(fileName, ext) {
  fileName = fileName.toLowerCase();
  ext = ext.toLowerCase();
  return fileName.endsWith(ext) ? "File extension matches" : "File extension does not match";
  } */

  /* Метод indexOf()

str.indexOf(substr)
  
const message = "Welcome to Bahamas!";
const index = message.indexOf("to");
console.log(index); // 8

const message = "Welcome to Bahamas!";
const index = message.indexOf("hello");
console.log(index); // -1 */

/* Функція getFileName(file) приймає один параметр

file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
В іншому разі функція повертала підрядок з іменем файлу, але без розширення
Оголошена функція getFileName(file)
Виклик функції getFileName("styles.css") повертає "styles"
Виклик функції getFileName("app.js") повертає "app"
Виклик функції getFileName("app") повертає "app"
Виклик функції getFileName("index.js") повертає "index"
Виклик функції getFileName("index.html") повертає "index"
Виклик функції getFileName("index.css") повертає "index"
Виклик функції getFileName("index") повертає "index"

function getFileName(file) {
  const ext = file.indexOf(".");
  if (ext < 0) {
    return file.slice();
  } else {
    return file.slice(0, ext);
  }
} */


/* Метод trim()
str.trim()

const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    "

Функція createFileName(name, ext) приймає два параметри:

name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

Оголошена функція createFileName(name, ext)
Виклик функції createFileName(" order ", "txt") повертає "order.txt"
Виклик функції createFileName("report ", "csv") повертає "report.csv"
Виклик функції createFileName(" presentation", "xml") повертає "presentation.xml"

function createFileName(name, ext) {
  return file = name.trim() + "." + ext;
} */




/*     Цикл while
      
    while (condition) {
      statement // код, тіло циклу
    }

    let count = 0;

    while (count < 10) {
      console.log(`Count: ${count}`);
      count += 1;
} */
    
/* Змінна clientCounter зберігає кількість зайнятих номерів на поточний момент.

Змінна maxClients зберігає загальну кількість номерів у готелі.



Завдяки циклу while місця в готелі будуть заповнюватися доти, доки поточна кількість клієнтів не дорівнюватиме максимально допустимій.
 */


/* let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
} */
/* 
Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

Оголошена функція calculateTotal(number)
Виклик функції calculateTotal(1) повертає 1
Виклик функції calculateTotal(3) повертає 6
Виклик функції calculateTotal(0) повертає 0
Виклик функції calculateTotal(18) повертає 171
Виклик функції calculateTotal(24) повертає 300
Виклик функції calculateTotal() з випадковим числом повертає правильне значення

function calculateTotal(number) {
  let totalNumber = 0;
  let count = 1;
  while (count<= number) {
    totalNumber += count;
    count +=1;
  }
  return totalNumber;
}
 */

/* Цикл do…while

do {
   statement // код, який буде виконуватися
} while (condition);

let count = 0;

do {
	console.log(`Count: ${count}`);
	count += 1;
} while (count < 5);

У прикладі код усередині циклу do виконається один раз, навіть якщо count більше або дорівнює 5.



Після цього умову буде перевірено, і якщо count менше 5, цикл продовжить виконуватися. */

/* Цикл for

for (initialization; condition; afterthought) {
  statement // Тіло циклу
}

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
} */

/* Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

Оголошена функція calculateTotal(number)
Виклик функції calculateTotal(1) повертає 1
Виклик функції calculateTotal(0) повертає 0
Виклик функції calculateTotal(7) повертає 28
Виклик функції calculateTotal(18) повертає 171
Виклик функції calculateTotal(24) повертає 300
Виклик функції calculateTotal() з випадковим числом повертає правильне значення

function calculateTotal(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += i;
  }
  return result;
} */

/* Інкремент і декремент

Префіксний інкремент  (++value)
let x = 5;
const y = ++x;
console.log(x); // 6
console.log(y); // 6

Постфіксний інкремент (value++)
let x = 5;
const y = x++;
console.log(x); // 6
console.log(y); // 5

Префіксний декремент(--value)
let x = 5;
const y = --x;
console.log(x); // 4
console.log(y); // 4 */

/* Постфіксний декремент(value--)
let x = 5;
const y = x--;
console.log(x); // 4
console.log(y); // 5

for (let i = 0; i <= 5; i++) {
  console.log(i);
} */

/* Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

Оголошена функція calculateEvenTotal(number)
Виклик функції calculateEvenTotal(1) повертає 0
Виклик функції calculateEvenTotal(3) повертає 2
Виклик функції calculateEvenTotal(7) повертає 12
Виклик функції calculateEvenTotal(18) повертає 90
Виклик функції calculateEvenTotal(27) повертає 182
Виклик функції calculateEvenTotal() з випадковим числом повертає правильне значення

function calculateEvenTotal(number) {
  let result = 0;
  for (let i = 0; i <= number; i ++){
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result;
} */

/* Оператор break

for (let i = 0; i < 10; i+=1) {
  console.log(i);

  if (i === 5) {
    console.log('Met the number 5, interrupt the execution of the cycle');
    break;
  }
}

console.log('Log after cycle'); */

/* Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

Оголошена змінна start
Оголошена змінна end
Оголошена змінна number
Якщо start це 6, а end це 17, то підсумкове значення змінної number дорівнює 10
Якщо start це 17, а end це 25, то підсумкове значення змінної number дорівнює 20
Якщо start це 2, а end це 11, то підсумкове значення змінної number дорівнює 5
В коді є цикл for, в якому використовується break для можливості виходу з циклу до завершення всіх ітерацій

const start = 6;
const end = 17;
let number; */

/* Оператор break і функції

function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

  for (let i = 5; i <= max; i += 1) {
    console.log("Current counter value i:", i);

    if (i === target) {
      console.log(`Found the number $ {target}, interrupt the cycle`);
			break;
    }
  }

  console.log("Log in body function after cycle");
}

findNumber(10, 6);
console.log("Log after exiting function"); */

/* 
function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

	for (let i = 5; i <= max; i += 1) {
	    console.log("Current counter value i:", i);
	
	    if (i === target) {
	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
				return i;
	    }
	  }

  // Цей console.log не виконується
  console.log("Log in body function after cycle");
}

const result = findNumber(10, 6);
console.log("Log after exiting function");
console.log(`Result of function execution ${result}`); */

/* 
Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

Доповни код функції таким чином, щоб вона:

повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
не використовуй оператор break
Оголошена функція findNumber(start, end, divisor)
Виклик findNumber(2, 6, 5) повертає 5
Виклик findNumber(8, 17, 3) повертає 9
Виклик findNumber(6, 9, 4) повертає 8
Виклик findNumber(16, 35, 7) повертає 21
Виклик findNumber() з випадковим набором чисел повертає правильний результат
В циклі for не повинен використовуватися break для можливості виходу з циклу до завершення всіх ітерацій

function findNumber(start, end, divisor) {} */