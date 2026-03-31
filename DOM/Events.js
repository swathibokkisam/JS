let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");

// btn1.onclick=()=> {
//      document.body.style.backgroundColor="red";
// }

// btn1.addEventListener("click",()=>{
//     console.log("hello");
    
// })

// console.log(btn1);

btn1.addEventListener("click",async()=>{
let res=await fetch("https://fakestoreapi.com/products");
let data=await res.json();
getdata(data)
// console.log(data);
});

function getdata(data){
    let container=document.getElementsByClassName("container")[0];
    data.forEach(obj => {
        let p=document.createElement("p");
        p.innerHTML=`
           <h3>ID : ${obj.id}</h3>
           <p>Title : ${obj.title}</p>
           <img src='${obj.image}'>
           <button id="del">Delete</button>
        `
        container.append(p);
        
        // let del1=document.getElementById("del");
        
        // del1.addEventListener("click",()=>{
        //     p.remove();
        // })
        
    });
}
