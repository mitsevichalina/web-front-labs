function showDate() {
    let out1 = document.querySelector('.date1');
    let out2 = document.querySelector('.date2');
    let out3 = document.querySelector('.date3');
    let out4 = document.querySelector('.date4');
    let out5 = document.querySelector('.date5');
    let out6 = document.querySelector('.date6');

    let today = new Date();
    out1.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out2.innerHTML = 'Дата и время для японской локали: ' + today.toLocaleString('ja-JP');
    out3.innerHTML = 'Дата и время для чешской локали: ' + today.toLocaleString('cs-CZ');
    out4.innerHTML = 'Дата и время для турецкой локали: ' + today.toLocaleString('tr-TR');
    out5.innerHTML = 'Дата и время для шведской локали: ' + today.toLocaleString('sv-SE');
    out6.innerHTML = 'Дата и время для норвежской локали: ' + today.toLocaleString('nn-NO');
}