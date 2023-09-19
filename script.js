// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('data-entry-form');
    const messageDiv = document.getElementById('message');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const nameInput = document.getElementById('name');
      const name = nameInput.value;
  
      // Send the name to the server, its posting the name into the URL.
      fetch('/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}`,
      })
        .then((response) => response.text())
        .then((data) => {
          messageDiv.innerText = data;
          nameInput.value = '';
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  });
  