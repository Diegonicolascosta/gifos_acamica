//SEARCH GIFOS FUNTION//
async function getSearch (text, draw) {
    let gifs = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${text}&limit=12`);
    let gifsResult = await gifs.json();
    console.log(gifsResult); 
    if(!draw){
    drawGifos(gifsResult); 
    }
    }

//DRAW GIFOS FUNTION//
function drawGifos (gifsResult) {
let resulGifos = document.getElementById('searcherReturnApi')
//console.log(resulGifos)
let array = gifsResult.data;
array.forEach(elem => {                       
    let card = document.createElement('div')
    let draw = document.createElement('img');
    draw.src = elem.images.original.url;
    card.classList.add("cardGift");
    card.appendChild(draw);
    resulGifos.appendChild(card);
     
});

}

// FUNCTION SUGGESTIONS //
//let dt = await fetch(`https://api.giphy.com/v1/tags/related/${term}?api_key=${api_key}&limit=4`);

async function suggestions (term) {
    let suggest = await fetch (`https://api.giphy.com/v1/tags/related/${term}?api_key=${apiKey}&limit=4`);
    let suggestResult = await suggest.json();
    //console.log(suggestResult); 
    drawSuggest (suggestResult);
    
} 
    

function drawSuggest (term) { 
    console.log(term);
     let suggestList = document.getElementById('suggestionsUl');   
     let item = document.createElement("li"); 
     let itemJson = term.data[0].name;
     let itemSuggest = document.createTextNode(itemJson);   
     
     item.appendChild(itemSuggest);
     suggestList.appendChild(item);         
}

