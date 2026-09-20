const API_BASE = "https://alp18-backend.onrender.com";

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../login.html";
}

const lessonData = {

  "html-01": {
    number: "LESSON 01",
    title: "Introduction to HTML",
    intro: "Understand what HTML is and how browsers use it.",

    learn: [
      "What HTML means",
      "How browsers read HTML",
      "HTML elements and tags",
      "HTML, CSS and JavaScript"
    ],

    body: `
      <p>
        <strong>HTML</strong> stands for HyperText Markup Language.
        It is used to define the structure and content of web pages.
      </p>

      <p>
        HTML uses elements such as headings, paragraphs, links,
        images and forms.
      </p>

      <p>
        HTML provides structure, CSS controls presentation,
        and JavaScript adds behaviour.
      </p>
    `,

    code: `<!DOCTYPE html>

<html>

<head>
  <title>My First Page</title>
</head>

<body>

  <h1>Hello World</h1>

  <p>My first HTML page.</p>

</body>

</html>`,

    practice:
      "Create index.html and add one heading and one paragraph."
  },

  "html-02": {
    number: "LESSON 02",
    title: "HTML Document Structure",
    intro: "Learn the standard structure of an HTML document.",

    learn: [
      "DOCTYPE declaration",
      "html element",
      "head element",
      "body element"
    ],

    body: `
      <p>
        A normal HTML document starts with the DOCTYPE declaration.
      </p>

      <p>
        The <strong>head</strong> contains document information,
        while the <strong>body</strong> contains visible content.
      </p>
    `,

    code: `<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <title>My Website</title>

</head>

<body>

  <h1>Welcome</h1>

</body>

</html>`,

    practice:
      "Create a complete HTML document from memory."
  },

  "html-03": {
    number: "LESSON 03",
    title: "Headings & Paragraphs",
    intro: "Learn how to structure text using headings and paragraphs.",

    learn: [
      "h1 to h6 headings",
      "Paragraph elements",
      "Text hierarchy",
      "Readable structure"
    ],

    body: `
      <p>
        HTML provides six heading levels from h1 to h6.
      </p>

      <p>
        Use headings for content hierarchy and paragraphs
        for normal blocks of text.
      </p>
    `,

    code: `<h1>Main Heading</h1>

<h2>Section Heading</h2>

<p>This is a paragraph.</p>`,

    practice:
      "Build an article with one h1, two h2 headings and three paragraphs."
  },

  "html-04": {
    number: "LESSON 04",
    title: "Links & Images",
    intro: "Learn how to connect pages and display images.",

    learn: [
      "Anchor element",
      "href attribute",
      "Image element",
      "src and alt attributes"
    ],

    body: `
      <p>
        The <strong>a</strong> element creates links.
      </p>

      <p>
        The <strong>img</strong> element displays images.
        The alt attribute describes the image.
      </p>
    `,

    code: `<a href="https://example.com">
  Visit Website
</a>

<img
  src="images/photo.jpg"
  alt="Sample photo"
>`,

    practice:
      "Create a page with one link and one local image."
  },

  "html-05": {
    number: "LESSON 05",
    title: "Lists",
    intro: "Learn ordered and unordered lists.",

    learn: [
      "Unordered lists",
      "Ordered lists",
      "List items",
      "Nested lists"
    ],

    body: `
      <p>
        Use <strong>ul</strong> when order does not matter
        and <strong>ol</strong> when order matters.
      </p>
    `,

    code: `<ul>

  <li>HTML</li>

  <li>CSS</li>

  <li>JavaScript</li>

</ul>

<ol>

  <li>Plan</li>

  <li>Code</li>

  <li>Test</li>

</ol>`,

    practice:
      "Create a list of five technologies you want to learn."
  },

  "html-06": {
    number: "LESSON 06",
    title: "Tables",
    intro: "Learn the basic structure of HTML tables.",

    learn: [
      "table element",
      "Rows",
      "Columns",
      "Header cells"
    ],

    body: `
      <p>
        Tables represent data in rows and columns.
      </p>

      <p>
        Common table elements include tr, th and td.
      </p>
    `,

    code: `<table>

  <tr>

    <th>Name</th>

    <th>Course</th>

  </tr>

  <tr>

    <td>Shivam</td>

    <td>HTML</td>

  </tr>

</table>`,

    practice:
      "Create a student table with name, course and progress."
  },

  "html-07": {
    number: "LESSON 07",
    title: "Forms",
    intro: "Learn how websites collect user input.",

    learn: [
      "form element",
      "Labels",
      "Input fields",
      "Buttons"
    ],

    body: `
      <p>
        Forms allow websites to collect information from users.
      </p>

      <p>
        Common elements include label, input, textarea and button.
      </p>
    `,

    code: `<form>

  <label for="name">
    Name
  </label>

  <input
    id="name"
    type="text"
  >

  <button type="submit">
    Submit
  </button>

</form>`,

    practice:
      "Build a signup form with name, email and password."
  },

  "html-08": {
    number: "LESSON 08",
    title: "Semantic HTML",
    intro: "Use meaningful HTML elements for page structure.",

    learn: [
      "header",
      "nav",
      "main",
      "section and footer"
    ],

    body: `
      <p>
        Semantic elements describe the purpose of their content.
      </p>

      <p>
        Examples include header, nav, main, section and footer.
      </p>
    `,

    code: `<header>

  <h1>My Website</h1>

</header>

<nav>

  <a href="#">Home</a>

</nav>

<main>

  <section>

    <h2>About</h2>

  </section>

</main>

<footer>

  <p>Copyright 2026</p>

</footer>`,

    practice:
      "Create a semantic webpage with header, nav, main, section and footer."
  },

  "html-09": {
    number: "LESSON 09",
    title: "Multimedia & HTML5",
    intro: "Learn basic HTML multimedia elements.",

    learn: [
      "Audio",
      "Video",
      "Controls",
      "HTML5 multimedia"
    ],

    body: `
      <p>
        HTML5 provides audio and video elements
        for embedding media into webpages.
      </p>
    `,

    code: `<video controls width="500">

  <source
    src="video.mp4"
    type="video/mp4"
  >

</video>

<audio controls>

  <source
    src="audio.mp3"
    type="audio/mpeg"
  >

</audio>`,

    practice:
      "Create a test page containing audio and video."
  },

  "html-10": {
    number: "LESSON 10",
    title: "Mini HTML Project",
    intro: "Combine your HTML skills into a small project.",

    learn: [
      "Page planning",
      "Semantic structure",
      "Text and lists",
      "Complete HTML page"
    ],

    body: `
      <p>
        Build a simple personal profile page using
        the concepts from the previous lessons.
      </p>

      <p>
        Add a header, navigation, introduction,
        skills section, projects and footer.
      </p>
    `,

    code: `<header>

  <h1>My Portfolio</h1>

</header>

<main>

  <section>

    <h2>About Me</h2>

    <p>
      I am learning web development.
    </p>

  </section>

  <section>

    <h2>Skills</h2>

    <ul>

      <li>HTML</li>

      <li>CSS</li>

      <li>JavaScript</li>

    </ul>

  </section>

</main>

<footer>

  <p>My Portfolio</p>

</footer>`,

    practice:
      "Build your own one-page portfolio using HTML."
  }

};

const params =
  new URLSearchParams(window.location.search);

const lessonId =
  params.get("id") || "html-01";

const lesson =
  lessonData[lessonId] ||
  lessonData["html-01"];

let alreadyCompleted = false;

function renderLesson() {

  document.title =
    `${lesson.title} — Access Learning Platform`;

  document.getElementById("lessonNumber").textContent =
    lesson.number;

  document.getElementById("lessonTitle").textContent =
    lesson.title;

  document.getElementById("lessonIntro").textContent =
    lesson.intro;

  document.getElementById("learnList").innerHTML =
    lesson.learn
      .map(item => `<li>${item}</li>`)
      .join("");

  document.getElementById("lessonBody").innerHTML =
    lesson.body;

  document.getElementById("lessonCode").textContent =
    lesson.code;

  document.getElementById("practiceTask").textContent =
    lesson.practice;
}

function loadProfile() {

  fetch(`${API_BASE}/api/profile`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(data => {

      if (data.user) {

        document.getElementById("lessonUser").textContent =
          data.user.name;

      }

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

      const completed =
        data.completedLessonIds || [];

      alreadyCompleted =
        completed.includes(lessonId);

      updateStatus();

    });

}

function updateStatus() {

  const button =
    document.getElementById("completeButton");

  const status =
    document.getElementById("lessonStatus");

  if (alreadyCompleted) {

    button.classList.add("completed");

    button.innerHTML =
      '<i class="fa-solid fa-check"></i> Completed';

    status.textContent =
      "You have already completed this lesson.";

  } else {

    button.classList.remove("completed");

    button.innerHTML =
      '<i class="fa-solid fa-check"></i> Mark as Complete';

    status.textContent =
      "This lesson is not completed yet.";

  }

}

function completeLesson() {

  if (alreadyCompleted) {
    return;
  }

  const button =
    document.getElementById("completeButton");

  button.disabled = true;
  button.textContent = "Saving...";

  fetch(`${API_BASE}/api/complete-lesson`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },

    body: JSON.stringify({
      lessonId: lessonId
    })

  })
    .then(res => res.json())

    .then(data => {

      if (!data.success) {
        throw new Error(data.message);
      }

      alreadyCompleted = true;

      updateStatus();

      alert("Lesson completed successfully!");

    })

    .catch(error => {

      alert(error.message);

      button.disabled = false;

      updateStatus();

    });

}

function logout() {

  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");

  window.location.href = "../login.html";
}

renderLesson();
loadProfile();
loadProgress();