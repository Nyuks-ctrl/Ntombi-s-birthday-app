const slides = [
  // 1️⃣ Intro (already showing)
  {
    image: "images/stitch-wave.png",
    text: "Happy Birthday Ntombi 💙\nClick next ✨"
  },

  // 2️⃣ Photo slides
  {
    image: "images/ntombi1.jpg",
    text: "I hope you enjoy your day😊"
  },
  {
    image: "images/ntombi2.jpg",
    text: "May you continue being yourself \nand shining your light on everything you touch✨"
  },
  {
    image: "images/ntombi3.jpg",
    text: "Nyuks made this just for you 💙"
  },

  // 3️⃣ Final Stitch hug
  {
    image: "images/stitch-hug.png",
    text: "Stay blessed💙\nI’m really glad I know you, Ntombi."
  },
  {
    image: "images/stitch-final.gif",
    text: "" // no text on final GIF
  }

];


let index = 0;
let musicStarted = false;

const img = document.getElementById("mainImage");
const msg = document.getElementById("message");
const bgMusic = document.getElementById("bgMusic");
const nextBtn = document.getElementById("nextBtn");
const replayBtn = document.getElementById("replayBtn");
const messageBox = document.getElementById("messageBox");

// Typewriter + emoji pop effect
function typeMessage(text) {
  msg.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    if (i < text.length) {
      let char = text.charAt(i);

      // Wrap emojis in span for pop animation
      if (/[🎉✨💙😊]/.test(char)) {
        msg.innerHTML += `<span class="emoji">${char}</span>`;
      } else {
        msg.innerHTML += char;
      }

      i++;
    } else {
      clearInterval(interval);
    }
  }, 40); // 40ms per character
}

// Handle Next button click
nextBtn.onclick = () => {

  // Start background music after first click
  if (!musicStarted) {
    bgMusic.volume = 0.25;
    bgMusic.play();
    musicStarted = true;
  }

  index++;

  if (index >= slides.length) return;

  // Fade out current image
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = slides[index].image;

    // For slides with text, type it
    if (slides[index].text) {
      messageBox.style.display = "block";
      typeMessage(slides[index].text);
    } else {
      // Hide messageBox for final GIF
      messageBox.style.display = "none";
    }

    // Fade in image
    img.style.opacity = 1;

    // Final GIF logic
    if (index === slides.length - 1) {
      nextBtn.style.display = "none";
      replayBtn.style.display = "block";
      replayBtn.classList.add("pulse");
      img.classList.add("final-gif");
    }

  }, 300);
};

// Handle Replay button click
replayBtn.onclick = () => {
  index = 0;
  img.classList.remove("final-gif");
  img.src = slides[0].image;

  messageBox.style.display = "block";
  replayBtn.style.display = "none";
  replayBtn.classList.remove("pulse");

  typeMessage(slides[0].text);
  img.style.opacity = 1;
  nextBtn.style.display = "block";
};
