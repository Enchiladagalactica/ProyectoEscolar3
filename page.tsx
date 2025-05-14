"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Calendar, Info, BookOpen, School, Award } from "lucide-react"

export default function Plantel() {
  const [activeTab, setActiveTab] = useState("informacion")

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold mb-4">Nuestro Plantel</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Conoce las instalaciones, historia y ubicación del Centro de Bachillerato Tecnológico Industrial y de
          Servicios No. 29
        </p>
      </motion.div>

      <Tabs defaultValue="informacion" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="informacion" onClick={() => setActiveTab("informacion")} className="text-sm md:text-base">
            <Info className="h-4 w-4 mr-2" />
            Información
          </TabsTrigger>
          <TabsTrigger
            value="instalaciones"
            onClick={() => setActiveTab("instalaciones")}
            className="text-sm md:text-base"
          >
            <School className="h-4 w-4 mr-2" />
            Instalaciones
          </TabsTrigger>
          <TabsTrigger value="ubicacion" onClick={() => setActiveTab("ubicacion")} className="text-sm md:text-base">
            <MapPin className="h-4 w-4 mr-2" />
            Ubicación
          </TabsTrigger>
        </TabsList>

        <TabsContent value="informacion">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Historia del Plantel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    El Centro de Bachillerato Tecnológico Industrial y de Servicios No. 29 (CBTIS 29) fue fundado en
                    1975 como parte del sistema de educación tecnológica en México. Desde sus inicios, nuestra
                    institución ha estado comprometida con la formación de técnicos profesionales de calidad.
                  </p>
                  <p>
                    A lo largo de más de 45 años de historia, el CBTIS 29 ha evolucionado constantemente para adaptarse
                    a las necesidades educativas y tecnológicas de cada época, manteniendo siempre un alto nivel
                    académico y formando a miles de estudiantes que hoy son profesionales exitosos.
                  </p>
                  <p>
                    Nuestra institución ha sido reconocida múltiples veces por su excelencia académica y por el
                    desempeño de sus egresados en el campo laboral y en estudios superiores.
                  </p>

                  <div className="pt-4">
                    <h3 className="text-lg font-semibold mb-2">Misión</h3>
                    <p>
                      Formar técnicos profesionales con conocimientos, habilidades y actitudes que les permitan
                      integrarse exitosamente al sector productivo y continuar con estudios de nivel superior.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Visión</h3>
                    <p>
                      Ser una institución educativa líder en la formación de técnicos profesionales, reconocida por su
                      calidad académica, innovación tecnológica y compromiso con el desarrollo sustentable.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Información General
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image src="/images/school-front.jpg" alt="Fachada del CBTIS 29" fill className="object-cover" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Dirección</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Av. Universidad 123, Col. Centro, Ciudad, Estado, CP 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Teléfono</h3>
                        <p className="text-gray-600 dark:text-gray-400">(123) 456-7890</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Correo Electrónico</h3>
                        <p className="text-gray-600 dark:text-gray-400">contacto@cbtis29.edu.mx</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Horario de Atención</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Lunes a Viernes: 7:00 AM - 3:00 PM
                          <br />
                          Sábados: 8:00 AM - 12:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Calendario Escolar</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Ciclo escolar: Agosto - Julio
                          <br />
                          Periodos vacacionales: Diciembre y Abril
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="instalaciones">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <School className="h-5 w-5 mr-2" />
                Nuestras Instalaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Laboratorios de Cómputo",
                    description:
                      "Equipados con tecnología de punta para el desarrollo de habilidades en programación, diseño y otras áreas tecnológicas.",
                    image: "/images/computer-lab.jpg",
                  },
                  {
                    name: "Talleres de Especialidad",
                    description:
                      "Espacios diseñados para la práctica y desarrollo de habilidades técnicas específicas de cada especialidad.",
                    image: "/images/workshop.jpg",
                  },
                  {
                    name: "Biblioteca",
                    description:
                      "Amplio acervo bibliográfico y digital para consulta e investigación de los estudiantes.",
                    image: "/images/library.jpg",
                  },
                  {
                    name: "Auditorio",
                    description:
                      "Espacio para conferencias, ceremonias y eventos culturales con capacidad para 500 personas.",
                    image: "/images/auditorium.jpg",
                  },
                  {
                    name: "Canchas Deportivas",
                    description:
                      "Instalaciones para la práctica de diversos deportes como fútbol, básquetbol y voleibol.",
                    image: "/images/sports-field.jpg",
                  },
                  {
                    name: "Cafetería",
                    description: "Servicio de alimentos y bebidas para estudiantes y personal con opciones saludables.",
                    image: "/images/cafeteria.jpg",
                  },
                ].map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-48">
                        <Image
                          src={facility.image || "/placeholder.svg"}
                          alt={facility.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{facility.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Recorrido Virtual</h3>
                <div className="relative pb-[56.25%] rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Recorrido virtual CBTIS 29"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ubicacion">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Ubicación y Cómo Llegar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.761237045603!2d-99.16869708509426!3d19.42702868688591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sZocalo%2C%20Centro%20Histórico%20de%20la%20Cdad.%20de%20México%2C%20Centro%2C%20Ciudad%20de%20México%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1620942240218!5m2!1ses-419!2smx"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Mapa de ubicación del CBTIS 29"
                    ></iframe>
                  </div>
                </div>

                <div>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Cómo Llegar</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">En Transporte Público</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Ruta de Autobús: Líneas 1, 5 y 7</li>
                            <li>Metro: Estación Central, Línea 2</li>
                            <li>Metrobús: Estación Universidad, Línea 3</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">En Automóvil</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Desde el Norte: Tomar Av. Principal hasta Blvd. Universidad</li>
                            <li>Desde el Sur: Seguir por Periférico hasta la salida Universidad</li>
                            <li>Estacionamiento disponible dentro del plantel</li>
                          </ul>
                        </div>

                        <div className="pt-4">
                          <Button className="w-full">Obtener Indicaciones</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Puntos de Referencia</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>A 5 minutos del Centro Comercial Plaza Principal</li>
                      <li>Frente al Parque Municipal</li>
                      <li>A 10 minutos de la Terminal de Autobuses</li>
                      <li>Cerca del Hospital General</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Horarios de Visita</h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Si estás interesado en conocer nuestras instalaciones, puedes agendar una visita guiada en los
                      siguientes horarios:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Lunes a Viernes: 10:00 AM - 2:00 PM</li>
                      <li>Sábados: 9:00 AM - 12:00 PM</li>
                    </ul>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                      Para agendar una visita, contacta al departamento de Servicios Escolares.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
