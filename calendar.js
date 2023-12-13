let currentDate = new Date();
let schedule = JSON.parse(localStorage.getItem('schedule')) || {};

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  let startDay = firstDay.getDay();

  if (startDay === 0) {
    startDay = 6;
  } else {
    startDay -= 1;
  }

  const monthElement = document.querySelector('.month');
  monthElement.textContent = year + '년 ' + (month + 1) + '월';

  const daysElement = document.querySelector('.days');
  daysElement.innerHTML = '';

  for (let i = 0; i < startDay; i++) {
    const emptyDay = document.createElement('div');
    daysElement.appendChild(emptyDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.addEventListener("click", function() {
      const dateKey = `${year}-${month+1}-${i}`;
      if (schedule[dateKey]) {
        const action = prompt("'추가', '수정', '삭제' 중 하나를 입력하세요.");
        if (action.toLowerCase() === '추가') {
          const newSchedule = prompt("새 일정을 입력해주세요.");
          if (newSchedule) {
            schedule[dateKey].push(newSchedule);
            alert("일정이 추가되었습니다.");
          }
        } else if (action.toLowerCase() === '수정') {
          const modification = prompt("수정할 일정을 선택하세요. (1부터 시작)");
          const index = parseInt(modification) - 1;
          if (index >= 0 && index < schedule[dateKey].length) {
            const newSchedule = prompt("새 일정을 입력해주세요.", schedule[dateKey][index]);
            if (newSchedule) {
              schedule[dateKey][index] = newSchedule;
              alert("일정이 수정되었습니다.");
            }
          }
        } else if (action.toLowerCase() === '삭제') {
          const deletion = prompt("삭제할 일정을 선택하세요. (1부터 시작)");
          const index = parseInt(deletion) - 1;
          if (index >= 0 && index < schedule[dateKey].length) {
            schedule[dateKey].splice(index, 1);
            alert("일정이 삭제되었습니다.");
          }
        }
      } else {
        const scheduleInput = prompt("일정을 입력해주세요.");
        if (scheduleInput) {
          if (!schedule[dateKey]) {
            schedule[dateKey] = [];
          }
          schedule[dateKey].push(scheduleInput);
          alert("일정이 저장되었습니다."); 
        }
      }
      localStorage.setItem('schedule', JSON.stringify(schedule));
      renderCalendar(); 
    });
    
    const dayNumber = document.createElement('span');
    dayNumber.textContent = i;
    day.appendChild(dayNumber);
  
    if (schedule[`${year}-${month+1}-${i}`]) { 
      schedule[`${year}-${month+1}-${i}`].forEach((scheduleItem, index) => {
        const scheduleText = document.createElement('p');
        scheduleText.textContent = (index + 1) + '. ' + scheduleItem;
        day.appendChild(scheduleText);
      });
    }
  
    daysElement.appendChild(day);
  }
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

renderCalendar();


