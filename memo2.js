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

document.getElementById('deleteBtn').addEventListener('click', function() {
  const memoTitle = document.getElementById('memoTitle').value;
  let memos = JSON.parse(localStorage.getItem('memos')) || {};
  if(memos[memoTitle]) {
    delete memos[memoTitle];
    localStorage.setItem('memos', JSON.stringify(memos));

    const memoList = document.getElementById('memoList');
    for (let i = 0; i < memoList.options.length; i++) {
      if (memoList.options[i].value == memoTitle) {
        memoList.remove(i);
        break;
      }
    }
    document.getElementById('myMemo').value = '';
    document.getElementById('memoTitle').value = '';
  } else {
    alert('삭제할 메모를 선택해주세요.');
  }
});
document.getElementById('newMemoBtn').addEventListener('click', function() {
  document.getElementById('memoTitle').value = '';
  document.getElementById('myMemo').value = '';
  document.getElementById('memoList').selectedIndex = -1; // 메모 목록에서 선택을 해제합니다.
});

// 페이지 로딩 시 저장된 메모를 불러와서 목록에 표시합니다.
window.onload = function() {
  let memos = JSON.parse(localStorage.getItem('memos')) || {};
  const memoList = document.getElementById('memoList');
  
  for(let memoTitle in memos) {
    let option = document.createElement('option');
    option.text = memoTitle;
    option.value = memoTitle;
    memoList.add(option);
  }
};
// 메모 목록에서 항목을 선택하면 해당 메모의 내용을 표시합니다.
document.getElementById('memoList').addEventListener('change', function() {
  const memoTitle = this.value;
  let memos = JSON.parse(localStorage.getItem('memos')) || {};
  
  if(memos[memoTitle]) {
    document.getElementById('myMemo').value = memos[memoTitle];
    document.getElementById('memoTitle').value = memoTitle;
  }
});
