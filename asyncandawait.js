async function print(){
    let res=await fetch("https://dummyjson.com/quotes");
    let data=res.json()
    console.log(data);
    
}
print();

async function print1(){
    let res=await fetch("https://dummyjson.com/todos");
    let data=res.json();
    console.log(data);
    
}
print1();

async function print2(){
    let res=await fetch("https://jsonplaceholder.typicode.com/photos");
    let data=res.json();
    console.log(data);
    
}
print2();

async function print3(){
    let res=await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    let data=res.json()
    console.log(data);
    
}
print3();