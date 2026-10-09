# Harsha Kumari — Portfolio

Personal portfolio of **Harsha Kumari**, Software Engineer (SDE Intern @ Skypoint), showcasing experience, projects, skills, achievements and education.

🔗 **Live:** [harsha-kumari-portfolio.vercel.app](https://harsha-kumari-portfolio.vercel.app)

## Sections

- **Hero** — intro, quick stats and resume download
- **About** — background and focus areas
- **Experience** — Skypoint (SDE Intern), Confiable Technocraft (UI/UX Intern), NIT Rourkela (ML Intern)
- **Projects** — skyCare, skyChat, Automated Nucleus Segmentation, RITNotebook, WalletWiseWeb and more
- **Skills**, **Achievements**, **Education** and **Contact**

## Features

- Light / dark theme toggle (remembered across visits)
- Sticky profile sidebar that appears after scrolling past the hero
- Scroll-triggered reveal animations
- Responsive layout for mobile, tablet and desktop
- Downloadable resume (`public/resume.pdf`)

## Tech stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- Plain CSS (one stylesheet per section in `src/styles/`)
- ESLint
- Deployed on [Vercel](https://vercel.com)

## Project structure

```
public/            static assets (profile photo, resume, icons)
src/
  components/      one component per page section
  hooks/           custom hooks (scroll animations)
  styles/          section stylesheets + global theme
  App.jsx          page layout and theme state
  main.jsx         entry point
```

## Running locally

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Deployment

The site is connected to Vercel: every push to `main` deploys to production automatically, and other branches get a preview URL.

## Contact

- Email: [harshakumari1125@gmail.com](mailto:harshakumari1125@gmail.com)
- LinkedIn: [linkedin.com/in/harsha-kumari](https://www.linkedin.com/in/harsha-kumari)
- GitHub: [github.com/harsha2511](https://github.com/harsha2511)
- LeetCode: [leetcode.com/u/harsha2511](https://leetcode.com/u/harsha2511/)
