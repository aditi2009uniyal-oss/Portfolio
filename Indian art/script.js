document.querySelectorAll('.card-bg').forEach(card => {
  const bg = card.getAttribute('data-bg');
  if (bg) {
    card.style.backgroundImage = `url(${bg})`;
  }
});

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission

      // Simple validation (optional)
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if(name && email && message) {
        Swal.fire({
          title: 'Thank you!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        // Reset the form
        form.reset();
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'Please fill in all fields.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });