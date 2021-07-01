const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  while (name == '') {
    alert('Must have a name');
    window.onload = function() {
      button.onclick
    } ;  
  } else {
  alert('Hello ' + name + ', nice to see you!');
  }
}

