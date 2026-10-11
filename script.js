const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Chiudi menu" : "Apri menu");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".footer-links").forEach((footer) => {
  if (!footer.querySelector("[data-privacy-link]")) {
    const link = document.createElement("a");
    link.href = "privacy.html";
    link.textContent = "Privacy e note legali";
    link.dataset.privacyLink = "";
    footer.appendChild(link);
  }
});

// iOS può trasformare alcuni simboli Unicode in emoji: aggiungiamo la
// variante testuale per mantenere coerente la direzione artistica del sito.
const textPresentationSymbols = {
  "↗": "↗︎",
  "✳": "✳︎",
  "↓": "↓︎",
  "↑": "↑︎",
};
const textNodeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const textNodes = [];
while (textNodeWalker.nextNode()) textNodes.push(textNodeWalker.currentNode);
textNodes.forEach((node) => {
  node.nodeValue = node.nodeValue.replace(/[↗✳↓↑]/g, (symbol) => textPresentationSymbols[symbol]);
});
