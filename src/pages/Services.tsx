import { Home, DollarSign, ShieldCheck, HeartHandshake, Car, Briefcase, GraduationCap } from 'lucide-react';
import './style.css'; // Import fichier CSS
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Services = () => {
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
      <section
        className="hero-section relative py-20 bg-blue-900 text-white pt-20 
             bg-[url('./nos-services.webp')] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Contenu */}
        <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
              Des solutions de financement adaptées à votre situation et à vos besoins, en seulement 24 heures.
            </p>
          </div>
        </div>
      </section>



      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Link to="/services/mortgage-loan" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Home className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Prêts hypothécaires</h3>
              <p className="text-gray-600">Solutions de financement pour l'achat, le refinancement ou la rénovation de votre propriété.</p>
            </Link>

            <Link to="/services/auto-loan" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Car className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Prêts automobiles</h3>
              <p className="text-gray-600">Financement pour véhicules neufs et d'occasion avec des taux compétitifs.</p>
            </Link>

            <Link to="/services/business-loan" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Briefcase className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Prêts commercial</h3>
              <p className="text-gray-600">Financement pour démarrer ou développer votre entreprise.</p>
            </Link>

            <Link to="/services/student-loan" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <GraduationCap className="h-12 w-12 text-blue-600 mb-4" /> {/* Icône adaptée */}
              <h3 className="text-xl font-semibold mb-3">Prêt étudiant</h3>
              <p className="text-gray-600">Des solutions de financement pour soutenir vos études et votre avenir.</p>
            </Link>

            <Link to="/services/personal-loan" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Prêts personnels</h3>
              <p className="text-gray-600">Solutions adaptées à votre budget pour tous vos projets personnels.</p>
            </Link>

            <Link to="/services/loan-protection" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Protection garantie</h3>
              <p className="text-gray-600">Garanties et protections supplémentaires disponibles pour vos prêts.</p>
            </Link>

            <Link to="/services/loan-protection" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Approbation en 24 heures</h3>
              <p className="text-gray-600">Réponse rapide pour tous types de prêts, sans attente prolongée.</p>
            </Link>

            <Link to="/services/personalized-service" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <HeartHandshake className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Service personnalisé</h3>
              <p className="text-gray-600">Accompagnement personnalisé tout au long du processus.</p>
            </Link>
            {/* {[
              {
                icon: Home,
                title: "Prêts hypothécaires",
                description: "Solutions de financement pour l'achat, le refinancement ou la rénovation de votre propriété."
              },
              {
                icon: Car,
                title: "Prêts automobiles",
                description: "Financement pour véhicules neufs et d'occasion avec des taux compétitifs."
              },
              {
                icon: DollarSign,
                title: "Prêts personnels",
                description: "Solutions adaptées à votre budget pour tous vos projets personnels."
              },
              {
                icon: Briefcase,
                title: "Prêts commerciaux",
                description: "Financement pour démarrer ou développer votre entreprise."
              },
              {
                icon: Clock,
                title: "Approbation en 24 minutes",
                description: "Réponse rapide pour tous types de prêts, sans attente prolongée."
              },
              {
                icon: FileCheck,
                title: "2e chance au crédit",
                description: "Solutions pour les personnes avec un crédit moins que parfait."
              },
              {
                icon: ShieldCheck,
                title: "Protection garantie",
                description: "Garanties et protections supplémentaires disponibles pour vos prêts."
              },
              {
                icon: HeartHandshake,
                title: "Service personnalisé",
                description: "Accompagnement personnalisé tout au long du processus."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* <section className="loan-section">
        <h2>Nos offres de prêts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Prêt personnel",
              image: "https://neotralo.ch/wp-content/uploads/2019/12/7.jpg", // Image statique pour le prêt personnel
            },
            {
              title: "Prêt immobilier",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFf4a9cF_HQxo1baovhF-N1k9yL0Op1lSqSQ&s", // Image statique pour le prêt immobilier
            },
            {
              title: "Crédit auto",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ggmLKNLedMCvW5ql6HaQAykSH0dl4-Wreg&s", // Image statique pour le crédit auto
            },
          ].map((loan, index) => (
            <motion.div key={index} className="loan-card" whileHover={{ scale: 1.05 }}>
              <img src={loan.image} alt={loan.title} className="w-full h-48 object-cover" />
              <h3>{loan.title}</h3>
              <Link to="/formulaire">En savoir plus</Link>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Demande en ligne",
                description: "Remplissez notre formulaire simple et sécurisé en quelques minutes."
              },
              {
                step: "2",
                title: "Évaluation rapide",
                description: "Notre équipe analyse votre demande immédiatement."
              },
              {
                step: "3",
                title: "Approbation en 24 minutes",
                description: "Recevez votre approbation et les conditions de financement."
              },
              {
                step: "4",
                title: "Finalisation",
                description: "Signez les documents et recevez votre financement rapidement."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
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

export default Services;