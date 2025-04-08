const endpoint = `https://lanciweb.github.io/demo/api/pictures/`
const cardImg = document.querySelectorAll('.card-img');
const overlay = document.getElementById('overlay');
const button = document.getElementById('button');
const overlayImg = document.getElementById('overlay-img');

axios.get(endpoint).then(res => {
    
    const exArray = res.data;
    console.log(exArray);

    for (let i = 0; i < 6; i++) {
        const { url } = exArray[i];
        cardImg[i].innerHTML = `<img src="${url}" alt="">`
        cardImg[i].addEventListener('click', function(){
            overlay.classList.add('d-block');
            overlayImg.innerHTML = `<img src="${url}" alt="">`
        });
        button.addEventListener('click', function() {
            overlay.classList.remove('d-block');
        })
    }
    
});