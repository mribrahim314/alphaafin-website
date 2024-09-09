
import ServicesHeader from '../components/ServicesHeader'
import ServiceDetails from '../components/ServiceDetails'
import MortgageEstimateSection from '../components/MortgageEstimationSection'
import Footer from '../components/Footer'

export default function FirstHomeBuyer() {
  return (
    <>
    <ServicesHeader Title='First Home Buyer'/>
    <ServiceDetails loanTypes={[{title:"Personalized Mortgage Options:",description:"We offer a range of mortgage products specifically designed for first-time buyers, including fixed-rate and adjustable-rate mortgages. Our financial advisors work with you to find the best loan that fits your budget and long-term goals."},{title:"Pre-Approval Assistance:",description:"Getting pre-approved for a mortgage is a critical first step. We guide you through the pre-approval process, helping you understand how much you can afford and giving you a competitive edge when making an offer on a home."},{title:"Pre-Approval Assistance:",description:"Getting pre-approved for a mortgage is a critical first step. We guide you through the pre-approval process, helping you understand how much you can afford and giving you a competitive edge when making an offer on a home."},{title:"Pre-Approval Assistance:",description:"Getting pre-approved for a mortgage is a critical first step. We guide you through the pre-approval process, helping you understand how much you can afford and giving you a competitive edge when making an offer on a home."},{title:"Pre-Approval Assistance:",description:"Getting pre-approved for a mortgage is a critical first step. We guide you through the pre-approval process, helping you understand how much you can afford and giving you a competitive edge when making an offer on a home."},{title:"Pre-Approval Assistance:",description:"Getting pre-approved for a mortgage is a critical first step. We guide you through the pre-approval process, helping you understand how much you can afford and giving you a competitive edge when making an offer on a home."}]} imgSrc={'/assets/family.png'} mainTitle={'First Home Buyer at Alpha Financial Solutions'} subtitle={'Services Offered to First Home Buyers'} introText={'At Alpha Financial Solutions, we understand that purchasing your first home is one of the most significant financial decisions you’ll ever make. As a first-time homebuyer, navigating the complexities of the real estate market and mortgage options can be overwhelming. That’s why we offer tailored financial solutions and expert guidance to help you make informed decisions and achieve your dream of homeownership.'}/>
    <MortgageEstimateSection/>
    <Footer/>
    </>
  )
}
