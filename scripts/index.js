// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
let navbari=document.getElementById('navbar')
navbari.innerHTML=navbar();



// 
import {url,append} from "./fetch.js"

let searchbox=document.getElementById("search_input")
searchbox.addEventListener("keydown",search)
function search(e){
    if(e.key=="Enter"){
    
    
        localStorage.setItem("for",searchbox.value)
        window.location.href="../search.html"
    
      
    }
}

url("in")
document.getElementById("in").addEventListener("click",()=>{
    url("in")
    
})
document.getElementById("ch").addEventListener("click",()=>{
    url("ch")
    
})
document.getElementById("uk").addEventListener("click",()=>{
    url("uk")
    
})
document.getElementById("us").addEventListener("click",()=>{
    url("us")
    
})
document.getElementById("nz").addEventListener("click",()=>{
    url("nz")
    
})















    
   


