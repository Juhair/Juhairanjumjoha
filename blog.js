document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });

  document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".post-card");
      const expanded = card.classList.toggle("expanded");
      button.innerHTML = expanded ? 'Close article <span>↑</span>' : 'Read article <span>↓</span>';
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
