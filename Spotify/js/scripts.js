     // Modal functionality
     var signupModal = document.getElementById("signup-modal");
     var loginModal = document.getElementById("login-modal");

     var signupBtn = document.getElementById("signup-btn");
     var loginBtn = document.getElementById("login-btn");

     var signupClose = document.getElementById("signup-close");
     var loginClose = document.getElementById("login-close");

     signupBtn.onclick = function () {
         signupModal.style.display = "block";
     }

     loginBtn.onclick = function () {
         loginModal.style.display = "block";
     }

     signupClose.onclick = function () {
         signupModal.style.display = "none";
     }

     loginClose.onclick = function () {
         loginModal.style.display = "none";
     }
  // Scroll buttons 
  var scrollContainer = document.querySelector('.scroll-container');
  var prevButton = document.getElementById('prev-button');
  var nextButton = document.getElementById('next-button');

  prevButton.onclick = function () {
      scrollContainer.scrollBy({
          top: 0,
          left: -300,
          behavior: 'smooth'
      });
  }

  nextButton.onclick = function () {
      scrollContainer.scrollBy({
          top: 0,
          left: 300,
          behavior: 'smooth'
      });
  }

     window.onclick = function (event) {
         if (event.target == signupModal) {
             signupModal.style.display = "none";
         }
         if (event.target == loginModal) {
             loginModal.style.display = "none";
         }
     }

 