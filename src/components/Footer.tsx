import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Section CTA avant le footer */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à concrétiser votre projet ?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Obtenez une réponse sous 24 heures et démarrez votre projet en toute sérénité
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/formulaire"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Demander un crédit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contenu principal du footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Colonne Logo et description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://github.com/Oscarleo11/Network-image/blob/main/elan-finance.png?raw=true"
                alt="Crédit transit Québec - Votre partenaire financier"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour des solutions de financement 
              personnalisées et rapides au Québec.
            </p>
            <div className="flex items-center text-gray-300">
              <Clock className="h-5 w-5 mr-2 text-blue-400" />
              <div>
                <p className="font-semibold">Réponse en 24h</p>
                <p className="text-sm">Processus rapide et efficace</p>
              </div>
            </div>
          </motion.div>

          {/* Colonne Liens rapides */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-blue-600 pb-2">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Accueil' },
                { path: '/a-propos', label: 'À propos' },
                { path: '/services', label: 'Services' },
                { path: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-blue-600 pb-2">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {[
                'Prêt personnel',
                'Prêt immobilier',
                'Crédit auto',
                'Financement projet',
                'Rachat de crédit'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-default flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-70" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-blue-600 pb-2">
              Contactez-nous
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                {/* <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" /> */}
                {/* <div>
                  <p className="font-medium">Téléphone</p>
                  <a 
                    href="tel:+18198036056" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    +1 819-803-6056
                  </a>
                </div> */}
              </li>
              
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:elanfinancementquebec@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 break-words"
                  >
                    elanfinancementquebec@gmail.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Localisation</p>
                  <p className="text-gray-300">Québec, Canada</p>
                </div>
              </li>
              
              <li className="flex items-start space-x-3 pt-2">
                <Facebook className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Réseaux sociaux</p>
                  <a
                    href="https://www.facebook.com/share/1A2nuouvKp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center"
                  >
                    Suivez-nous sur Facebook
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Section de copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Élan Financier Québec. Tous droits réservés.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm text-gray-400"
            >
              <Link to="/mentions-legales" className="hover:text-blue-400 transition-colors duration-200">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="hover:text-blue-400 transition-colors duration-200">
                Politique de confidentialité
              </Link>
              <Link to="/cookies" className="hover:text-blue-400 transition-colors duration-200">
                Cookies
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;