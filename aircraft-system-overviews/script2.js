const button = document.querySelector('button');
const autoClick = document.querySelector('button') 

button.onclick = function() {
  let name = prompt('What is your name?');
  while (name == '') {
    alert('Must have a name');
    function autoClick ();  
  } else {
  alert('Hello ' + name + ', nice to see you!');
  }
}

