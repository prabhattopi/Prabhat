// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
import { append } from "./fetch.js";
let navbari=document.getElementById("navbar")
navbari.innerHTML=navbar()




let searchibox=localStorage.getItem("for")
            
fetch(`https://masai-mock-api.herokuapp.com/news?q=${searchibox}`).then(res=>res.json()).then(data=>{
 append(data.articles)
 
 
    console.log(data)
})
let searchbox=document.getElementById("search_input")
searchbox.addEventListener("keyup",falto)
function falto(e){
      if(e.key=="Enter"){
           let searchiibox=document.getElementById("search_input")
            
          fetch(`https://masai-mock-api.herokuapp.com/news?q=${searchiibox.value}`).then(res=>res.json()).then(data=>{
           append(data.articles)
           
           
              console.log(data)
          })
        }
     
    
       
    
}
