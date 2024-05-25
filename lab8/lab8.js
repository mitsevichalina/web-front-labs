function showDate() {
    let out1 = document.querySelector('.date1');
    let out2 = document.querySelector('.date2');
    let out3 = document.querySelector('.date3');
    let out4 = document.querySelector('.date4');
    let out5 = document.querySelector('.date5');
    let out6 = document.querySelector('.date6');
    let year = document.querySelector('.year');
    let month = document.querySelector('.month');
    let date = document.querySelector('.date');
    let week = document.querySelector('.week');

    let today = new Date();
    out1.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out2.innerHTML = 'Дата и время для японской локали: ' + today.toLocaleString('ja-JP');
    out3.innerHTML = 'Дата и время для чешской локали: ' + today.toLocaleString('cs-CZ');
    out4.innerHTML = 'Дата и время для турецкой локали: ' + today.toLocaleString('tr-TR');
    out5.innerHTML = 'Дата и время для шведской локали: ' + today.toLocaleString('sv-SE');
    out6.innerHTML = 'Дата и время для норвежской локали: ' + today.toLocaleString('nn-NO');
    year.innerHTML = 'Текущий год: ' + today.getFullYear();
    nowMonth = today.getMonth();
    const MonthD = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь', ]
    month.innerHTML = 'Текущий месяц: ' + MonthD[nowMonth];
    let nowDate = today.getDate();
    date.innerHTML ='Текущая дата: ' +  nowDate;
    nowWeek = today.getDay();
    const WeekD = ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
    week.innerHTML = 'День недели: ' + WeekD[nowWeek];
}