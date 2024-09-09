
import ServicesHeader from '../components/ServicesHeader'
import ServiceDetails from '../components/ServiceDetails'
import MortgageEstimateSection from '../components/MortgageEstimationSection'
import Footer from '../components/Footer'
import LoanOptions from '../components/LoanOptions'

export default function Refinancing() {
  return (
    <>
    <ServicesHeader Title={'Refinancing'}/>
    <ServiceDetails loanTypes={[{title:"Lower Your Interest Rates",description:"We analyze your existing loans to find opportunities for refinancing at lower interest rates, helping you save money and reduce your monthly payments."},{title:"Consolidate Multiple Loans for Simplicity",description:"If you have multiple loans, we can help you consolidate them into a single, more manageable payment plan, making it easier to keep track of your finances."},{title:"Adjust Your Loan Terms for Better Flexibility",description:"Whether you need to shorten or extend your loan term, we offer solutions to adjust your repayment plan according to your current financial situation and future goals."},{title:"Identify Hidden Costs and Fees",description:"Our detailed loan review process uncovers any hidden costs or fees in your current loans, allowing you to make informed decisions and potentially renegotiate terms."}]} imgSrc={'/assets/family.png'} mainTitle={'Refinancing at Alpha Financial Solutions'} subtitle={'Refinancing Services We Offer'} introText={'At Alpha Financial Solutions, we offer comprehensive refinancing services to help you optimize your current mortgage and achieve your financial goals. Whether you’re looking to lower your monthly payments, shorten your loan term, or access equity in your home, our team of experts is here to guide you through the refinancing process with ease and efficiency.'}/>
    <MortgageEstimateSection/>
    <LoanOptions loanOptions={[{
    title: "House payment",
    description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: "/assets/meeting.jpg"
  },{
    title: "Industrial payment",
    description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: "/assets/meeting.jpg"
  },{
    title: "Corporate payment",
    description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: "/assets/meeting.jpg"
  },
  
  
  ]} mainTitle={'Lendevi services'} subTitle={'Many resources can help you make informed decisions during homebuying'} introText={'Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'}/>
    <Footer/>
    </>
  )
}
