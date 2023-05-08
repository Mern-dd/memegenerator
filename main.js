const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-button")
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeImage =document.querySelector(".meme-generator img");
const memeAuthor = document.querySelector(".meme-generator .meme-author");


updateDetails = (url,title,author) =>
{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by ${author}`
}

generateMeme = ()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => 
       response.json())
        .then(data => {
            console.log(data);
            updateDetails(data.url, data.title, data.author)
        })
 
}
generateMemeBtn.addEventListener("click", generateMeme)