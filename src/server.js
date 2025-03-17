const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisez un service comme Gmail, SendGrid, etc.
  auth: {
    user: 'leoncefolitse@gmail.com', // Remplacez par votre adresse e-mail
    pass: 'genarow2001', // Remplacez par votre mot de passe ou un token d'application
  },
});

// Route pour soumettre le formulaire
app.post('/submit-loan-request', (req, res) => {
  const formData = req.body;

  // Créer le contenu de l'e-mail
  const mailOptions = {
    from: 'votre-email@gmail.com', // Expéditeur
    to: 'destinataire@example.com', // Destinataire (votre e-mail ou celui de votre équipe)
    subject: 'Nouvelle demande de prêt', // Sujet de l'e-mail
    html: `
      <h1>Nouvelle demande de prêt</h1>
      <p><strong>Type de prêt:</strong> ${formData.typePret}</p>
      <p><strong>Prénom:</strong> ${formData.prenom}</p>
      <p><strong>Nom:</strong> ${formData.nom}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Téléphone:</strong> ${formData.telephone}</p>
      <p><strong>Adresse:</strong> ${formData.adresse}, ${formData.ville}, ${formData.province}, ${formData.codePostal}</p>
      <p><strong>Revenu annuel:</strong> ${formData.revenuAnnuel}</p>
      ${formData.typePret === 'hypothecaire' ? `
        <p><strong>Adresse de la propriété:</strong> ${formData.adressePropriete}</p>
        <p><strong>Prix de la propriété:</strong> ${formData.prixPropriete}</p>
      ` : ''}
      ${['auto', 'moto', 'vr', 'bateau', 'equipement'].includes(formData.typePret) ? `
        <p><strong>Marque du véhicule:</strong> ${formData.marque}</p>
        <p><strong>Modèle du véhicule:</strong> ${formData.modele}</p>
        <p><strong>Prix d'achat:</strong> ${formData.prixAchat}</p>
      ` : ''}
    `,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    } else {
      console.log('E-mail envoyé:', info.response);
      res.status(200).send('Demande soumise avec succès');
    }
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});