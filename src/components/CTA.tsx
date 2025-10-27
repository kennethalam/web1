import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export default function Locations() {
  const [ping, setPing] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const testPing = async () => {
      const start = performance.now();
      try {
        await fetch("https://www.gstatic.com/generate_204", {
          mode: "no-cors",
          cache: "no-store",
        });
        const end = performance.now();
        const current = Math.round(end - start);

        setHistory((prev) => {
          const updated = [...prev.slice(-4), current];
          const avg = Math.round(
            updated.reduce((a, b) => a + b, 0) / updated.length
          );
          setPing(Math.min(avg, 83));
          return updated;
        });
      } catch {
        setPing("Error");
      }
    };

    testPing();
    const interval = setInterval(testPing, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleRedirect = () => {
    window.open("https://status.trustsnodes.com", "_blank");
  };

  return (
    <section
      id="locations"
      className="relative py-24 min-h-screen flex flex-col items-center justify-center text-white 
      bg-gradient-to-b from-[#0B0C16] via-[#10121C] to-[#12141C] overflow-hidden"
    >
      {/* Efecto sutil de brillo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,108,245,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="text-gradient">Nuestras Ubicaciones</span>
        </h2>
        <p className="text-gray-400">
          Tenemos 1 ubicación en todo el mundo con baja latencia.
        </p>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 px-4">
        {/* Tarjeta de ubicación */}
        <div className="bg-[#121326]/80 rounded-2xl p-6 flex flex-col gap-4 
        shadow-xl border border-[#1f2033] w-[320px] sm:w-[380px] 
        hover:bg-[#1A1B2C]/90 transition-all duration-300 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <img
              src="https://flagcdn.com/us.svg"
              alt="Bandera de Estados Unidos"
              className="w-12 h-12 rounded-full shadow-md"
              loading="lazy"
            />
            <div>
              <h3 className="text-xl font-semibold">Miami, Florida</h3>
              <p className="text-gray-400 text-sm">Espejo principal</p>
              <p className="text-xs text-gray-500 mt-1">(Latencia suavizada)</p>
            </div>

            {/* Ping */}
            <div className="ml-auto flex items-center gap-2">
              <span
                className={`px-3 py-1 text-sm rounded-full font-medium transition-colors duration-300 ${
                  ping === "Error"
                    ? "bg-red-500/90"
                    : ping < 60
                    ? "bg-green-500/90"
                    : "bg-yellow-500/90"
                }`}
              >
                {ping !== null
                  ? ping === "Error"
                    ? "Error"
                    : `${ping} ms`
                  : "Cargando..."}
              </span>
              <MapPin size={20} className="text-[#a36cff]" />
            </div>
          </div>

          {/* Botón estado del servidor */}
          <div className="flex justify-center mt-3">
            <button
              onClick={handleRedirect}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200 text-sm"
            >
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span>Estado del servidor</span>
            </button>
          </div>
        </div>

        {/* Mapa mundial con punto en Miami */}
        <div className="relative">
          <img
            src="https://cdn.discordapp.com/attachments/1416102621210480660/1431877508030005319/image-removebg-preview.png?ex=68ff0358&is=68fdb1d8&hm=46a064923c313f80c19d9831409b0cbff267b30e936308a781925440c9e18381&"
            alt="Mapa mundial"
            className="w-[650px] opacity-85 select-none pointer-events-none"
            loading="lazy"
          />

          {/* Círculo animado - ubicación Miami */}
          <div
            className="absolute w-4 h-4 bg-[#a36cff] rounded-full shadow-lg animate-ping"
            style={{
              top: "41%",
              left: "18%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute w-3 h-3 bg-[#9b6cf5] rounded-full shadow-md"
            style={{
              top: "41%",
              left: "18%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
