//console.log("JavaScript is awesome!");
//console.log(10);

//Використовуючи два console.log() напиши код, який виведе в консоль інструментів розробника два значення: рядок "Jacob Mercer" та число 26.
//У коді є два console.log()
//Перший console.log() виводе рядок "Jacob Mercer"
//Другий console.log() виводе число 26

//console.log("Jacob Mercer");
//console.log(26);


//оголошення змінних

//const age = 20;
//const username = "Mango";

//звернення до змінної

//console.log(username); // "Mango"

//За допомогою ключового слова const оголоси дві змінні: productName - для зберігання назви товару,
//pricePerItem - для зберігання ціни за одиницю товару.
//При оголошенні змінних надай їм наступні значення:
//назва товару - рядок "Droid";
//ціна за одиницю товару - число 2000.
//Оголошена змінна productName
//Змінна productName оголошена за допомогою const
//Значення змінної productName - це рядок "Droid"
//Оголошена змінна pricePerItem
//Змінна pricePerItem оголошена за допомогою const
//Значення змінної pricePerItem - це число 2000

//const productName = "Droid";
//const pricePerItem = 2000;

// перевизначення імені змінної

//let username = "Mango";
//username = "Poly";

//let username = "Mango";
//console.log(username); // "Mango"

//username = "Poly";
//console.log(username); // "Poly"


//перевизначення const не можливе
//const username = "Mango";
//console.log(username); // "Mango"

// ❌ Неправильно, буде помилка
//username = "Poly"; // TypeError: Assignment to constant variable.


// let - undefined
//let username;
//console.log(username); // undefined

//username = "Mango";
//console.log(username); // "Mango"

//Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.
//Змінна pricePerItem оголошена за допомогою let
//При оголошенні змінної pricePerItem присвоєно значення — число 2000
//Змінній pricePerItem присвоєно нове значення — число 3500
//Змінна productName оголошена за допомогою let
//При оголошенні змінної productName присвоєно значення — рядок "Droid"
//Змінній productName присвоєно нове значення — рядок "Repair droid"

//let productName = "Droid";
//let pricePerItem = 2000;

// Change code below this line
//productName = "Repair droid";
//pricePerItem = "3500";
//console.log(productName);
//console.log(pricePerItem);


// Якщо не треба змінювати значення
//const username = "Mango";
//console.log(username);

// Якщо треба змінювати значення
//let username = "Mango";
//console.log(username);

//username = "Poly";
//console.log(username);

// імена змінних 
// ❌ Погано
//chislo
//korzina_tovariv
//profil_koristuvacha

// ✅ Добре
//number
//cart
//userProfile


//помилки в програмі


//неправильне імя змінної 
//const username = "Mango";
//console.log(user); // ReferenceError: user is not defined

//Звернення до змінної до її оголошення

// ❌ Неправильно, буде помилка
//console.log(age); // ReferenceError: age is not defined

// Оголошення змінної age
//let age = 20;

// ✅ Правильно, звертаємося після оголошення
//age = 25;
//console.log(age); // 25

//Перевизначення значення для змінної оголошеної через const


// Типи даних
//Number

//const age = 20;
//const salary = 3710.84;

//String

//const username = 'Mango995';
//const description = "JavaScript is awesome!";

//Boolean

//const isModalOpen = true;
//const isLoggedIn = false;

// null

//let value = null;
//console.log(value); // null

// undefined

//let value;
//console.log(value); // undefined



//Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

//topSpeed - число 160
//distance - число 617.54
//login - рядок "mango935"
//isOnline - буль true
//isAdmin - буль false
//Оголошена змінна topSpeed
//Значення змінної topSpeed - це число 160
//Оголошена змінна distance
//Значення змінної distance - це число 617.54
//Оголошена змінна login
//Значення змінної login - це рядок "mango935"
//Оголошена змінна isOnline
//Значення змінної isOnline - це буль true
//Оголошена змінна isAdmin
//Значення змінної isAdmin - це буль false

//const topSpeed = "160";
//const distance = "617.54";
//const login = "mango935";
//const isOnline = true;
//const isAdmin = false;

// оператор typeof
//const quantity = 17;
//console.log(typeof quantity); // виведе "number"

//const message = "JavaScript is awesome!";
//console.log(typeof message); // виведе "string"

//const isSidebarOpen = false;
//console.log(typeof isSidebarOpen); // виведе "boolean"

//let username;
//console.log(typeof username); // виведе "undefined"

//let status = null;
//console.log(typeof status); // виведе "object"


//арифметичні операції

//Оператор (+) використовується для складання двох чисел.

//const x = 8;
//const y = 5;
//console.log(x + y); // 13

//Оператор (-) використовується для віднімання одного числа від іншого.
//const x = 8;
//const y = 5;
//console.log(x - y); // 3

//Оператор (*) використовується для множення двох чисел.
//const x = 8;
//const y = 5;
//console.log(x * y); // 40

//Оператор (/) використовується для ділення одного числа на інше.
//const x = 8;
//const y = 5;
//console.log(x / y); // 1.6

//Оператор (%) повертає остачу від ділення одного числа на інше.

//const x = 8;
//const y = 5;
//console.log(x % y); // 3

//Оператор (**) використовується для піднесення числа до степеня.

//const x = 8;
//const y = 5;
//console.log(x ** y); // 32768


//Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну за одиницю товару, а orderedQuantity - кількість одиниць товару в замовленні.

//Оголошена змінна pricePerItem
//Значення змінної pricePerItem - це число 3500
//Оголошена змінна orderedQuantity
//Значення змінної orderedQuantity - це число 4
//Оголошена змінна totalPrice
//Значення змінної totalPrice - це число 14000
//Використаний оператор *

//const pricePerItem = 3500;
//const orderedQuantity = 4;

// Change code below this line
//const totalPrice = pricePerItem * orderedQuantity;

//комбіновані оператори

//Додавання: +=. Приклад: x += y еквівалентно x = x + y


//Віднімання: -=. Приклад: x -= y еквівалентно x = x - y


//Множення: *=. Приклад: x *= y еквівалентно x = x * y


//Ділення: /=. Приклад: x /= y еквівалентно x = x / y


//Остача від ділення: %=. Приклад: x %= y еквівалентно x = x % y

//let age = 25;
//age = age + 1;
//console.log(age); // 26

//let age = 25;
//age += 1;
//console.log(age); // 26

//Заміни у виразах стандартні математичні оператори на комбіновані оператори присвоєння з додаванням,
//відніманням, множенням і діленням відповідно.

//Значення змінної a дорівнює 7
//Використаний оператор +=
//Значення змінної b дорівнює 6
//Використаний оператор -=
//Значення змінної c дорівнює 45
//Використаний оператор *=
//Значення змінної d дорівнює 2
//Використаний оператор /=

//let a = 5;
//let b = 10;
//let c = 15;
//let d = 20;

// Change code below this line
//a += 2;
//b -= 4;
//c *= 3;
//d /= 10;

//конкатинація рядків
//const message = "Mango " + "is" + " happy";
//console.log(message); // "Mango is happy"

//const age = 24;
//const message = "Poly is " + age + " years old!";

//console.log("Mango" + 55); // "Mango55"
//console.log("Mango" + true); // "Mangotrue"


//console.log(1 + "2"); // "12"
//console.log(1 + "2" + 4); // "124"
//console.log(1 + 2 + "4"); // "34"


//Задача
//Оголоси змінну message. Використовуючи конкатенацію рядків, задай їй наступне значення — рядок привітання користувача зі зверненням по імені. Ім'я зберігається в змінній username.

//Повідомлення привітання має виглядати так: "Welcome Poly!", де Poly — це значення змінної username. Зверни увагу, що пробіл має відноситися до рядка "Welcome "

//Оголошена змінна username
//Значення змінної username - це рядок "Poly"
//Оголошена змінна message
//Значення змінної message - це рядок "Welcome Poly!"
//Використаний оператор +

//const username = "Poly";
//const message = "Welcom " + username;

//явне перетворення
//console.log(String(5)); // "5"
//console.log(String(true)); // "true"
//console.log(String(false)); // "false"
//console.log(String(null)); // "null"
//console.log(String(undefined)); // "undefined"

//неявне перетворення

//console.log("5" + 3); // "53"
//console.log("5" + true); // "5true"
//console.log("5" + false); // "5false"
//console.log("5" + null); // "5null"
//console.log("5" + undefined); // "5undefined"

//шаблонні рядки

//const guestName = "Mango";
//const roomNumber = 207;
//const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
//console.log(greeting); // "Welcome Mango, your room number is 207!"

// приклад
//const guestName = "Mango";
//const roomNumber = 207;
//const greeting =
 // "Welcome " + guestName + ", your room number is " + roomNumber + "!";
//console.log(greeting); // "Welcome Mango, your room number is 207!"


// приклад
//const guestName = "Mango";
//const roomNumber = 207;
//const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
//console.log(greeting); // "Welcome Mango, your room number is 207!"

//Задача Шаблонні рядки

//Оголоси змінну message і запиши в неї повідомлення про покупку.

//Це буде рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits", де

//<назва товару> — це значення змінної productName
//<ціна товару> — це значення змінної pricePerItem
//Використовуй синтаксис шаблонних рядків. Уникай зайвих символів (пробілів, коми або крапки, що не передбачені вмістом рядка).

//Оголошена змінна productName
//Значення змінної productName - це рядок "Droid"
//Оголошена змінна pricePerItem
//Значення змінної pricePerItem - це число 3500
//Оголошена змінна message
//Значення змінної message - це рядок "You picked Droid, price per item is 3500 credits"

//const productName = "Droid";
//const pricePerItem = "3500";
//const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;



//задача шаблонні рядки

//Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення.
//Оголоси змінні та присвой їм відповідні значення:

//pricePerDroid - ціна одного дроїда, значення 800
//orderedQuantity - кількість дроїдів у замовленні, значення 6
//deliveryFee - вартість доставки, значення 50
//totalPrice - загальна сума замовлення до сплати (ціна одного дроїда помножена на кількість дроїдів у замовленні, плюс вартість доставки)
//message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits"
//Оголошена змінна orderedQuantity
//Значення змінної orderedQuantity - це число 6
//Оголошена змінна pricePerDroid
//Значення змінної pricePerDroid - це число 800
//Оголошена змінна deliveryFee
//Значення змінної deliveryFee - це число 50
//Оголошена змінна totalPrice
//Значення змінної totalPrice - це число 4850
//Оголошена змінна message
//Значення змінної message - це рядок "You ordered droids worth 4850 credits"

//const pricePerDroid = "800";
//const orderedQuantity = "6";
//const deliveryFee = "50";
//const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
//const message = `You ordered droids worth ${totalPrice} credits`;

//довжина рядка - length
//const productName = "Repair droid";

// Якщо у змінній зберігається рядок
//console.log(productName.length); // 12

// Якщо рядковий літерал
//console.log("Repair droid".length); // 12


// задача довжина рядка

//Змінна username зберігає рядок з іменем користувача.
//Оголоси змінну message та за допомогою синтаксису шаблонних рядків доповни код так,
//щоб в ній зберігався рядок наступного формату:
//"Username <name> is <length> characters long",
//в якому < name > це ім'я користувача зі змінної username, а <length> це його довжина.

//Оголошена змінна username
//Оголошена змінна message
//Якщо значення username це "Poly", значення message буде "Username Poly is 4 characters long"
//Якщо значення username це "Harambe", значення message буде "Username Harambe is 7 characters long"
//Якщо значення username це "Billy", значення message буде "Username Billy is 5 characters long"
//Якщо значення username це "Joe", значення message буде "Username Joe is 3 characters long"
//Використовується синтаксис шаблонних рядків

//const username = "Poly";
//const message = `Username ${username} is ${username.length} characters long`;



//iндкс рядка
//const product = "Repair droid";
//console.log(product[0]); // 'R'
//console.log(product[5]); // 'r'
//console.log(product[11]); // 'd'


//останній індекс рядка
//const product = "Repair droid";
//const lastElementIndex = product.length - 1;
//console.log(product[lastElementIndex]); // 'd'

//Задача довжина рядка ??????
//Додай код, який записує у змінні наступні значення:

//courseTopicLength - довжина рядка
//firstElement - перший символ рядка
//lastElement - останній символ рядка (використовуй змінну courseTopicLength)
//Оголошена змінна courseTopic
//Значення змінної courseTopic - це рядок "JavaScript essentials"
//Оголошена змінна courseTopicLength
//Значення змінної courseTopicLength - це число 21
//Оголошена змінна firstElement
//Значення змінної firstElement - це рядок "J"
//Оголошена змінна lastElement
//Значення змінної lastElement - це рядок "s"

//const courseTopic = "JavaScript essentials";

//const courseTopicLength = courseTopic.length;
//const firstElement = courseTopic[0];
//const lastElement = courseTopic[courseTopicLength-1];

//const courseTopic = "JavaScript essentials";

//const courseTopicLength = "21";
//const firstElement = "J";
//const lastElement = "s";


//Незмінність рядків

//let product = "Droid";
//console.log(product); // "Droid"

// Це не має жодного ефекту
//product[2] = "O";
//console.log(product); // "Droid"

//let product = "Droid";
//console.log(product); // "Droid"

//product = "DrOid";
//console.log(product); // "DrOid"


//оператори порівняння

//const a = 2;
//const b = 5;

//console.log(a > b); // false
//console.log(b > a); // true
//console.log(a >= b); // false
//console.log(b >= a); // true

//console.log(a < b); // true
//console.log(b < a); // false
//console.log(a <= b); // true
//console.log(b <= a); // false

//задача оператри порівння

//Оголоси змінну isAdult та задай їй результат перевірки значення змінної age.
//Використай оператори порівняння та доповни код так, щоб значенням isAdult було true,
//якщо вік користувача більше або дорівнює 18 та false, якщо менше 18.

//Оголошена змінна age
//Оголошена змінна isAdult
//Якщо значення age дорівнює 8, то значення isAdult буде false
//Якщо значення age дорівнює 14, то значення isAdult буде false
//Якщо значення age дорівнює 20, то значення isAdult буде true
//Якщо значення age дорівнює 37, то значення isAdult буде true

//const age = 16;
//const isAdult = age >= 18;

//Оператори рівності

//console.log(5 == 5); // true
//console.log(5 == 3); // false
//console.log(5 != 3); // true
//console.log(5 != 5); // false


// Погано, бо виконується неявне приведення рядків і булевого значення до числа
//console.log(5 == "5"); // true
//console.log(5 != "5"); // false
//console.log(1 == true); // true
//console.log(1 != true); // false

//сувора рівність
// Добре, приведення типів не виконується
//console.log(5 === 5); // true
//console.log(5 === "5"); // false
//console.log(5 !== "5"); // true
//console.log(5 !== 5); // false
//console.log(1 === true); // false
//console.log(1 !== true); // true

//задача сувора рівніть
//Оголоси змінну isValid і задай їй значенням результат
//перевірки рівності паролей в змінних correctPassword і userPassword.

//Якщо паролі співпадають (сувора рівність), значення isValid має бути true
//Якщо паролі не співпадають, значення isValid має бути false
//Оголошена змінна correctPassword
//Оголошена змінна userPassword
//Оголошена змінна isValid
//Якщо значення userPassword дорівнює "mangodab3st", значення isValid буде false
//Якщо значення userPassword дорівнює "kiwirul3z", значення isValid буде false
//Якщо значення userPassword дорівнює "jqueryismyjam", значення isValid буде true

//const correctPassword = "jqueryismyjam";
//const userPassword = "mangodab3st";
//const isValid = correctPassword === userPassword;

//явне перетворення типів до числа
//явне перетворення

//console.log(Number("5")); // 5
//console.log(Number(true)); // 1
//console.log(Number(false)); // 0
//console.log(Number(null)); // 0

//NaN
//console.log(Number(undefined)); // NaN
//console.log(Number("Jacob")); // NaN
//console.log(Number("25px")); // NaN

//Арифметичні операції (+, -, *, /) виконують неявне перетворення типів.
//console.log("5" * 2); // 10
//console.log("10" - 5); // 5
//console.log(5 + true); // 6
//console.log(5 - true); // 4
//перетворення неявне - операції порівняння
//console.log("10" > 5); // true
//console.log(10 > "5"); // true
//console.log(5 > true); // true
//console.log(5 < true); // false
//console.log("5" < true); // false

//Метод Number.parseInt()

//console.log(Number.parseInt("5")); 5
//console.log(Number.parseInt("5.5")); // 5
//console.log(Number.parseInt("5cm")); // 5 
//console.log(Number.parseInt("12qwe74")); // 12 
//console.log(Number.parseInt("12.46qwe79")); // 12 
//console.log(Number.parseInt("cm5")); // NaN 
//console.log(Number.parseInt("")); // NaN 
//console.log(Number.parseInt("qweqwe")); // NaN

//Метод Number.parseFloat()

//console.log(Number.parseFloat("5")); // 5
//console.log(Number.parseFloat("5.5")); // 5.5
//console.log(Number.parseFloat("3.14")); // 3.14
//console.log(Number.parseFloat("5cm")); // 5
//console.log(Number.parseFloat("5.5cm")); // 5.5
//console.log(Number.parseFloat("12qwe74")); // 12
//console.log(Number.parseFloat("12.46qwe79")); // 12.46
//console.log(Number.parseFloat("cm5")); // NaN
//console.log(Number.parseFloat("")); // NaN
//console.log(Number.parseFloat("qweqwe")); // NaN


//задача методи Number.parseInt() та Number.parseFloat()

//Змінна value містить величину у вигляді рядка,
//що складається з числової частини та одиниці виміру.Наприклад, 24.5px, 14cm, 20.3vh тощо.

//Оголоси змінну numerical і доповни код таким чином, щоб:

//Якщо це можливо, значенням змінної numerical буде число з плаваючою крапкою, що утворилось з рядка змінної value
//В іншому випадку, значенням numerical буде NaN.
//Оголошена змінна value
//Оголошена змінна numerical
//Якщо значення value дорівнює "24.5px", значення numerical буде 24.5
//Якщо значення value дорівнює "14cm", значення numerical буде 14
//Якщо значення value дорівнює "20.3vh", значення numerical буде 20.3
//Якщо значення value дорівнює "Poly16", значення numerical буде NaN

//const value = "24.5px";
//const numerical = Number.parseFloat(value);

//Арифметичні функції
// Клас Math 

//console.log(Math.floor(1.3)); // 1
//console.log(Math.floor(1.7)); // 1

console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2

console.log(Math.round(1.3)); // 1
console.log(Math.round(1.7)); // 2

console.log(Math.max(20, 10, 50, 40)); // 50

console.log(Math.min(20, 10, 50, 40)); // 10

console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294

//дробове число

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

//підхід 1
console.log(0.1 * 10 + 0.2 * 10); // 3
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

//підхід 2
console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2));  //  ”5.00”
console.log((8.762195).toFixed(4));  //  “8.7622”

//функції

function doStuff() {
  // Тіло функції
  console.log('Log inside multiply function');
}

// Оголошення функції multiply
function doStuff() {
  // Тіло функції
  console.log('Log inside multiply function');
}

// Виклики функції multiply
doStuff(); // 'Log inside multiply function'
doStuff(); // 'Log inside multiply function'
doStuff(); // 'Log inside multiply function'


//задача функції 
//Оголоси функцію sayHi.У тілі функції sayHi додай console.log()
// з рядком "Hello, this is my first function!".

//Після оголошення виклич функцію sayHi.

//Очікується оголошення функції
//Функції присвоєно ім'я sayHi
//В тілі функції sayHi є console.log("Hello, this is my first function!")
//Після оголошення є виклик функції sayHi

function sayHi() {
  // Тіло функції
  console.log("Hello, this is my first function!");
}

sayHi();


//параметри функції

// Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

// Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

// Передача аргументів
multiply(2, 3, 5); // "Result: 30"
multiply(4, 8, 12); // "Result: 384"
multiply(17, 6, 25); // "Result: 2550"


//задача функції

//Функція add повинна вміти додавати три числа і виводити результат у консоль.
//Оголоси для функції add три параметри: a, b і c,
//які будуть отримувати значення з аргументів, під час її виклику.

//Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>",
//де < result > - це сума переданих чисел.

//Оголошена функція add(a, b, c)
//Виклик add(15, 27, 10) виводить у консоль "Addition result equals 52"
//Виклик add(10, 20, 30) виводить у консоль "Addition result equals 60"
//Виклик add(5, 10, 15) виводить у консоль "Addition result equals 30"

function add(a, b, c) {
    console.log(`Addition result equals ${a+b+c}`)
}

add();

//оператор return

function multiply(x, y, z) {
	const product = x * y * z;
  // Повертаємо результат виразу множення
  return product;
}

// Результат роботи функції можна зберегти у змінну
//const result = multiply(2, 3, 5);
console.log(result); // 30


function multiply(x, y, z) {
  return x * y * z;
}

//const result = multiply(2, 3, 5);
console.log(result); // 30



function multiply(x, y, z) {
	const product = x * y * z;
}

const result = multiply(2, 3, 5);
console.log(result); // undefined



function multiply(x, y, z) {
  console.log('The code before return is executed as usual');

  return x * y * z;

  console.log('This code is never executed because it is after return');
}

console.log(multiply(2, 3, 5)); // 30


//задача оператор return

//Доповни код функції add таким чином, щоб вона повертала результат
// додавання значень трьох параметрів: a, b і c.

//Оголошена функція add(a, b, c)
//У функції add є оператор return
//Виклик add(15, 27, 10) повертає 52
//Виклик add(10, 20, 30) повертає 60
//Виклик add(5, 10, 15) повертає 30
//Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

function add(a, b, c) {
    return a + b + c;
}

add();

//Порядок виконання коду

function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

console.log("Log before multiply execution");
multiply(2, 3, 5); // "Result: 30"
console.log("Log after multiply execution");

//Послідовність логів у консолі буде такою:
//"Log before multiply execution"
//"Result: 30"
//"Log after multiply execution"


console.log("A");
function logStuff() {
	console.log("B");
}
console.log("C");
logStuff();
console.log("D");

// послідовність A > C > B > D

//зона видимість коду - глобальна

// Глобальна змінна
const value = "I'm a global variable";

function foo() {
// Можна звернутися до глобальної змінної
	console.log(value); // "I'm a global variable"
}

foo();
// Можна звернутися до глобальної змінної
console.log(value); 
// "I'm a global variable"

//локальна
function foo() {
	// Локальна змінна
	const value = "I'm a local variable";
	// Можна звернутися до локальної змінної
	console.log(value); // "I'm a local variable"
}

foo();
  console.log(value); // ReferenceError: value is not defined
                      // Помилка: локальну змінну не видно за межами  
                         функції


//глобальні та локальні змінні
//задача
//Функція makeMessage(name, price) створює і повертає повідомлення про покупку.
//Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

//name - назва товару
//price - ціна товару
//Доповни код функції таким чином, щоб вона повертала рядок
//"You picked <product name>, price per item is <product price> credits",
//де < product name > і < product price > - це значення параметрів name і price.
//Дуже зручно зробити цей рядок з використанням синтаксису шаблонних рядків.

//Увага
//Зверни увагу на те, що в коді відсутній виклик функції makeMessage.
// З цього завдання і далі ми самі будемо викликати твої функції і перевіряти те, 
//як вони працюють.Результат наших перевірок ти побачиш у блоці Результати під редактором коду.

//Оголошена функція makeMessage(name, price)
//Виклик makeMessage('Radar', 6150) повертає "You picked Radar, price per item is 6150 credits"
//Виклик makeMessage('Scanner', 3500) повертає "You picked Scanner, price per item is 3500 credits"
//Виклик makeMessage('Reactor', 8000) повертає "You picked Reactor, price per item is 8000 credits"
//Виклик makeMessage('Engine', 4070) повертає "You picked Engine, price per item is 4070 credits"

function makeMessage(name, price) {
    return `You picked ${name}, price per item is ${price} credits`;
}

makeMessage();

//задача
//Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки.
//Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

//orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
//pricePerItem - другий параметр, ціна одиниці товару.
//Функція повинна повертати загальну суму покупки - результат множення кількості товарів на ціну одного.

//Оголошена функція calculateTotalPrice (orderedQuantity, pricePerItem)
//Виклик calculateTotalPrice(5, 100) повертає 500
//Виклик calculateTotalPrice(8, 60) повертає 480
//Виклик calculateTotalPrice(3, 400) повертає 1200
//Виклик calculateTotalPrice(1, 3500) повертає 3500
//Виклик calculateTotalPrice(12, 70) повертає 840
//Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

//function calculateTotalPrice(orderedQuantity, pricePerItem) {
    //return orderedQuantity * pricePerItem;
//}

//calculateTotalPrice ()