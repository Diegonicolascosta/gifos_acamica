// // API INFO & PARAMETERS //
const ApiBase = 'https://api.giphy.com/v1/gifs/';
const API_KEY =  'dvMF6ZEGC3KYgwMSAhpCKNiFt8nyxwwG';

// // PROGRAMA //
// let apiUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&q=s&limit=3`
// let ghipho = document.getElementById('ghi');

// fetch(apiUrl)
// .then(resp => resp.json())
// .then(objGift => {
//     console.log(objGift)
//     let array = objGift.data;
//     for ( let i = 0 ; i < array.length  ; i++ ) {
//     let draw = document.createElement('img');
//     draw.src = array[i].images.original.url;
//     ghi.appendChild(draw);
//     }

// });

// section search gifos //




let text = document.getElementById('search_Input');
let btnTextInput = document.getElementById('searchBtn');




btnTextInput.addEventListener('click',(e) => {
    (e).preventDefault();    
    console.log(text.value);
    getSearch(text.value);
    
}); 


    async function getSearch (text) {
    let gifs = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${text}&limit=12`);
    let gifsResult = await gifs.json();
    console.log(gifsResult); 

}

function drawGifos () {


    
}


