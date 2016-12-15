var myForm = document.getElementById('myForm');
var container = document.getElementById('container');
var myInput = document.getElementById('inputShit');


myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var inputValue = event.target.inputShit.value;
  var pTag = document.createElement('p');
  pTag.innerHTML = inputValue;
  container.appendChild(pTag);
  event.target.inputShit.value = '';
});
