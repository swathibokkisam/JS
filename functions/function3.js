// task1
function greet(name){
    return "Hello,"+name;
}

console.log(greet("swathi"));
console.log(greet("Kavitha"));
console.log(greet("baby"));

// task2
function sum(a,b){
    return a+b;
}
console.log("sum of two numbers:"+sum(45,76));
console.log("sum of two numbers:"+sum(43,12));
console.log("sum of two numbers:"+sum(32,56));

// task3
function square(num){
    return num*num;
}

console.log("Square of a numbers:"+square(3));
console.log("Square of a numbers:"+square(16));
console.log("Square of a numbers:"+square(65));

// task4
function average(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log("Average:"+average([44,77,89]));
console.log("Average:"+average([49,77,69]));
console.log("Average:"+average([40,57,88]));

// task5
function vowels(str){
let vowels="aeiouAEIOU";
    for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
       return str+"--It contains vowels";
    }
}
        return str+"-- It doesnt contains vowels";
    
}

console.log(vowels("swathi"));
console.log(vowels("hll"));
console.log(vowels("Thalapathi"));


// task6
function convertTemperature(temp,scale){
    if(scale==="C"){
     return (temp-32)* 5/9;
    }else if(scale==="F"){
    return (temp*(9/5))+32;
    }else{
        return "Invalid scale. Use 'C' or 'F'";
    }

}
console.log(convertTemperature(32, "C"));   
console.log(convertTemperature(100, "C"));  
console.log(convertTemperature(0, "F"));    
console.log(convertTemperature(25, "F"));   
console.log(convertTemperature(50, "X"));