﻿# 🚀 ChillHub - Instant GitHub-Powered Portfolios

SORRY FOR THE BAD UI, WE ARE IMPROVING IT

> **Connect. Share. Impress.** Transform your GitHub into a stunning, shareable portfolio in minutes ✨

ChillHub is the fastest way to create professional developer portfolios with automatic GitHub integration. Get a clean, shareable link (`chillhub.com/username`) that showcases your repositories, stats, and experience—plus unique weather-themed styling that makes your portfolio unforgettable.

![WhatsApp Image 2025-07-05 at 05 13 44_035166cf](https://github.com/user-attachments/assets/a78aabf9-ad66-4ad0-ad2a-6ee197d6f567)
![WhatsApp Image 2025-07-05 at 05 10 55_922b2e8c](https://github.com/user-attachments/assets/4f90e1cb-4874-40df-abaa-d744a251c159)
![WhatsApp Image 2025-07-05 at 05 01 58_d46f18a9](https://github.com/user-attachments/assets/d6220c82-9368-4b60-acb7-df5acaf7ba54)

AND MANY MORE ACCORDING TO THE WEATHER CONDITIONS...

## 🎯 Why ChillHub?

**The Problem:** Creating a professional portfolio is time-consuming. GitHub profiles don't tell your full story. Static portfolios are hard to share and update.

**The Solution:** Instant portfolio creation with automatic GitHub sync, clean shareable links, and dynamic theming.

### 🔗 **Instant Shareable Links**

- Get your own `chillhub.com/username` URL immediately
- Perfect for resumes, LinkedIn, business cards, and social media
- No complex hosting or domain setup required

### 🔧 **Automatic GitHub Integration**

- ✅ **Repository Display**: Automatically showcase your best projects
- ✅ **Live Stats**: Real-time commit graphs and contribution data
- ✅ **Tech Stack Detection**: Auto-identify technologies from your repos
- ✅ **Always Up-to-Date**: Sync changes from GitHub automatically

### 🎨 **Weather-Themed Visual Appeal** _(The Cool Extra)_

- Portfolio appearance adapts to weather conditions
- ☀️ Sunny → Bright, energetic themes
- 🌧️ Rainy → Cool blues, calming tones
- ❄️ Snowy → Clean whites, ice blues
- Makes your portfolio memorable and conversation-worthy

## ✨ Features

### � **Instant Portfolio Creation**

- **Clean Shareable URLs**: Get `chillhub.com/username` immediately
- **Multi-step Setup**: Elegant form interface for quick data collection
- **Zero Configuration**: No hosting, domains, or technical setup required
- **Mobile-First Design**: Perfect on all devices and screen sizes

![WhatsApp Image 2025-07-05 at 05 00 59_be4d0bf9](https://github.com/user-attachments/assets/3e57dfd2-e0dc-4770-ac5c-9d333d71a1e9)

### 🔧 **Seamless GitHub Integration**

- **Automatic Repository Sync**: Showcase your best projects automatically
- **Live GitHub Stats**: Real-time contribution graphs and repository data
- **Smart Tech Stack Detection**: Auto-identify technologies from your codebase
- **Always Current**: Portfolio updates when you push new code
- **Professional Display**: Clean, organized presentation of your work

### 🎨 **Weather-Themed Styling** _(The Extra Touch)_

- **Dynamic Theming**: Portfolio appearance adapts to visitor's weather
- **CSS Variable Architecture**: One-word theme changes (`sunny`, `rainy`, `stormy`)
- **Smooth Transitions**: Seamless theme switching with animations
- **Consistent Design**: All components use semantic color tokens

### 💼 **Complete Professional Profile**

- **Work Experience Display**: Timeline view of your career journey
- **Education & Certifications**: Academic background and achievements
- **Tech Stack Visualization**: Animated showcase of your technologies
- **Contact & Social Links**: Easy ways for recruiters to reach you
- **Resume Integration**: PDF upload and display capabilities

### 🔐 **Secure Authentication**

- **Clerk Integration**: Robust authentication system
- **Protected Routes**: Secure user areas
- **User Management**: Profile settings and data control

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with latest features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling with CSS variables
- **React Router** - Client-side routing
- **shadcn/ui** - High-quality component library
- **MagicUI** - Beautiful animations and effects

### Backend (Planned)

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database for user data
- **GitHub API** - Live repository and user data integration
- **Weather API** - Real-time weather data for theming

### Authentication & Services

- **Clerk** - Authentication and user management
- **GitHub API** - Repository integration and live data sync
- **Weather Service** - Location-based weather data for theming

## 📁 Project Structure

```
chillhub/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/              # Authentication components
│   │   │   ├── ui/                # shadcn/ui components
│   │   │   ├── magicui/           # Animation components
│   │   │   ├── StepperForm.jsx    # Multi-step form
│   │   │   └── TechLogos.jsx      # Technology logo mapping
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx      # Authentication page
│   │   │   ├── ExamplePage.jsx    # Protected dashboard
│   │   │   └── PortfolioPage.jsx  # Public portfolio display
│   │   ├── models/
│   │   │   └── User.js            # MongoDB user schema
│   │   ├── services/
│   │   │   └── GitHubService.js   # GitHub API integration
│   │   ├── index.css              # Theme system & CSS variables
│   │   └── App.jsx                # Main application & routing
│   ├── public/
│   └── package.json
├── backend/ (Coming Soon)
└── README.md
```

## 🎨 Theme System Architecture

ChillHub uses a sophisticated CSS variable system for weather-based theming:

```css
/* Base theme variables in index.css */
:root {
  --background: 0 0% 3.9216%;
  --foreground: 0 0% 100%;
  --primary: 210 50% 73.3333%;
  --muted: 0 0% 16.8627%;
  /* ... more variables */
}

/* Future weather themes */
.sunny {
  --background: 45 100% 96%;
  --primary: 35 100% 50%;
  /* Warm, bright colors */
}

.rainy {
  --background: 210 15% 20%;
  --primary: 200 80% 60%;
  /* Cool, blue tones */
}
```

**Key Benefits:**

- ✅ **One-word theme switching**: `if(weather === "sunny") applyTheme("sunny")`
- ✅ **No hardcoded colors**: All components use semantic tokens
- ✅ **Consistent design**: Universal theme variables across all components
- ✅ **Easy maintenance**: Central theme management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ayush18pop/chillhub.git
   cd chillhub/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Add your Clerk publishable key
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5174
   ```

### Development Workflow

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## 📱 Screenshots & Demo

### 🔐 Authentication Flow

![WhatsApp Image 2025-07-05 at 04 07 33_fecdbc7f](https://github.com/user-attachments/assets/d4e27be6-b7e5-4c25-93bd-1cf362136c71)

### 🌤️ Weather Theme Showcase

![WhatsApp Image 2025-07-05 at 05 01 58_ce7a725f](https://github.com/user-attachments/assets/6bf8a8b0-3e3a-4b03-8b29-92e9c9a1930d)
_Sunny weather theme - bright and energetic_

![WhatsApp Image 2025-07-05 at 05 13 44_a612b9e0](https://github.com/user-attachments/assets/c38488ee-f66a-4914-9e8a-f523c39a2c04)
_Rainy weather theme - cool and calming_

![WhatsApp Image 2025-07-05 at 05 10 55_850f372c](https://github.com/user-attachments/assets/a550abb1-cf45-40d9-b3c8-4bd8fa0cc500)
_Stormy weather theme - dark and dramatic_

### 💼 Portfolio Display

![WhatsApp Image 2025-07-05 at 04 06 48_b8a711e3](https://github.com/user-attachments/assets/b64ee33f-e0c0-43b9-a969-a776d8eadcd5)

![image](https://github.com/user-attachments/assets/12c785f7-6ca8-4619-9568-3701cb5ad37e)

![WhatsApp Image 2025-07-05 at 04 06 56_902c2afd](https://github.com/user-attachments/assets/28fba9a2-d883-4349-b6e7-52e0c27d1d0a)

## 🔄 User Journey

1. **Sign Up/Login** → Quick authentication with Clerk
2. **Connect GitHub** → Automatic repository sync and data import
3. **Fill Profile** → Multi-step form with progress tracking
4. **Get Instant Link** → Immediate `chillhub.com/username` URL
5. **Share Everywhere** → Perfect for resumes, LinkedIn, business cards
6. **Auto-Updates** → Portfolio stays current with your GitHub activity

## 🔗 GitHub Integration (Coming Soon)

### Automatic Repository Sync

```javascript
// Planned GitHub service
const githubService = {
  fetchUserRepos: async (username) => {
    // Get user's repositories with stats
    const repos = await fetch(`/api/github/${username}/repos`);
    return repos.filter((repo) => !repo.fork && repo.stargazers_count > 0);
  },

  getUserStats: async (username) => {
    // Get contribution data and language stats
    const stats = await fetch(`/api/github/${username}/stats`);
    return {
      totalCommits: stats.contributions,
      languages: stats.topLanguages,
      streak: stats.currentStreak,
    };
  },

  detectTechStack: (repositories) => {
    // Auto-detect technologies from repository languages
    const languages = repositories.flatMap((repo) => repo.languages);
    return Array.from(new Set(languages));
  },
};
```

### Portfolio URL Generation

- **Instant URLs**: `chillhub.com/username` available immediately
- **Custom Domains**: Option to use your own domain (premium)
- **SEO Optimized**: Proper meta tags and OpenGraph support

## 🌍 Weather Theming (Coming Soon)

### Weather API Integration

```javascript
// Planned weather service
const weatherService = {
  getCurrentWeather: async (location) => {
    // Get weather data based on visitor's location
    const weather = await fetch(`/api/weather/${location}`);
    return weather.condition; // 'sunny', 'rainy', 'stormy', etc.
  },

  applyWeatherTheme: (condition) => {
    // Dynamic theme switching based on weather
    document.documentElement.className = condition;
  },
};
```

### Location Detection

- **Automatic**: IP-based location detection for visitors
- **Manual**: User can set preferred location override
- **Privacy-First**: No personal data stored

## 🛣️ Roadmap

### Phase 1: Core Features ✅

- [x] React application setup
- [x] Authentication system (Clerk)
- [x] Multi-step portfolio form
- [x] Portfolio page layout and routing
- [x] Theme system architecture
- [x] Responsive design
- [x] Shareable URL structure (`/:username`)

### Phase 2: GitHub Integration 🚧

- [ ] GitHub API integration
- [ ] Repository data fetching
- [ ] Contribution graph display
- [ ] Tech stack auto-detection
- [ ] Real-time sync capabilities

### Phase 3: Weather Theming �

- [ ] Weather API integration
- [ ] Location detection service
- [ ] Multiple weather themes
- [ ] Theme transition animations
- [ ] User preference settings

- [ ] Backend API development
- [ ] MongoDB user data storage
- [ ] Real-time GitHub sync
- [ ] Custom domain support
- [ ] Analytics dashboard
- [ ] Export functionality

### Phase 4: Advanced Features 🔮

- [ ] Team portfolios
- [ ] Custom weather themes
- [ ] Portfolio templates
- [ ] Social media integration
- [ ] Performance optimization
- [ ] PWA support

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Follow our coding standards**
   - Use CSS variables only (no hardcoded colors)
   - Follow the existing component structure
   - Write descriptive commit messages
4. **Submit a pull request**

### Coding Guidelines

- **Theming**: Only use CSS variables from `index.css`
- **Components**: Use shadcn/ui components when possible
- **Styling**: Tailwind CSS with semantic class names
- **State**: Use React hooks for local state
- **TypeScript**: Gradually adopting TypeScript

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **[Ayush](https://github.com/ayush18pop)** - Full Stack Developer & Project Creator
- **[Prakkhar](https://github.com/prktypes)**
- **[Prahar](<[https://github.com/prktypes](https://github.com/cyrotine)>)**

## 🙏 Acknowledgments

- **GitHub API** - For powering our portfolio integration
- **shadcn/ui** - Beautiful component library
- **MagicUI** - Smooth animations and effects
- **Clerk** - Robust authentication system
- **Tailwind CSS** - Utility-first CSS framework
- **React Team** - Amazing framework
- **Weather APIs** - Real-time weather data for theming

## 📞 Contact & Support

- **GitHub Issues**: [Create an issue](https://github.com/ayush18pop/chillhub/issues)
- **Email**: ayush18pop@example.com
- **Twitter**: [@ayush18pop](https://twitter.com/ayush18pop)

---

**Made with ❤️ and 🚀 by the ChillHub team**

_"Transform your GitHub into a portfolio that stands out"_ ⭐
