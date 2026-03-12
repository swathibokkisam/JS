var amount=150;
switch(amount){
    case amount<50:
        console.log("No discount");
        break;
    case amount>=50 && amount<=100:
        console.log("5% discount"); 
        break;   
    case amount>=101 && amount<=200:
        console.log("10% discount"); 
        break; 
    case amount>200:
        console.log("15% discount");
        break;     
}