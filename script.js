var myForm = document.getElementById('myForm');
var container = document.getElementById('container');
var myInput = document.getElementById('inputShit');

var checkBox = document.createElement('checkbox');



myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var inputValue = event.target.inputShit.value;
  var pTag = document.createElement('p');
  pTag.innerHTML = inputValue;
  container.appendChild(pTag);
  event.target.inputShit.value = '';
});


myForm.addEventListener('submit', function(event) {
  var checkBox = document.createElement('checkBox');
  container.appendChild(checkBox);
  event.target.checkBox.value = "input[type=checkbox]";
});


// this is not working.... :(