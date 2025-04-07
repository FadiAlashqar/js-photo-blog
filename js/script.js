const endpoint = `https://lanciweb.github.io/demo/api/pictures/`
const cardImg = document.querySelectorAll('.card-img');
    

axios.get(endpoint).then(res => {
    
    const exArray = res.data;
    console.log(exArray);

    for (let i = 0; i < 6; i++) {
        const { url } = exArray[i];
        cardImg[i].innerHTML = `<img src="${url}" alt="">`
    }
        
})