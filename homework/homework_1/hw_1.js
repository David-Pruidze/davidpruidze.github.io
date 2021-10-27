"use strict"

let surname = (prompt('Введите свою фамилию'));
while(surname === '' || surname === " "){
    surname = prompt('Введите свою фамилию');
}

let name = prompt('Введите своё имя');
while(name === '' || name === " " ){
    name = prompt('Введите своё имя');
}

let patronymic = prompt("Введите свое отчество");
while(patronymic === '' || patronymic === " "){
    patronymic = prompt("Введите свое отчество");
}

let age = parseInt(prompt("Введите свой возраст"));
while(age === '' || age === " " || isNaN(age)){
    age = parseInt(prompt("Введите свой возраст"));
}
let gender = confirm("Вы мужчина?");
let a = "мужской";
let b ="женский";
if (gender === true){
    gender = a;
}else{
    gender = b;
}

let pension;
 let c = "нет";
 let x = "да"

if(age > 67){
    pension = true
    pension = x;
}else if (age>56){
    pension = false;
    pension = x;
}else{
    pension = false;
    pension = c;
}


alert("ваше ФИО:" + " " + name + " " + surname + " " + patronymic + "\n"+
   "ваш возраст в годах:" + age + "\n" +
    "ваш возраст в днях:" + age*365 +"\n" +
    "через 5 лет вам будет:" + age*5  +"\n" +
    "ваш пол:" + gender +"\n" +
    "вы на пенсии:" +pension);
