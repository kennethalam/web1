'use client'

import { motion } from "framer-motion";
import { Shield, Lock, Check, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import legalConfig from "../config/sections/legal.json";
import type { LegalSection } from "../types/legal";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/vps/vps-hero-2.webp')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/40 to-transparent dark:from-[#0a0b0f] dark:via-[#0a0b0f]/60 dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-gray-50/40 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/95 dark:to-[#0a0b0f]/60" />
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center gap-2 card-primary px-6 py-3 rounded-full mb-6 border border-secondary">
                <Shield className="w-5 h-5 icon-text-primary" />
                <span className="icon-text-primary text-sm font-medium">Privacy Policy</span>
              </div>

              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 orbitron-font">
                Su privacidad es nuestra <span className="icon-text-primary">Prioridad</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
                Nos comprometemos a proteger su información personal y a ser transparentes sobre cómo la usamos.
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ultima Actualizacion: Junary 2026 {legalConfig.privacyPolicy.lastUpdated}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4"
            >
              {[
                {
                  icon: Lock,
                  title: "Seguridad de datos",
                  description: "Sus datos están encriptados y almacenados de forma segura en nuestros servidores protegidos."
                },
                {
                  icon: Shield,
                  title: "Sin venta de datos",
                  description: "Nunca vendemos su información personal a terceros."
                },
                {
                  icon: Check,
                  title: "Tu control",
                  description: "Acceda, actualice o elimine sus datos en cualquier momento."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-gray-950/20 backdrop-blur-xl rounded-md p-6 border border-secondary hover:border-secondary dark:border-secondary dark:hover:border-secondary hover:hover-gradient dark:hover:hover-gradient transition-all duration-300"
                >
                  <div className="w-12 h-12 card-primary rounded-xl flex items-center justify-center mb-4 border border-secondary">
                    <item.icon className="w-6 h-6 icon-text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-950/20 backdrop-blur-xl border border-secondary hover:border-secondary dark:border-secondary rounded-md overflow-hidden dark:hover:border-secondary hover:hover-gradient dark:hover:hover-gradient transition-all duration-300"
            >
              {legalConfig.privacyPolicy.sections.map((section: LegalSection, index: number) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 border-b border-secondary last:border-0"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                ¿Preguntas sobre nuestra política de privacidad?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                ¡Estamos aquí para ayudarte! Contacta con nuestro equipo de privacidad en:
              </p>
              <a
                href={`mailto:${legalConfig.privacyPolicy.contactEmail}`}
                className="inline-flex items-center gap-2 button-primary text-button-primary px-6 py-3 rounded-lg font-medium transition-colors duration-300 border border-secondary hover:hover-gradient hover:border-secondary"
              >
                Contactar con el equipo de privacidad
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
