
import Footer from '../components/Footer'
import LoanOptions from '../components/LoanOptions'
import MortgageEstimateSection from '../components/MortgageEstimationSection'
import ServiceDetails from '../components/ServiceDetails'
import ServicesHeader from '../components/ServicesHeader'

export default function PersonalLoan() {
  return (
    <>
    <ServicesHeader Title='Personal Loan'/>
    <ServiceDetails loanTypes={[
      {
        title:"Flexible Loan Amounts for Your Needs",
        description:"Borrow the exact amount you need, whether it’s for a small expense or a significant purchase. Our personal loans offer the flexibility to choose the loan amount that best suits your needs."
      },
      {
        title:"Quick and Easy Application Process",
        description:"Apply for a personal loan with ease through our streamlined application process. We prioritize fast approvals, so you can access the funds you need without delay."
      },
      {
        title:"Competitive Interest Rates for Affordable Repayments",
        description:"Our personal loans come with competitive interest rates that make repayments manageable, helping you achieve your financial goals without unnecessary stress."
      },
      {
        title:"Repayment Plans Tailored to Your Budget",
        description:"Choose from a variety of repayment plans that fit your budget and financial situation. We offer flexible terms to ensure your loan is repaid comfortably and on your terms."
      },

    ]} imgSrc={'/assets/family.png'} mainTitle={`Achieve Your Personal Goals with Alphaa Financial Solutions' Personal Loans`} subtitle={''} introText={`At Alphaa Financial Solutions, we offer a range of personal loan options designed to meet your unique financial needs.
Whether you're looking to consolidate debt, fund a major purchase, or cover unexpected expenses, our team is dedicated to finding the right loan solution for you.
We provide personalized support throughout the application process, ensuring you secure the best rates and terms available.
Trust us to make your financial goals more achievable with tailored, flexible personal loan solutions.`}/>
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
