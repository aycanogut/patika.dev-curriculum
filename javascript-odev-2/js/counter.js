// dom selections
let counterD = document.querySelector("#counter");
let upButtonD = document.querySelector("#up");
let downButtonD = document.querySelector("#down");

// default counter value
let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;

// click event
upButtonD.addEventListener('click', clickEvent);
downButtonD.addEventListener('click', clickEvent);


// counter function
function clickEvent() {
  if (this.id == "up") {
    counterD.innerHTML = `Counter = ${counter += 1}`;
    counterD.style.color = '#209cee';
  } else {
    counterD.innerHTML = `Counter = ${counter -= 1}`;
    counterD.style.color = '#e76e55';
  }
  localStorage.setItem("counter", counter);
}