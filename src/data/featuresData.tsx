import React from 'react';
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';

export const features = [
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Ultra Fast Network",
    description: "Conexiones optimizadas con hardware de última generación, baja latencia y una red global diseñada para velocidad y estabilidad inquebrantable."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "DDoS Protection by Datapacket",
    description: "Defensa activa en múltiples capas. Nuestra alianza con Datapacket garantiza máxima resistencia frente a ataques, manteniendo tus servicios siempre en línea."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Enterprise-Grade Security",
    description: "Cifrado avanzado, monitoreo constante y firewalls inteligentes para mantener tus datos y aplicaciones completamente protegidos."
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Smart Management Panel",
    description: "Administra tus servicios sin complicaciones. Interfaz moderna, intuitiva y con acceso total a cada detalle de tu infraestructura."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Scalable Cloud Power",
    description: "Desde un sitio web personal hasta un clúster empresarial: escala tus recursos en segundos sin interrupciones ni migraciones."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Seguridad",
    description: "En trustsnodes velamos por nuestros clientes, tus datos no seran filtrados ni compartidos con terceros."
  }
];
