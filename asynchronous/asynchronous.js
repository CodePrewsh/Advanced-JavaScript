// Declare function
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 3000);
}

// Execute function with a callback
fetchData(function (data) {
  console.log(data);
});

console.log("Data is being fetched...");
