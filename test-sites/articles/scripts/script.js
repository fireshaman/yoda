function selectImgs() {
    let imgList = document.getElementsByClassName('img');
    console.log(imgList);
    for(let i = 0; i < imgList.length; i++)
    {
        let o = i+1;
        imgList[i].style.backgroundImage = "url('img/0"+o+".jpg')";
        imgList[i].innerHTML = '<div class="img-cover"></div>';
    }
};

selectImgs();