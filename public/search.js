//for category
const list=document.querySelectorAll(".list");
function activeLink(){
    list.forEach((item)=>{
    item.classList.remove("active")});
    this.classList.add("active");
    getCategory();
}

function getCategory(){
    const active=document.querySelectorAll(".active");
    var category;
    active.forEach((item)=>{
    category=item.textContent});
    if(category)
    {
        return category;
    }
    else{
        
        category="None";
        return category;
    }
}

list.forEach((item)=>
item.addEventListener("click",activeLink));

//for sort By
const slist=document.querySelectorAll(".slist");
function sortActive(){
    slist.forEach((item)=>{
        item.classList.remove("sActive")});
        this.classList.add("sActive");
        getSort();
}

function getSort(){
    const sActive=document.querySelectorAll(".sActive");
    var sortBy;
    sActive.forEach((item)=>{
        sortBy=item.textContent});
        if(sortBy)
        {
            return sortBy;
        }
        else
        {
            sortBy="PublishedAt";
            return sortBy;
        }
}
slist.forEach((item)=>
item.addEventListener("click",sortActive));

// function activelink(element){
//     let item=document.getElementById(`${element}`);
//     const list=document.querySelectorAll(".list");
//     list.forEach((elmt)=>{
//         elmt.classList.remove("active")});
//     item.classList.add("active");
// }

//for keywords
function getKeywords(){
    var searchInput=document.getElementById("searchInput").value;
    if(searchInput)
    {
        return searchInput;
    }
    else
    {
        searchInput="none";
        return searchInput;
    }
}

//for search
const searchbtn=document.getElementById("searchbtn");
searchbtn.addEventListener("click",search);

//executing search
const API_KEY = `4133a954c08249019e6f221dc4e9b1b8`;
var url;
function search(){
    var category=getCategory();
    var keywords=getKeywords();
    var sortBy=getSort();
    if(category!="None")
    {
        if(keywords!="none")
        {
            console.log("1",keywords);
            url=`https://newsapi.org/v2/top-headlines?country=in&q=${keywords}&category=${category}&apiKey=${API_KEY}`;
        }
        else
        { 
            console.log("2");
            url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
        }
    }
    else
    {
        if(keywords!="none")
        {
            console.log("3",keywords);
            url=`https://newsapi.org/v2/everything?language=en&sortBy=${sortBy}&q=${keywords}&apiKey=${API_KEY}`;
        }
        else
        {
            console.log("4");
            url=`https://newsapi.org/v2/everything?language=en&sortBy=${sortBy}&apiKey=${API_KEY}`;
        }
    }
    //const api_url=`https://newsapi.org/v2/everything?language=en&q=${sortBy}&q=${keywords}&apiKey=${API_KEY}`;
    getNews(url);

}
async function getNews(url) {
    
    // Storing response
    const response = await fetch(url);
    console.log(response);
    var newsHtml;
    // Storing data in form of JSON
    var data = await response.json();
    let articles=data.articles;
    articles.forEach((element)=>{
        let news=`<div class="swiper-slide">
        <div class="newsbox">
        <img src="${element["urlToImage"]}">
        <h3>${element["title"]}</h3>
        <p>${element["description"]}</p>
        <a href="${element["url"]}" target="_blank"><button class="btn">Read more</button></a>
    </div>
    </div>`;
    newsHtml+=news;
    });
    let newsfeed=document.getElementById('newsfeed');
    newsfeed.innerHTML=newsHtml; 
    console.log(data);
}

module.exports={activelink};
