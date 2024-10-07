function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Display the success message
  document.getElementById('successMessage').style.display = 'block';

  // Optionally, clear the form inputs
  document.getElementById('contactForm').reset();
});
