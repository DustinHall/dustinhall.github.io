const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  if (name == '') {
    alert('Must have a name');
  } else { 
  alert('Hello ' + name + ', nice to see you!');
  }
}

