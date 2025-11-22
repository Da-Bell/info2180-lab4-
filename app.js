// Get a reference to the search button (assuming it's a <button> element)
const searchButton = document.querySelector('button');

// Add a click event listener to the button
searchButton.addEventListener('click', function() {
  // Use the fetch() API to make an AJAX request to superheroes.php
  fetch('superheroes.php')
    .then(response => {
      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
      }
      return response.text(); // Get the response as text
    })
    .then(data => {
      // Create a DOM parser to parse the HTML response
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html'); // Parse the HTML string

      // Extract the list items containing superhero aliases
      const aliases = Array.from(doc.querySelectorAll('ul li')).map(li => li.textContent);

      // Display the aliases in an alert
      alert(aliases.join('\n')); // Join the aliases with line breaks
    })
    .catch(error => {
      // Handle errors
      alert('There was a problem fetching the data: ' + error);
    });
});
