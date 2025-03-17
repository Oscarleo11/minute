import { useNavigate } from 'react-router-dom'; // Si vous utilisez React Router
import './style.css'; // Importez votre fichier CSS


const ConfirmationPage = () => {
    const navigate = useNavigate(); // Utilisé pour la navigation

    const handleReturnHome = () => {
        navigate('/'); // Redirige vers la page d'accueil
    };

    return (
        <div className="confirmation-container pt-20">
            <div className="confirmation-card">
                <h1 className="confirmation-title">Merci pour votre demande !</h1>
                <p className="confirmation-text">
                    Votre demande de prêt a été soumise avec succès. Nous avons bien reçu vos informations et
                    vous contacterons dans les plus brefs délais.
                </p>
                <p className="confirmation-text">
                    Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter à
                    l'adresse suivante :{' '}
                    <a href="mailto:support@votresite.com" className="support-link">
                        24minutepret@gmail.com
                    </a>
                    .
                </p>
                <button onClick={handleReturnHome} className="return-button">
                    Retour à la page d'accueil
                </button>
            </div>
        </div>
    );
};

export default ConfirmationPage;