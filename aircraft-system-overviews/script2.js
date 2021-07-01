const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  while (name == '') {
    alert('Must have a name');
    } ;  
  } else {
  alert('Hello ' + name + ', nice to see you!');
  }
}

