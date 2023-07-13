const form = document.querySelector('form');
const error = document.querySelector('#error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === 'example' && password === 'password') {
    error.textContent = '';
    window.location.href = 'home.html';
  } else {
    error.textContent = 'Invalid username or password.';
  }
});


//adding date and time
//<script type="text/javascript">
