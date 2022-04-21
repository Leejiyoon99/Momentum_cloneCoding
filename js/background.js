const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"
];//배경화면에 사용될 이미지들을 배열에 저장
const randomImage = images[Math.floor(Math.random() * images.length)];//이미지를 랜덤하게 출력해 출력된 이미지를 randomImange에 저장한다

const backgroundImage = document.createElement("img");//HTML에 img란 요소를 추가하고 해당 정보를 backgroundImage에 저장
backgroundImage.src = `img/${randomImage}`;//소스 주소정하기
document.body.appendChild(backgroundImage);//body에 이미지 추가