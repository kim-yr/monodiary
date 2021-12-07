const now = new Date(); //오늘 날짜
let pickedNow = new Date(); //클릭한 날짜, 기본 날짜는 오늘로 설정
let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);

const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 윤년
const nonLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 윤년아님
let selectYear;

const prevBtn = document.querySelector(".calendar .header .btnPrev");
const nextBtn = document.querySelector(".calendar .header .btnNext");
const calTitleYear = document.querySelector(".calendar .header .calTitle .year");
const calTitleMonth = document.querySelector(".calendar .header .calTitle .month");

prevBtn.addEventListener("click", () => {
  pickedNow = new Date(pickedNow.getFullYear(), pickedNow.getMonth() - 1, 1);
  //이전달 캘린더 새로 출력
});
nextBtn.addEventListener("click", () => {
  pickedNow = new Date(pickedNow.getFullYear(), pickedNow.getMonth() + 1, 1);
  //다음달 캘린더 새로 출력
});

function makeCalendar(pYear, pMonth) {
  let output = "";
  let count = 1;
  firstDay = new Date(pYear, pMonth, 1);
  const vYear = firstDay.getFullYear();
  const vMonth = addZero(firstDay.getMonth() + 1);
  calTitleYear.textContent = vYear;
  calTitleMonth.textContent = vMonth;

  //윤년탐색알고리즘
  //윤년: 4로 나누면 0 맞음, 100으로 나누면 0은 아님, 400으로 나누면 0은 맞음
  if (vYear % 4 === 0) {
    if (vYear % 100 !== 0) {
      selectYear = leapYear;
    } else {
      selectYear = nonLeapYear;
    }
  } else {
    selectYear = nonLeapYear;
  }
  if (vYear % 400 === 0) {
    selectYear = leapYear;
  }
  //윤년 탐색 알고리즘 끝

  for(let i=0;i<49;i++){
      if
  }
}

function addZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
