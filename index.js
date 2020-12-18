let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//pegando imagens externa e em seguida, salvar no local storage ou remover

async function getExternalImage() {
    const reponse = await fetch('https://source.unsplash.com/random');

    document.querySelector('.image')
        .innerHTML = `<img src="${reponse.url}"/>`;
}

getExternalImage()
//clicando no botão para pegar imagem externa
document.querySelector('.image').onclick = function () {

    //Salvando no array de imagens salvas local Storage
    const imageSource = document.querySelector('.image img').src
    //Verificar se a imagem repetida, e remover

    favorites.push(imageSource);
    // Salvando no local Storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log(favorites);
    
}

