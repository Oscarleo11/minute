import { HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../pages/style.css';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const PersonalizedService = () => {

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
            <HeartHandshake className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6">Service personnalisé</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Accompagnement personnalisé tout au long du processus.
            </p>
          </div>
        </div>
      </section>

      {/* Détails du service */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Pourquoi choisir notre service personnalisé ?</h2>
              <p className="text-gray-600 mb-4">
                Nous offrons un accompagnement sur mesure pour vous guider à chaque étape de votre projet, de la demande de prêt à la finalisation.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Conseiller dédié disponible pour répondre à vos questions</li>
                <li>Solutions adaptées à vos besoins spécifiques</li>
                <li>Suivi régulier de votre dossier</li>
                <li>Assistance pour les démarches administratives</li>
                <li>Flexibilité pour adapter le service à vos attentes</li>
              </ul>
              <Link to="/formulaire" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Faire une demande
              </Link>
            </div>
            <div>
              <img
                src="https://th.bing.com/th/id/R.f67abdf384f1ddaa91b7f7df8a9839a9?rik=hZFNTwZYkps3hg&riu=http%3a%2f%2fderudder.fr%2fapp%2fuploads%2fsites%2f3%2f2018%2f01%2fDERUDDER-CUSTOMS-strength-3-Direct-personal-service_1000x600_acf_cropped.jpg&ehk=l%2f4ajZsvILdrEIeV%2falTOjpzaoejooagz2SfihnkcMk%3d&risl=&pid=ImgRaw&r=0" // Remplacez par une image appropriée
                alt="Service personnalisé"
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

export default PersonalizedService;