
import ServicesHeader from '../components/ServicesHeader'
import ServiceDetails from '../components/ServiceDetails'
import MortgageEstimateSection from '../components/MortgageEstimationSection'
import LoanOptions from '../components/LoanOptions'
import Footer from '../components/Footer'

export default function CommercialLoan() {
  return (
    <>
    <ServicesHeader Title='Commercial Loan'/>
    <ServiceDetails loanTypes={[{
      title:"Custom Loan Packages for Your Business Needs",
      description:"We offer a range of commercial loan packages tailored to suit the specific needs of your business, from real estate acquisitions to equipment financing."

    },
     { title:"Competitive Interest Rates for Sustainable Growth",
      description:"Our commercial loans come with competitive interest rates that help your business grow sustainably without compromising your cash flow."

    },{
      title:"Flexible Repayment Terms for Better Cash Flow Management",
      description:"Choose from a variety of repayment terms that align with your business’s cash flow, ensuring that loan repayments are manageable and predictable."

    },{
      title:"Expert Support Throughout the Loan Process",
      description:"Our team of commercial loan experts is dedicated to guiding you through every step of the loan process, from application to disbursement, ensuring a smooth and efficient experience."

    },
  ]} imgSrc={'/alphaafin-website/assets/family.png'} mainTitle={'Financing Solutions for Your Business Growth'} subtitle={'Empower Your Business with Tailored Commercial Loans from Alphaa Financial Solutions'} introText={`At Alphaa Financial Solutions, we specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs. Whether you're seeking capital for expansion, equipment purchases, or working capital, our team is dedicated to finding the right financing option to fuel your growth.
We offer personalized service and expert guidance throughout the loan process, ensuring you secure competitive rates and terms that align with your business objectives.
Trust us to help you navigate the complexities of commercial financing and achieve your business goals with confidence.`} />
<MortgageEstimateSection/>
<LoanOptions loanOptions={[{
    title: "House payment",
    description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: "/alphaafin-website/assets/meeting.jpg"
  },{
    title: "Industrial payment",
    description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: "/alphaafin-website/assets/meeting.jpg"
  },{
    title: "Corporate payment",
    description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image: "/alphaafin-website/assets/meeting.jpg"
  },
  
  
  ]} mainTitle={'Lendevi services'} subTitle={'Many resources can help you make informed decisions during homebuying'} introText={'Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'}/>
<Footer/>
    </>
  )
}
