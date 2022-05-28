function reveal() {
    var reveals = document.querySelector(".scrollimage");
      var windowHeight = window.innerHeight;
      var elementTop = reveals.getBoundingClientRect().top;
      var elementVisible = 450;
      if (elementTop < windowHeight - elementVisible) {
        reveals.classList.add("active");
        console.log('up')
      } else {
        reveals.classList.remove("active");
        console.log('down')
      }
  }
  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
  