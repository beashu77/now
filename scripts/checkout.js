// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var amount=JSON.parse(localStorage.getItem("amount"));
//console.log(typeof(amount));

document.getElementById("wallet").innerText=amount;


let data = JSON.parse(localStorage.getItem("movie"));

//console.log(data);

    document.getElementById("movie").innerHTML=null;

    let box=document.createElement("div");
    box.setAttribute("id","box");

    let title=document.createElement("h2");
       title.innerText=data[0].Title;

       let image=document.createElement("img");

       image.src=data[0].Poster;

       

       box.append(title,image);
       document.getElementById("movie").append(box);

       function finalcheck()
       {
           console.log(amount)
           let seat=document.getElementById("number_of_seats").value;
           seat=Number(seat);

           let price=100*seat;
           console.log(price)
           
           if(amount>=price)
           {
            document.getElementById("wallet").innerText=amount-price;
            alert("Booking successful!");
            localStorage.setItem("amount",JSON.stringify(amount-price));
           }
           else{
             alert("Insufficient Balance!");

           }
     
       }

       

