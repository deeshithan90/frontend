import { useState } from "react";
import sai from '../pages/sai-v.mp4'
import WhyChoose from "../components/WhyChoose";
import Pink from "../components/Pink";
import OurStrenghts from "../components/OurStrenghts";
import FAQ from "../components/FAQ";
import ProductsOne from "../components/ProductsOne";
import FAQS from "../components/FAQS";

const Home = () => {
  const [set,settext] = useState(false)
  const [btn,setBtn] = useState(true)
const handleReadmore = ()=>{
   settext(true)
   setBtn(false)
}
const handlereadless = ()=>{
  settext(false)
  setBtn(true)
}

  return (
    <>
      <div className='mt-45s hs'>
        <div className="w-full mx-auto z-0 h-screen object-cover pointer-events-none">
          <video
            src={sai}
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
          ></video>
        </div>
        <div className='p-0 mt-0 mb-10 w-full'>
          <h1 className="text-5xl text-black rounded-full text-center mb-10">Sai Enterprises - Leading Office Furniture Manufacturer in Chennai. </h1>
          <h2 className="text-4xl text-black rounded-full text-center mt-2">Modular Office Furniture Solutions | </h2>
          <h3 className="text-3xl text-black rounded-full text-center mt-2">Office Chairs & Ergonomic Seating.</h3>
        </div>
      </div>
      <div className="marquee sh-c">
        <p className="text-2xl text-black font-bold">A Leading customized office furniture solutions in chennai, providing world class modular workstations. Especially corporates, government office, colleges, schools, hostels, IT company and hospitals.</p>
      </div>
      <center>
        <div className="c-b"></div>
      </center>
      <div className="flexs gap-5 ml-7 mss">
        <h1 className="mt-0 text-4xl font-bold">About - "Sai Office Furniture"</h1>
      </div>
      <div className="p-2 mt-0 flexs justify-between mss">
        <div>
        <p className="p-5 mb-0">
           Sai Enterprises is a trusted office furniture manufacturer in Chennai, Tamil Nadu, specializing in high-quality, ergonomic, and customized workspace solutions. We design and manufacture modular workstations, executive tables, office chairs, conference tables, reception desks, and storage solutions tailored to modern business environments.
          {set ? <span> With a strong focus on durability, functionality, and contemporary design, we deliver end-to-end office furniture solutions from concept and manufacturing to installation. Our commitment to quality craftsmanship, timely delivery, and competitive pricing has made us a preferred choice for corporate offices, IT companies, and commercial spaces across Chennai and Tamil Nadu.  </span> : "" }
          {btn ? <span className="c-s-ss font-bold hover:cursor-pointer hover:underline" onClick={handleReadmore}>Read More</span> : <span className="c-s-ss font-bold hover:cursor-pointer hover:underline" onClick={handlereadless}>Read less</span>}
        </p>  
        </div>
        <a href="/Inderste"><img src="/about.webp" className="w-[800px]" alt="Executive Chair" /></a>
      </div>
      <Pink/>
      <div className="mt-30">
        <h1 className="text-4xl font-bold mb-10 p-3">Manufacturing process</h1>
      </div>
      <div className="flex justify-around mss p-3">
        <ul className="grid grid-cols-1 gap-5">
                <li className="text-3xl underlines">Design & Planning</li>
                <li className="text-3xl underlines">Material Selection</li>
                <li className="text-3xl underlines">Quality Inspection</li>
                <li className="text-3xl underlines">Precision Manufacturing </li>
                <button onClick={()=>  window.location.href = "/Inderste"} className="p-3 rounded-3xl w-[200px] shadow-2xl bg-own font-bold mt-10 text-white">Explore more</button>
                <br/>
                <br/>
            </ul>
            <br/>
            <br/>
            <div>
            <video
            src="/Diagram.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-[600px]"
            >
            </video>
        </div>
        
        </div>
        <WhyChoose/>
        <OurStrenghts/>
        <ProductsOne/>
        <h1 className="text-4xl mt-10 p-4">Customized</h1>
        <h1 className="text-4xl ml-4">and Provider</h1>
        <div className="gap-30 mt-10 p-4 flex items-center justify-center">
            <div className="w-80 h-80 border-black border-2 shss">
                <img src="/navigate/webp/nv.webp" className="w-full h-full" alt="" />
            </div>
            <div className="typing">
                <h1>Chennai's Most Trusted Furniture Manfacturer | <span className="t">Sai EnterPrises</span></h1>
            </div>
        </div>
        {/**Chennai's Most Trusted Furniture Manfacturer Sai EnterPrises */}
        <FAQ/>
        <FAQS/>
    </>
  )
}

export default Home