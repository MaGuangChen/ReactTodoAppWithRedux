/*
let add = (a,b)=>{
    return a + b;
}

let toAdd = [9,16];
console.log(add(...toAdd));

let groupA = ['Curry','Lebron'];
let groupB = ['MCQ'];
//將groupA跟groupB加入陣列final
let final = ['Fiona'];
console.log(final);

//直接加入陣列
final = ['Fiona',groupA,groupB];
console.log(final);//[ 'Fiona',['Curry', 'Lebron'], ['MCQ'] ]

//使用concat method，其實用不用剩餘參數都會是一樣結果
final = final.concat(...groupA,...groupB);
console.log(final);//[ 'Fiona', 'Curry', 'Lebron', 'MCQ' ]
*/
let person = ['paul',26];
let personTwo = ['fiona',26];
//Hi paul you are 26
let greet = (name,age)=>{
    console.log(`Hi ${name} your are ${age}`);
}
greet(...person);
greet(...personTwo);
let names =['Mike','Harden'];
let final =['paul',...names];
//Hi paul
final.map(
    (name)=>{
       console.log(`Hi ${name}`) ;
    }
);

