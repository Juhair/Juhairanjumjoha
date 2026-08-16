document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Joha,\n\nName: ${name}\nEmail: ${email}\n\n${message}\n\nSent from your portfolio website.`
    );

    window.location.href = `mailto:joha10431@gmail.com?subject=${subject}&body=${body}`;
    if (note) note.textContent = "Opening your email application…";
  });
});
