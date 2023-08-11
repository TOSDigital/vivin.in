var navLinks = document.getElementById("navLinks");
        function openMenu(){
            navLinks.style.right = "0px";
        }
        function hideMenu(){
            navLinks.style.right = "-220px";
        }



window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var section = document.querySelector('#ourservices'); // Change this to the ID of the next section
  
    var sectionTop = section.offsetTop;
    var scrollTop = window.scrollY;
  
    if (scrollTop >= sectionTop) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var section = document.querySelector('#about'); // Change this to the ID of the next section
  
    var sectionTop = section.offsetTop;
    var scrollTop = window.scrollY;
  
    if (scrollTop >= sectionTop) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var section = document.querySelector('#video'); // Change this to the ID of the next section
  
    var sectionTop = section.offsetTop;
    var scrollTop = window.scrollY;
  
    if (scrollTop >= sectionTop) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var section = document.querySelector('#project'); // Change this to the ID of the next section
  
    var sectionTop = section.offsetTop;
    var scrollTop = window.scrollY;
  
    if (scrollTop >= sectionTop) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var section = document.querySelector('#arc'); // Change this to the ID of the next section
  
    var sectionTop = section.offsetTop;
    var scrollTop = window.scrollY;
  
    if (scrollTop >= sectionTop) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });