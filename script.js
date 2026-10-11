
document.addEventListener("DOMContentLoaded", () => {
  // Photo gallery lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeLightbox = document.querySelector(".close-lightbox");

  document.querySelectorAll(".zoom-photo").forEach((photo) => {
    photo.addEventListener("click", () => {
      lightboxImage.src = photo.src;
      lightbox.classList.add("open");
    });
  });

  function closeViewer() {
    if (lightbox) lightbox.classList.remove("open");
  }

  closeLightbox?.addEventListener("click", closeViewer);

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeViewer();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeViewer();
  });

  // Personal birthday letter
  const openLetter = document.getElementById("openLetter");
  const letterPaper = document.getElementById("letterPaper");
  const typedLetter = document.getElementById("typedLetter");

  const letterText = `I just want you to know how grateful I am to have you in my life.

You bring so much happiness, laughter, and warmth to the people around you. I hope this new year of your life brings you beautiful opportunities, peaceful days, unforgettable adventures, and dreams coming true.

Always believe in yourself, keep smiling, and never forget how wonderful you are.

Thank you for being my friend and for being exactly who you are.

Happy Birthday, my bestie! May this year be one of your most beautiful chapters. 💗`;

  let typingTimer;

  openLetter?.addEventListener("click", () => {
    letterPaper.hidden = false;
    openLetter.textContent = "Your letter is open 💗";
    openLetter.disabled = true;

    let index = 0;
    typedLetter.textContent = "";

    function typeNextCharacter() {
      if (index < letterText.length) {
        typedLetter.textContent += letterText[index];
        index++;
        typingTimer = setTimeout(typeNextCharacter, 24);
      }
    }

    typeNextCharacter();
    letterPaper.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // Birthday gift reveal
  const giftButton = document.getElementById("giftButton");
  const giftReveal = document.getElementById("giftReveal");
  const celebrateAgain = document.getElementById("celebrateAgain");

  function celebrate() {
    if (giftReveal) giftReveal.hidden = false;
    if (giftButton) giftButton.textContent = "Your Surprise Is Open 💖";

    // Colorful confetti
    const emojis = ["💗", "🎉", "✨", "🌸", "🎀", "💜", "⭐"];

    for (let i = 0; i < 65; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.fontSize = (14 + Math.random() * 17) + "px";
      piece.style.animationDelay = Math.random() * 1.2 + "s";

      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4500);
    }

    giftReveal?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  giftButton?.addEventListener("click", celebrate);
  celebrateAgain?.addEventListener("click", celebrate);
});
