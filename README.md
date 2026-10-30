# 🚀 DJ.dev — Personal Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

<p align="center">
  A modern, responsive and interactive developer portfolio built to showcase my skills, projects, experience and professional journey.
</p>

<p align="center">
  🌐 <strong><a href="https://djdev.vercel.app/">Visit Live Portfolio</a></strong>
  &nbsp; | &nbsp;
  💻 <strong><a href="https://github.com/Dibyar21/portfolio">View Source Code</a></strong>
</p>

---

## 📌 About the Project

**DJ.dev** is my personal portfolio website, designed and developed to present my technical skills, featured projects, internship experience, certifications and resume in one place.

The website features a modern dark developer theme with cyan accents, glassmorphism-inspired elements, smooth animations and responsive layouts.

It is designed to provide a clean and engaging browsing experience across desktop, tablet and mobile devices.

## ✨ Features

- 🏠 **Hero Section** — Personal introduction and animated text.
- 👨‍💻 **About Me** — Background, interests and professional profile.
- 🛠️ **Skills Section** — Technical skills and technologies.
- 🚀 **Projects Showcase** — Selected projects with descriptions and links.
- 💼 **Experience Timeline** — Internship and professional experience.
- 📜 **Certifications** — Certificates and achievements.
- 📄 **Resume Access** — View or download my resume.
- 📬 **Contact Form** — Functional email integration using EmailJS.
- 🌐 **Social Links** — GitHub, LinkedIn, Instagram and other contact options.
- 💬 **WhatsApp Integration** — Quick contact option.
- 🎨 **Modern UI** — Dark theme, cyan accents and glassmorphism effects.
- ✨ **Smooth Animations** — Interactive transitions powered by Framer Motion.
- 🖱️ **Custom Mouse Tracker** — Interactive desktop experience.
- 📱 **Responsive Design** — Optimized layouts for different screen sizes.
- ⬆️ **Back-to-Top Navigation** — Convenient page navigation.
- ☁️ **Vercel Deployment** — Live production website.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript (ES6+) |
| Build Tool | Vite |
| Styling | Tailwind CSS, CSS3 |
| Animations | Framer Motion |
| Icons | React Icons |
| Navigation | React Scroll |
| Contact Integration | EmailJS |
| Development Tools | VS Code, Git, GitHub |
| Deployment | Vercel |

## 📸 Project Preview

<p align="center">
  <a href="https://djdev.vercel.app/">
    <img src="https://socialify.git.ci/Dibyar21/portfolio/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Plus&theme=Dark" alt="DJ.dev Portfolio Preview" width="100%" />
  </a>
</p>

<p align="center">
  <strong>Explore the complete website:</strong>
  <a href="https://djdev.vercel.app/">djdev.vercel.app</a>
</p>

## 📂 Project Structure

```text
portfolio/
│
├── public/
│   ├── certificates/
│   ├── projects/
│   ├── icons.svg
│   └── resume.pdf
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── About/
│   │   ├── Certificates/
│   │   ├── Common/
│   │   ├── Contact/
│   │   ├── Experience/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   └── Skills/
│   │
│   ├── constants/
│   │   ├── certificatesData.js
│   │   ├── experienceData.js
│   │   ├── projectsData.js
│   │   └── skillsData.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js (compatible with your Vite version)
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Dibyar21/portfolio.git
```

### 2. Navigate to the Project Folder

```bash
cd portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root and add your own EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace the placeholder values with your credentials from your EmailJS account.

**Important:** Never commit your actual `.env` file or expose private credentials. Keep it ignored by Git.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint checks |

## 🚀 Deployment

This portfolio is deployed using **Vercel**.

Live website:

**[https://djdev.vercel.app/](https://djdev.vercel.app/)**

The repository is connected to Vercel for automatic deployment. Pushing changes to the configured production branch triggers a new deployment.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## 👨‍💻 About Me

**Dibyaranjan Jena**  
Computer Science & Engineering Student | Aspiring Software Developer

I enjoy building practical applications, exploring modern technologies and continuously improving my development skills.

My interests include software development, web technologies, artificial intelligence and machine learning.

### 🤝 Connect With Me

- 🌐 **Portfolio:** [djdev.vercel.app](https://djdev.vercel.app/)
- 🐙 **GitHub:** [@Dibyar21](https://github.com/Dibyar21)
- 💼 **LinkedIn:** [Connect with me]((https://www.linkedin.com/in/dibyaranjan-jena-1761a2294/)

---

<p align="center">
  Made with ❤️ and lots of ☕ by <strong>Dibyaranjan Jena</strong>
</p>

<p align="center">
  ⭐ If you like this project, consider giving the repository a star!
</p>
