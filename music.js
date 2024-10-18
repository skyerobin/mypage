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
        quote: "I would have kept you, forever, what we had to sever.",
        author: "Attck",     
        songUrl: "https://music.youtube.com/watch?v=FnL0pbR7reI&si=EOe_LIZRAL9Av2U8", // 노래 URL 추가
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
    },
];

const quoteElement = document.querySelector("#quote span:first-child");
const authorElement = document.querySelector("#quote span:last-child");

// 랜덤으로오늘의 quote 선택
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteElement.innerText = todaysQuote.quote;
authorElement.innerText = todaysQuote.author;

// 클릭 이벤트 리스너 추가
quoteElement.addEventListener("click", () => {
    // 해당 quote의 곡 URL로 이동
    window.open(todaysQuote.songUrl, "_blank");
});
