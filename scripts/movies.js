// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
async function searchMovies()
{
    
    try{
        const query=document.getElementById("search").value;

    const res =await fetch(`https://www.omdbapi.com/?apikey=e37eb893&s=${query}`)

    const data =await res.json();

    const movies = data.Search;
    console.log(movies);
    
    return movies;
    }catch(err){
        console.log("err:",err);
    }
}


 function appendMovie(data)
 {
     document.getElementById("movies").innerHTML=null;

     data.forEach((e,i) => {
         let box=document.createElement("div");

        let image=document.createElement("img");

        image.src=e.Poster;

        let title=document.createElement("p");
        title.innerText=e.Title;
        

        let book=document.createElement("button");
        book.innerText="Book Now";
        //book.setAttribute("id","book_now");
        book.addEventListener("click",function(){
             Booked_movie(e,i);
        });

        box.append(image,title,book);
        document.getElementById("movies").append(box);


     });

 }

 var arr=JSON.parse(localStorage.getItem("movie"))||[];
 function Booked_movie(e,i){
     arr.push(e);
     localStorage.setItem("movie",JSON.stringify(arr));
    window.location.href=" checkout.html";
 }

 async function main()
 {
     let data= await searchMovies();

     if(data==undefined)
     {
         return false;
     }
     appendMovie(data);
 }


 function debouncing(func,delay)
 {
    if(id)
    {
        clearInterval(id);
    }
    id=setTimeout(function(){
        func();
    },delay)
 }


 var amount=JSON.parse(localStorage.getItem("amount"));
 //console.log(amount);

 document.getElementById("wallet").innerText=amount;
