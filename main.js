// Tambahkan kode JavaScript kalian di file ini

function produkNavClick() {
  document.getElementById("produk").scrollIntoView();
}

function komunitasNavClick() {
  document.getElementById("komunitas").scrollIntoView();
}

function artikelNavClick() {
  document.getElementById("artikel").scrollIntoView();
}

function closeStatClick() {
  document.getElementById("closingStatement").scrollIntoView();
}

function checkIsVisible(element) {
  //   const produkNavbar = document.getElementById("produkActive");
  const rect = element.getBoundingClientRect();
  if (
    rect.top < window.innerHeight / 2 &&
    rect.bottom > window.innerHeight / 2
  ) {
    return true;
    // produkNavbar.classList.add("active");
  } else {
    return false;
    // produkNavbar.classList.remove("active");
  }
}

// functionOnScrolll jalan ketika user scroll halamannya
function functionScroll() {
  // kode disini

  const produkSection = document.getElementById("produk");
  const komunitaskSection = document.getElementById("komunitas");
  const artikelSection = document.getElementById("artikel");
  const produkNavbar = document.getElementById("Navbar-produk");
  const komunitasNavbar = document.getElementById("Navbar-komunitas");
  const artikelNavbar = document.getElementById("Navbar-artikel");

  const produkIsVisible = checkIsVisible(produkSection);
  const komunitasIsVisible = checkIsVisible(komunitaskSection);
  const artikelIsVisible = checkIsVisible(artikelSection);

  if (produkIsVisible === true) {
    produkNavbar.classList.add("active");
  } else {
    produkNavbar.classList.remove("active");
  }

  if (komunitasIsVisible === true) {
    komunitasNavbar.classList.add("active");
  } else {
    komunitasNavbar.classList.remove("active");
  }

  if (artikelIsVisible === true) {
    artikelNavbar.classList.add("active");
  } else {
    artikelNavbar.classList.remove("active");
  }
  //
}

function handleGetFormData() {
  const nameInput = document.getElementById("name");
  const nameValue = nameInput.value;
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;
  const cityInput = document.getElementById("city");
  const cityValue = cityInput.value;
  const zipCodeInput = document.getElementById("zip-code");
  const zipCodeValue = zipCodeInput.value;
  const statusInput = document.getElementById("status");
  const statusCheck = statusInput.checked;

  const object = {
    name: nameValue,
    email: emailValue,
    city: cityValue,
    zipCode: zipCodeValue,
    status: statusCheck,
  };
  return object;
}

function checkboxIsChecked() {
  const statusInput = document.getElementById("status");
  const statusCheck = statusInput.checked;
  return statusCheck;
}

function validateFormData(parameter) {
  if (
    parameter !== null &&
    isNumber(parameter.zipCode) &&
    checkboxIsChecked()
  ) {
    return true;
  } else {
    return false;
  }
}

function isNumber(parameter) {
  if (isNaN(parameter) === false) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  const formData = handleGetFormData();
  validateFormData(formData);
  const isFormValid = validateFormData(formData);
  const warningContainerElement = document.getElementById("warningContainer");
  const warningElement = document.getElementById("warning");
  if (isFormValid === true) {
    warningContainerElement.style.visibility = "hidden";
    warningElement.innerHTML = "";
  } else {
    warningContainerElement.style.visibility = "visible";
    warningElement.innerHTML = "Periksa form anda sekali lagi";
  }
}

const formElement = document.getElementById("my-form");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  submit();
});
