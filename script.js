// Good morning, baby Julie 💚

// Smoothly open the morning letter.
const readButton = document.getElementById("readButton");
const letter = document.getElementById("letter");

readButton.addEventListener("click", () => {
  letter.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  createFloatingItems(8);
});

// Interactive love messages.
const surpriseButtons = document.querySelectorAll(".surprise-button");
const surpriseMessage = document.getElementById("surpriseMessage");
const surpriseEmoji = document.getElementById("surpriseEmoji");
const surpriseText = document.getElementById("surpriseText");

surpriseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    surpriseEmoji.textContent = button.dataset.emoji;
    surpriseText.textContent = button.dataset.message;

    surpriseMessage.classList.remove("show");

    // Restart the animation whenever a new message is opened.
    void surpriseMessage.offsetWidth;

    surpriseMessage.classList.add("show");

    createFloatingItems(12);

    surpriseMessage.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  });
});

// One more virtual hug!
const hugMeButton = document.getElementById("hugMeButton");
const hugResult = document.getElementById("hugResult");

hugMeButton.addEventListener("click", () => {
  hugResult.textContent =
    "HUUUUUGGGG! 🫂💚 *hugs you tightly and gives you a forehead kiss* Mwaaaaa! I love you, baby Julie! 😚🌷";

  createFloatingItems(25);

  hugResult.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
});

// Floating hearts, clouds, and little green leaves.
const floatingLayer = document.getElementById("floatingLayer");

const floatingSymbols = ["💚", "🤍", "♡", "☁️", "🌿", "🍀", "💕"];

function createFloatingItems(amount = 1) {
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("span");

    item.className = "float-item";

    item.textContent =
      floatingSymbols[Math.floor(Math.random() * floatingSymbols.length)];

    item.style.left = Math.random() * 95 + "%";
    item.style.fontSize = 15 + Math.random() * 18 + "px";
    item.style.animationDuration = 4 + Math.random() * 4 + "s";

    floatingLayer.appendChild(item);

    // Remove finished animations so the page stays lightweight.
    item.addEventListener("animationend", () => {
      item.remove();
    });
  }
}

// Gentle floating hearts in the background.
createFloatingItems(10);

setInterval(() => {
  // Avoid creating extra elements when the tab is in the background.
  if (!document.hidden) {
    createFloatingItems(1);
  }
}, 1300);
