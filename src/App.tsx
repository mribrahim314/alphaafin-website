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
        <Route path="/alphaafin-website/" element={<HomePage />} />
        <Route path="/alphaafin-website/about" element={<AboutPage />} />
        <Route path="/alphaafin-website/services" element={<Services />} />
        <Route path="/alphaafin-website/services/home-loans" element={<HomeLoans />} />
        <Route path="/alphaafin-website/services/first-home-buyer" element={<FirstHomeBuyer />} />
        <Route path="/alphaafin-website/services/refinancing" element={<Refinancing />} />
        <Route path="/alphaafin-website/services/commercial-loan" element={<CommercialLoan />} />
        <Route path="/alphaafin-website/services/asset-finance" element={<AssetFinance />} />
        <Route path="/alphaafin-website/services/personal-loan" element={<PersonalLoan />} />
        <Route path="/alphaafin-website/services/self-managed-super-fund-smsf-lending" element={<SMSFLending />} />
      </Routes>
    </Router>
  );
}


export default App
