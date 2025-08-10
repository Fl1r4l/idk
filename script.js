let button = document.querySelector(".button")
let loader = document.querySelector(".loader")
button.addEventListener("click", async function () {
    button.style.display = "none"
    loader.style.display = "block"
    const quoteObj = await getQuote()
    blocknasaite(quoteObj.quoteText, quoteObj.quoteAuthor)
    button.style.display = "block"
    loader.style.display = "none"
})
async function getQuote() {
    const apiUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru";
    try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
function blocknasaite(quote, quoteAuthor) {
    let newElement = document.createElement("div")
    newElement.classList.add("quote")
    let newP1Element = document.createElement("p")
    newP1Element.classList.add("quote-text")
    newP1Element.textContent = quote
    let newP2Element = document.createElement("p")
    newP2Element.innerHTML = quoteAuthor
    newP2Element.classList.add("quote-author")
    newElement.appendChild(newP1Element)
    newElement.appendChild(newP2Element)
    let body = document.querySelector("body")
    body.appendChild(newElement)
}
// getQuote();