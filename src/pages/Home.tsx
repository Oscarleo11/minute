import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Users, Award, History, Clock, Car, Plane, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; // Import fichier CSS


const Home = () => {
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
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Des prêts adaptés à vos besoins</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Obtenez un financement rapide et personnalisé en quelques clics.</p>
          <Link to="/formulaire" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Faites une demande <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Pourquoi choisir 24min prêt?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "Réponse en 24 minutes",
              description: "Notre processus d'approbation rapide vous donne une réponse en seulement 24 minutes."
            },
            {
              icon: DollarSign,
              title: "Taux compétitifs",
              description: "Nous négocions avec plusieurs prêteurs pour vous obtenir le meilleur taux possible."
            },
            {
              icon: Users,
              title: "Service personnalisé",
              description: "Un conseiller dédié pour vous accompagner à chaque étape de votre demande."
            }
          ].map((feature, index) => (
            <motion.div key={index} className="feature-card" whileHover={{ scale: 1.05 }}>
              {React.createElement(feature.icon, { className: "h-12 w-12 text-blue-600 mb-4" })}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* À Propos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">À Propos de Nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                // icon: DollarSign,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32kRyADkR33CJyRpK0ZP87ej9hf7r0giyRw&s",
                title: "Notre Mission",
                description: "Rendre le financement accessible à tous en offrant des solutions personnalisées et rapides pour tous types de besoins."
              },
              {
                // icon: Car,
                image: "https://th.bing.com/th/id/R.88d4358cc3d53777ec42af3433e1e31e?rik=tCKHdbaUd%2bshsA&riu=http%3a%2f%2fblogs.sw.siemens.com%2fwp-content%2fuploads%2fsites%2f19%2f2019%2f09%2fImage-1-22.jpg&ehk=tVd6%2fCLemqo3%2fGZz8sHl150VHv3j%2bFZScWBz5sjMbk8%3d&risl=&pid=ImgRaw&r=0",
                title: "Nos Valeurs",
                description: "Rapidité, intégrité et transparence sont au cœurde chacune de nos actions."
              },
              {
                // icon: Plane,
                image: "https://th.bing.com/th/id/OIP.nXuKgjE06F9XGQYmyIGCSwHaDp?rs=1&pid=ImgDetMain",
                title: "Notre Histoire",
                description: "Fondée en 2015, 24min prêt est devenue une référence dans le financement rapide au Québec."
              }
            ].map((item, index) => (
              <motion.div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform" whileHover={{ scale: 1.05 }}>
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="mt-4">
                  {/* {React.createElement(item.icon, { className: "h-12 w-12 text-blue-600 mb-4 mx-auto" })} */}
                  <h3 className="text-xl font-semibold text-center mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="stats-section">
        <h2>Nos chiffres en parlent</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {["98% Satisfaction", "10M$+ Financements", "24 min Réponse", "5K+ Clients"].map((stat, index) => (
            <motion.div key={index} className="stat-card" whileHover={{ scale: 1.05 }}>
              <h3>{stat.split(" ")[0]}</h3>
              <p>{stat.split(" ")[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Processus */}
      {/* Process Section */}
      <section className="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2>Processus</h2>
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
              <motion.div
                key={index}
                className="process-step"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnement Section */}
      <section className="accompagnement-section">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
    <div className="text-center md:text-left md:w-1/2">
      <h2 className="accompagnement-title">Nous Sommes Avec Vous À Chaque Étape De Votre Demande</h2>
      <p className="accompagnement-description mt-4">
        Votre analyste vous accompagne à chaque étape de vos démarches. Il est votre interlocuteur unique et s’assure du bon suivi de votre dossier.
      </p>
      <Link
        to="/formulaire"
        className="accompagnement-content inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Faites votre demande <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>

    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
      <img 
        src="https://github.com/Oscarleo11/Network-image/blob/main/call-center.png?raw=true" 
        alt="Illustration d'accompagnement" 
        className="w-100 h-100 object-cover" 
      />
    </div>
  </div>
</section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Notre Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Users,
              title: "Notre Mission",
              description: "Rendre le financement accessible à tous les Québécois en offrant des solutions personnalisées et rapides pour tous types de besoins."
            },
            {
              icon: Award,
              title: "Nos Valeurs",
              description: "Rapidité, intégrité et transparence sont au cœur de chacune de nos actions."
            },
            {
              icon: History,
              title: "Notre Histoire",
              description: "Fondée en 2015, 24min prêt est devenue une référence dans le financement rapide au Québec."
            }
          ].map((item, index) => (
            <motion.div key={index} className="mission-card" whileHover={{ scale: 1.05 }}>
              {React.createElement(item.icon, { className: "h-12 w-12 text-blue-600 mb-4" })}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>



      {/* Offres de Prêts Section */}
      <section className="loan-section">
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
              <Link to="/Services">En savoir plus</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Témoignages */}
      {/* Témoignages Section */}
      <section className="testimonials-section">
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

export default Home;
