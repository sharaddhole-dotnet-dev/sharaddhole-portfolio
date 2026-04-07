// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';


import ReactGA from "react-ga4";

ReactGA.initialize("G-JVV1EZG99E");


const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
//const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Sharad Dhole - Software Engineer</title>
        <meta name="description" content="Welcome to Sharad Dhole's portfolio website. I'm Sharad Dhole, a passionate software developer showcasing my projects, skills, and experience." />
        <meta name="keywords" content="Sharaddhole, SharadDhole, sharaddhole.in, Sharad Dhole,sharaddhole portfolio, Software Engineer, Full Stak Developer, .NET Developer" />
        <meta name="author" content="Sharad Dhole" />
        <meta property="og:title" content="Sharad Dhole - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sharaddhole.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sharad Dhole - Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <link rel="canonical" href="https://sharaddhole.in" />
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sharad Dhole",
            "url": "https://sharaddhole.in",
            "sameAs": [
              "https://https://www.linkedin.com/in/sharaddhole27/",
            ],
            "jobTitle": "Software Engineer",
            "description": "Portfolio website of Sharad Dhole, Software Engineer. Projects, skills, experience, and contact information."
          }
        `}</script>
        {/* SEO: Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
         
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// <Certifications />