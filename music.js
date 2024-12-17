const quotes = [
    {
        quote: "'Cause this is where I belong",
        author: "Where I belong",
        songUrl: "https://www.youtube.com/watch?v=Q8GfoU3oRUc&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C",
    },
    {
        quote: "You cry alone and then he swears he loves you.",
        author: "Face Down",
        songUrl: "https://www.youtube.com/watch?v=eEpbE2UJXcU&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=2",
    },
    {
        quote: "'Cause if you jump I will jump to",
        author: "Skyway Avenue",
        songUrl: "https://www.youtube.com/watch?v=SRGa5kNQqMI&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=3",
    },
    {
        quote: "Find euphoria in dystopia.",
        author: "Dystopia",
        songUrl: "https://www.youtube.com/watch?v=djkelGOcR-Q&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=4",
    },
    {
        quote: "And though you're dead and gone, believe me.",
        author: "Welcome to the Black Parad",
        songUrl: "https://www.youtube.com/watch?v=v_uncMEJkBc&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=5",
    },
    {
        quote: "You are my address.",
        author: "One Way Ticict",
        songUrl: "https://www.youtube.com/watch?v=T4RxZyCg6K4&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=6",
    },
    {
        quote: "I'm not really quite myself.",
        author: "Not Quite Myself",
        songUrl: "https://www.youtube.com/watch?v=Jhxs4KLPoOA&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=7",
    },
    {
        quote: "Let's live like we're immortal.",
        author: "Wasted Night",
        songUrl: "https://www.youtube.com/watch?v=g3kChT7B3Us&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=8",
    },
    {
        quote: "Feel like, feel like Feel like leaving it to the flow.",
        author: "おもかげ",
        songUrl: "https://www.youtube.com/watch?v=jg-uSq64Ru8&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=9",
    },
    {
        quote: "最前線に 最前線に 最前線にいこう.",
        author: "フロントライン",
        songUrl: "https://www.youtube.com/watch?v=j4QHBAIWxa8&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=10",
    },
    {
        quote: "One, two, three, your smile is the best thing in the world.",
        author: "Hey Song",
        songUrl: "https://www.youtube.com/watch?v=T2nmBV59iJ8&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=11",
    },
    {
        quote: "I'm off to a new town to find me a new toy.",
        author: "Strawberry Margarita",
        songUrl:"https://www.youtube.com/watch?v=uU6TA2T4A5s&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=12",
    },
    {
        quote: "いつか辿り着くその時まで.",
        author: "君に捧げる応援歌",
        songUrl: "https://www.youtube.com/watch?v=qDdBiFa82ho&list=PLIY3iPyOhcg7ryefyYx8ofiTVN4c9cK0C&index=13",
    },
    {
      quote: "吹き消すキャンドルは増えても sorry 思い出を rolling.",
      author: "Walkin' In My LaneWalkin' In My Lane",
      songUrl: "https://www.youtube.com/watch?v=lopaULFG0Vs&list=PLqWc2O_tK2xmBPuyknXe13eHy0r-tzupI&index=19",   
    },
    {
      quote: "Back then when I was running out of your place I said, "/I never wanna see your face/" ",
      author: "toxic till the end",
      songUrl: "https://www.youtube.com/watch?v=gu0B7eGU0iw&list=PLIY3iPyOhcg6ELdKPBIFouJH5qqJ3KTKh&index=28",   
    }
    
];

const defaultSongUrl = "https://www.youtube.com/watch?v=defaultSong";
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
