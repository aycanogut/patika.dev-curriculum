let ul = document.querySelector('#list');
let li = document.createElement('li');
let input = document.querySelector('#task');
let button = document.querySelector('.button');
var span = document.getElementsByClassName("close");

let elements = [];

function addElement() {
  if (!input.value || input.value.trim() == '') {
    $(".error").toast("show");
  } else if (input.value.trim() != '') {
    if (elements) {
      elements.unshift({
        id: new Date().getMilliseconds(),
        value: input.value.trim()
      });
    }
    displayElement()
  }
  input.value = '';
}

function displayElement() {
  ul.innerHTML = null;
  elements.map(item => ul.innerHTML += `<li class="element">${item.value}<span class="close" onclick="deleteElement(${item.id})">x</span></li>`);
  localStorage.setItem('li', JSON.stringify(elements));
}

function deleteElement(id) {
  const UPDATE_ITEM = elements.filter(item => item.id != id);
  elements = UPDATE_ITEM;
  displayElement()
}

// check icon
ul.addEventListener("click", function (check) {
  if (check.target.tagName === "LI") {
    check.target.classList.toggle("checked");
  }
})

function getItem() {
  let savedItem = localStorage.getItem('li');
  if (!savedItem) return;
  elements = JSON.parse(savedItem);
  displayElement()
}

getItem()