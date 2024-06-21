//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission behavior

  const ageInput = document.getElementById('age').value;
  const nameInput = document.getElementById('name').value;

  // Check if inputs are empty
  if (!ageInput || !nameInput) {
    alert('Please fill in all fields.');
    return;
  }

  const age = parseInt(ageInput);
  const name = nameInput.trim();

  // Create a promise
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);  // Resolve or reject after 4 seconds
  })
  .then(message => {
    alert(message);  // Show success message
  })
  .catch(errorMessage => {
    alert(errorMessage);  // Show error message
  });
});