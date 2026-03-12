// task1
// without curly braces with multiple parameters


// function print(callback){
//      console.log(callback(4,5));
// }
// print((a,b)=> a+b);

// task2
// without curly braces with single parameters no ()


// function print(callback){
//  console.log(callback("swathi"))
// }
// print(name=> "hello,"+name+"!");

// task3

// function print(callback){
//     console.log(callback(11));

// }
// print(num=> {
//    if(num%2==0){
//     return true;
//    }
//    else{
//     return false;
//    }
// }

// )


// task4
function print(callback){
    console.log(callback(11));

}
print(num=> {
   if(num>10){
    return true;
   }
   else{
    return false;
   }
}

)


// function print(callback){
//     var arr=[1,2,3,4];
//     callback(arr);
// }
// print(function a(arr){
//     for(i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// })