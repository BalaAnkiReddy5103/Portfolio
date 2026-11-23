# Professional B.Tech Fresher Portfolio

A modern, responsive, single-page portfolio website designed specifically for B.Tech graduates and aspiring software engineers. Built cleanly with **HTML5**, **CSS3**, and **Vanilla JavaScript** (no external frameworks like React, Bootstrap, or Tailwind).

---

## 🌟 Key Features

- **Centralized Data Configuration (`portfolioData`)**: Update your name, photo, bio, skills, education, projects, certifications, links, and contact information all from one file (`script.js`).
- **Recruiter-Friendly Design**: High-contrast, clean typography, structured technical skill taxonomy, CS core subject highlights, and GitHub/Demo project links.
- **Dark / Light Theme Toggle**: Seamless mode switching with preference remembered in `localStorage` and system color scheme detection.
- **Dynamic Typing Animation**: Smooth role-switching typing effect in the hero section.
- **Interactive Stats Counter**: Animated number counters for completed projects, certifications, and solved coding problems.
- **Interactive Client-Side Form**: Form validation with clear feedback and automatic `mailto:` client configuration (with instructions for Formspree/EmailJS).
- **Fully Responsive**: Flawless experience across mobile devices, tablets, laptops, and ultra-wide desktop monitors.
- **Accessibility & Performance**: Semantic HTML5 elements, ARIA labels, keyboard-accessible skip links, and zero heavy dependencies.

---

## 📁 Project Structure

```text
├── index.html       # Semantic HTML5 layout and structure
├── style.css        # Custom CSS3 styling, animations, and dark/light design system
├── script.js        # Dynamic rendering engine and centralized portfolioData configuration
├── README.md        # Documentation and customization guide
└── assets/          # (Optional) Store your profile picture, resume PDF, and icons here
```

---

## 1. How to Open the Website Locally

You can run this project locally without any complex build tools, Node.js, or package managers:

### Method A: Direct Browser Launch (Simplest)
1. Open your file explorer and navigate to this folder: `E:\10K CODERS\Portfolio's`.
2. Double-click `index.html` (or right-click and choose **Open with** > **Google Chrome** / **Microsoft Edge** / **Firefox**).

### Method B: Using VS Code Live Server (Recommended for Live Reload)
1. Open this folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) from the VS Code Extensions marketplace.
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The website will launch automatically at `http://127.0.0.1:5500`.

### Method C: Using Python Simple Server (Terminal)
If you have Python installed, run:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 2. How to Edit the `portfolioData` Content

You **do not need to search through `index.html`** to edit your personal details. 

1. Open `script.js` in any code editor (such as VS Code or Notepad).
2. Near the top of the file, locate the `portfolioData` object:

```javascript
const portfolioData = {
  personal: {
    name: "Your Full Name",
    brandName: "YourName",
    mainRole: "B.Tech Graduate",
    rolesForTyping: [
      "Aspiring Software Developer",
      "Frontend Developer",
      "Java Developer"
    ],
    heroBio: "Your personalized introduction...",
    location: "City, State, Country",
    email: "your.email@example.com",
    phone: "+91 98765 43210"
  },
  // ...
};
```

3. Replace the placeholder values with your actual information:
   - **`personal`**: Name, roles, bio, location, phone, and email.
   - **`social`**: Links to your LinkedIn, GitHub, LeetCode, and HackerRank.
   - **`about`**: Academic journey paragraphs, career objective, traits, and stats.
   - **`skills`**: Organized by Programming Languages, Web Technologies, Databases, Tools, and Core CS Subjects.
   - **`education`**: B.Tech degree, 12th standard, 10th standard, CGPA/marks, and coursework.
   - **`projects`**: Real-world project details, problem statements, features, GitHub repos, and live demos.
   - **`certifications`**: Certifications, courses, and honors.
4. Save `script.js` and refresh your browser. All sections update automatically!

---

## 3. How to Replace the Profile Image

1. Create a folder named `assets` in the project root if it does not already exist.
2. Place your professional headshot image inside `assets` (e.g., `assets/profile.jpg`).
3. Open `script.js` and update the `profileImage` path:
   ```javascript
   personal: {
     profileImage: "assets/profile.jpg",
     // ...
   }
   ```
4. **Tip**: Use a square or portrait ratio image (minimum 600x600 pixels) with a neutral or plain background.
5. If the image link is empty or cannot be found, a fallback avatar with your initials will be generated automatically.

---

## 4. How to Add a Resume PDF

1. Name your resume PDF file cleanly (e.g., `Alex_Morgan_Resume.pdf` or `resume.pdf`).
2. Place the PDF in the `assets/` folder: `assets/resume.pdf`.
3. Open `script.js` and locate the `resume` block inside `portfolioData`:
   ```javascript
   resume: {
     resumeUrl: "assets/resume.pdf",
     downloadFileName: "Your_Name_Resume.pdf",
     fallbackMessage: "Notice: Please add your resume PDF to assets/resume.pdf."
   }
   ```
4. Clicking **"Download Resume"** or **"View in New Tab"** on the website will now serve your PDF.

---

## 5. How to Deploy Free (Step-by-Step)

### Option 1: GitHub Pages (Recommended)
1. Create a free account on [GitHub.com](https://github.com) if you haven't already.
2. Create a new repository (e.g., `portfolio` or `yourusername.github.io`).
3. Push or upload `index.html`, `style.css`, `script.js`, `README.md`, and your `assets/` folder to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of B.Tech fresher portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
4. In your GitHub repository, go to **Settings** > **Pages** (under Code and automation in the left sidebar).
5. Under **Build and deployment** > **Branch**, select `main` (and `/root`), then click **Save**.
6. Wait 1-2 minutes. GitHub will provide your live URL (e.g., `https://<your-username>.github.io/<repo-name>/`).

### Option 2: Netlify (Drag-and-Drop, No Git Required)
1. Go to [Netlify.com](https://www.netlify.com) and create a free account.
2. In your dashboard, click **"Add new site"** > **"Deploy manually"**.
3. Drag and drop this entire project folder into the upload box.
4. Netlify will deploy your site in seconds and give you a free live URL (e.g., `https://creative-developer-1234.netlify.app`).
5. You can customize the site name for free in **Site Settings** > **Change site name**.

---

## 💡 Fresher Tips to Impress Recruiters & Hiring Managers

1. **Highlight Core CS Fundamentals**: Recruiters look for solid basics in DSA, OOP, DBMS, and Operating Systems. Keep these visible in your skills section.
2. **Explain the Problem, Not Just the Code**: Notice how each project in this portfolio highlights a **"Problem Addressed"**. Recruiters appreciate engineers who understand *why* a project was built.
3. **Keep Links Active**: Verify that your GitHub repositories have informative `README.md` files with screenshots.
4. **Use an ATS-Friendly Resume**: Ensure your downloadable PDF resume mirrors the keywords and skills shown on this portfolio.
