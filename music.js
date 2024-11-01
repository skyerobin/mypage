const quotes = [
    {
        quote: "I'm finally breathing.",
        author: "Where I belong",
        songUrl: "https://music.youtube.com/watch?v=Q8GfoU3oRUc&si=NKJ_4rhyJWasAGBl", // 노래 URL 추가
    },
    {
        quote: "You cry alone and then he swears he loves you.",
        author: "Face Down",
        songUrl: "https://music.youtube.com/watch?v=eEpbE2UJXcU&si=IChvWUbPk3zierSw", // 노래 URL 추가
    },
    {
        quote: "I'm just getting off my face tonight",
        author: "12:45",     
        songUrl: "https://music.youtube.com/watch?v=fSzLmXV9pIo&si=UZfUxOoWV90lwmXK", // 노래 URL 추가
    },
    {
        quote: "When you're up at 2AM you know that I'll be up in 5.",
        author: "tomrrow tonight",     
        songUrl: "https://music.youtube.com/watch?v=R4wbjdrbDa4&si=U4U3Out0KV7dy2Kw", // 노래 URL 추가
    },
    {
        quote: "Will you take it? Your eyes bring color to my life.",
        author: "The Love We've Made",     
        songUrl: "https://music.youtube.com/watch?v=KQlNQGLJ04I&si=aZZ0hX-RqyaQgawh", // 노래 URL 추가
    },
    {
        quote: "You are my address.",
        author: "One Way Ticict",     
        songUrl: "https://music.youtube.com/watch?v=T4RxZyCg6K4&si=FK0SIqWG34C3qC7S", // 노래 URL 추가
    },
    {
        quote: "One, two, three, your smile is the best thing in the world.",
        author: "Hey Song",     
        songUrl: "https://music.youtube.com/watch?v=T2nmBV59iJ8&si=ZPxb3l4P9K86Bh7D", // 노래 URL 추가
    },
    {
        quote: "Let's live like we're immortal.",
        author: "Wasted Night",     
        songUrl: "https://music.youtube.com/watch?v=g3kChT7B3Us&si=k4B-X2UrciwSBNB6", // 노래 URL 추가
    },
    {
        quote: "Feel like, feel like Feel like leaving it to the flow.",
        author: "おもかげ",     
        songUrl: "https://music.youtube.com/watch?v=jg-uSq64Ru8&si=cmN1UmfG-E7w_uO9", // 노래 URL 추가
    },
    {
        quote: "最前線に 最前線に 最前線にいこう.",
        author: "フロントライン",     
        songUrl: "https://music.youtube.com/watch?v=j4QHBAIWxa8&si=F6u4X-ZubTeEbMAo", // 노래 URL 추가
    },{
        quote: "But there never seems to be enough timeTo do the things you want to do once you find them",
        author: "Time in a Bottle",     
        songUrl: "https://music.youtube.com/watch?v=gnrSpwb2Ax4&si=KBbGx_SsWDKohAEt", // 노래 URL 추가  
    },
];

const defaultSongUrl = "https://music.youtube.com/watch?v=defaultSong";
const quoteContainer = document.getElementById("quoteContainer");
let currentIndex = Math.floor(Math.random() * quotes.length);

// Function to display the current quote
function displayQuote(index) {
    quoteContainer.innerHTML = `
        <div class="quote" onclick="playMusic(${index})">
            <p>${quotes[index].quote}</p>
        
        </div>
    `;
}

// Function to play music for the current quote
function playMusic(index) {
    const songUrl = quotes[index].songUrl || defaultSongUrl;
    window.open(songUrl, "_blank");
}

// Swipe functionality
let startX;
quoteContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

quoteContainer.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) {
        // Swipe left for the next quote
        currentIndex = (currentIndex + 1) % quotes.length;
    } else if (endX > startX + 50) {
        // Swipe right for the previous quote
        currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    }
    displayQuote(currentIndex);
});

// Display initial random quote
displayQuote(currentIndex);
