// 'memo.js' 파일
document.getElementById('saveBtn').addEventListener('click', function() {
  const myMemo = document.getElementById('myMemo').value;
  const memoTitle = document.getElementById('memoTitle').value;
  let memos = JSON.parse(localStorage.getItem('memos')) || {};

  // 제목이 같은 메모가 이미 있는지 확인합니다.
  if(memos[memoTitle]) {
    // 제목이 같은 메모가 이미 있다면, 그 메모를 업데이트합니다.
    memos[memoTitle] = myMemo;
    localStorage.setItem('memos', JSON.stringify(memos));
    document.getElementById('myMemo').value = '';
  } else {
    // 제목이 같은 메모가 없다면, 새로운 메모를 추가합니다.
    memos[memoTitle] = myMemo;
    localStorage.setItem('memos', JSON.stringify(memos));

    const memoList = document.getElementById('memoList');
    let option = document.createElement('option');
    option.text = memoTitle;
    option.value = memoTitle;
    memoList.add(option);
  }
});
