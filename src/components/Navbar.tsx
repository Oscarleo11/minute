import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white fixed w-full top-0 z-50"> {/* Ajout de fixed, w-full, top-0 et z-50 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Augmenter la taille de la navbar */}
          <div className="flex items-center">
            {/* Ajout du logo avec filtre pour changer la couleur en blanc */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://raw.githubusercontent.com/Oscarleo11/Network-image/refs/heads/main/24-minutes-pret.png" 
                alt="Logo"
                className="h-12 md:h-16 w-auto"  // Ajuste la taille du logo pour les petits écrans
                style={{ filter: 'invert(1)' }} // Inverse les couleurs pour un logo blanc
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-blue-800 px-3 py-2 rounded-md">Accueil</Link>
              <Link to="/a-propos" className="hover:bg-blue-800 px-3 py-2 rounded-md">À propos</Link>
              <Link to="/services" className="hover:bg-blue-800 px-3 py-2 rounded-md">Services</Link>
              {/* <Link to="/contact" className="hover:bg-blue-800 px-3 py-2 rounded-md">Contact</Link> */}
              <Link to="/formulaire" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Demande de prêt</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-blue-800"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/a-propos"
              className="block px-3 py-2 rounded-md hover:bg-blue-800"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md hover:bg-blue-800"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            {/* <Link
              to="/contact"
              className="block px-3 py-2 rounded-md hover:bg-blue-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link> */}
            <Link
              to="/formulaire"
              className="block px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Demander un crédit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;