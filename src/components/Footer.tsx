import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'; // Importez l'icône Facebook

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://raw.githubusercontent.com/Oscarleo11/Network-image/refs/heads/main/24-minutes-pret.png"
                alt="Logo"
                className="h-12 md:h-16 w-auto"  // Ajuste la taille du logo pour les petits écrans
                style={{ filter: 'invert(1)' }} // Inverse les couleurs pour un logo blanc
              />
            </Link>
            <p className="text-gray-300">
              Solutions de financement personnalisées pour tous vos besoins, en seulement 24 minutes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Accueil</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-white">À propos</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+1 819-803-6056</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>24minutepret@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>10808 Ave,Alberta AB T5K QC Canada</span>
              </li>
              {/* Ajoutez l'icône Facebook avec un lien vers la page de l'entreprise */}
              <li className="flex items-center space-x-2">
                <Facebook className="h-5 w-5" />
                <a
                  href="https://www.facebook.com/share/1A2nuouvKp/" // Remplacez par le lien de votre page Facebook
                  target="_blank" // Ouvre le lien dans un nouvel onglet
                  rel="noopener noreferrer" // Bonne pratique pour les liens externes
                  className="text-gray-300 hover:text-white"
                >
                  Suivez-nous sur Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} 24min prêt. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;