# Zac Callahan - React Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing software development projects and experience.

## 🚀 Features

- **React Components**: Modular, maintainable component architecture
- **Tailwind CSS**: Utility-first styling with responsive design
- **Interactive Animations**: Smooth hover effects and scroll-triggered animations
- **Intersection Observer**: Progressive section loading as you scroll
- **Responsive Design**: Mobile-first approach that works on all devices
- **Print-Friendly Resume**: Optimized PDF generation for the resume section
- **GitHub Pages Deployment**: Automated deployment workflow

## 🛠️ Technologies

- React 18
- Tailwind CSS
- Intersection Observer API
- CSS Animations & Transitions
- GitHub Pages
- Modern JavaScript (ES6+)

## 🏃‍♂️ Quick Start

```bash
# Clone repository
git clone https://github.com/ZacCallahan/zac-callahan-portfolio.git
cd zac-callahan-portfolio

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
📱 Responsive Breakpoints

Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px

✨ Animation Features

Scroll Animations: Sections fade in and slide up when scrolled into view
Hover Effects: Interactive project cards, skill items, and buttons
Floating Elements: Animated background elements in hero section
Navigation: Active section highlighting with smooth scrolling
Resume Interactions: Enhanced hover states throughout resume section

🎨 Customization
Colors
Update colors in tailwind.config.js:
javascripttheme: {
  extend: {
    colors: {
      'sky': {
        300: '#your-color',
        400: '#your-color',
        500: '#your-color',
      }
    }
  }
}
Content
Update personal information in src/App.js:

Contact information
Project descriptions
Experience details
Skills list

🚀 Deployment
Automatic GitHub Pages Deployment
bashnpm run deploy
Manual Deployment Options

Vercel: Connect GitHub repository for automatic deployments
Netlify: Drag and drop the build folder
Firebase Hosting: Use Firebase CLI

📂 Project Structure
zac-callahan-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js              # Main portfolio component
│   ├── index.js            # React entry point
│   └── index.css           # Tailwind CSS + custom styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── .gitignore
🎯 Performance Features

Intersection Observer: Efficient scroll-triggered animations
React Hooks: Optimized state management and effects
Tailwind CSS: Purged CSS for smaller bundle size
Component-based: Reusable and maintainable code structure

🔧 Development
Local Development
bashnpm start
Opens http://localhost:3000 in your browser.
Building for Production
bashnpm run build
Creates optimized production build in the build folder.
Testing
bashnpm test
Launches the test runner in interactive watch mode.
📞 Contact

Email: calla1296@gmail.com
GitHub: ZacCallahan
Portfolio: www.zaccallahan.dev

🏆 Live Demo
Visit the live site: https://zaccallahan.github.io/zac-callahan-portfolio

Built with using React and Tailwind CSS
```
