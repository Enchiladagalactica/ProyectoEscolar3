"use client"

import React from "react"

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [notifications, setNotifications] = React.useState(3)
  const [showSearch, setShowSearch] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Inicio", path: "#home" },
    { name: "Comunidad", path: "#comunidad" },
    { name: "Perfil", path: "#perfil" },
    { name: "Plantel", path: "#plantel" },
    { name: "Docentes", path: "#docentes" },
  ]

  return (
    <header className={`header ${scrolled ? "header-scrolled" : "bg-gradient-purple text-white"}`}>
      <div className="container header-container">
        <a href="#home" className="header-logo">
          <div className="bg-white rounded-md p-1">
            <img src="images/logo.png" alt="CBTIS 29 Logo" width="40" height="40" className="rounded-md" />
          </div>
          <div className="font-bold text-xl animate-rainbow">CBTIS 29</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.path}
              className={`header-nav-link ${window.location.hash === item.path || (!window.location.hash && item.path === "#home") ? "active" : ""}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="btn btn-ghost btn-icon hover-neon" onClick={() => setShowSearch(!showSearch)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button className="btn btn-ghost btn-icon hover-neon relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            {notifications > 0 && (
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-secondary rounded-full">
                {notifications}
              </span>
            )}
          </button>

          <button className="btn btn-outline btn-icon rounded-full hover-glow bg-accent text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu-nav">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`mobile-menu-link ${window.location.hash === item.path || (!window.location.hash && item.path === "#home") ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#login" className="mobile-menu-link" onClick={() => setIsOpen(false)}>
              Iniciar Sesión
            </a>
            <a href="#registro" className="mobile-menu-link" onClick={() => setIsOpen(false)}>
              Registrarse
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
