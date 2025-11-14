const books = {
  1: {
    title: "Book 1 — Ideation to Validation",
    subtitle: "Turn messy ideas into validated opportunities.",
    thesis: "Validate fast, fail cheap, and find real demand before building.",
    concepts: [
      "Rapid Validation Cycles",
      "Founder–Market Fit",
      "Opportunity Mapping",
      "Minimum Viable Operations",
      "Early Customer Discovery"
    ],
    promise: "You will walk away with clarity on whether your idea is worth pursuing and know how to get your first paying customers.",
    excerpt: `"Most startups don't fail because the idea was bad — they fail because the founder waited too long to test it."`,
    testimonials: [
      `"This book saved us months of wandering. We validated our idea in 18 days." — Ananya, Founder`,
      `"Helped us avoid a costly build and pivot early. A must for new founders." — Rohan, Product Lead`
    ],
    cta: "Explore Book 1",
    link: "/book1"
  },

  2: {
    title: "Book 2 — Build & Scale",
    subtitle: "Turn something that works into something repeatable.",
    thesis: "Scaling requires systems, hiring discipline, and growth loops — not hacks.",
    concepts: [
      "Growth Engines & Loops",
      "Team Design & Leadership",
      "Hiring Frameworks",
      "Operational Scaling",
      "Retention Systems"
    ],
    promise: "You will understand how to scale sustainably, manage teams at growth stage and avoid chaotic expansion.",
    excerpt: `"Growth isn’t a sprint. It’s the result of quiet, repeatable systems compounding over time."`,
    testimonials: [
      `"We scaled from 20 to 80 employees using this book’s org design approach." — Shreya, COO`,
      `"Gave me frameworks for hiring and leadership I still use today." — Mehul, Startup Founder`
    ],
    cta: "Explore Book 2",
    link: "/book2"
  },

  3: {
    title: "Book 3 — Vision & Impact",
    subtitle: "Build a company that outlasts you.",
    thesis: "A startup becomes meaningful when long-term vision connects with execution at scale.",
    concepts: [
      "Mission-Driven Leadership",
      "Impact Frameworks",
      "Long-Term Thinking",
      "Legacy Design",
      "Ethical Scaling"
    ],
    promise: "You will learn how to build a company that aligns profit with long-term purpose.",
    excerpt: `"Impact isn’t what you achieve — it's what remains after you're gone."`,
    testimonials: [
      `"Can't wait — this is the book every maturing founder needs." — Early Reader`,
    ],
    cta: "Join Early Access",
    link: "/book3-waitlist",
    comingSoon: true
  }
};

function loadBook(bookId) {
  const b = books[bookId];
  
  const testimonialHTML = b.testimonials
    .map(t => `<div class="testimonial-box">${t}</div>`)
    .join("");

  const emailHTML = b.comingSoon
    ? `
    <div class="email-box">
      <input placeholder="Enter your email for early access">
      <button>Notify Me</button>
    </div>
    `
    : `<a href="${b.link}" class="cta-btn">${b.cta}</a>`;

  document.getElementById("bookDetails").innerHTML = `
    <h2>${b.title}</h2>
    <div class="book-subtitle">${b.subtitle}</div>

    <p><strong>Core Thesis:</strong> ${b.thesis}</p>

    <h3>Key Concepts:</h3>
    <ul class="key-concepts">
      ${b.concepts.map(c => `<li>${c}</li>`).join("")}
    </ul>

    <p><strong>Transformation Promise:</strong> ${b.promise}</p>

    <div class="excerpt-box">${b.excerpt}</div>

    ${testimonialHTML}

    ${emailHTML}
  `;
}

document.querySelectorAll(".book-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".book-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    loadBook(item.dataset.book);
  });
});

// default
loadBook(1);
