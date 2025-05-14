"use client"

import React from "react"

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  
  const slides = [
    {
      image: "images/hero1.png",
      title: "Bienvenidos al CBTIS 29",
      description: "Formando profesionales técnicos para el futuro de México",
    },
    {
      image: "images/hero2.png",
      title: "Excelencia Académica",
      description: "Programas educativos de calidad con enfoque tecnológico",
    },
    {
      image: "images/hero3.png",
      title: "Comunidad Estudiantil",
      description: "Un espacio para crecer, aprender y desarrollarte profesionalmente",
    },
  ];

  const announcements = [
    {
      title: "Inscripciones Abiertas",
      date: "15 Mayo 2025",
      image: "images/announcement1.png",
      description: "Las inscripciones para el próximo ciclo escolar ya están abiertas. ¡No pierdas tu lugar!",
    },
    {
      title: "Feria de Ciencias",
      date: "20 Mayo 2025",
      image: "images/announcement2.png",
      description: "Participa en nuestra feria anual de ciencias y tecnología. Grandes premios para los ganadores.",
    },
    {
      title: "Conferencia de Tecnología",
      date: "25 Mayo 2025",
      image: "images/announcement3.png",
      description: "Expertos de la industria compartirán las últimas tendencias tecnológicas.",
    },
    {
      title: "Torneo Deportivo",
      date: "30 Mayo 2025",
      image: "images/event2.jpg",
      description: "Participa en nuestro torneo deportivo anual. Inscripciones abiertas para todas las disciplinas.",
    },
  ];

  const programs = [
    {
      title: "Programación",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      description: "Aprende a desarrollar software y aplicaciones con las tecnologías más demandadas.",
      color: "from-purple-600 to-blue-500",
    },
    {
      title: "Electrónica",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0-6 6c0 7 6 12 6 12s6-5 6-12a6 6 0 0 0-6-6z"></path>
          <path d="M8 9a4 4 0 0 1 8 0"></path>
        </svg>
      ),
      description: "Especialízate en el diseño y mantenimiento de sistemas electrónicos.",
      color: "from-pink-600 to-red-500",
    },
    {
      title: "Administración",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      description: "Desarrolla habilidades para la gestión eficiente de recursos en organizaciones.",
      color: "from-green-500 to-teal-400",
    },
    {
      title: "Mecatrónica",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      description: "Combina mecánica, electrónica e informática para crear sistemas automatizados.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const stats = [
    { number: "2,500+", label: "Estudiantes" },
    { number: "150+", label: "Docentes" },
    { number: "95%", label: "Tasa de Empleo" },
    { number: "50+", label: "Años de Experiencia" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCelebrate = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div>
      {showConfetti && <ReactConfetti width={windowSize.width} height={windowSize.height} recycle={false} />}

      {/* Hero Section */}
      <section id="home" className="hero">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${currentSlide === index ? 'hero-slide-active' : 'hero-slide-inactive'}`}
          >
            <div className="hero-overlay"></div>
            <img 
              src={slide.image || "/placeholder.svg"} 
              alt={slide.title} 
              className="hero-image"
            />
          </div>
        ))}

        <div className="hero-content">
          <h1 className="hero-title animate-rainbow">{slides[currentSlide].title}</h1>
          <p className="hero-description">{slides[currentSlide].description}</p>
          <div className="hero-buttons">
            <a 
              href="#comunidad" 
              className="btn btn-primary btn-lg btn-rounded btn-glow"
              onClick={handleCelebrate}
            >
              Conoce Nuestra Comunidad
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}>
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
            <a 
              href="#plantel" 
              className="btn btn-outline btn-lg btn-rounded hover-neon"
              style={{ borderColor: 'white', color: 'white' }}
            >
              Explorar Plantel
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Controls */}
        <div className="hero-controls">
          <button 
            className="hero-control-button"
            onClick={prevSlide}
            aria-label="Anterior diapositiva"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          <div className="hero-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`hero-indicator ${currentSlide === index ? 'hero-indicator-active' : ''}`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>

          <button 
            className="hero-control-button"
            onClick={nextSlide}
            aria-label="Siguiente diapositiva"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <div className="hero-scroll-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="anuncios" className="section section-gradient-purple">
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge-accent">Últimas Noticias</span>
            <h2 className="section-title text-glow">Anuncios y Eventos</h2>
            <p className="section-description text-gray-200">
              Mantente informado sobre las últimas noticias y eventos de nuestra institución
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {announcements.map((announcement, index) => (
              <div key={index} className="card bg-white/10 backdrop-blur-md hover-lift">
                <div className="relative" style={{ height: '12rem', overflow: 'hidden' }}>
                  <img 
                    src={announcement.image || "/placeholder.svg"} 
                    alt={announcement.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1rem'
                  }} className="announcement-overlay">
                    <span style={{ color: 'white', fontWeight: 500 }}>{announcement.title}</span>
                  </div>
                </div>
                <div className="card-content">
                  <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.25rem' }}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {announcement.date}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>{announcement.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>{announcement.description}</p>
                  <button className="btn btn-outline w-full" style={{ borderColor: '#10b981', color: 'white' }}>
                    Leer más
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a href="#todos-anuncios" className="btn btn-outline btn-lg btn-rounded hover-neon" style={{ borderColor: '#10b981', color: 'white' }}>
              Ver Todos los Anuncios
              <svg xmlns="http://www.w3.org/2000/\
