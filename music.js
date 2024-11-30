const quotes = [
    {
        quote: "'Cause this is where I belong",
        author: "Where I belong",
        songUrl: "https://music.youtube.com/watch?v=Q8GfoU3oRUc&si=NKJ_4rhyJWasAGBl",
    },
    {
        quote: "You cry alone and then he swears he loves you.",
        author: "Face Down",
        songUrl: "https://music.youtube.com/watch?v=eEpbE2UJXcU&si=IChvWUbPk3zierSw",
    },
    {
        quote: "'Cause if you jump I will jump too",
        author: "Skyway Avenue",
        songUrl: "https://music.youtube.com/watch?v=SRGa5kNQqMI&si=ILdyvUVxNQKOwq31",
    },
    {
        quote: "Find euphoria in dystopia.",
        author: "Dystopia",
        songUrl: "https://music.youtube.com/watch?v=djkelGOcR-Q&si=CFKsxSgzf3Eye3tn",
    },
    {
        quote: "And though you're dead and gone, believe me.",
        author: "Welcome to the Black Parad",
        songUrl: "https://music.youtube.com/watch?v=v_uncMEJkBc&si=qhX2flxV4f1D5Dta",
    },
    {
        quote: "You are my address.",
        author: "One Way Ticict",
        songUrl: "https://music.youtube.com/watch?v=T4RxZyCg6K4&si=xg8g7NzO-yVlPJn8",
    },
    {
        quote: "I'm not really quite myself.",
        author: "Not Quite Myself",
        songUrl: "https://music.youtube.com/watch?v=Jhxs4KLPoOA&si=LlMJvcqxTNZVgSsf",
    },
    {
        quote: "Let's live like we're immortal.",
        author: "Wasted Night",
        songUrl: "https://music.youtube.com/watch?v=v=g3kChT7B3Us&si=aQpljDZGKSxjLt_a",
    },
    {
        quote: "Feel like, feel like Feel like leaving it to the flow.",
        author: "おもかげ",
        songUrl: "https://music.youtube.com/watch?v=jg-uSq64Ru8&si=cmN1UmfG-E7w_uO9",
    },
    {
        quote: "最前線に 最前線に 最前線にいこう.",
        author: "フロントライン",
        songUrl: "https://music.youtube.com/watch?v=j4QHBAIWxa8&si=F6u4X-ZubTeEbMAo",
    },
    {
        quote: "One, two, three, your smile is the best thing in the world.",
        author: "Hey Song",
        songUrl: "https://music.youtube.com/watch?v=T2nmBV59iJ8&si=ZPxb3l4P9K86Bh7D",
    },
    {
        quote: "I'm off to a new town to find me a new toy.",
        author: "Strawberry Margarita",
        songUrl: "https://music.youtube.com/watch?v=uU6TA2T4A5s&si=wACAhpDFmY5vj2Gp",
    },
    {
        quote: "いつか辿り着くその時まで.",
        author: "君に捧げる応援歌",
        songUrl: "https://music.youtube.com/watch?v=qDdBiFa82ho&si=UBni2k20LmfC9n0q",
    }
];

const defaultSongUrl = "https://music.youtube.com/watch?v=defaultSong";
const quoteContainer = document.getElementById("quoteContainer");
let currentIndex = Math.floor(Math.random() * quotes.length);

// Function to display the current quote
function displayQuote(index) {
    // Ensure the index is within bounds
   // if (index < 0 || index >= quotes.length) return;

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
