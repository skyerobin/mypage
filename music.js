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
        quote: "My memories are reminding me.",
        author: "Summer Paradis",     
        songUrl: "https://music.youtube.com/watch?v=hAz6lnQzfe4&si=bGHzAgR7T3sqBQe6", // 노래 URL 추가
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",     
        songUrl: "https://music.youtube.com/watch?v=song4", // 노래 URL 추가
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",     
        songUrl: "https://music.youtube.com/watch?v=song5", // 노래 URL 추가
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",     
        songUrl: "https://music.youtube.com/watch?v=song6", // 노래 URL 추가
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",     
        songUrl: "https://music.youtube.com/watch?v=song7", // 노래 URL 추가
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",     
        songUrl: "https://music.youtube.com/watch?v=song8", // 노래 URL 추가
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama",     
        songUrl: "https://music.youtube.com/watch?v=song9", // 노래 URL 추가
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar",     
        songUrl: "https://music.youtube.com/watch?v=song10", // 노래 URL 추가
    },
];

const quoteElement = document.querySelector("#quote span:first-child");
const authorElement = document.querySelector("#quote span:last-child");

// 랜덤으로 오늘의 quote 선택
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteElement.innerText = todaysQuote.quote;
authorElement.innerText = todaysQuote.author;

// 클릭 이벤트 리스너 추가
quoteElement.addEventListener("click", () => {
    // 해당 quote의 곡 URL로 이동
    window.open(todaysQuote.songUrl, "_blank");
});
