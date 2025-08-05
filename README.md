Here’s a `README.md` file tailored specifically for the **frontend** of your **AI-powered Weather Forecast PWA** built with **Vite + React 19 + TypeScript**, **Tailwind CSS**, **Shadcn UI**, and **React Query**, supporting offline mode, AI-generated clothing suggestions, and geolocation:

---

````md
# 🌤️ Forecast AI — Frontend

A sleek, mobile-first **Progressive Web App (PWA)** built with **Vite + React 19 + TypeScript**, powered by **OpenWeather API** and **Azure-hosted AI models**. Forecast AI delivers real-time weather updates and smart clothing/safety suggestions.

## ⚡ Features

- ☀️ **Live Weather Forecast** — via OpenWeatherMap API
- 🧠 **AI Suggestions** — context-aware clothing/safety tips via Azure SDK + GitHub-hosted models
- 📍 **Geolocation-based Search** — automatic or manual city input
- 📱 **PWA Support** — installable, splash screen, offline mode
- 🌙 **Dark Mode** — beautiful animated theme transition
- 🧭 **Intuitive UI** — Tailwind CSS + Shadcn UI + framer-motion
- 🚀 **Performance-first** — Vite-powered blazing fast builds
- 💾 **Local Storage Caching** — reduce redundant API calls

---

## 🧑‍💻 Tech Stack

| Category | Tech |
|---------|------|
| Framework | [React 19](https://react.dev) + [Vite](https://vitejs.dev) |
| Language | TypeScript |
| Styling | Tailwind CSS + Shadcn UI |
| Animations | framer-motion |
| Data Fetching | React Query |
| API | OpenWeatherMap API + Custom AI Suggestion API |
| PWA | `vite-plugin-pwa` |
| Icons | Lucide React |

---

## 📦 Installation

```bash
git clone https://github.com/your-username/forecast-ai-frontend.git
cd forecast-ai-frontend
npm install
npm run dev
````

> **Make sure the backend is running on the configured base URL (e.g., `http://localhost:4000`)**

---

## 🌐 Environment Variables

Create a `.env` file in the root:

```env
VITE_API_BASE_URL=http://localhost:4000
```

---

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ThemeToggle.tsx
│   ├── ResultCard.tsx
│   └── ...
├── hooks/              # Custom React hooksetc.)
├── assets/             # Logo, icons, images
├── App.tsx
├── main.tsx
└── ...
```

---

## 📲 PWA Support

* Configured using `vite-plugin-pwa`
* Includes:

  * Manifest (`public/manifest.webmanifest`)
  * Service Worker auto-generated
  * Offline caching of static resources
* Add to home screen supported on Android + iOS

---

## 📸 Screenshots

> Add screenshots here (optional)

---

## 🔮 Upcoming Features

* Voice input for city search
* Radar map integration
* Multi-language support
* Weekly forecast view

---

## 🤝 Contributions

Contributions are welcome! Feel free to open issues or submit PRs.

---

## 📃 License

[MIT](LICENSE)

---

## 👨‍🔬 Backend Repo

This is the **frontend only** repo. Visit the [backend repo](https://github.com/your-username/forecast-ai-backend) for API logic and AI model integrations.

```
