const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  if (name = 'blank') {
    alert('Name must be filled out')
  } else {
  alert('Hello ' + name + ', nice to see you!');
  }
}
