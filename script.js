const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('header nav ul');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const submitButton = document.querySelector('#contact button[type="submit"]');
const loading = document.querySelector('.loading');

submitButton.addEventListener('click', () => {
  loading.style.display = 'block';
  // Add your form submission logic here
  setTimeout(() => {
    loading.style.display = 'none';
  }, 2000);
});
