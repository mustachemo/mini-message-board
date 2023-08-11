const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', function () {
  return navBarLinks.classList.toggle('active');
});
