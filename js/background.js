const imgs = ["img1.jpg", "img2.jpg", "img3.jpg"];

const chosenImage = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImage}`;

document.body.appendChild(bgImg);
