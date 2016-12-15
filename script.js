var myForm = document.getElementById('myForm');
var container = document.getElementById('container');
var myInput = document.getElementById('inputShit');
var checkBox = document.createElement("checkbox");

// checkBox.type = "checkbox";

// container.appendChild(checkBox);

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var inputValue = event.target.inputShit.value;
  var pTag = document.createElement('p');
  pTag.innerHTML = inputValue;
  container.appendChild(pTag);
  // container.appendChild(checkbox);
  event.target.inputShit.value = '';
});

// addButton.addEventListener("click", addTask);

var check = document.querySelector('checkbox');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);