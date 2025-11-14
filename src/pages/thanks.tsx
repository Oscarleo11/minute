import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Home, 
  Mail, 
  Clock, 
  Phone, 
  Users,
  ArrowRight,
  Shield,
  Calendar
} from 'lucide-react';
import React from 'react';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  const handleContact = () => {
    window.location.href = 'mailto:elanfinancementquebec@gmail.com';
  };

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
        duration: 0.6
      }
    }
  };

  const nextSteps = [
    {
      icon: Clock,
      title: "Analyse sous 24h",
      description: "Notre équipe étudie votre demande dans les 24 heures ouvrables"
    },
    {
      icon: Phone,
      title: "Appel de confirmation",
      description: "Un conseiller vous contacte pour finaliser les détails"
    },
    {
      icon: Shield,
      title: "Approfondissement",
      description: "Validation complète de votre dossier et des pièces justificatives"
    },
    {
      icon: Calendar,
      title: "Réponse finale",
      description: "Obtention de votre réponse définitive et des conditions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Carte principale de confirmation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
        >
          <div className="p-8 md:p-12 text-center">
            {/* Icône de succès animée */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
              className="mb-6"
            >
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-2 -right-2"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Titre et message */}
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Félicitations ! Votre demande est 
              <span className="text-blue-600 block">en cours de traitement</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Nous avons bien reçu votre demande de prêt et notre équipe l'étudie avec attention. 
              Vous recevrez une réponse dans les <span className="text-blue-500 font-semibold">24 heures</span>.
            </motion.p>

            {/* Numéro de référence simulé */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-4 mb-6 inline-block"
            >
              <p className="text-sm text-gray-600 mb-1">Numéro de référence</p>
              <p className="text-lg font-mono font-bold text-gray-900">
                CTQ-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              variants={itemVariants}
              className="bg-blue-50 rounded-xl p-6 mb-8 max-w-md mx-auto"
            >
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold text-blue-900 mb-2">Besoin d'aide ?</h3>
                  <p className="text-blue-800 text-sm mb-3">
                    Notre équipe est à votre disposition pour toute question.
                  </p>
                  <button
                    onClick={handleContact}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    elanfinancementquebec@gmail.com
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Boutons d'action */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={handleReturnHome}
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Home className="h-5 w-5 mr-3" />
                Retour à l'accueil
              </button>
              
              {/* <button
                onClick={handleContact}
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Nous contacter
                <ArrowRight className="h-5 w-5 ml-3" />
              </button> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Étapes suivantes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8"
            variants={itemVariants}
          >
            Prochaines <span className="text-blue-600">Étapes</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                    {React.createElement(step.icon, { className: "h-8 w-8 text-blue-600" })}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline visuelle */}
          <motion.div
            variants={itemVariants}
            className="mt-8 relative"
          >
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              {nextSteps.map((_, index) => (
                <div
                  key={index}
                  className="w-4 h-4 bg-blue-600 rounded-full relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="w-4 h-4 bg-blue-600 rounded-full"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Section d'assurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vos données sont sécurisées</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Nous traitons votre demande avec la plus grande confidentialité et respectons 
              les normes les plus strictes en matière de protection des données.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmationPage;