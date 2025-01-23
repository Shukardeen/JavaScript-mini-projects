const inp = document.querySelector("#qrInput");
const genBtn = document.querySelector("#generateBtn");
const qrImgBox = document.querySelector(".qrPopup");
const qrImg = document.querySelector("#qrImg");
const closeBtn = document.querySelector("#closeBtn");
const downloadBtn = document.querySelector("#downloadBtn");
const mainContainer = document.querySelector("#mainContainer");

const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

genBtn.addEventListener("click", () => {
    if(!inp.value) {
        alert('Enter text or URL first!');
    } else {
        let img = url + inp.value;
        qrImg.setAttribute('src', img);
        setTimeout(() => {
            qrImgBox.classList.add('show');
            mainContainer.classList.add('opacity');
        }, 1000)
    }
});

closeBtn.addEventListener('click', () => {
    inp.value = '';
    qrImgBox.classList.remove('show');
    mainContainer.classList.remove('opacity');
});

downloadBtn.addEventListener('click', () => {
    const imgUrl = url + inp.value;

    fetch(imgUrl)
    .then((res) => {
        // if(!res.ok) {
        //     throw('error');
        // }
        return res.blob();
    })
    .then((blob) => {
        // console.log(blob);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'qr.jpg';
        console.log(link);
        qrImgBox.appendChild(link);
        link.click();
        qrImgBox.removeChild(link);
    })
    .catch((e) => console.error(e));
})