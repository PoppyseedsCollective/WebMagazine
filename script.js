
const cursor = document.querySelector(".cursor");

/* MAIN CURSOR */
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  // TRAIL
  const dot = document.createElement("div");
  document.body.appendChild(dot);

  dot.style.position = "fixed";
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  dot.style.width = "10px";
  dot.style.height = "10px";
  dot.style.borderRadius = "50%";
  dot.style.background = "#39ff14";
  dot.style.boxShadow = "0 0 10px #39ff14";
  dot.style.pointerEvents = "none";
  dot.style.transform = "translate(-50%, -50%)";
  dot.style.zIndex = "9998";

  dot.style.opacity = "1";
  dot.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  setTimeout(() => {
    dot.style.opacity = "0";
    dot.style.transform = "translate(-50%, -50%) scale(0.5)";
  }, 10);

  setTimeout(() => dot.remove(), 800);
});

/* NAV HOVER CURSOR COLOR */
const nav = document.querySelector(".top-left-title");

nav.addEventListener("mouseenter", () => {
  document.body.classList.add("nav-hover");
});

nav.addEventListener("mouseleave", () => {
  document.body.classList.remove("nav-hover");
});

// Create a 32x32 green dot favicon
const canvas = document.createElement('canvas');
canvas.width = 32;
canvas.height = 32;
const ctx = canvas.getContext('2d');

// Draw green circle
ctx.fillStyle = '#39ff14';  // bright neon green
ctx.beginPath();
ctx.arc(16, 16, 10, 0, Math.PI * 2);
ctx.fill();

// Convert canvas to data URL
const faviconURL = canvas.toDataURL('image/png');

// Set favicon
const favicon = document.getElementById('favicon');
favicon.href = faviconURL;



