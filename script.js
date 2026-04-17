// Initialize EmailJS
emailjs.init("hzw8XmOgFbRNw0zi5");

// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {

  const sendBtn = document.getElementById("sendBtn");
  const statusMsg = document.getElementById("statusMsg");

  sendBtn.addEventListener("click", function () {

    const firstName = document.getElementById("firstName").value.trim();
    const lastName  = document.getElementById("lastName").value.trim();
    const email     = document.getElementById("email").value.trim();
    const message   = document.getElementById("message").value.trim();

    // reset status
    statusMsg.className = "hidden text-sm font-medium text-center py-2 px-4 rounded-xl";
    statusMsg.textContent = "";

    // validation
    if (!firstName || !email || !message) {
      statusMsg.className =
        "block text-sm font-medium text-center py-2 px-4 rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
      statusMsg.textContent = "⚠️ Please fill Name, Email and Message!";
      return;
    }

    // loading state
    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    // send email
    emailjs.send("service_cgnv1v5", "template_ihtiwse", {
      name: firstName + " " + lastName,
      email: email,
      message: message
    })
    .then(() => {

      statusMsg.className =
        "block text-sm font-medium text-center py-2 px-4 rounded-xl bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      statusMsg.textContent = "✅ Message sent successfully!";

      // clear fields
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

    })
    .catch((err) => {

      console.error(err);

      statusMsg.className =
        "block text-sm font-medium text-center py-2 px-4 rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
      statusMsg.textContent = "❌ Failed to send message. Try again.";

    })
    .finally(() => {
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message";
    });

  });

});










