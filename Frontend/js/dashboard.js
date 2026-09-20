const API_BASE = "http://localhost:5501";

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "02-login.html";
}

let totalLessons = 10;
let completedLessons = 0;

const techCategories = [
  {
    category: "AI & Machine Learning",
    items: [
      ["ChatGPT", "AI for coding, study and productivity.", "https://chatgpt.com", "fa-solid fa-robot"],
      ["Machine Learning", "Learn ML fundamentals.", "https://www.coursera.org/learn/machine-learning", "fa-solid fa-brain"],
      ["Deep Learning", "Learn neural networks.", "https://www.deeplearning.ai", "fa-solid fa-microchip"],
      ["Hugging Face", "Explore AI models.", "https://huggingface.co/learn", "fa-solid fa-language"],
      ["Kaggle", "Practice ML and datasets.", "https://www.kaggle.com/learn", "fa-solid fa-database"],
      ["TensorFlow", "Machine learning framework.", "https://www.tensorflow.org/learn", "fa-solid fa-network-wired"]
    ]
  },

  {
    category: "Web Development",
    items: [
      ["HTML Course", "Learn HTML inside ALP18.", "courses/html-course.html", "fa-brands fa-html5"],
      ["MDN Web Docs", "Web development documentation.", "https://developer.mozilla.org", "fa-solid fa-globe"],
      ["JavaScript", "Modern JavaScript learning.", "https://javascript.info", "fa-brands fa-js"],
      ["React", "Official React learning.", "https://react.dev/learn", "fa-brands fa-react"],
      ["Node.js", "Backend JavaScript.", "https://nodejs.org/en/learn", "fa-brands fa-node-js"],
      ["MongoDB", "Learn MongoDB.", "https://learn.mongodb.com", "fa-solid fa-database"]
    ]
  },

  {
    category: "Programming Languages",
    items: [
      ["Python", "Learn Python.", "https://www.w3schools.com/python/", "fa-brands fa-python"],
      ["Java", "Learn Java.", "https://www.geeksforgeeks.org/java/", "fa-brands fa-java"],
      ["C++", "Learn C++.", "https://cplusplus.com", "fa-solid fa-code"],
      ["JavaScript", "Learn JavaScript.", "https://javascript.info", "fa-brands fa-js"],
      ["SQL", "Learn SQL.", "https://www.w3schools.com/sql/", "fa-solid fa-database"],
      ["Rust", "Official Rust book.", "https://doc.rust-lang.org/book/", "fa-solid fa-shield"]
    ]
  },

  {
    category: "Coding Practice & DSA",
    items: [
      ["LeetCode", "Coding interview practice.", "https://leetcode.com", "fa-solid fa-laptop-code"],
      ["HackerRank", "Coding practice.", "https://www.hackerrank.com", "fa-solid fa-code"],
      ["Codeforces", "Competitive programming.", "https://codeforces.com", "fa-solid fa-trophy"],
      ["CodeChef", "Coding contests.", "https://www.codechef.com", "fa-solid fa-ranking-star"],
      ["GeeksforGeeks", "DSA tutorials.", "https://www.geeksforgeeks.org/data-structures/", "fa-solid fa-brain"],
      ["NeetCode", "DSA roadmap.", "https://neetcode.io", "fa-solid fa-route"]
    ]
  },

  {
    category: "Career, Internships & Jobs",
    items: [
      ["Internshala", "Find internships.", "https://internshala.com", "fa-solid fa-briefcase"],
      ["LinkedIn Jobs", "Jobs and internships.", "https://www.linkedin.com/jobs", "fa-brands fa-linkedin"],
      ["Unstop", "Competitions and internships.", "https://unstop.com", "fa-solid fa-award"],
      ["Forage", "Virtual job simulations.", "https://www.theforage.com", "fa-solid fa-laptop"],
      ["Naukri", "Indian job portal.", "https://www.naukri.com", "fa-solid fa-briefcase"]
    ]
  },

  {
    category: "DevOps, Cloud & Deployment",
    items: [
      ["AWS", "Cloud learning resources.", "https://aws.amazon.com/training/", "fa-brands fa-aws"],
      ["Docker", "Container technology.", "https://docs.docker.com", "fa-brands fa-docker"],
      ["Kubernetes", "Container orchestration.", "https://kubernetes.io/docs/home/", "fa-solid fa-network-wired"],
      ["GitHub Actions", "CI/CD automation.", "https://docs.github.com/en/actions", "fa-brands fa-github"],
      ["Vercel", "Deploy web apps.", "https://vercel.com/docs", "fa-solid fa-cloud-arrow-up"],
      ["Render", "Deploy backend apps.", "https://render.com/docs", "fa-solid fa-server"]
    ]
  },

  {
    category: "Data Science & Analytics",
    items: [
      ["Kaggle", "Datasets and notebooks.", "https://www.kaggle.com/learn", "fa-solid fa-database"],
      ["Pandas", "Python data analysis.", "https://pandas.pydata.org/docs/", "fa-solid fa-table"],
      ["NumPy", "Numerical computing.", "https://numpy.org/learn/", "fa-solid fa-calculator"],
      ["Power BI", "Business intelligence.", "https://learn.microsoft.com/en-us/power-bi/", "fa-solid fa-chart-pie"],
      ["Tableau", "Data visualization.", "https://www.tableau.com/learn", "fa-solid fa-chart-simple"],
      ["SQLBolt", "Interactive SQL practice.", "https://sqlbolt.com", "fa-solid fa-terminal"]
    ]
  },

  {
    category: "Cybersecurity & Networking",
    items: [
      ["TryHackMe", "Cybersecurity labs.", "https://tryhackme.com", "fa-solid fa-shield-halved"],
      ["OverTheWire", "Security learning games.", "https://overthewire.org/wargames/", "fa-solid fa-terminal"],
      ["Cisco Skills", "Networking basics.", "https://skillsforall.com", "fa-solid fa-wifi"],
      ["OWASP", "Web security knowledge.", "https://owasp.org/www-project-top-ten/", "fa-solid fa-bug"],
      ["PortSwigger", "Web security training.", "https://portswigger.net/web-security", "fa-solid fa-lock"],
      ["Wireshark", "Network analysis.", "https://www.wireshark.org/docs/", "fa-solid fa-network-wired"]
    ]
  },

  {
    category: "Design, UI/UX & Productivity",
    items: [
      ["Figma", "UI/UX design.", "https://help.figma.com", "fa-brands fa-figma"],
      ["Dribbble", "Design inspiration.", "https://dribbble.com", "fa-solid fa-palette"],
      ["Behance", "Creative portfolios.", "https://www.behance.net", "fa-brands fa-behance"],
      ["Canva", "Design and presentations.", "https://www.canva.com", "fa-solid fa-pen-nib"],
      ["Notion", "Notes and planning.", "https://www.notion.so", "fa-solid fa-note-sticky"],
      ["Coolors", "Color palettes.", "https://coolors.co", "fa-solid fa-fill-drip"]
    ]
  },

  {
    category: "Projects, Open Source & Portfolio",
    items: [
      ["GitHub", "Host your projects.", "https://github.com", "fa-brands fa-github"],
      ["GitHub Skills", "Learn GitHub.", "https://skills.github.com", "fa-brands fa-github-alt"],
      ["Good First Issue", "Find open-source issues.", "https://goodfirstissue.dev", "fa-solid fa-code-branch"],
      ["Dev.to", "Write technical blogs.", "https://dev.to", "fa-brands fa-dev"],
      ["Roadmap.sh", "Developer roadmaps.", "https://roadmap.sh/projects", "fa-solid fa-route"],
      ["CodePen", "Frontend experiments.", "https://codepen.io", "fa-brands fa-codepen"]
    ]
  }
];

function updateProgressUI(completed, total) {
  totalLessons = Number(total) || 10;
  completedLessons = Number(completed) || 0;

  const remaining = Math.max(totalLessons - completedLessons, 0);
  const percent =
    totalLessons > 0
      ? Math.min(Math.round((completedLessons / totalLessons) * 100), 100)
      : 0;

  document.getElementById("completedLessons").textContent =
    completedLessons;

  document.getElementById("remainingLessons").textContent =
    remaining;

  document.getElementById("progressPercent").textContent =
    percent + "%";

  document.getElementById("progressFill").style.width =
    percent + "%";
}

function loadProfile() {
  fetch(`${API_BASE}/api/profile`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(data => {
      if (!data.user) return;

      const name = data.user.name || "User";
      const email = data.user.email || "";

      document.getElementById("username").textContent = name;
      document.getElementById("email").textContent = email;
      document.getElementById("avatar").textContent =
        name.charAt(0).toUpperCase();

      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
    })
    .catch(error => {
      console.error("Profile error:", error);
    });
}

function loadProgress() {
  fetch(`${API_BASE}/api/progress`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        updateProgressUI(
          data.completedLessons,
          data.totalLessons
        );
      }
    })
    .catch(error => {
      console.error("Progress error:", error);
    });
}

function renderTechCategories() {
  const container =
    document.getElementById("techCategories");

  if (!container) return;

  container.innerHTML = techCategories.map(section => {
    return `
      <section class="category-section">

        <div class="category-heading">
          <h2>${section.category}</h2>
        </div>

        <div class="mega-grid">

          ${section.items.map(item => {

            const external =
              item[2].startsWith("http")
                ? 'target="_blank" rel="noopener noreferrer"'
                : "";

            return `
              <div class="mega-card">

                <i class="${item[3]}"></i>

                <h3>${item[0]}</h3>

                <p>${item[1]}</p>

                <a href="${item[2]}" ${external}>
                  Open
                </a>

              </div>
            `;

          }).join("")}

        </div>

      </section>
    `;
  }).join("");
}

function getNotes() {
  try {
    return JSON.parse(
      localStorage.getItem("alp18Notes")
    ) || [];
  } catch (error) {
    console.error("Notes loading error:", error);
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(
    "alp18Notes",
    JSON.stringify(notes)
  );
}

function saveNote() {
  const titleInput =
    document.getElementById("noteTitle");

  const contentInput =
    document.getElementById("noteContent");

  if (!titleInput || !contentInput) return;

  const title =
    titleInput.value.trim();

  const content =
    contentInput.value.trim();

  if (!title) {
    alert("Please enter a note title.");
    titleInput.focus();
    return;
  }

  if (!content) {
    alert("Please write something in your note.");
    contentInput.focus();
    return;
  }

  const notes = getNotes();

  const newNote = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date().toLocaleString()
  };

  notes.unshift(newNote);

  saveNotes(notes);

  clearNoteEditor();
  renderNotes();
}

function renderNotes() {
  const notesList =
    document.getElementById("notesList");

  const notesCount =
    document.getElementById("notesCount");

  if (!notesList || !notesCount) return;

  const notes = getNotes();

  notesCount.textContent =
    `${notes.length} ${notes.length === 1 ? "Note" : "Notes"}`;

  if (notes.length === 0) {
    notesList.innerHTML = `
      <div class="empty-notes">

        <i class="fa-regular fa-note-sticky"></i>

        <h3>No notes yet</h3>

        <p>
          Your saved notes will appear here.
        </p>

      </div>
    `;

    return;
  }

  notesList.innerHTML = notes.map(note => `
    <div class="saved-note">

      <div class="saved-note-content">

        <h3>
          ${escapeNoteHTML(note.title)}
        </h3>

        <p>
          ${escapeNoteHTML(note.content)}
        </p>

        <span>
          ${escapeNoteHTML(note.createdAt)}
        </span>

      </div>

      <button
        class="delete-note-btn"
        onclick="deleteNote(${note.id})"
        title="Delete note"
      >
        <i class="fa-solid fa-trash"></i>
      </button>

    </div>
  `).join("");
}

function deleteNote(id) {
  const notes = getNotes();

  const updatedNotes =
    notes.filter(note => note.id !== id);

  saveNotes(updatedNotes);

  renderNotes();
}

function clearNoteEditor() {
  const titleInput =
    document.getElementById("noteTitle");

  const contentInput =
    document.getElementById("noteContent");

  if (titleInput) {
    titleInput.value = "";
  }

  if (contentInput) {
    contentInput.value = "";
  }
}

function escapeNoteHTML(text) {
  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");

  window.location.href = "02-login.html";
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", () => {
  const button =
    document.getElementById("goTopBtn");

  if (!button) return;

  button.style.display =
    window.scrollY > 400
      ? "block"
      : "none";
});

function initializeDashboard() {
  loadProfile();
  loadProgress();
  renderTechCategories();
  renderNotes();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeDashboard
  );
} else {
  initializeDashboard();
}
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");

  window.location.href = "02-login.html";
}
