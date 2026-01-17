import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  // Theme state initialization - must match HTML script logic exactly
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check what the HTML script already set
      const htmlHasDark = document.documentElement.classList.contains('dark');
      if (htmlHasDark) {
        return true;
      }
      // Fallback: read from localStorage (should match HTML script)
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply theme class to html element immediately on mount and when it changes
  useEffect(() => {
    // Ensure theme is applied immediately
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex flex-col">
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
