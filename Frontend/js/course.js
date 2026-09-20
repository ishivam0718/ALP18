const API_BASE = "http://localhost:5501";

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../login.html";
}

const lessons = [
  {
    id: "html-01",
    title: "Introduction to HTML",
    description: "Understand HTML and how browsers use it."
  },
  {
    id: "html-02",
    title: "HTML Document Structure",
    description: "Learn the standard HTML page structure."
  },
  {
    id: "html-03",
    title: "Headings & Paragraphs",
    description: "Structure text using headings and paragraphs."
  },
  {
    id: "html-04",
    title: "Links & Images",
    description: "Learn links, images and their attributes."
  },
  {
    id: "html-05",
    title: "Lists",
    description: "Create ordered and unordered lists."
  },
  {
    id: "html-06",
    title: "Tables",
    description: "Learn rows, columns and table structure."
  },
  {
    id: "html-07",
    title: "Forms",
    description: "Create forms and collect user input."
  },
  {
    id: "html-08",
    title: "Semantic HTML",
    description: "Use meaningful HTML5 structural elements."
  },
  {
    id: "html-09",
    title: "Multimedia & HTML5",
    description: "Learn audio, video and HTML5 media."
  },
  {
    id: "html-10",
    title: "Mini HTML Project",
    description: "Build a small real-world HTML webpage."
  }
];

let completedLessonIds = [];

function loadProfile() {

  fetch(`${API_BASE}/api/profile`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(data => {

      if (data.user) {
        document.getElementById("courseUser").textContent =
          data.user.name;
      }

    })
    .catch(error => console.error(error));
}

function loadProgress() {

  fetch(`${API_BASE}/api/progress`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(data => {

      completedLessonIds =
        data.completedLessonIds || [];

      updateCourseProgress();
      renderLessons();

    })
    .catch(error => {
      console.error(error);
      renderLessons();
    });
}

function updateCourseProgress() {

  const completed =
    completedLessonIds.length;

  const percent =
    Math.round((completed / lessons.length) * 100);

  document.getElementById("completedCount").textContent =
    completed;

  document.getElementById("coursePercent").textContent =
    percent + "%";

  document.getElementById("courseProgressFill").style.width =
    percent + "%";

  document.getElementById("lessonCount").textContent =
    `${completed}/${lessons.length}`;
}

function renderLessons() {

  const container =
    document.getElementById("lessonList");

  container.innerHTML = lessons.map((lesson,index) => {

    const completed =
      completedLessonIds.includes(lesson.id);

    return `
      <div class="lesson-card ${completed ? "completed" : ""}">

        <div class="lesson-number">
          ${
            completed
              ? '<i class="fa-solid fa-check"></i>'
              : String(index + 1).padStart(2,"0")
          }
        </div>

        <div>

          <div class="lesson-title">
            ${lesson.title}
          </div>

          <div class="lesson-description">
            ${lesson.description}
          </div>

        </div>

        <a
          class="lesson-open"
          href="lesson.html?id=${lesson.id}"
        >
          ${completed ? "Review" : "Start"}
        </a>

      </div>
    `;

  }).join("");
}

function logout() {

  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");

  window.location.href = "../login.html";
}

loadProfile();
loadProgress();