 const link=document.getElementById('lengthylink');
//     fetch('https://api-ssl.bitly.com/v4/shorten',{
//     method: 'POST',
//     headers: {
//         'Authorization': 'Bearer d6ba197457e160446688efdba26b9ea039a7bb1d',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ "long_url": "https://www.youtube.com/watch?v=fdze464-ojo", "domain": "bit.ly" })
// })
// .then(response=>response.json())
// .then(data=>console.log(data));


const linkshortner=(link)=>{
    $('#loader').show();
    $('#loader').toggleClass('spinner');
 fetch('https://api-ssl.bitly.com/v4/shorten',{
    method: 'POST',
    headers: {
       'Authorization': `${Cred.API_KEY}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": `${link}`, "domain": "bit.ly" })
})
.then(response=>response.json())
.then(data=>{
    $('#loader').toggleClass('spinner');
    $('#loader').hide();
    $('#shortenlink').show();
    $('#shortlink').text(`${data.link}`);
    $('#shortlink').prop('href',`${data.link}`)
    console.log(data.link);
});
}

// const Btn=document.getElementById('shorten');
const Url=document.getElementById('lengthylink');

// Btn.addEventListener('click',()=>{
//     console.log(Url.value);
//     // const shortlink=linkshortner(Url.value);
// })
function btnclick(){
    linkshortner(Url.value);
}

$('#lengthylink').keyup(function (event) {
    if (event.keyCode === 13) {
        $('#shorten').click();
    }
})
function Main(){
    $('#shortenlink').hide();
    $('#loader').hide();
    console.log('starter');
}

Main();