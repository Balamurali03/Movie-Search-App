let div=document.createElement("div")
let input=document.createElement("input")
let button=document.createElement("button")
let section=document.createElement("section")
div.className="mySearch"
input.className="search"
input.type="search"
button.innerText="search"
section.id="movie"

let body=document.querySelector("body")
body.prepend(section)
body.prepend(div)
div.append(input)
div.append(button)


async function getmovies()
{
    try
    {
    let search=document.querySelector(".search")
    let ombdmovies=await fetch(`https://www.omdbapi.com/?s=${search.value}&apikey=9350b223`)
    let{Search:movies}=await ombdmovies.json();

    console.log(movies)

    
    
    for(let{Poster,Title,Year} of movies)
    {

        
    
       
        let div=document.createElement("div")
        div.className="card"

        let h2=document.createElement("h2")
        h2.innerText=Title;

        let img=document.createElement("img")
        img.src=Poster;
        img.alt="no image";

        let h3=document.createElement("h3")
        h3.innerText=Year;

        section.prepend(div)
        div.append(h2)
        div.append(img)
        div.append(h3)
       
    }
    
    

    }
    catch(err)
    {
       section.innerHTML=`<h1>no movies found</h1>`
    }
}

 



function user()
{
    let search=document.querySelector(".section")
    let section=document.getElementById("movie")

    if(search.value=="")
    {
        section.remove();
        let mysection=document.createElement("section")
        mysection.id="movie"
        let body=document.body;
        body.append(mysection)
    }

}



    button.addEventListener("click", getmovies)
    //input.addEventListener("keyup",user)
    
let adds=["keyup","change"]
for(let add of adds)
{
    input.addEventListener(add,user)
}

    // function meaasage()
    // {
    //     let divv=document.createElement("div");
    //     div.style.width="100%";
    //     div.style.backgroundColor:"black";

    //     div.innerText="helloooooo";
    // }
    // let btnn=createElement("button");
    // button=addEventListener(onmousedown, message);






