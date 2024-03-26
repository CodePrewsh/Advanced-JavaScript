// Declare function
function fetchData(callback) {
    setTimeout(() => {
      const data = {name: "John", age: 30};
      callback(data);
    }, 3000);
  }
  
  // Execute function with a callback
  fetchData(function(data) {
    const loadingMessage = document.getElementById('loading-message');
    const dataContainer = document.getElementById('data-container');
  
    loadingMessage.style.display = 'none'; // Hide the loading message
    dataContainer.style.display = 'block'; // Show the data container
    dataContainer.innerHTML = `<p>Name: ${data.name}</p><p>Age: ${data.age}</p>`;
  });
  