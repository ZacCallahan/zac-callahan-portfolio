import React, { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState(new Set(['home']));
  const [showWelcome, setShowWelcome] = useState(true);
  const observerRef = useRef(null);

  // Welcome screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'resume', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar background on scroll
  useEffect(() => {
    const handleNavScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 50) {
          nav.style.background = 'rgba(17, 24, 39, 0.95)';
        } else {
          nav.style.background = 'rgba(17, 24, 39, 0.9)';
        }
      }
    };

    window.addEventListener('scroll', handleNavScroll);
    return () => window.removeEventListener('scroll', handleNavScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Updated skills with real icon representations
  const skills = [
    { icon: '⚛️', name: 'React', color: '#61DAFB' },
    { icon: '📜', name: 'JavaScript', color: '#F7DF1E' },
    { icon: '🎨', name: 'CSS3', color: '#1572B6' },
    { icon: '🌐', name: 'HTML5', color: '#E34F26' },
    { icon: '🍃', name: 'MongoDB', color: '#47A248' },
    { icon: '🐍', name: 'Python', color: '#3776AB' },
    { icon: '🗄️', name: 'SQL', color: '#4479A1' },
    { icon: '☁️', name: 'AWS', color: '#FF9900' },
    { icon: '🔷', name: 'Azure', color: '#0078D4' },
    { icon: '🐳', name: 'Docker', color: '#2496ED' },
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      name: 'Git', 
      color: '#F05032' 
    },
    { icon: '🎯', name: 'Tailwind', color: '#06B6D4' }
  ];

  const projects = [
    {
      title: "Zac Callahan Music",
      description: "Developed artist portfolio website featuring minimal, professional design with mobile-responsiveness in mind. Implemented performance optimisations achieving minimal load times and seamless SoundCloud integration. Deployed using Vercel with a custom domain for ease of accessibility",
      tech: ["HTML5", "CSS3", "JavaScript", "Vercel"],
      liveLink: "https://www.zaccallahanmusic.com",
      githubLink: "https://github.com/ZacCallahan/ZJCallahanMusic"
    },
    {
      title: "Red Robin Rating",
      description: "Built and maintain full-stack alcoholic beverage rating platform handling user authentication via JWT tokens, review management, and comprehensive beer database. Features responsive design with React and Tailwind CSS, deployed across Vercel, Railway, and MongoDB Atlas with SendGrid email integration.",
      tech: ["React", "Node.js", "MongoDB", "Railway", "Vercel"],
      liveLink: "https://www.redrobinrating.com",
      githubLink: "https://github.com/ZacCallahan/red-robin-brewing"
    }
  ];

  const experience = [
    {
      title: "IT Technology Support Officer",
      company: "United Petroleum, Melbourne",
      period: "June 2025 - Ongoing",
      subtitle: "Directly Reporting to Chief Executive Officer",
      bullets: [
        "Provided timely IT support to the CEO and senior executives, maintaining response time under 5 minutes for urgent technical issues",
        "Resolved 50+ support tickets in first month covering hardware, software, mobile devices, and communication tools",
        "Supported 10+ executive meetings ensuring seamless AV setup, connectivity, and real-time troubleshooting",
        "Built trust with leadership while managing sensitive technical issues and maintaining strict confidentiality",
        "Documented common issues and fixes to support knowledge sharing and reduce ticket volume by 30%"
      ]
    },
    {
      title: "Software Development Intern",
      company: "iBuild, Melbourne",
      period: "July 2024 – Nov 2024",
      bullets: [
        "Conducted functional and UI testing on WordPress/Elementor components, identifying 25+ design inconsistencies",
        "Verified completed features against business requirements ensuring quality alignment prior to deployment",
        "Led peer reviews and collaborated with developers providing structured feedback on feature completeness",
        "Created technical documentation including test cases, issue logs, and configuration guides"
      ]
    },
    {
      title: "Customer Service Representative / Technical Support",
      company: "Interflora Australia, Melbourne",
      period: "Dec 2016 – June 2025",
      bullets: [
        "Performed user acceptance testing (UAT) on website updates identifying functional defects during pre-launch phases",
        "Provided frontline technical support for internal systems resolving issues and escalating critical incidents",
        "Trained new staff on technical tools improving onboarding efficiency and reducing ramp-up time",
        "Bridged gap between users and technical teams documenting recurring issues and tracking resolution progress"
      ]
    }
  ];

  const projectExperience = [
    {
      title: "PoliMap AI Chatbot",
      bullets: [
        "Designed and developed AI chatbot using React (frontend) and Python (backend) delivering real-time Australian political insights",
        "Integrated chatbot into PoliMap platform enabling users to interact with political datasets through conversational interface",
        "Used Docker for containerization ensuring consistent environments across development, testing, and production",
        "Implemented NLP and logic flows ensuring contextually relevant responses to user queries about Australian politics",
        "Monitored post-deployment performance identifying edge cases and refining dialogue handling based on user feedback"
      ]
    },
    {
      title: "AI Chatbot Integration – Swinburne Website",
      bullets: [
        "Developed and demonstrated AI chatbot prototype to improve FAQ engagement on Swinburne University website",
        "Designed chatbot flows tailored to common student queries aiming to reduce support load and enhance self-service",
        "Conducted iterative functional testing refining logic and output for accurate responses across input variations",
        "Collaborated with stakeholders to align functionality with university objectives showcasing prototype value"
      ]
    },
    {
      title: "Zac Callahan Music (Personal Project)",
      bullets: [
        "Developed artist portfolio website featuring minimal, professional design with mobile-responsive codebase",
        "Implemented performance optimizations achieving near-zero load times and seamless SoundCloud integration",
        "Deployed using Vercel with a custom domain for ease of accessibility",
        "Designed entirely mobile-friendly interface with robust responsive design principles"
      ]
    },
    {
      title: "Red Robin Rating (Personal Project)",
      bullets: [
        "Built and maintain full-stack alcoholic beverage rating platform handling user authentication via JWT tokens",
        "Created responsive design using React and Tailwind with comprehensive review management and beer database",
        "Deployed across Vercel, Railway, and MongoDB Atlas with SendGrid email integration for user communications",
        "Developed mobile-responsive platform with full mobile app launch planned for Q2 2025"
      ]
    }
  ];

  // Welcome Screen Component
  if (showWelcome) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        {/* Animated Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
              }}
            />
          ))}
        </div>
        
        {/* Welcome Content */}
        <div className="text-center z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
            Zac Callahan
          </h1>
          <h2 className="text-2xl md:text-4xl text-white mb-4 font-light">
            Software Engineer
          </h2>
          <p className="text-xl md:text-2xl text-sky-300 animate-pulse">
            Welcome to my Portfolio!
          </p>
          
          {/* Loading Animation */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-sky-300 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="w-3 h-3 bg-sky-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-sky-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Global Space Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 z-0">
        {/* Animated Stars - optimized for smooth scrolling */}
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-40 star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `twinkle ${Math.random() * 4 + 3}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Larger glowing stars - smoother animations */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute bg-sky-300 rounded-full opacity-20 blur-sm star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animation: `glow ${Math.random() * 6 + 4}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-sky-300">ZC</div>
          <ul className="flex gap-8">
            {['home', 'projects', 'about', 'resume', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-sky-300 transition-colors relative ${
                    activeSection === section ? 'text-sky-300' : 'text-gray-300'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-300 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section with Space Background */}
      <section 
        id="home" 
        className="min-h-screen flex items-center px-8 relative overflow-hidden"
      >
        {/* Additional Hero Stars for more density */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={`hero-${i}`}
              className="absolute bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Floating Elements with Animation - Removed the problematic left ball */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-3/5 right-1/12 w-16 h-16 bg-sky-300/10 rounded-full animate-bounce" 
               style={{animationDelay: '2s', animationDuration: '6s'}} />
          <div className="absolute top-4/5 left-4/5 w-12 h-12 bg-sky-300/10 rounded-full animate-bounce" 
               style={{animationDelay: '4s', animationDuration: '6s'}} />
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
              Zac Callahan
            </h1>
            <div className="text-2xl text-gray-300 mb-6">Software Developer</div>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Passionate about creating innovative web applications and elegant solutions. 
              Specifically, I have a keen interest in creating visually appealing and user-friendly apps.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-sky-300 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-sky-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-300/30 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-sky-300 text-sky-300 px-8 py-3 rounded-full font-semibold hover:bg-sky-300 hover:text-gray-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-300/30 transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-sky-300 to-sky-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-2xl shadow-sky-300/20">
              <div className="w-72 h-72 bg-gray-700 rounded-full flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="py-20 px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Projects
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-sky-300 rounded-full" />
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-sky-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-sky-300/20 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Sliding light effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <h3 className="text-2xl font-semibold text-sky-300 mb-4 group-hover:text-white transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-justify leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-sky-300/20 text-sky-300 px-3 py-1 rounded-full text-sm border border-sky-300/30 hover:bg-sky-300 hover:text-gray-900 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 font-medium hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    Live Site →
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-sky-300 font-medium hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            About Me
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-sky-300 rounded-full" />
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a new graduate software developer with a Master's degree in Information Technology 
                and a love for creating digital solutions that enhance the user's experience. My journey in 
                programming started during university, where I discovered that coding could be a great outlet
                for both creating and problem solving.
              </p>
              <p>
                While capable of full-stack web development, including expertise in modern JavaScript 
                frameworks, backend technologies, and database management, I lean towards front-end development and creating visually appealing and interesting apps.
                I'm constantly learning new technologies and best practices to broaden my skill-set and am always keen to learn more.
              </p>
              <p>
                When I'm not coding, you can find me composing music, 
                enjoying a good movie, or reading a quality book.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:border-sky-300 hover:bg-sky-300/5 hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-300/20 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Skill color accent */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  />
                  
                  <div className="text-3xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 flex justify-center items-center">
                    {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                  </div>
                  <div className="text-sm font-medium group-hover:text-sky-300 transition-colors duration-300">{skill.name}</div>
                  
                  {/* Skill level indicator */}
                  <div className="mt-2 w-full bg-gray-700 rounded-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div 
                      className="h-1 rounded-full transition-all duration-500 group-hover:animate-pulse"
                      style={{ 
                        backgroundColor: skill.color,
                        width: `${70 + Math.random() * 30}%` // Random skill level between 70-100%
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section 
        id="resume" 
        className="py-20 px-8 relative"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Resume
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-sky-300 rounded-full" />
          </h2>
          
          {/* Contact Info */}
          <div className="text-center mb-12 p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-300/10 transition-all duration-300">
            <h3 className="text-3xl font-bold text-sky-300 mb-4">Zac Callahan</h3>
            <div className="flex justify-center gap-8 flex-wrap text-gray-300">
              <span className="hover:text-sky-300 transition-colors duration-300">📧 calla1296@gmail.com</span>
              <span className="hover:text-sky-300 transition-colors duration-300 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                github.com/ZacCallahan
              </span>
              <span className="hover:text-sky-300 transition-colors duration-300">🌐 www.zaccallahan.dev</span>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12 bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-sky-300 hover:shadow-xl hover:shadow-sky-300/10 hover:-translate-y-1 transition-all duration-500 group">
            <div className="bg-gradient-to-r from-sky-300 to-sky-500 text-gray-900 p-6 group-hover:from-sky-400 group-hover:to-sky-600 transition-all duration-300">
              <h3 className="text-xl font-semibold">🎓 Education</h3>
            </div>
            <div className="p-8 space-y-6">
              <div className="hover:translate-x-3 hover:bg-sky-300/5 p-4 rounded-lg transition-all duration-300 group/item">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                  <h4 className="text-xl font-semibold text-sky-300 group-hover/item:text-white transition-colors duration-300">Master of Information Technology – Software Development</h4>
                  <span className="bg-sky-300/20 text-sky-300 px-3 py-1 rounded-full text-sm border border-sky-300/30 group-hover/item:bg-sky-300 group-hover/item:text-gray-900 transition-all duration-300">March 2023 – Nov 2024</span>
                </div>
                <div className="text-gray-300 font-medium mb-1 group-hover/item:text-gray-100 transition-colors duration-300">Swinburne University, Melbourne</div>
                <div className="text-sky-300 font-semibold text-sm group-hover/item:text-sky-200 transition-colors duration-300">High Distinction</div>
              </div>
              <div className="hover:translate-x-3 hover:bg-sky-300/5 p-4 rounded-lg transition-all duration-300 group/item">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                  <h4 className="text-xl font-semibold text-sky-300 group-hover/item:text-white transition-colors duration-300">Bachelor of Science – Physiology and Immunology</h4>
                  <span className="bg-sky-300/20 text-sky-300 px-3 py-1 rounded-full text-sm border border-sky-300/30 group-hover/item:bg-sky-300 group-hover/item:text-gray-900 transition-all duration-300">July 2017 – Nov 2020</span>
                </div>
                <div className="text-gray-300 font-medium group-hover/item:text-gray-100 transition-colors duration-300">Monash University, Melbourne</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12 bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-sky-300 hover:shadow-xl hover:shadow-sky-300/10 hover:-translate-y-1 transition-all duration-500 group">
            <div className="bg-gradient-to-r from-sky-300 to-sky-500 text-gray-900 p-6 group-hover:from-sky-400 group-hover:to-sky-600 transition-all duration-300">
              <h3 className="text-xl font-semibold">🛠️ Technical Skills</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { category: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
                  { category: "Backend & Database", skills: ["Python", "Node.js", "SQL", "MongoDB"] },
                  { category: "Cloud & DevOps", skills: ["AWS", "Azure", "Docker", "Vercel", "Railway"] },
                  { category: "Tools & Others", skills: ["Git", "WordPress", "SendGrid", "JWT Auth"] }
                ].map((skillGroup, index) => (
                  <div
                    key={index}
                    className="bg-sky-300/5 p-6 rounded-xl border border-sky-300/20 hover:bg-sky-300/10 hover:border-sky-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-sky-300/20 transition-all duration-300 group/category"
                  >
                    <h4 className="text-sky-300 font-semibold mb-4 group-hover/category:text-white transition-colors duration-300">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-sky-300/20 text-white px-3 py-1 rounded-full text-sm border border-sky-300/40 hover:bg-sky-300 hover:text-gray-900 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-12 bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-sky-300 hover:shadow-xl hover:shadow-sky-300/10 hover:-translate-y-1 transition-all duration-500 group">
            <div className="bg-gradient-to-r from-sky-300 to-sky-500 text-gray-900 p-6 group-hover:from-sky-400 group-hover:to-sky-600 transition-all duration-300">
              <h3 className="text-xl font-semibold">💼 Professional Experience</h3>
            </div>
            <div className="p-8 space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="hover:translate-x-3 hover:bg-sky-300/5 p-4 rounded-lg transition-all duration-300 border-b border-gray-700 last:border-b-0 group/item"
                >
                  <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                    <h4 className="text-xl font-semibold text-sky-300 group-hover/item:text-white transition-colors duration-300">{job.title}</h4>
                    <span className="bg-sky-300/20 text-sky-300 px-3 py-1 rounded-full text-sm border border-sky-300/30 group-hover/item:bg-sky-300 group-hover/item:text-gray-900 transition-all duration-300">{job.period}</span>
                  </div>
                  <div className="text-gray-300 font-medium mb-1 group-hover/item:text-gray-100 transition-colors duration-300">{job.company}</div>
                  {job.subtitle && <div className="text-gray-400 italic mb-4 group-hover/item:text-gray-300 transition-colors duration-300">{job.subtitle}</div>}
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-3 text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group/bullet"
                      >
                        <span className="text-sky-300 text-sm mt-1 group-hover/bullet:text-white transition-colors duration-300">▶</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Project Experience */}
          <div className="mb-12 bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-sky-300 hover:shadow-xl hover:shadow-sky-300/10 hover:-translate-y-1 transition-all duration-500 group">
            <div className="bg-gradient-to-r from-sky-300 to-sky-500 text-gray-900 p-6 group-hover:from-sky-400 group-hover:to-sky-600 transition-all duration-300">
              <h3 className="text-xl font-semibold">🚀 Project Experience</h3>
            </div>
            <div className="p-8 space-y-8">
              {projectExperience.map((project, index) => (
                <div
                  key={index}
                  className="hover:translate-x-3 hover:bg-sky-300/5 p-4 rounded-lg transition-all duration-300 border-b border-gray-700 last:border-b-0 group/item"
                >
                  <h4 className="text-xl font-semibold text-sky-300 mb-4 group-hover/item:text-white transition-colors duration-300">{project.title}</h4>
                  <ul className="space-y-2">
                    {project.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-3 text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group/bullet"
                      >
                        <span className="text-sky-300 text-sm mt-1 group-hover/bullet:text-white transition-colors duration-300">▶</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <div className="text-center p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-300/10 hover:-translate-y-1 transition-all duration-300">
            <button
              onClick={() => window.print()}
              className="bg-sky-300 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-sky-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-300/30 hover:scale-105 transition-all duration-300"
            >
              📄 Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 px-8 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 relative">
            Let's Work Together
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-sky-300 rounded-full" />
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { icon: '📧', text: 'calla1296@gmail.com', link: 'mailto:calla1296@gmail.com' },
              { icon: '💼', text: 'LinkedIn', link: 'https://linkedin.com/in/zaccallahan' },
              { icon: '🐱', text: 'GitHub', link: 'https://github.com/ZacCallahan' }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="flex items-center gap-2 text-sky-300 hover:text-white hover:scale-125 hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="group-hover:animate-bounce">{contact.icon}</span>
                <span>{contact.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/50 backdrop-blur-sm py-8 border-t border-gray-700/50 text-center text-gray-400 relative">
        <p>&copy; 2025 Zac Callahan</p>
      </footer>

      </div> {/* End Content Wrapper */}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.1);
          }
        }
        
        @keyframes glow {
          0% { 
            opacity: 0.1; 
            transform: scale(1); 
          }
          100% { 
            opacity: 0.4; 
            transform: scale(1.2); 
          }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        /* Smooth scrolling improvements */
        html {
          scroll-behavior: smooth;
        }
        
        /* Performance optimization for stars */
        .star {
          will-change: opacity, transform;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;