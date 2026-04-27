document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector(".cursor");
  const nav = document.querySelector(".top-left-title");

  if (!cursor) {
    console.error("Cursor element not found");
    return;
  }

  /* MAIN CURSOR + TRAIL */
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

  /* NAV HOVER */
  if (nav) {
    nav.addEventListener("mouseenter", () => {
      document.body.classList.add("nav-hover");
    });

    nav.addEventListener("mouseleave", () => {
      document.body.classList.remove("nav-hover");
    });
  }

  /* FAVICON */
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#39ff14";
  ctx.beginPath();
  ctx.arc(16, 16, 5, 0, Math.PI * 2);
  ctx.fill();

  const favicon = document.getElementById("favicon");
  if (favicon) {
    favicon.href = canvas.toDataURL("image/png");
  }
});
