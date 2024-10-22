const images = ["IMG_20240202_220840_681","2.jpeg"]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const beImg = document.createElement("img");

beImg.src =`img/${chosenImage}`;

document.body.appendChild(beImg)
