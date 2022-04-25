// Store the wallet amount to your local storage with key "amount"
document.getElementById("wallet").innerText=0;
var arr=[];
function input_amount(){
   let amount=document.getElementById("amount").value;
    
   //console.log(amount)
    arr.push(amount);
    let sum=0;
    for(var i=0;i<arr.length;i++)
    {
       sum+=Number(arr[i]);
    }
   localStorage.setItem("amount",JSON.stringify(sum));
   document.getElementById("wallet").innerText=sum;
   
}