// let a = 5;
// let b = 3;
// let c;

c = a + b;
console.log(c);

function sum(a, b){
    let c = a + b;
    console.log(c);
}

function sum(a, b){
    let c = a + b;
    console.log(c);
}

sum(3, 5);
sum(5, 5);

let a = 10;
let b = 2;

sum(a, b);

// іменована функція
function login(username, password){
    cy.get('[#username]').type(username);
    cy.get('[#password]').type(password);
}

login('blabla@mail.com', 'pass123');


// анонімна функція

function(a, b){
    let c = a + b;
    console.log(c);
}

const anonimFunc = function(a, b){
    let c = a + b;
    console.log(c);
}

anonimFunc(3, 4);


// function sum(a, b){
//     let c = a + b;
//     return c;
// }
//
// let a = 10;
// let b = 2;
//
// let result = sum(a, function(){
//     let a = 10;
//     let b = 20;
//     return a + b;
// })
//
// console.log(result)

function sum(a, b){
    let c = a + b();
    return c;
}

let a = 10;

console.log(sum(a, function(){
    let a = 10;
    let b = 20;
    return a + b;
}))

function sum(a, b){
    let c;

    if(typeof b === "function"){
        c = a + b();
    }else{
        c = a + b;
    }

    return c;
}

let a = 10;

console.log(sum(a, function(){
    let a = 10;
    let b = 20;
    return a + b;
}));

console.log(sum(a, 10));

///

function sum(a, b){
    let c = a + b;
    return c;
}

let result = sum(3, 4);

console.log(result)


// ( ) => {} - стрілочна функція

(a, b) => {
    let c = a + b;
    return c;
}

const arrowFunc = (a, b) => {
    let c = a + b;
    return c;
}

console.log(arrowFunc(3, 5))

// return

function sum(a, b){
    let c = a + b;
    return c;
    console.log(c); // не виконається
}

function sum(){
    for(let i = 0; i < 10; i++){
        console.log(i)
        if(i === 3){
            return
        }
    }
}

sum();

let arr = [2, 4, 6, 8, 10, 11, 12, 13, 14];
function sum(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 11){
            return;
        }
        console.log(arr[i]);
    }
}

sum(arr);

// callback

function someFunction(){
    console.log('Hello')
}


setTimeout(someFunction, 2000);


