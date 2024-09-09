import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage.tsx';
import Services from './pages/Services.tsx';
import NavigationBar from './components/NavigationBar';
import './App.css'
import HomeLoans from './pages/HomeLoans.tsx';
import AssetFinance from './pages/AssetFinance.tsx';
import CommercialLoan from './pages/CommercialLoan.tsx';
import FirstHomeBuyer from './pages/FirstHomeBuyer.tsx';
import PersonalLoan from './pages/PersonalLoan.tsx';
import Refinancing from './pages/Refinancing.tsx';
import SMSFLending from './pages/SMSFLending.tsx';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/home-loans" element={<HomeLoans />} />
        <Route path="/services/first-home-buyer" element={<FirstHomeBuyer />} />
        <Route path="/services/refinancing" element={<Refinancing />} />
        <Route path="/services/commercial-loan" element={<CommercialLoan />} />
        <Route path="/services/asset-finance" element={<AssetFinance />} />
        <Route path="/services/personal-loan" element={<PersonalLoan />} />
        <Route path="/services/self-managed-super-fund-smsf-lending" element={<SMSFLending />} />
      </Routes>
    </Router>
  );
}


export default App
