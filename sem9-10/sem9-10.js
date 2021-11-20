let i = 1;
let sharp = "#"
while (i < 8){
    console.log(sharp);
    i++;
    sharp+="#"
}
let count = 0;
while (count<101){
    if ((count%3 == 0) & (count%5 == 0)){
        console.log("FUZZBUZZ");
    } 
    else if ((count%3 == 0) & (count%5)!=0){
        console.log("FUZZ")
    }
    else if ((count%3 != 0) & (count%5 == 0)){
        console.log("BUZZ")
    }
    else{
        console.log(count)
    }
    count++;
} 

for (let y = 1; y<9;y++){
    let a = ""
    for (let x = 1; x<9; x++){
        if ((x+y)%2 == 0){
            a +="#"
        }
        else {
            a+=" "
        }
    }
    console.log(a)
}
function minimum(number1,number2){
    if ((number1 - number2)>0){
        alert(number2+" меньше")
    }
    else if ((number1 - number2)<0){
        alert(number1+" меньше")
    }
    else if ((number1 - number2)==0){
        alert("Числа Равны")
    }
    else {
        alert("Ошибка ввода")
    }
}
let variable1 = prompt("Введите число 1", 10);
let variable2 = prompt("Введите число 2", 15);
minimum(variable1,variable2)

function countBs(stroka){
    let count = 0
    for (let i=0; i < stroka.length ;i++){
        if ((stroka.charAt(i)=="b") || (stroka.charAt(i) == "B")){
            count++;
        }
    }
    alert("Всего B или b "+ count)
}
countBs(prompt("Введите строку", "BABA baba"))

function countChar(stroka,symbol){
    let count = 0
    for (let i=0; i < stroka.length ; i++){
        if (stroka.charAt(i)==symbol){
            count++;
        }
    }
    alert("Всего "+symbol+" "+ count)
}
countChar(prompt("Введите вашу строку","abAbCbafmano"),prompt("Введите символ для поиска","a"))

function range(begin,end,shag){
    let numbers = [];
    if (Number(shag)>0){
        for (let i = Number(begin) ; i <= Number(end) ; i+= Number(shag)){
        
            numbers.push(i);
        }
        alert(numbers)
        console.log(numbers)
        
        summ(numbers)
        
    }
    else if (Number(shag)>0){
        for (let i = Number(end) ; i <= Number(begin) ; i+= Number(shag)){
        
            numbers.push(i);
        }
        alert(numbers)
        console.log(numbers)
        summ(numbers)
    }
    else{
        alert("Ошибка ввода")
    }
    
}
function summ(arr){
    let sum = 0;
    while (arr.length >0){
        sum+=arr.shift();
    }
    alert("сумма равна "+sum)
}
range(prompt("введите начало отсчета",9),prompt("на каком числе заканчивать",13),prompt("С шагом ",1))
function ReverseArray(arr){
    let arr2 = [];
    
    while (arr.length >0){
        arr2.push(arr.pop())
    }
    alert(arr2)
}
let toreverse=[1,2,3,4,5];
ReverseArray(toreverse)

function ReverseArratInPlace(arr){
    let k = arr.length -1
    let log = [];
    let i =0
    while (log.length<arr.length){
        let a = arr[i];
        let b = arr[k];
        log.push(a,b)
        arr[k] = a;
        arr[i] = b;
        k--;
        i++;
    }
    console.log(arr)
}
let toreverse2=[1,2,3,4,5]
ReverseArratInPlace(toreverse2)
