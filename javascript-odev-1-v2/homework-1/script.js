// dom dec.
const name = document.querySelector(".name");
const clock = document.querySelector(".clock");

// this function takes input from user and print this input data to dom
((getUsername) => {
  let nameInput = prompt("Adını söyle bana..");
  name.textContent = nameInput;
})();

// this function writes the current time to the dom in every seconds

const getTime = () => {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let second = date.getSeconds();
  let minute = date.getMinutes();
  let currentDay;

  // add "0" to the beginning of the times ( if it is lesser than 10 )
  const checkZero = (value) => {
    if (value < 10) {
      value = `0${value}`;
    }
    return value;
  };

  // reassign the times with zero-checker function
  hour = checkZero(hour);
  minute = checkZero(minute);
  second = checkZero(second);

  // set current day to the currentDay variable
  switch (day) {
    case 0:
      currentDay = "Pazar";
      break;
    case 1:
      currentDay = "Pazartesi";
      break;
    case 2:
      currentDay = "Salı";
      break;
    case 3:
      currentDay = "Çarşamba";
      break;
    case 4:
      currentDay = "Perşembe";
      break;
    case 5:
      currentDay = "Cuma";
      break;
    case 6:
      currentDay = "Cumartesi";
      break;
  }

  // append the time to the dom
  clock.textContent = `${hour}:${minute}:${second} ${currentDay}`;
};

// invoke the function when page loads and refresh on each seconds
window.onload = () => getTime();
setInterval(() => getTime(), 1000);
