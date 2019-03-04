//find elements
var prevBtn = document.getElementById('show-prev');
var nextBtn = document.getElementById('show-next');
var sliedImage = document.getElementById('slide-img');
//subsr
prevBtn.addEventListener('click', onShowPrevBtn);
nextBtn.addEventListener('click', onShowNextBtn);

var imagesUrls = [];
imagesUrls.push('https://www.sunhome.ru/i/wallpapers/28/lotus-eliz-v3.1024x600.jpg');
imagesUrls.push('https://mobimg.b-cdn.net/pic/v2/gallery/preview/aston_martin_aston_martin-avto-transport-25935.jpg');
imagesUrls.push('https://commonpoll.com/processed-images/1500x/1405.jpg');
imagesUrls.push('https://s1.1zoom.ru/big0/47/358153-admin.jpg');

var currentImage = 0;
sliedImage.src = imagesUrls[currentImage + 1];

function onShowPrevBtn() {
    console.log('prev clicked');
}

function onShowNextBtn(){
    console.log('next clicked');
}
