const quote=document.getElementById("quote")
const author=document.getElementById("author")
const api_url = "https://api.quotable.io";

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;

}


