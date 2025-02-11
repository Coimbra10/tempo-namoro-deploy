const images = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg"];
let currentIndex = 0;

function updateImage() {
  const imgElement = document.getElementById("photo");
  imgElement.src = images[currentIndex];
  imgElement.classList.add("fade-in");
  setTimeout(() => imgElement.classList.remove("fade-in"), 500);
}

document.getElementById("prevButton").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

document.getElementById("nextButton").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

function updateTimeDisplay(id, value) {
  const element = document.getElementById(id);
  element.textContent = `${id.charAt(0).toUpperCase() + id.slice(1)}: ${value}`;
  element.classList.add('show');
}

function updateLoveTimer() {
  const anniversaryDate = new Date("2024-02-24T22:00:00-03:00");
  const currentDate = new Date();

  let diffInMilliseconds = currentDate - anniversaryDate;
  let diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  const years = Math.floor(diffInSeconds / (60 * 60 * 24 * 365));
  diffInSeconds %= 60 * 60 * 24 * 365;

  const weeks = Math.floor(diffInSeconds / (60 * 60 * 24 * 7));
  diffInSeconds %= 60 * 60 * 24 * 7;

  const totalDays = Math.floor(diffInMilliseconds / (60 * 60 * 24 * 1000));
  diffInSeconds %= 60 * 60 * 24;

  const hours = Math.floor(diffInSeconds / (60 * 60));
  diffInSeconds %= 60 * 60;

  const minutes = Math.floor(diffInSeconds / 60);
  const seconds = diffInSeconds % 60;

  updateTimeDisplay('years', years);
  updateTimeDisplay('weeks', weeks);
  updateTimeDisplay('days', totalDays);
  updateTimeDisplay('hours', String(hours).padStart(2, '0'));
  updateTimeDisplay('minutes', String(minutes).padStart(2, '0'));
  updateTimeDisplay('seconds', String(seconds).padStart(2, '0'));
}

setInterval(updateLoveTimer, 1000);
