// Language Data
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,hi,ta,te,kn,ml,mr,bn,gu,pa',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  );
}

// Image Slider Functionality
let images = [
  'images1.jpeg',
  'images2.jpeg',
  'images3.jpeg',
  'images4.jpeg'
];

let currentIndex = 0;

function scrollLeft() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('sliderImage').src = images[currentIndex];
}

function scrollRight() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('sliderImage').src = images[currentIndex];
}

// Optional: Alert for Login & Register Buttons
document.querySelector('.login').addEventListener('click', () => {
  alert('Login Functionality Coming Soon...');
});

document.querySelector('.register').addEventListener('click', () => {
  alert('Register Functionality Coming Soon...');
});
   
    function switchToHaryanvi() {
      alert("Haryanvi translation coming soon. Manual language switch under development.");
      // Future: Load Haryanvi JSON and replace content dynamically
    }

    function switchToBhojpuri() {
      alert("Bhojpuri translation coming soon. Manual language switch under development.");
      // Future: Load Bhojpuri JSON and replace content dynamically
    }
    let nav_bar=document.getElementsByClassName(".top-nav")
nav_bar.style.backgroundColor="pink;"