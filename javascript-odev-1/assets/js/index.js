// kullanicidan isim alma
function askName() {
  let name = prompt("TELL ME WHO YOU ARE?");

  if (name == "") {
    name = "Stranger";
  } else if (name == null) {
    name = "Unknown";
  }

  document.querySelector("h1").innerHTML = `Hello ${name}!`;
}

// zaman fonksiyonu
function getTime() {
  let time = new Date()
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let today = time.getDay();


  // gune string olarak deger atama
  today = convertString(today);

  // 0 alacak degerleri fonksiyona tanitma
  hour = checkZero(hour);
  minute = checkZero(minute);
  second = checkZero(second);

  // deger basina 0 ekleme fonksiyonu
  function checkZero(value) {
    if (value < 10) {
      value = "0" + value;
    }
    return value;
  }

  // gun degerini alip string degerine esitleme
  function convertString(value) {
    if (today == 0) {
      today = "Sunday";
      return today;
    } else if (today == 1) {
      today = "Monday";
      return today;
    } else if (today == 2) {
      today = "Tuesday";
      return today;
    } else if (today == 3) {
      today = "Wednesday";
      return today;
    } else if (today == 4) {
      today = "Thursday";
      return today;
    } else if (today == 5) {
      today = "Friday";
      return today;
    } else if (today == 6) {
      today = "Saturday";
      return today;
    }
  }

  // saati fonksiyonel hale cevirme
  time = setInterval('getTime()', 1000);

  // bilgileri dom'a ekleme
  document.querySelector("h2").innerHTML = `${hour}:${minute}:${second} ${today}`;
}

getTime();