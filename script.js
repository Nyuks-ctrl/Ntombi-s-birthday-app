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

document.getElementById("nextBtn").onclick = () => {

  if (!musicStarted) {
    bgMusic.volume = 0.25;
    bgMusic.play();
    musicStarted = true;
  }

  index++;

  if (index >= slides.length) return;

  img.style.opacity = 0;

  setTimeout(() => {
    img.src = slides[index].image;
    msg.innerText = slides[index].text;
    img.style.opacity = 1;
  }, 300);
};

const nextBtn = document.getElementById("nextBtn");
const replayBtn = document.getElementById("replayBtn");
const messageBox = document.getElementById("messageBox");

nextBtn.onclick = () => {

  if (!musicStarted) {
    bgMusic.volume = 0.25;
    bgMusic.play();
    musicStarted = true;
  }

  index++;

  if (index >= slides.length) return;

  img.style.opacity = 0;

  setTimeout(() => {
    img.src = slides[index].image;
    msg.innerText = slides[index].text;
    img.style.opacity = 1;

    // Final GIF: hide buttons and message
    if (index === slides.length - 1) {
      nextBtn.style.display = "none";
      messageBox.style.display = "none";
      replayBtn.style.display = "block"; // show replay
      img.classList.add("final-gif");
    }
  }, 300);
};

// Replay button click
replayBtn.onclick = () => {
  index = 0;
  img.classList.remove("final-gif");
  img.src = slides[0].image;
  msg.innerText = slides[0].text;
  img.style.opacity = 1;

  replayBtn.style.display = "none";
  nextBtn.style.display = "block";
  messageBox.style.display = "block";
};
