const images = ["0.jpeg","2.jpeg"]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const beImg = document.createElement("img");

beImg.src =`img/${chosenImage}`;

document.body.appendChild(beImg)