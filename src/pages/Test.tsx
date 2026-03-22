import FAQ from "../components/FAQ";
import FAQS from "../components/FAQS";
import BarChair from "../db/BarChair";
import BeamChairs from "../db/BeamChairs";
import Cafeteriachair from "../db/Cafeteriachair";
import cot from "../db/cot";
import Executive from "../db/Excutive";
import MSFrames from "../db/MSFrames";
import Office from "../db/Office";
import platic from "../db/plastic";
import Recipition from "../db/Recipition";
import stool from "../db/stool";
import study from "../db/Study";
import trolley from "../db/trolley";
import Wire from "../db/WireChair";
import Workstations from "../db/WorkStations";

const ProductsTests = () => {
  return (
    <>
    <div className="mb-10 mt-40 shadowss flexs justify-around mss">
      <div className="fade w-full">
         <h1 className="text-5xl text-center">Premium Office Furniture Solutions in Chennai, Tamil Nadu</h1>
         <h2 className="text-3xl text-center">Customized Office Furniture Manufacturing an End-to-End Office Setup Solutions</h2>
      </div>
      <div>
          <img src="/product/Head/bg.png" className="w-[400px] h-[600px]" />
      </div>
    </div>
    {/**Executive Chair */}
    <div className="grid grid-cols-4 gap-2 mt-20 mb-0 p-6 mss" id="1">
      <h1 className="col-span-4 text-black text-4xl mb-6">
        Executive Chair | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {Executive.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-60 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/**Office Chair */}
     <div id="2" className="grid grid-cols-4 gap-6 mt-0 mb-0 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
        Office Chair | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {Office.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-60 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/**Recipition Desk */}
    <div id="3" className="grid grid-cols-4 gap-6 mt-0 mb-0 p-6 mss">
      <h1  className="col-span-4 text-black text-4xl mb-6">
         Reception desk | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {Recipition.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/**Confernece Table */}
    <div id="4" className="grid grid-cols-4 gap-6 mt-0 mb-0 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
          Confernce Table | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {Workstations.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-50 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/**Beam Chair */}
    <div id="5" className="grid grid-cols-4 gap-6 mt-0 mb-10 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
          Beam Chair | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {BeamChairs.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-50 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/**Bar chair */}
    <div id="6"  className="grid grid-cols-4 gap-6 mt-10 mb-10 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
          Bar chair | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {BarChair.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-50 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/** Plastic chair*/}
    <div id="7"  className="grid grid-cols-4 gap-6 mt-10 mb-10 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
          Plastic chair | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {platic.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-60 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/** Wire Chair */}
    <div id="8"  className="grid grid-cols-4 gap-6 mt-10 mb-10 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
          Wire Chair | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {Wire.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-60 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/**Study Table */}
    <div id="9"  className="grid grid-cols-4 gap-6 mt-10 mb-10 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
          Study Table | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {study.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-60 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/**Stool chair */}
     <div id="10"  className="grid grid-cols-4 gap-6 mt-10 mb-10 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
          Stool Chair | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {stool.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-60 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
          {/** Medical trolley */}
    <div id="11"  className="grid grid-cols-4 gap-6 mt-10 mb-10 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
          Medical trolley | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {trolley.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-60 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/**Cot */}
    <div id="12"  className="grid grid-cols-4 gap-6 mt-10 mb-10 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
          Cot | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {cot.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-60 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
   
    {/** Cafteria Chair */}
    <div className="grid grid-cols-4 gap-6 mt-0 mb-0 p-6 mss">
      <h1 id="13" className="col-span-4 text-black text-4xl mb-6">
          Cafeteria chair | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {Cafeteriachair.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-60 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    {/**MS Frames */}
    <div id="14" className="grid grid-cols-4 gap-6 mt-0 mb-10 p-6 mss">
      <h1 className="col-span-4 text-black text-4xl mb-6">
          Ms Frames | <span className="cursor-pointer underline c-s-ss"><a href="/contact">Enquriy Now</a></span>
      </h1>
      {MSFrames.map((item) => (
        <div key={item.id} className="text-white border-2 border-black">
          <img
            src={item.image}
            alt={item.id}
            className="w-full h-60 object-cover border"
          />
          <p className="mt-2 text-center text-black font-bold">{item.Code}</p>
        </div>
      ))}
    </div>
    <FAQ/>
    <FAQS/>
    </>
  );
};

export default ProductsTests;