let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-content');
const totalSlides = slides.length;

function showSlide(index) {
  
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Initial display
showSlide(currentIndex); 

 
 /***************************************Form Main Page ********** */
function sent(){
  const formManinPage = document.getElementById("contact-form");
  formManinPage.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Message sent!");
    formManinPage.reset();
  });
}

  /***************************Appointment contact form********************
function appointment(){
  const myForm = document.getElementById("contactForm");
  myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById("client-name").value;
    const email = document.getElementById("client-email").value;
    const service = document.getElementById("client-service").value;
    const msg = document.getElementById("client-message").value;

    if(name && email && service){
      alert(`Thank you, ${name}! Message sent!`);
      myForm.reset();
    }else{
      alert("Please fill in all fields!");
    }
  });
}

*/


function appointment() {
  const myForm = document.getElementById("contactForm");

  myForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("client-name").value.trim();
    const email = document.getElementById("client-email").value.trim();
    const service = document.getElementById("client-service").value.trim();
    const msg = document.getElementById("client-message").value.trim();

    if (!name || !email || !service) {
      alert("Please fill in all required fields!");
      return;
    }

    const formData = {
      name: name,
      email: email,
      service: service,
      message: msg
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxobNiFySMLe2ezBqCspdAt-jXKnJfdYbnVxlow5A8/dev", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.text();
      if (result === "Success") {
        alert(`Thank you, ${name}! Your message has been sent.`);
        myForm.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
      console.error("Error:", error);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  appointment();
});


  
  
  
/**************************Get menu elements***************************/ 
const menu = document.getElementById('menu');
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');


//Open menu function
  openMenuBtn.addEventListener('click', () => {
    menu.classList.add('open');
  });



 //Close menu function
  closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  });

/************************About Section/Progress Bar************************ */ 
function updateProgress(barId, percentageId, value) {
  const bar = document.getElementById(barId);
  const percentage = document.getElementById(percentageId);
  bar.style.width = value + '%';
  percentage.textContent = value + '%';
}

// Set progress values
updateProgress('home-progress', 'home-percentage', 90);
updateProgress('senior-progress', 'senior-percentage', 86);



//******************Testimonials


