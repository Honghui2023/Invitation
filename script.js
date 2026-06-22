// Find HTML elements

const drum = document.getElementById("drum");
const closeBtn = document.getElementById("closeBtn");
const intro = document.getElementById("intro");
const card = document.getElementById("card");

// Open invitation
function openInvitation() {
    drum.classList.add('hit');
      setTimeout(() => drum.classList.remove('hit'), 300);

      setTimeout(() => {
        intro.classList.add('hidden');
        card.classList.add('show');
        // makeConfetti();
      }, 320);
}

// Close invitation
function closeInvitation() {
    intro.classList.remove("hidden");
    card.classList.remove("show");
}

// Click drum
drum.addEventListener(
    "click",
    openInvitation
);

// Close button
closeBtn.addEventListener(
    "click",
    closeInvitation
);
