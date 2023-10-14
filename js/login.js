// Function to open the error modal
function openErrorMessageModal() {
    document.getElementById('error-modal').style.display = 'block';
  }
  
  // Function to close the error modal
  document.getElementById('close-error-modal').addEventListener('click', function() {
    document.getElementById('error-modal').style.display = 'none';
  });
  
  // List of Pre-defined accounts
  const users = [
    ['test', 'test123'],
    ['admin', 'password']
  ];
  
  // Get the HTML login form element by its ID and assign it to the `loginForm` variable.
  const loginForm = document.getElementById('login-form');
  
  // Event listener to trigger when the submit button is clicked in the form
  loginForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior.
    event.preventDefault();
  
    // Get the username and password values from the login form.
    const username = loginForm.username.value;
    const password = loginForm.password.value;
  
    // Check if the username and password match the predefined account.
    let isValid = false;
    for (const user of users) {
      if (username === user[0] && password === user[1]) {
        // Redirect to the index page if the username and password are correct.
        window.location.href = 'index.html';
        isValid = true;
        break;
      }
    }
  
    if (!isValid) {
      // Display the error message modal if the username and password are incorrect.
      openErrorMessageModal();

      // Display a custom error message in the modal.
    document.getElementById('error-message').textContent = 'Invalid username or password.';
      
      // For debug purposes
    console.log('Invalid username or password.');
    }
  });
  