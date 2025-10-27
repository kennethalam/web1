import { Facebook, X } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Importante para navegación interna

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <div>
              <img
                src="https://i.ibb.co/4ZHTqHcd/xdder.png"
                alt="TrustsNodes Logo"
                className="w-12 h-12 mb-12"
              />
            </div>

            <p className="text-gray-400 mb-6 max-w-xs">
              ¡Ponte en contacto con nosotros!
            </p>

            {/* Redes sociales */}
            <div className="flex space-x-4">

              <a
                href="https://x.com/trustsnodes"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">X</span>
              </a>

              <a
                href="https://discord.gg/JAZgWBxBr7"
                className="text-gray-400 hover:text-crypto-purple transition-colors"
              >
                <FaDiscord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://billing.trustsnodes.com/index.php?rp=/store/gamservers"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  Gamservers Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://billing.trustsnodes.com/index.php?rp=/store/vps-budget"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  VPS Budget
                </a>
              </li>
              <li>
                <a
                  href="https://billing.trustsnodes.com/index.php?rp=/store/vps-face"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  VPS Expensive
                </a>
              </li>
              <li>
                <a
                  href="https://billing.trustsnodes.com/index.php?rp=/store/vds-budget"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  VDS Budget
                </a>
              </li>
              <li>
                <a
                  href="https://billing.trustsnodes.com/index.php?rp=/store/servidores-dedicados"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  Dedicated Servers - Miami, FL
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.youtube.com/@trustsnodes"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  Tutoriales
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kennethalam"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  Documentaciones
                </a>
              </li>
              <li>
                <a
                  href="https://billing.trustsnodes.com/store"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  Tienda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terminos"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <a
                  href="/terminos"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  Legal & Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/JAZgWBxBr7"
                  className="text-gray-400 hover:text-crypto-purple transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} TrustsNodes. Todos los derechos reservados.
            </p>

            <div className="flex space-x-6">
              {/* ✅ Enlace funcional con React Router */}
              <Link
                to="/terminos"
                className="text-gray-400 hover:text-crypto-purple text-sm transition-colors"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
