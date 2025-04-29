const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const formMessage = document.getElementById("form-message");

const validateForm = () => {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Email format validation
  const isEmailValid = /\S+@\S+\.\S+/.test(email);

  if (name && isEmailValid && subject && message) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

// Listen for input on all fields
form.addEventListener("input", validateForm);

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "Message Sent!";
  form.reset();
  submitBtn.disabled = true;
});
