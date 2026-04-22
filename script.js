// // Initialize EmailJS
// emailjs.init("hzw8XmOgFbRNw0zi5");

// // Wait for page to load
// document.addEventListener("DOMContentLoaded", function () {

//   const sendBtn = document.getElementById("sendBtn");
//   const statusMsg = document.getElementById("statusMsg");

//   sendBtn.addEventListener("click", function () {

//     const firstName = document.getElementById("firstName").value.trim();
//     const lastName  = document.getElementById("lastName").value.trim();
//     const email     = document.getElementById("email").value.trim();
//     const message   = document.getElementById("message").value.trim();

//     // reset status
//     statusMsg.className = "hidden text-sm font-medium text-center py-2 px-4 rounded-xl";
//     statusMsg.textContent = "";

//     // validation
//     if (!firstName || !email || !message) {
//       statusMsg.className =
//         "block text-sm font-medium text-center py-2 px-4 rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
//       statusMsg.textContent = "⚠️ Please fill Name, Email and Message!";
//       return;
//     }

//     // loading state
//     sendBtn.disabled = true;
//     sendBtn.textContent = "Sending...";

//     // send email
//     emailjs.send("service_cgnv1v5", "template_ihtiwse", {
//       name: firstName + " " + lastName,
//       email: email,
//       message: message
//     })
//     .then(() => {

//       statusMsg.className =
//         "block text-sm font-medium text-center py-2 px-4 rounded-xl bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
//       statusMsg.textContent = "✅ Message sent successfully!";

//       // clear fields
//       document.getElementById("firstName").value = "";
//       document.getElementById("lastName").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";

//     })
//     .catch((err) => {

//       console.error(err);

//       statusMsg.className =
//         "block text-sm font-medium text-center py-2 px-4 rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
//       statusMsg.textContent = "❌ Failed to send message. Try again.";

//     })
//     .finally(() => {
//       sendBtn.disabled = false;
//       sendBtn.textContent = "Send Message";
//     });

//   });

// });







// EmailJS Init
emailjs.init("hzw8XmOgFbRNw0zi5");

document.addEventListener("DOMContentLoaded", function () {

  // ----------------------------
  // MOBILE MENU
  // ----------------------------

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if(menuBtn){
    menuBtn.addEventListener("click", function(){

      mobileMenu.classList.toggle("hidden");

      const icon =
      menuBtn.querySelector(".material-symbols-outlined");

      if(
        mobileMenu.classList.contains("hidden")
      ){
        icon.textContent="menu";
      }else{
        icon.textContent="close";
      }

    });
  }

  mobileLinks.forEach(link=>{
      link.addEventListener("click", ()=>{
          mobileMenu.classList.add("hidden");
          menuBtn.querySelector(
            ".material-symbols-outlined"
          ).textContent="menu";
      });
  });



  // ----------------------------
  // CONTACT FORM
  // ----------------------------

  const sendBtn = document.getElementById("sendBtn");
  const statusMsg = document.getElementById("statusMsg");

  sendBtn.addEventListener("click", function () {

    const firstName =
      document.getElementById("firstName").value.trim();

    const lastName =
      document.getElementById("lastName").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const message =
      document.getElementById("message").value.trim();


    statusMsg.className =
    "hidden text-sm font-medium text-center py-2 px-4 rounded-xl";

    if (!firstName || !email || !message) {

      statusMsg.className=
      "block bg-red-100 text-red-600 py-2 rounded-xl";

      statusMsg.textContent=
      "⚠️ Please fill Name, Email and Message!";

      return;
    }


    sendBtn.disabled=true;
    sendBtn.textContent="Sending...";


    emailjs.send(
      "service_cgnv1v5",
      "template_ihtiwse",
      {
        name:firstName+" "+lastName,
        email:email,
        message:message
      }
    )

    .then(()=>{

      statusMsg.className=
      "block bg-green-100 text-green-700 py-2 rounded-xl";

      statusMsg.textContent=
      "✅ Message sent successfully!";


      document.getElementById("firstName").value="";
      document.getElementById("lastName").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";

    })

    .catch((err)=>{

      console.error(err);

      statusMsg.className=
      "block bg-red-100 text-red-600 py-2 rounded-xl";

      statusMsg.textContent=
      "❌ Failed to send message.";

    })

    .finally(()=>{

      sendBtn.disabled=false;
      sendBtn.textContent="Send Message";

    });

  });

});





