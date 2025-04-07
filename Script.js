document
  .getElementById("rentalForm")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const duration = document.getElementById("duration").value;

    if (name === "") {
      alert("Name must be filled out");
      event.preventDefault();
    }

    if (duration <= 0) {
      alert("Duration must be at least 1 day");
      event.preventDefault();
    }
  });
