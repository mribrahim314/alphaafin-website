import Footer from "../components/Footer";
import HomeLoanTypes from "../components/HomeLoanTypes";
import HomeLoanOptions from "../components/LoanOptions";
import MortgageEstimateSection from "../components/MortgageEstimationSection";
import ServicesHeader from "../components/ServicesHeader";


export default function HomeLoans() {
  return (
    <>
    <ServicesHeader Title="Home Loans"/>
    <HomeLoanOptions loanOptions={[{
    title: "First Home Buyer",
    description: "First home buyers represent a significant portion of the real estate market, often driven by the desire for stability, investment in property, and the opportunity to personalize a living space.",
    image: "/assets/people.png"
  },
  {
    title: "Refinancing",
    description: "Refinancing involves replacing an existing mortgage with a new loan, typically to take advantage of better terms, such as lower interest rates, reduced monthly payments, or a shorter loan term.",
    image: "/assets/people.png"
  },
  {
    title: "Investment Property",
    description: "An investment property is real estate purchased primarily for the purpose of generating income or profit. Unlike a primary residence, where the owner lives.",
    image: "/assets/people.png"
  }]} mainTitle={"Alphaa Financial Solutions"} subTitle={"We Offer A Variety Of Home Loan Options Tailored To Suit Your Individual Needs"} introText={"Our Home Loan Services"}/>
    <HomeLoanTypes/>
    <MortgageEstimateSection/>
    <Footer/>
    </>
  )
}
