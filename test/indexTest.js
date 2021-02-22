// API INFO & PARAMETERS //
const ApiBase = 'https://api.giphy.com/v1/gifs/';
const apiKey =  'dvMF6ZEGC3KYgwMSAhpCKNiFt8nyxwwG'

// PROGRAMA //
let apiUrl = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=spiderman&limit=1`
let ghipho = document.getElementById('ghi');

fetch(apiUrl)
.then(resp => resp.json())
.then(objGift => {
    console.log(objGift)
    let dibujo = objGift.data;
    let draw = document.createElement('img');
    draw.src = dibujo[0].images.original.url;
    ghi.appendChild(draw);
    

});


