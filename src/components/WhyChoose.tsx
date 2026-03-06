import { FaCheck, FaRupeeSign, FaToolbox, FaTools, FaUikit } from "react-icons/fa"
import { FaVanShuttle } from "react-icons/fa6"

const WhyChoose = () => {
  return (
    <>
    <h1 className="text-3xl p-3 mt-20 font-bold">Why Choose us?</h1>
    <div className="flex justify-center">
       <div className="p-10 font-bold mt-0">
            <ul className="grid grid-cols-3 gap-20 mds">
                <li className="p-6 flexs gap-5 text-3xl text-black border-rs"><FaCheck color="#8A2037" size={60}/> Quality Tested Materials</li>
                <li className="p-6 flexs gap-5 text-3xl text-black border-rs"><FaUikit color="#8A2037" size={60}/>Ergonomic Designs</li>
                <li className="p-6 flexs gap-5 text-3xl text-black"><FaRupeeSign color="#8A2037" size={60}/> Competitivive Pricing</li>
                <li className="p-6 flexs gap-5 text-3xl text-black border-rs"><FaVanShuttle color="#8A2037" size={60}/> Fast delivery & installation</li>
                <li className="p-6 flexs gap-5 text-3xl text-black border-rs"><FaToolbox color="#8A2037" size={60}/> Custom Design</li>
                <li className="p-6 flexs gap-5 text-3xl text-black"><FaTools color="#8A2037" size={60}/> Direct Manufacture</li>
            </ul>
       </div>
       <div>
            
       </div>
    </div>
    </>
  )
}

export default WhyChoose