<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "y.feng@students.uu.nl"; // Replace with your email address
  $subject = "New Form Submission";
  $emailBody = "Name: $name\nEmail: $email\nMessage: $message";

  // Send the email
  $headers = "From: $email";
  $mailSent = mail($to, $subject, $emailBody, $headers);

  if ($mailSent) {
    echo "success"; // Optional: Send a success response to the client
  } else {
    echo "error"; // Optional: Send an error response to the client
  }
}
?>