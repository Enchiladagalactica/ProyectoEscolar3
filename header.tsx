"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, User, Bell, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const [showSearch, setShowSearch] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
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
    { name: "Inicio", path: "/" },
    { name: "Comunidad", path: "/comunidad" },
    { name: "Perfil", path: "/perfil" },
    { name: "Plantel", path: "/plantel" },
    { name: "Docentes", path: "/docentes" },
  ]

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0, rotate: -10 },
    animate: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.5, type: "spring" } },
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "100%", opacity: 1, transition: { duration: 0.3 } },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-gradient-purple text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-md p-1"
            >
              <Image src="/images/logo.png" alt="CBTIS 29 Logo" width={40} height={40} className="rounded-md" />
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-xl animate-rainbow"
            >
              CBTIS 29
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/20 ${
                    pathname === item.path
                      ? "text-accent font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-100 after:transition-transform"
                      : `${scrolled ? "text-gray-700 dark:text-gray-300" : "text-white"} relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:transition-transform after:origin-right hover:after:scale-x-100 hover:after:origin-left`
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  variants={searchVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="relative mr-2"
                >
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-full h-8 pl-3 pr-8 text-sm rounded-full border border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                    autoFocus
                    onBlur={() => setShowSearch(false)}
                  />
                  <X
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 cursor-pointer"
                    onClick={() => setShowSearch(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover-neon"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search className={`h-5 w-5 ${scrolled ? "" : "text-white"}`} />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="relative hover-neon">
                <Bell className={`h-5 w-5 ${scrolled ? "" : "text-white"}`} />
                {notifications > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-secondary rounded-full"
                  >
                    {notifications}
                  </motion.span>
                )}
              </Button>
            </motion.div>

            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full hover-glow bg-accent text-white">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/login" className="w-full">
                    Iniciar Sesión
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/registro" className="w-full">
                    Registrarse
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className={`h-6 w-6 ${scrolled ? "" : "text-white"}`} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className={`h-6 w-6 ${scrolled ? "" : "text-white"}`} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-gradient-purple text-white border-t border-white/20"
          >
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-2 pb-3">
                {menuItems.map((item, index) => (
                  <motion.div key={item.name} variants={mobileItemVariants} custom={index} whileHover={{ x: 5 }}>
                    <Link
                      href={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/20 ${
                        pathname === item.path ? "text-accent font-semibold" : "text-white"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={mobileItemVariants} className="pt-2 border-t border-white/20">
                  <Link
                    href="/login"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-accent/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                </motion.div>
                <motion.div variants={mobileItemVariants}>
                  <Link
                    href="/registro"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-accent/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Registrarse
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
