// 'memo.js' 파일
window.onload = function() {
    const savedMemos = JSON.parse(localStorage.getItem('memos'));
    if (savedMemos) {
      const memoList = document.getElementById('memoList');
      for (let title in savedMemos) {
        let option = document.createElement('option');
        option.text = title;
        option.value = title;
        memoList.add(option);
      }
    }
  }
  
  document.getElementById('newMemoBtn').addEventListener('click', function() {
    document.getElementById('memoTitle').value = '';
    document.getElementById('myMemo').value = '';
  });
  
  document.getElementById('saveBtn').addEventListener('click', function() {
    const myMemo = document.getElementById('myMemo').value;
    const memoTitle = document.getElementById('memoTitle').value;
    let memos = JSON.parse(localStorage.getItem('memos')) || {};
    memos[memoTitle] = myMemo;
    localStorage.setItem('memos', JSON.stringify(memos));
  
    const memoList = document.getElementById('memoList');
    let option = document.createElement('option');
    option.text = memoTitle;
    option.value = memoTitle;
    memoList.add(option);
  });
  
  document.getElementById('deleteBtn').addEventListener('click', function() {
    const memoTitle = document.getElementById('memoList').value;
    let memos = JSON.parse(localStorage.getItem('memos')) || {};
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
  });
  
  function loadMemo() {
    const memoTitle = document.getElementById('memoList').value;
    let memos = JSON.parse(localStorage.getItem('memos')) || {};
    document.getElementById('myMemo').value = memos[memoTitle] || '';
  }
  

  document.getElementById('editBtn').addEventListener('click', function() {
    const memoTitle = document.getElementById('memoList').value;
    let memos = JSON.parse(localStorage.getItem('memos')) || {};
    const currentMemo = memos[memoTitle] || '';
    
    // 선택한 메모의 내용을 수정할 수 있는 프롬프트 창을 띄웁니다.
    const updatedMemo = prompt('메모 내용을 수정하세요:', currentMemo);
    
    if (updatedMemo !== null) {
      memos[memoTitle] = updatedMemo;
      localStorage.setItem('memos', JSON.stringify(memos));
      document.getElementById('myMemo').value = updatedMemo;
    }
  });
  