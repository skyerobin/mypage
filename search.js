Search.prototype.Engine = function() {
    this.form.addEventListener('submit', e => {
        e.preventDefault();

        let engine = this.engine.value;
        let keyword = this.keyword.value;

        if(engine === 'google'){
            location.href = 'https://www.google.co.kr/search?q=' + keyword;
        } else if(engine === 'naver'){
            location.href = 'https://search.naver.com/search.naver?query=' + keyword;
        } else if(engine === 'youtube'){
            location.href = 'https://www.youtube.com/results?search_query=' + keyword;
        } else if(engine === 'Navershopping'){
            location.href = 'https://search.shopping.naver.com/search/all?query=' + keyword;
        } else if(engine === 'x'){
            location.href = 'https://twitter.com/search?q=' + keyword;
        } else { // engine 값이 어떤 조건에도 맞지 않는 경우
            location.href = 'https://music.youtube.com/search?q=' + keyword;
        }
    });
}
