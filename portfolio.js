document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent the default form submission

  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var message = document.getElementsByName("message")[0].value;

    // Perform further processing or send the form data using AJAX or other methods
  // Example: Display a confirmation message
  var confirmationMessage = "Thank you, " + name + "! Your message has been sent.";
  alert(confirmationMessage);

  // Reset the form
  document.getElementById("contact-form").reset();

  // Create a new FormData object and append form data
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  // Send the form data using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "process-form.php"); // Replace with your server-side script file name
  xhr.send(formData);
});