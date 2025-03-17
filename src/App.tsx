import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
// import Contact from './pages/Contact';
import LoanForm from './pages/LoanForm';
import MortgageLoan from './components/services/MortgageLoan';
import AutoLoan from './components/services/AutoLoan';
import PersonalLoan from './components/services/PersonalLoan';
import BusinessLoan from './components/services/BusinessLoan';
import LoanProtection from './components/services/LoanProtection';
import PersonalizedService from './components/services/PersonalizedService';
import StudentLoan from './components/services/StudentLoan';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/formulaire" element={<LoanForm />} />
            <Route path="/services/mortgage-loan" element={<MortgageLoan />} />
            <Route path="/services/auto-loan" element={<AutoLoan />} />
            <Route path="/services/personal-loan" element={<PersonalLoan />} />
            <Route path="/services/business-loan" element={<BusinessLoan />} />
            <Route path="/services/loan-protection" element={<LoanProtection />} />
            <Route path="/services/personalized-service" element={<PersonalizedService />} />
            <Route path="/services/student-loan" element={<StudentLoan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;