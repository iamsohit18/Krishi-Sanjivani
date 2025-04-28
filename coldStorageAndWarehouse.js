
const cropInput = document.getElementById("cropSearch");
const cityInput = document.getElementById("citySearch");
const table = document.getElementById("storageTable").getElementsByTagName("tbody")[0];

function filterTable() {
  const cropFilter = cropInput.value.toLowerCase();
  const cityFilter = cityInput.value.toLowerCase();

  Array.from(table.rows).forEach(row => {
    const crop = row.cells[1].textContent.toLowerCase();
    const city = row.cells[0].textContent.toLowerCase();
    if (crop.includes(cropFilter) && city.includes(cityFilter)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

cropInput.addEventListener("keyup", filterTable);
cityInput.addEventListener("keyup", filterTable);

// Modal Functions
const modal = document.getElementById("bookingModal");
const modalLocation = document.getElementById("modalLocation");

function openModal(storageName, city) {
  modalLocation.innerText = `Booking for: ${storageName}, ${city}`;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function submitBooking() {
  const name = document.getElementById("farmerName").value;
  const crop = document.getElementById("cropType").value;
  const qty = document.getElementById("quantity").value;
  if (name && crop && qty) {
    alert(`Booking Confirmed!\nFarmer: ${name}\nCrop: ${crop}\nQuantity: ${qty} MT`);
    closeModal();
  } else {
    alert("Please fill all fields.");
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

    // function googleTranslateElementInit() {
    //   new google.translate.TranslateElement(
    //     {
    //       pageLanguage: 'en',
    //       includedLanguages: 'en,hi,ta,te,kn,ml,mr,bn,gu,pa',
    //       layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    //     },
    //     'google_translate_element'
    //   );
    // }
  