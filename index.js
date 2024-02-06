document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    var recipient = document.getElementById("recipient").value;
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;

    // Send email
    Email.send({
        Host: "smtp.gmail.com",
        Username: "your_email@gmail.com", // Replace with your email
        Password: "your_password", // Replace with your password
        To: recipient,
        From: "your_email@gmail.com", // Replace with your email
        Subject: subject,
        Body: body
    }).then(function(message) {
        alert("Email sent successfully!");
        document.getElementById("emailForm").reset(); // Reset form after successful submission
    }).catch(function(error) {
        console.error("Error:", error);
        alert("Error occurred while sending email. Please try again later.");
    });
});
