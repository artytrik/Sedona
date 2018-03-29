var search = document.querySelector(".hotel-search");

var popup = document.querySelector(".hotel-search-modal");

var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adult = popup.querySelector("[name=adult]");
var child = popup.querySelector("[name=child]");

var isStorageSupport = true;
var storageAdult = "";
var storageChild = "";

try {
  storageAdult = localStorage.getItem("adult");
  storageChild = localStorage.getItem("child");
}
catch(err) {
  isStorageSupport = false;
}

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-close")) {
    popup.classList.remove("modal-error");
  }
  popup.classList.toggle("modal-close");
  if (storageAdult) {
    adult.value = storageAdult;
  }
  if (storageChild) {
    child.value = storageChild;
  }
  arrival.focus();
});

form.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value || !adult.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("child", child.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-close")) {
      popup.classList.remove("modal-close");
    }
  }
});

