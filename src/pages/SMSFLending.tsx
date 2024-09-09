
import Footer from '../components/Footer'
import LoanOptions from '../components/LoanOptions'
import MortgageEstimateSection from '../components/MortgageEstimationSection'
import ServiceDetails from '../components/ServiceDetails'
import ServicesHeader from '../components/ServicesHeader'

export default function SMSFLending() {
  return (
    <>
    <ServicesHeader Title='Self-Managed Super Fund (SMSF) Lending'/>
    <ServiceDetails loanTypes={[
      {
        title:"Tailored Lending Solutions for SMSFs",
        description:"Our SMSF loans are designed specifically for the unique requirements of self-managed super funds, providing you with the flexibility to invest in residential or commercial property."
      },
      {
        title:"Competitive Interest Rates to Maximize Returns",
        description:"Take advantage of our competitive interest rates that help you maximize the returns on your SMSF property investments, ensuring your retirement savings grow efficiently."
      },
      {
        title:"Expert Guidance on SMSF Regulations",
        description:"Navigating SMSF regulations can be complex, but our team of experts is here to provide personalized advice and support, ensuring compliance and optimal financial outcomes."
      },
      {
        title:"Flexible Repayment Options for Financial Security",
        description:"We offer flexible repayment plans that align with your SMSF’s cash flow, helping you manage your retirement savings with confidence and ease."
      },

    ]} imgSrc={'/assets/family.png'} mainTitle={`Maximize Your Retirement Savings with Alphaa Financial Solutions' SMSF`} subtitle={''} introText={`At Alphaa Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential.
Whether you're looking to acquire residential or commercial property through your SMSF, our team provides tailored advice and innovative financing solutions to suit your needs.
With our deep understanding of SMSF regulations and market trends, we ensure a seamless process, allowing you to leverage your superannuation for strategic investment opportunities and achieve your long-term financial goals.`}/>
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
