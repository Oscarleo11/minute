import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Calendar, 
  User, 
  Home, 
  Mail, 
  Phone, 
  Briefcase, 
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  FileText
} from 'lucide-react';
import React from 'react';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    // Type de prêt
    typePret: '',
    // Montant et durée
    montant: '',
    duree: '',
    // Informations personnelles
    civilite: 'M.',
    nom: '',
    prenom: '',
    dateNaissance: '',
    adresse: '',
    codePostal: '',
    ville: '',
    pays: 'Canada',
    email: '',
    confirmEmail: '',
    telephone: '',
    // Situation actuelle
    situationFamiliale: 'celibataire',
    profession: '',
    revenuMensuel: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatCurrency = (value: string) => {
    if (!value) return '';
    const number = value.replace(/\D/g, '');
    return new Intl.NumberFormat('fr-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0
    }).format(Number(number));
  };

  const parseCurrency = (value: string) => {
    return value.replace(/[^\d]/g, '');
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation de soumission
    setTimeout(() => {
      setIsSubmitting(false);
      // Soumission réelle via FormSubmit
      const form = e.target as HTMLFormElement;
      form.submit();
    }, 2000);
  };

  const steps = [
    { number: 1, title: 'Projet', icon: DollarSign },
    { number: 2, title: 'Personnel', icon: User },
    { number: 3, title: 'Situation', icon: Briefcase },
    { number: 4, title: 'Validation', icon: Shield }
  ];

  const loanTypes = [
    { value: 'personnel', label: 'Prêt personnel', icon: DollarSign },
    { value: 'auto', label: 'Prêt automobile', icon: FileText },
    { value: 'immobilier', label: 'Prêt immobilier', icon: Home },
    { value: 'etudiant', label: 'Prêt étudiant', icon: User },
    { value: 'commercial', label: 'Prêt commercial', icon: Briefcase },
    { value: 'autres', label: 'Autres crédits', icon: Briefcase }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Votre Demande de <span className="text-blue-600">Prêt</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Remplissez votre demande en 5 minutes et obtenez une réponse sous <span className="text-blue-500 font-semibold">24 heures</span>
          </p>
        </motion.div>

        {/* Barre de progression */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center flex-1">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                } transition-all duration-300`}>
                  {React.createElement(step.icon, { className: "h-6 w-6" })}
                </div>
                <span className={`text-sm font-medium mt-2 ${
                  currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </motion.div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/elanfinancementquebec@gmail.com"
            method="POST"
          >
            {/* Configuration FormSubmit */}
            <input type="hidden" name="_subject" value="Nouvelle demande de prêt - Crédit Transit Québec" />
            <input type="hidden" name="_autoresponse" value="Merci pour votre demande de prêt ! Notre équipe vous contactera dans les 24 heures pour étudier votre dossier." />
            <input type="hidden" name="_next" value="https://elanfinancierquebec.vercel.app/thanks" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="p-6 md:p-8">
              {/* Étape 1: Informations sur le prêt */}
              {currentStep === 1 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="text-center mb-8">
                    <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Votre Projet de Financement</h2>
                    <p className="text-gray-600">Choisissez le type de prêt qui correspond à votre besoin</p>
                  </div>

                  <div className="space-y-6">
                    {/* Type de prêt */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Type de prêt souhaité
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {loanTypes.map((loan) => (
                          <div
                            key={loan.value}
                            className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                              formData.typePret === loan.value
                                ? 'border-blue-600 bg-blue-50 shadow-md'
                                : 'border-gray-200 hover:border-blue-400 hover:shadow-sm'
                            }`}
                            onClick={() => setFormData(prev => ({ ...prev, typePret: loan.value }))}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${
                                formData.typePret === loan.value ? 'bg-blue-600' : 'bg-gray-100'
                              }`}>
                                {React.createElement(loan.icon, { 
                                  className: `h-5 w-5 ${
                                    formData.typePret === loan.value ? 'text-white' : 'text-gray-600'
                                  }` 
                                })}
                              </div>
                              <span className={`font-medium ${
                                formData.typePret === loan.value ? 'text-blue-600' : 'text-gray-700'
                              }`}>
                                {loan.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Montant et durée */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Montant souhaité ($ CAD)
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="montant"
                            value={formatCurrency(formData.montant)}
                            onChange={(e) => {
                              const rawValue = parseCurrency(e.target.value);
                              setFormData(prev => ({ ...prev, montant: rawValue }));
                            }}
                            placeholder="25,000"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Durée de remboursement
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <select
                            name="duree"
                            value={formData.duree}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none"
                            required
                          >
                            <option value="">Choisissez la durée</option>
                            <option value="6">6 mois</option>
                            <option value="12">12 mois</option>
                            <option value="24">24 mois</option>
                            <option value="36">36 mois</option>
                            <option value="48">48 mois</option>
                            <option value="60">60 mois</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Étape 2: Informations personnelles */}
              {currentStep === 2 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="text-center mb-8">
                    <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Vos Informations Personnelles</h2>
                    <p className="text-gray-600">Renseignez vos coordonnées pour que nous puissions vous contacter</p>
                  </div>

                  <div className="space-y-6">
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Civilité
                        </label>
                        <select
                          name="civilite"
                          value={formData.civilite}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        >
                          <option value="M.">M.</option>
                          <option value="Mme">Mme</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom
                        </label>
                        <input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Prénom
                        </label>
                        <input
                          type="text"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Date de naissance
                        </label>
                        <input
                          type="date"
                          name="dateNaissance"
                          value={formData.dateNaissance}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Adresse
                      </label>
                      <input
                        type="text"
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleChange}
                        placeholder="1234 Rue Principale"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Code postal
                        </label>
                        <input
                          type="text"
                          name="codePostal"
                          value={formData.codePostal}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Ville
                        </label>
                        <input
                          type="text"
                          name="ville"
                          value={formData.ville}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Pays
                        </label>
                        <select
                          name="pays"
                          value={formData.pays}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        >
                          <option value="Canada">Canada</option>
                          <option value="France">France</option>
                          <option value="Belgique">Belgique</option>
                          <option value="Suisse">Suisse</option>
                        </select>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-gray-400" />
                            Adresse e-mail
                          </div>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Confirmer l'e-mail
                        </label>
                        <input
                          type="email"
                          name="confirmEmail"
                          value={formData.confirmEmail}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-gray-400" />
                          Numéro de téléphone
                        </div>
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Étape 3: Situation actuelle */}
              {currentStep === 3 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="text-center mb-8">
                    <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Votre Situation Actuelle</h2>
                    <p className="text-gray-600">Aidez-nous à mieux comprendre votre profil financier</p>
                  </div>

                  <div className="space-y-6">
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Situation familiale
                        </label>
                        <select
                          name="situationFamiliale"
                          value={formData.situationFamiliale}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        >
                          <option value="celibataire">Célibataire</option>
                          <option value="marie">Marié(e)</option>
                          <option value="divorce">Divorcé(e)</option>
                          <option value="veuf">Veuf/Veuve</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Profession
                        </label>
                        <input
                          type="text"
                          name="profession"
                          value={formData.profession}
                          onChange={handleChange}
                          placeholder="Ex: Ingénieur, Enseignant, etc."
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Revenu mensuel net ($ CAD)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="revenuMensuel"
                          value={formatCurrency(formData.revenuMensuel)}
                          onChange={(e) => {
                            const rawValue = parseCurrency(e.target.value);
                            setFormData(prev => ({ ...prev, revenuMensuel: rawValue }));
                          }}
                          placeholder="4,500"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Étape 4: Récapitulatif */}
              {currentStep === 4 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="text-center mb-8">
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Récapitulatif de Votre Demande</h2>
                    <p className="text-gray-600">Vérifiez les informations avant de soumettre votre demande</p>
                  </div>

                  <motion.div variants={itemVariants} className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Votre projet
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Type de prêt:</span>
                        <span className="font-semibold ml-2">{loanTypes.find(l => l.value === formData.typePret)?.label}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Montant:</span>
                        <span className="font-semibold ml-2">{formatCurrency(formData.montant)}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Durée:</span>
                        <span className="font-semibold ml-2">{formData.duree} mois</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Que se passe-t-il ensuite ?</h4>
                        <ul className="text-blue-800 space-y-1 text-sm">
                          <li>• Notre équipe étudie votre demande sous 24 heures</li>
                          <li>• Un conseiller vous contacte pour finaliser votre dossier</li>
                          <li>• Réponse définitive dans les plus brefs délais</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between mt-8 pt-6 border-t border-gray-200"
              >
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
                  >
                    Retour
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium flex items-center"
                  >
                    Continuer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Soumettre la demande
                        <CheckCircle className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </motion.div>
            </div>
          </form>
        </motion.div>

        {/* Informations de sécurité */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 text-sm text-gray-500"
        >
          <div className="flex items-center justify-center space-x-4">
            <Shield className="h-4 w-4" />
            <span>Vos données sont sécurisées et confidentielles</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoanForm;