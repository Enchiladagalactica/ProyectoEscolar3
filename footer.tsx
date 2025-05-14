"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-gradient-purple text-white border-t-4 border-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-glow">CBTIS 29</h3>
            <p className="text-sm mb-4">Centro de Bachillerato Tecnológico Industrial y de Servicios No. 29</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-white hover:text-accent transition-colors hover-neon">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-white hover:text-accent transition-colors hover-neon">
                <Twitter size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-accent transition-colors hover-neon">
                <Instagram size={24} />
              </Link>
              <Link href="https://youtube.com" className="text-white hover:text-accent transition-colors hover-neon">
                <Youtube size={24} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-glow">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/comunidad"
                  className="text-white hover:text-accent transition-colors hover-rainbow inline-block"
                >
                  Comunidad
                </Link>
              </li>
              <li>
                <Link
                  href="/plantel"
                  className="text-white hover:text-accent transition-colors hover-rainbow inline-block"
                >
                  Información del Plantel
                </Link>
              </li>
              <li>
                <Link
                  href="/docentes"
                  className="text-white hover:text-accent transition-colors hover-rainbow inline-block"
                >
                  Docentes
                </Link>
              </li>
              <li>
                <Link
                  href="/calendario"
                  className="text-white hover:text-accent transition-colors hover-rainbow inline-block"
                >
                  Calendario Escolar
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-glow">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-accent mt-0.5" />
                <span>Av. Universidad 123, Col. Centro, Ciudad, Estado, CP 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent" />
                <span>contacto@cbtis29.edu.mx</span>
              </li>
              <li className="flex items-center mt-4 pt-4 border-t border-white/20">
                <Heart size={18} className="mr-2 text-pink-500 animate-pulse-slow" />
                <span className="animate-rainbow font-bold">Página creada por Jesus y Noel</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} CBTIS 29. Todos los derechos reservados.</p>
          <div className="mt-2 text-xs text-white/70">
            <span className="animate-rainbow inline-block font-bold">Diseñado con pasión y creatividad</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
