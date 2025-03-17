import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../pages/style.css'; 
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const BusinessLoan = () => {

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
            <Briefcase className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6">Prêts commerciaux</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Financement pour démarrer ou développer votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Détails du service */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Pourquoi choisir nos prêts commerciaux ?</h2>
              <p className="text-gray-600 mb-4">
                Nous offrons des solutions de financement flexibles pour vous aider à démarrer, développer ou moderniser votre entreprise.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Taux d'intérêt compétitifs</li>
                <li>Montants adaptés à vos besoins commerciaux</li>
                <li>Processus d'approbation rapide</li>
                <li>Options de remboursement flexibles</li>
                <li>Accompagnement personnalisé pour les entrepreneurs</li>
              </ul>
              <Link to="/formulaire" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Faire une demande
              </Link>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1d5NHlJ8f2oycgzPe4Kw1jVZuEbU0z6qmjA&s" // Remplacez par une image appropriée
                alt="Prêts commerciaux"
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

export default BusinessLoan;