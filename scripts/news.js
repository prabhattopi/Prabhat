// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
let navbari=document.getElementById("navbar")
navbari.innerHTML=navbar()


let searchbox=document.getElementById("search_input")
searchbox.oninput=search
function search(){
    
    window.location.href="../search.html"
}
let data=JSON.parse(localStorage.getItem("news"))

const append=(data)=>{
   
    data.forEach(({title,description,urlToImage}) => {
        document.querySelector("#detailed_news").innerHTML=null;
        let div=document.createElement("div")
        div.setAttribute("class","news")
        let img=document.createElement("img")
        img.src=urlToImage;
        let h3=document.createElement("h3")
        h3.innerText=title
        let p=document.createElement("p")
        p.innerText=description;
        div.append(img,h3,p)
        document.querySelector("#detailed_news").append(div)
        
        
    });




}
append(data)