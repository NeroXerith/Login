// List of Pre-defined accounts
const users = [
    ['test', 'test123'],
    ['admin', 'password']
  ];
  
  // Get the HTML login form element by its ID and assign it to the `loginForm` variable.
  const loginForm = document.getElementById('login-form');
  
  // Event listener to trigger when submit button is clicked in the form
  loginForm.addEventListener('submit', function(event) {  
    // Prevent the default form submission behavior.
    event.preventDefault();
  
    // Get the username and password values from the login form.
    const username = loginForm.username.value;
    const password = loginForm.password.value;
  
    // Check if the username and password match the predefined account.
    for (const user of users) {
      if (username === user[0] && password === user[1]) {
        // Redirect to the index page if the username and password are correct.
        window.location.href = 'index.html';
        return;
      }
    }
  
    // Display an error message if the username and password are incorrect.
    alert('Invalid username or password.');
  });