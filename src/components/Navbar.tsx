import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 💾 Hosting links
  const hostingLinks = [
    { name: 'VPS Budget', url: 'https://billing.trustsnodes.com/index.php?rp=/store/vps-budget' },
    { name: 'VPS Expensive', url: 'https://billing.trustsnodes.com/index.php?rp=/store/vps-face' },
    { name: 'VDS Budget', url: 'https://billing.trustsnodes.com/index.php?rp=/store/vds-budget' },
    { name: 'Dedicated Servers - Miami, FL', url: 'https://billing.trustsnodes.com/index.php?rp=/store/servidores-dedicados' },
  ];

  // 🎮 Gameservers
  const gameLinks = [
    { name: 'Minecraft', url: 'https://billing.trustsnodes.com/index.php?rp=/store/gamservers' },
    { name: 'Counter Strike 1.6', url: 'https://billing.trustsnodes.com/index.php?rp=/store/gamservers' },
    { name: 'TS3', url: 'https://billing.trustsnodes.com/index.php?rp=/store/gamservers' },
    { name: 'FiveM', url: 'https://billing.trustsnodes.com/index.php?rp=/store/gamservers' },
    { name: 'MTA:SA', url: 'https://billing.trustsnodes.com/index.php?rp=/store/gamservers' },
    { name: 'SA:MP', url: 'https://billing.trustsnodes.com/index.php?rp=/store/gamservers' },
  ];

  // 📚 Recursos
  const resourceLinks = [
    { name: 'Tutoriales', url: 'https://www.youtube.com/@trustsnodes' },
    { name: 'Documentaciones', url: 'https://github.com/kennethalam' },
    { name: 'Tienda', url: 'https://billing.trustsnodes.com/store' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0e19]/90 backdrop-blur-md py-3 shadow-lg'
          : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center pl-2">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/4ZHTqHcd/xdder.png"
              alt="TrustsNodes Logo"
              className="w-16 h-16 object-contain cursor-pointer hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden lg:flex items-center space-x-10">
          {/* 🎮 GAMESERVERS */}
          <li
            className="relative group"
            onMouseEnter={() => setHoveredMenu('gameservers')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center text-gray-300 hover:text-white transition-colors">
              Gameservers
              <ChevronDown
                size={18}
                className={`ml-1 transition-transform duration-200 ${
                  hoveredMenu === 'gameservers' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {hoveredMenu === 'gameservers' && (
              <div
                className="absolute top-full mt-2 w-56 bg-[#0a0c17] border border-[#20253a] rounded-xl shadow-lg py-2"
                onMouseEnter={() => setHoveredMenu('gameservers')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {/* 🔹 “Puente invisible” para que no se cierre al bajar */}
                <div className="absolute -top-3 left-0 w-full h-3"></div>
                {gameLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#13182b] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* 💾 HOSTING */}
          <li
            className="relative group"
            onMouseEnter={() => setHoveredMenu('hosting')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center text-gray-300 hover:text-white transition-colors">
              Hosting
              <ChevronDown
                size={18}
                className={`ml-1 transition-transform duration-200 ${
                  hoveredMenu === 'hosting' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {hoveredMenu === 'hosting' && (
              <div
                className="absolute top-full mt-2 w-56 bg-[#0a0c17] border border-[#20253a] rounded-xl shadow-lg py-2"
                onMouseEnter={() => setHoveredMenu('hosting')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="absolute -top-3 left-0 w-full h-3"></div>
                {hostingLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#13182b] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* 📍 UBICACIONES */}
          <li
            className="relative group"
            onMouseEnter={() => setHoveredMenu('ubicaciones')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center text-gray-300 hover:text-white transition-colors">
              Ubicaciones
              <ChevronDown
                size={18}
                className={`ml-1 transition-transform duration-200 ${
                  hoveredMenu === 'ubicaciones' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {hoveredMenu === 'ubicaciones' && (
              <div
                className="absolute top-full mt-2 w-44 bg-[#0a0c17] border border-[#20253a] rounded-xl shadow-lg py-2"
                onMouseEnter={() => setHoveredMenu('ubicaciones')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="absolute -top-3 left-0 w-full h-3"></div>
                <a
                  href="#locations"
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#13182b] transition-colors"
                >
                  Miami, Florida
                </a>
              </div>
            )}
          </li>

          {/* 📚 RECURSOS */}
          <li
            className="relative group"
            onMouseEnter={() => setHoveredMenu('recursos')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center text-gray-300 hover:text-white transition-colors">
              Recursos
              <ChevronDown
                size={18}
                className={`ml-1 transition-transform duration-200 ${
                  hoveredMenu === 'recursos' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {hoveredMenu === 'recursos' && (
              <div
                className="absolute top-full mt-2 w-56 bg-[#0a0c17] border border-[#20253a] rounded-xl shadow-lg py-2"
                onMouseEnter={() => setHoveredMenu('recursos')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="absolute -top-3 left-0 w-full h-3"></div>
                {resourceLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#13182b] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* ❓ FAQ */}
          <li>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </li>
        </ul>

        {/* LOGIN */}
        <div className="hidden lg:flex items-center pr-2">
          <Link to="https://billing.trustsnodes.com/login.php">
            <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white w-full px-6">
              Acceder
            </Button>
          </Link>
        </div>

        {/* MENU MÓVIL */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
