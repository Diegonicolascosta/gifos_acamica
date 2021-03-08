// API INFO & PARAMETERS //
const ApiBase = "https://api.giphy.com/v1/gifs/";
const apiKey = "dvMF6ZEGC3KYgwMSAhpCKNiFt8nyxwwG";

// PROGRAMA //

// TRENDING SECCION //
let apiUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&q=s&limit=3`;
let ghipho = document.getElementById("trendingGifResults");

fetch(apiUrl)
  .then((resp) => resp.json())
  .then((objGift) => {
    console.log(objGift);
    let array = objGift.data;
    //for ( let i = 0 ; i < array.length  ; i++ ) {
    array.forEach((elem) => {
      let card = document.createElement("div");
      let draw = document.createElement("img");
      draw.src = elem.images.original.url;
      card.classList.add("cardGift");
      card.appendChild(draw);
      ghipho.appendChild(card);
    });
  });

// SECCION SEARCH GIFOS //

let text = document.getElementById("searchInput");
let btnTextInput = document.getElementById("searchBtn");
// text.addEventListener("keyup", () => {
//   if (text.value.length > 2) {
//     //document.getElementById("suggestionsBoxId").innerHTML = '';
//     suggestions(text.value);
//   }

text.onkeyup = (e) => {
  console.log(e.target.value);  
  suggestions(text.value);
};
  btnTextInput.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(text.value);
    getSearch(text.value);
  });

  
