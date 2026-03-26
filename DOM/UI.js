async function getdata(){
    let res=await fetch("https://dummyjson.com/todos");
    let data=await res.json();
    // console.log(data);
    
    Getdata(data.todos);
}

function Getdata(data1){
    let container=document.getElementsByClassName("container")[0];
    data1.forEach(obj=>{
        let p=document.createElement("p");
        p.innerHTML=`<h3>Id : ${obj.id}</h3> 
                    Todo: ${obj.todo}
                    Completeed: ${obj.completed}`

        container.append(p);
    }); 
}

getdata();
