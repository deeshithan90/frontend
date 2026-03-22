import { FaAddressBook, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa"
import Map from "../components/Map"
import FAQ from "../components/FAQ"
import FAQS from "../components/FAQS"

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <div className="mt-60 text-center mb-40 px-5">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Smart, Stylish, and Sustainable Office Furniture Manufacturing in Chennai
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600">
          Enhancing Office Productivity with Smart Furniture Designs
        </h2>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-5 mb-10">

        {/* Left Side */}
        <div className="flex-1 space-y-8">

          {/* Map */}
          <Map />

          {/* Contact Details */}
          <div className="bg-white shadow-lg text-black p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Sai Enterprises</h2>

            <p className="flex items-start gap-3 mb-4">
              <FaAddressBook className="mt-1" />
              No. 3/25 Kamarajar Salai, Senthamil Nagar,
              Ramapuram, Chennai Tamil Nadu 600068
            </p>

            <p className="flex items-center gap-3 mb-4">
              <FaPhone />
              (+91) 76049 48552 | 72002 57412
            </p>

            <p className="flex items-center gap-3 mb-4">
              <FaWhatsapp />
              (+91) 72002 57412
            </p>

            <p className="flex items-center gap-3 mb-4">
              <FaMailBulk />
              admin@saiofficefurniture.in
            </p>

            <p className="mt-4 font-medium">
              GST: 33AFMFS2882P1Z6
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <FAQ />
      <FAQS />
    </>
  )
}

export default Contact