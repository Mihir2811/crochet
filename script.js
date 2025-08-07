// Basic animation or interaction - feel free to add more
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for reaching out! We’ll get back to you soon.');
  this.reset();
});
