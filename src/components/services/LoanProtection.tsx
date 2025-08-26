import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../pages/style.css';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const LoanProtection = () => {

  const testimonials = [
    {
      name: 'Benjamin Ditch',
      loanType: 'Prêt hypothécaire',
      feedback: 'Service rapide et efficace, je recommande !',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Corinne Morel',
      loanType: 'Investissement',
      feedback: 'Expérience parfaite, très satisfait du service.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Bertrand Lazure',
      loanType: 'Prêt auto',
      feedback: 'Démarches simples et réponse rapide, merci !',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      name: 'Jeremy Lacroix',
      loanType: 'Prêt etudiant',
      feedback: 'Démarches simples et réponse rapide, merci !',
      image: 'https://randomuser.me/api/portraits/men/69.jpg'
    },
    {
      name: 'Charle Dupont',
      loanType: 'Prêt personnel',
      feedback: 'Démarches simples et réponse rapide, merci !',
      image: 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
      name: 'Antoine Martin',
      loanType: 'Prêt auto',
      feedback: 'Démarches simples et réponse rapide, merci !',
      image: 'https://randomuser.me/api/portraits/men/0.jpg'
    },
    {
      name: 'Julien Masso',
      loanType: 'Prêt personnel',
      feedback: 'Démarches simples et réponse rapide, merci !',
      image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },

  ];

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Pas de flèches
    dots: true,
  };
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShieldCheck className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6">Protection garantie</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Garanties et protections supplémentaires disponibles pour vos prêts.
            </p>
          </div>
        </div>
      </section>

      {/* Détails du service */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Pourquoi choisir notre protection garantie ?</h2>
              <p className="text-gray-600 mb-4">
                Nous offrons des garanties et protections supplémentaires pour vous assurer une tranquillité d'esprit tout au long de la durée de votre prêt.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Protection contre les imprévus (maladie, accident, décès)</li>
                <li>Assurance chômage optionnelle</li>
                <li>Couverture des frais médicaux en cas d'incapacité</li>
                <li>Options de suspension de paiement en cas de difficultés financières</li>
                <li>Flexibilité pour adapter la protection à vos besoins</li>
              </ul>
              <Link to="/formulaire" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Faire une demande
              </Link>
            </div>
            <div>
              <img
                src="https://www.zimegats.com/wp-content/uploads/2017/12/Server-Management-for-Small-Businesses.jpg" // Remplacez par une image appropriée
                alt="Protection garantie"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="testimonials-section ">
        <h2 className="text-3xl font-bold text-center mb-12">Ils nous font confiance</h2>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <blockquote className="testimonial-text">
                  "{testimonial.feedback}"
                </blockquote>
                <p className="testimonial-name">- {testimonial.name}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default LoanProtection;