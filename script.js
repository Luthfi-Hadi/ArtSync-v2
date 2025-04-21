// script.js

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  })
  
  // Simulasi fungsi "Join Now"
  function joinCommunity() {
    alert("Thank you for your interest! Community features are launching soon 🚀");
  }
  
  // Optional: animasi fade-in saat scroll
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  });
  
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section)
  })
  