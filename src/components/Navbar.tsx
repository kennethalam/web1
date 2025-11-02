import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

/* ---------------------------
   Links
--------------------------- */
const hostingLinks = [
  { name: "VPS Budget", url: "https://billing.trustsnodes.com/index.php?rp=/store/vps-budget" },
  { name: "VPS Expensive", url: "https://billing.trustsnodes.com/index.php?rp=/store/vps-face" },
  { name: "VDS Budget", url: "https://billing.trustsnodes.com/index.php?rp=/store/vds-budget" },
  { name: "Dedicated Servers - Miami, FL", url: "https://billing.trustsnodes.com/index.php?rp=/store/servidores-dedicados" },
];

const gameLinks = [
  { name: "Minecraft", url: "https://billing.trustsnodes.com/index.php?rp=/store/gamservers" },
  { name: "Counter Strike 1.6", url: "https://billing.trustsnodes.com/index.php?rp=/store/gamservers" },
  { name: "TS3", url: "https://billing.trustsnodes.com/index.php?rp=/store/gamservers" },
  { name: "FiveM", url: "https://billing.trustsnodes.com/index.php?rp=/store/gamservers" },
  { name: "MTA:SA", url: "https://billing.trustsnodes.com/index.php?rp=/store/gamservers" },
  { name: "SA:MP", url: "https://billing.trustsnodes.com/index.php?rp=/store/gamservers" },
];

const resourceLinks = [
  { name: "Tutoriales", url: "https://www.youtube.com/@trustsnodes" },
  { name: "Documentaciones", url: "https://github.com/kennethalam" },
  { name: "Tienda", url: "https://billing.trustsnodes.com/store" },
];

const ubicacionesLinks = [
  { name: "Miami, Florida", url: "#locations" },
];

/* ---------------------------
   Dropdown Mobile
--------------------------- */
const MobileDropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-gray-300 py-3 text-base font-medium"
      >
        <span>{title}</span>
        <ChevronDown size={18} className={`${open ? "rotate-180" : ""} transition-transform`} />
      </button>

      {open && (
        <div className="ml-3 border-l border-gray-700 pl-3 space-y-2">
          {items.map((it) => (
            <a
              key={it.name}
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-white text-sm py-1"
            >
              {it.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------------------------
   Navbar
--------------------------- */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0b0e19]/90 backdrop-blur-md py-3 shadow-lg" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/4ZHTqHcd/xdder.png"
              alt="TrustsNodes Logo"
              className="w-16 h-16 object-contain cursor-pointer hover:opacity-90 transition"
            />
          </Link>

          <ul className="hidden lg:flex items-center space-x-10 text-white">
            <li
              className="relative group"
              onMouseEnter={() => setHoveredMenu("games")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center text-gray-300 hover:text-white">
                Gameservers <ChevronDown size={18} className={`ml-1 ${hoveredMenu==="games" && "rotate-180"}`} />
              </button>
              {hoveredMenu === "games" && (
                <div className="absolute top-full mt-2 w-56 bg-[#0a0c17] border border-[#20253a] rounded-lg shadow-lg py-2">
                  {gameLinks.map((it) => (
                    <a key={it.name} href={it.url} target="_blank" rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#13182b]">
                      {it.name}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li
              className="relative group"
              onMouseEnter={() => setHoveredMenu("hosting")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center text-gray-300 hover:text-white">
                Hosting <ChevronDown size={18} className={`ml-1 ${hoveredMenu==="hosting" && "rotate-180"}`} />
              </button>
              {hoveredMenu === "hosting" && (
                <div className="absolute top-full mt-2 w-56 bg-[#0a0c17] border border-[#20253a] rounded-lg shadow-lg py-2">
                  {hostingLinks.map((it) => (
                    <a key={it.name} href={it.url} target="_blank" rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#13182b]">
                      {it.name}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li
              className="relative group"
              onMouseEnter={() => setHoveredMenu("ubicaciones")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center text-gray-300 hover:text-white">
                Ubicaciones <ChevronDown size={18} className={`ml-1 ${hoveredMenu==="ubicaciones" && "rotate-180"}`} />
              </button>
              {hoveredMenu === "ubicaciones" && (
                <div className="absolute top-full mt-2 w-44 bg-[#0a0c17] border border-[#20253a] rounded-lg shadow-lg py-2">
                  {ubicacionesLinks.map((it) => (
                    <a key={it.name} href={it.url} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#13182b]">
                      {it.name}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li
              className="relative group"
              onMouseEnter={() => setHoveredMenu("resources")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center text-gray-300 hover:text-white">
                Recursos <ChevronDown size={18} className={`ml-1 ${hoveredMenu==="resources" && "rotate-180"}`} />
              </button>
              {hoveredMenu === "resources" && (
                <div className="absolute top-full mt-2 w-56 bg-[#0a0c17] border border-[#20253a] rounded-lg shadow-lg py-2">
                  {resourceLinks.map((it) => (
                    <a key={it.name} href={it.url} target="_blank" rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#13182b]">
                      {it.name}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li>
              <a href="#faq" className="text-gray-300 hover:text-white">FAQ</a>
            </li>
          </ul>

          <div className="hidden lg:flex">
            <Link to="https://billing.trustsnodes.com/login.php">
              <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-6">Acceder</Button>
            </Link>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]" onClick={() => setIsMobileMenuOpen(false)} />}

      <aside
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[360px] bg-[#0b0e19] border-l border-gray-800 z-[100] p-6 transform transition-transform duration-300 overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <img src="https://i.ibb.co/4ZHTqHcd/xdder.png" className="w-14" alt="logo" />
          <button onClick={() => setIsMobileMenuOpen(false)}><X size={26} className="text-white" /></button>
        </div>

        <MobileDropdown title="Gameservers" items={gameLinks} />
        <MobileDropdown title="Hosting" items={hostingLinks} />
        <MobileDropdown title="Ubicaciones" items={ubicacionesLinks} />
        <MobileDropdown title="Recursos" items={resourceLinks} />

        {/* ✅ FAQ antes del botón Acceder */}
        <div className="mt-4 mb-4">
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white block text-base">
            FAQ
          </a>
        </div>

        <Link to="https://billing.trustsnodes.com/login.php">
          <Button className="w-full bg-crypto-purple text-white py-3 rounded-xl mt-2">Acceder</Button>
        </Link>
      </aside>
    </>
  );
}
