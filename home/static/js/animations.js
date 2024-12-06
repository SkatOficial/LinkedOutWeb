const images = document.querySelectorAll('[class*="anim-"]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }else{
          entry.target.classList.remove('visible');
        }
      });
    }, {
        root: null,
        threshold: 0.3, 
      });

    images.forEach(image => {
      observer.observe(image);
    });