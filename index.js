'use strict'

// let user = { name: 'Oleksii'};
//
// let map = new WeakMap();
// map.set(user, 'data');
//
// user = null;

// console.log(user);
// console.log(arr[0]);

// В консоли от юзера мы получим null, а от arr получим Oleksii. Т.к. объект всё равно хранится в памяти

// console.log(map.has(user));// console result = false. Это значит, что объект был удалён автоматически
// console.log(map);


let cache = new WeakMap();

/*Создадим функцию, которая будет кэшировать пользователей*/

function cacheUser(user) { // Если пользователь выходит из чата, он автоматически удаляется из памяти
if(!cache.has(user)){//Если пользователя нет, то он автоматически создаётся
    cache.set(user,Date.now());//мы отслеживаем, когда пользователь зашёл в чат
}

return cache.get(user);
}

/*Создадим пользователей*/

let lena = {name: 'Elena'};
let alex = {name:'Alex'};

cacheUser(lena);
cacheUser(alex);

/* Пользователь lena вышла из чата, мы можем передать это через null*/

lena = null;

console.log(cache.has(lena));//false
console.log(cache.has(alex));//true

//WeakSet поддерживает add, has, delete

let messages = [
    {text: 'Hello', from:'John'},
    {text: 'World', from:'Alex'},
    {text: '....', from:'M'},
];


let readMessages = new WeakSet();
/*При работе с чатом мы можем прочитать сообщения и таким образом с помощью weakSet добавить новое сообщение*/

readMessages.add(messages[0]);
readMessages.add(messages[1]);


readMessages.add(messages[0]);// Если мы зашли в чат, то сообщение будет уже прочитанным.

console.log(readMessages.has(messages[0]));//Если в структуре данных это сообщение есть, то мы получим true