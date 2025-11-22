import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

const Home = () => {
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
      loanType: 'Prêt étudiant',
      feedback: 'Démarches simples et réponse rapide, merci !',
      image: 'https://randomuser.me/api/portraits/men/69.jpg'
    },
    {
      name: 'Charle Dupont',
      loanType: 'Prêt personnel',
      feedback: 'Démarches simples et réponse rapide, merci !',
      image: 'https://randomuser.me/api/portraits/men/79.jpg'
    }
  ];

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Des crédits adaptés à 
              <span className="text-blue-400 block">vos besoins</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Obtenez un financement rapide et personnalisé en quelques clics. 
              <span className="block text-blue-200 font-semibold">Votre réussite, notre priorité.</span>
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/formulaire" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300"
              >
                Faites une demande 
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir <span className="text-blue-600">Crédit transit Québec</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages qui font de nous votre partenaire de confiance
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Clock,
                title: "Réponse en 24 heures",
                description: "Notre processus d'approbation rapide vous donne une réponse en seulement 24 heures."
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
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {React.createElement(feature.icon, { className: "h-8 w-8 text-blue-600" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Nos chiffres en parlent</h2>
            <p className="text-xl text-blue-100">La confiance de nos clients fait notre réputation</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "98%", label: "Satisfaction" },
              { number: "10M$+", label: "Financements" },
              { number: "24H", label: "Réponse" },
              { number: "5K+", label: "Clients" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Processus Simple</h2>
            <p className="text-xl text-gray-600">4 étapes pour obtenir votre financement</p>
          </motion.div>

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
                title: "Approbation en 24 heures",
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-700 transition-colors duration-300">
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-200 -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres de Prêts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Offres de Prêts</h2>
            <p className="text-xl text-gray-600">Des solutions adaptées à chaque projet</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prêt personnel",
                image: "https://neotralo.ch/wp-content/uploads/2019/12/7.jpg",
                description: "Financez vos projets personnels avec des conditions avantageuses"
              },
              {
                title: "Prêt immobilier",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFf4a9cF_HQxo1baovhF-N1k9yL0Op1lSqSQ&s",
                description: "Réalisez vos projets immobiliers avec notre accompagnement expert"
              },
              {
                title: "Crédit auto",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ggmLKNLedMCvW5ql6HaQAykSH0dl4-Wreg&s",
                description: "Obtenez le véhicule de vos rêves avec des financements flexibles"
              },
            ].map((loan, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={loan.image} 
                    alt={loan.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{loan.title}</h3>
                  <p className="text-gray-600 mb-4">{loan.description}</p>
                  <Link 
                    to="/Services" 
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nous Sommes Avec Vous À Chaque Étape
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Votre analyste vous accompagne personnellement à chaque étape de vos démarches. 
                Il est votre interlocuteur unique et s'assure du bon suivi de votre dossier.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/formulaire"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
                >
                  Faites votre demande
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://github.com/Oscarleo11/Network-image/blob/main/call-center.png?raw=true" 
                  alt="Accompagnement personnalisé" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Ils nous font confiance</h2>
            <p className="text-xl text-gray-300">Découvrez les expériences de nos clients satisfaits</p>
          </motion.div>

          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 rounded-2xl p-8 text-center"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500"
                  />
                  <blockquote className="text-xl italic text-gray-200 mb-6 leading-relaxed">
                    "{testimonial.feedback}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-blue-300">{testimonial.loanType}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;