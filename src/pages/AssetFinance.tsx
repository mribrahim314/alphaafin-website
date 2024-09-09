
import ServicesHeader from '../components/ServicesHeader'
import ServiceDetails from '../components/ServiceDetails'
import MortgageEstimateSection from '../components/MortgageEstimationSection'
import LoanOptions from '../components/LoanOptions'
import Footer from '../components/Footer'

export default function AssetFinance() {
  return (
    <>
    <ServicesHeader Title='Asset Finance'/>
    <ServiceDetails loanTypes={[
      {
        title:"Flexible Financing for a Wide Range of Assets",
        description:"From machinery to vehicles, we provide financing options that cover a broad spectrum of business assets, ensuring you have the right tools to succeed."
      },
      {
        title:"Preserve Cash Flow with Tailored Repayment Plans",
        description:"Our asset finance solutions offer flexible repayment plans that align with your cash flow, allowing you to maintain liquidity while investing in essential assets."
      },
      {
        title:"Competitive Rates for Cost-Effective Asset Acquisition",
        description:"Benefit from competitive interest rates that make it easier and more affordable to finance the assets your business needs to grow and thrive."
      },
      {
        title:"Expert Guidance Throughout the Financing Process",
        description:"Our team of asset finance specialists is here to guide you through the entire financing process, providing personalized support to ensure a seamless experience."
      },

    ]} imgSrc={'/assets/family.png'} mainTitle={'Secure the Equipment and Assets Your Business Needs with Alphaa Financial Solutions'} subtitle={''} introText={`At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease.
Whether you're looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.
We streamline the application process and work to secure competitive rates, ensuring you get the best possible terms to support your personal or business objectives.
Trust us to simplify your asset and vehicle financing, so you can focus on what matters most.`}/>
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
