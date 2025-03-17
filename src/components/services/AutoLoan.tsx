import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../pages/style.css';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const AutoLoan = () => {
  const testimonials = [
    {
      name: 'Benjamin Ditch',
      loanType: 'Prêt immobilier',
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
            <Car className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6">Prêts automobiles</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Financement pour véhicules neufs et d'occasion avec des taux compétitifs.
            </p>
          </div>
        </div>
      </section>

      {/* Détails du service */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Pourquoi choisir nos prêts automobiles ?</h2>
              <p className="text-gray-600 mb-4">
                Nous offrons des solutions de financement flexibles pour vous aider à acquérir le véhicule de vos rêves, que ce soit une voiture neuve ou d'occasion.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Taux d'intérêt compétitifs</li>
                <li>Financement pour véhicules neufs et d'occasion</li>
                <li>Processus d'approbation rapide</li>
                <li>Options de remboursement flexibles</li>
              </ul>
              <Link to="/formulaire" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Faire une demande
              </Link>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/736x/97/cd/4b/97cd4bc78da1eedb7196744a4b49e5af.jpg" // Remplacez par une image appropriée
                alt="Prêts automobiles"
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

export default AutoLoan;