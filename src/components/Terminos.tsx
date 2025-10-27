import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const secciones = [
  { id: "1", titulo: "1. Aceptación de los Términos" },
  { id: "2", titulo: "2. Descripción de los Servicios" },
  { id: "3", titulo: "3. Registro de Usuario" },
  { id: "4", titulo: "4. Uso de los Servicios" },
  { id: "5", titulo: "5. Pagos, Facturación y Reembolsos" },
  { id: "6", titulo: "6. Cancelación de Servicios" },
  { id: "7", titulo: "7. Responsabilidad Limitada" },
  { id: "8", titulo: "8. Disponibilidad y Mantenimiento" },
  { id: "9", titulo: "9. Protección de Datos y Privacidad" },
  { id: "10", titulo: "10. Propiedad Intelectual" },
  { id: "11", titulo: "11. Conducta del Usuario" },
  { id: "12", titulo: "12. Garantías y Limitaciones" },
  { id: "13", titulo: "13. Modificaciones del Acuerdo" },
  { id: "14", titulo: "14. Legislación Aplicable y Jurisdicción" },
  { id: "15", titulo: "15. Contacto y Soporte" },
];

export default function TerminosPage() {
  const [activo, setActivo] = useState("1");
  const refs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActivo(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    Object.values(refs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#0B0C16] text-gray-400 min-h-screen py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-10 text-[15px] leading-relaxed">
          {/* SIDEBAR */}
          <aside className="lg:w-1/4 bg-[#12141C] rounded-2xl p-5 h-max sticky top-24 shadow-lg border border-[#1f2033] text-sm">
            <h2 className="text-base font-semibold text-white mb-4">Índice</h2>
            <ul className="space-y-2">
              {secciones.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className={`block px-3 py-2 rounded-md transition-all duration-300 ${
                      activo === sec.id
                        ? "bg-[#a36cff]/20 text-[#c7a4ff] font-semibold"
                        : "hover:bg-[#1c1e2e] hover:text-[#a36cff] text-gray-400"
                    }`}
                  >
                    {sec.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENIDO PRINCIPAL */}
          <main className="lg:w-3/4 bg-[#12141C] rounded-2xl p-8 shadow-lg border border-[#1f2033] space-y-14 text-[15px]">
            <h1 className="text-2xl md:text-3xl font-bold text-[#c7a4ff] mb-2">
              Términos y Condiciones del Servicio de TrustsNodes
            </h1>
            <p className="text-xs text-gray-500 mb-8">
              Última actualización:{" "}
              <span className="text-[#a36cff]">26 de octubre de 2025</span>
            </p>

            {secciones.map((sec) => (
              <section
                id={sec.id}
                key={sec.id}
                ref={(el) => (refs.current[sec.id] = el)}
                className="scroll-mt-32"
              >
                <h2 className="text-lg md:text-xl font-semibold text-gray-100 mb-3">
                  {sec.titulo}
                </h2>
                <p className="text-gray-400">{contenidoSeccion(sec.id)}</p>
              </section>
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

function contenidoSeccion(id: string): string {
  switch (id) {
    case "1":
      return `Al acceder o utilizar los servicios de TrustsNodes, el usuario acepta estos términos. Este acuerdo constituye un contrato legalmente vinculante entre el cliente y TrustsNodes.`;
    case "2":
      return `TrustsNodes ofrece servicios de hosting, VPS, servidores de videojuegos y soluciones empresariales. Nos reservamos el derecho de actualizar o interrumpir servicios temporalmente para mantenimiento.`;
    case "3":
      return `El usuario garantiza que la información proporcionada es veraz y actualizada. El cliente es responsable de la seguridad de sus credenciales y actividades realizadas bajo su cuenta.`;
    case "4":
      return `El uso de los servicios debe cumplir con las leyes locales e internacionales. Está prohibido el uso para ataques DDoS, envío de spam, difusión de malware o contenido ilegal.`;
    case "5":
      return `Los pagos deben realizarse por adelantado. Los reembolsos aplican dentro de las primeras 10 horas, con devolución del 75% del monto. Las tarifas pueden variar sin previo aviso.`;
    case "6":
      return `El cliente puede cancelar su servicio en cualquier momento desde el panel. TrustsNodes puede cancelar servicios por incumplimiento de los términos sin reembolso.`;
    case "7":
      return `TrustsNodes no será responsable de pérdidas indirectas, daños, interrupciones o pérdida de datos. La responsabilidad total se limita al monto pagado durante el período actual del servicio.`;
    case "8":
      return `Garantizamos una disponibilidad del 99.9%. Los mantenimientos programados se anunciarán con antelación. No nos hacemos responsables por interrupciones causadas por fuerza mayor.`;
    case "9":
      return `Cumplimos con la normativa de protección de datos vigente. La información del cliente se maneja con estricta confidencialidad y no se comparte sin consentimiento.`;
    case "10":
      return `Todo el contenido, logotipos, software y marcas registradas de TrustsNodes están protegidos por derechos de propiedad intelectual. Está prohibido el uso sin autorización previa.`;
    case "11":
      return `El usuario debe actuar de manera ética y responsable. Está prohibido utilizar los servicios para dañar sistemas, realizar estafas o violar derechos de terceros.`;
    case "12":
      return `Los servicios se brindan "tal cual", sin garantías de funcionamiento continuo. TrustsNodes no asegura que los servicios estén libres de errores o interrupciones.`;
    case "13":
      return `Nos reservamos el derecho de modificar estos Términos en cualquier momento. Las actualizaciones entrarán en vigor al publicarse en el sitio web oficial.`;
    case "14":
      return `Este acuerdo se rige por las leyes del país donde TrustsNodes esté registrado. Cualquier disputa será resuelta ante los tribunales competentes de dicha jurisdicción.`;
    case "15":
      return `Puedes contactarnos a través de nuestro sistema de tickets o en nuestro Discord oficial. Nuestro equipo responderá en el menor tiempo posible.`;
    default:
      return "";
  }
}
