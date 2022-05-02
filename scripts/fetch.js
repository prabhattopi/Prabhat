
const url=(query)=>{
    // let input=document.getElementById("search_input")


    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`).then(res=>res.json()).then(data=>{
        append(data.articles)
        console.log(data.articles)
    })
}
// url()

const append=(data)=>{
    document.querySelector("#results").innerHTML=null;
    data.forEach(({title,description,urlToImage}) => {
        let div=document.createElement("div")
        div.setAttribute("class","news")
        let img=document.createElement("img")
        img.src=urlToImage;
        let h3=document.createElement("h3")
        h3.innerText=title
        let p=document.createElement("p")
        p.innerText=description;
        div.append(img,h3,p)
        document.querySelector("#results").append(div)
        div.addEventListener("click",()=>{
            display({title,description,urlToImage})
            window.location.href="../news.html"
        })
        
        
    });




}
let Data=JSON.parse(localStorage.getItem("news"))||[]
const display=(data)=>{
    Data.push(data)
    localStorage.setItem("news",JSON.stringify(Data))

}
        

export {url,append}
