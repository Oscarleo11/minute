import { GraduationCap } from 'lucide-react'; // Utilisez l'icône GraduationCap
import { Link } from 'react-router-dom';
import '../../pages/style.css'; 
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const StudentLoan = () => {
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
            <GraduationCap className="h-16 w-16 mx-auto mb-4" /> {/* Icône adaptée */}
            <h1 className="text-4xl font-bold mb-6">Prêt étudiant</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Des solutions de financement pour soutenir vos études et votre avenir.
            </p>
          </div>
        </div>
      </section>

      {/* Détails du service */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Pourquoi choisir notre prêt étudiant ?</h2>
              <p className="text-gray-600 mb-4">
                Nous offrons des prêts étudiants flexibles pour vous aider à financer vos études, que ce soit pour les frais de scolarité, le logement ou d'autres besoins éducatifs.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Taux d'intérêt compétitifs</li>
                <li>Paiements différés jusqu'à la fin de vos études</li>
                <li>Montants adaptés à vos besoins éducatifs</li>
                <li>Processus d'approbation rapide et simple</li>
                <li>Options de remboursement flexibles après l'obtention de votre diplôme</li>
              </ul>
              <Link to="/formulaire" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Faire une demande
              </Link>
            </div>
            <div>
              <img
                src="https://www.credit-internet.com/wp-content/uploads/2019/09/Pr%C3%AAt-%C3%A9tudiant-Cr%C3%A9dit-%C3%A9tudiant-Cr%C3%A9dit-pour-%C3%A9tudes-Credit-Internet.com-Pr%C3%AAt-%C3%A9tudes-Credit-Internet-1.jpg" // Remplacez par une image appropriée
                alt="Prêt étudiant"
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

export default StudentLoan;