// Toggle burger menu
const burger = document.getElementById('burger');
const nav = document.getElementById('mobile-nav');

burger.addEventListener('click', () => {
  const isOpen = nav.style.display === 'flex';
  nav.style.display = isOpen ? 'none' : 'flex';
});

// Animate header on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Modal image viewer
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Smooth scroll and close mobile nav on click
document.querySelectorAll('#mobile-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile nav
    if (window.innerWidth < 768) {
      nav.style.display = 'none';
    }
  });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert('Thanks for your message!');
      form.reset();
    } else {
      alert('Oops! Something went wrong.');
    }
  });
});

