const myHeading = document.querySelector('h1');
myHeading.textContent = 'HTMLの説明';



let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'スクリーンショット 2021-11-08 23.20.07.png') {
      myImage.setAttribute('src','スクリーンショット 2021-11-08 23.23.22.png');
    } else {
      myImage.setAttribute('src','スクリーンショット 2021-11-08 23.20.07.png');
    }
}
