const items = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
items.forEach(el => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});
