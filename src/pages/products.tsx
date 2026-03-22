import React from "react";
import FAQ from "../components/FAQ";
import FAQS from "../components/FAQS";

// ✅ Type
type SectionProps = {
  title: string;
  folder: string;
  images: string[];
  id: string;
};

// ✅ Section Component
const Section: React.FC<SectionProps> = ({ title, folder, images, id }) => {
  return (
    <div id={id} className="mt-10 mb-10 p-6">
      <h1 className="text-black text-3xl md:text-4xl mb-6">
        {title} |{" "}
        <a href="/contact" className="underline">
          Enquiry Now
        </a>
      </h1>

      {/* ✅ One image per row */}
      <div className="flex flex-col gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={`/n3/${folder}/${img}`}
            alt={`${title} ${i + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow"
            onError={(e) => {
              e.currentTarget.style.display = "none"; // ❌ hide broken image
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ✅ Main Component
const Products: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="mt-32 mb-10 px-6 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full">
          <h1 className="text-3xl md:text-5xl zoom-ins">
            Premium Office Furniture Solutions in Chennai, Tamil Nadu
          </h1>
          <h2 className="text-xl md:text-3xl mt-4">
            Customized Office Furniture Manufacturing and End-to-End Office Setup Solutions
          </h2>
        </div>

        <img
          src="/product/Head/bg.png"
          alt="Furniture"
          className="w-[300px] md:w-[400px]"
        />
      </div>

      {/* Sections */}

      <Section
        title="Executive Chair"
        folder="Exe"
        id="1"
        images={["1.webp", "2.webp", "3.webp"]}
      />

      <Section
        title="Director Chair"
        folder="dir"
        id="2"
        images={["1.webp"]}
      />

      <Section
        title="Workstation"
        folder="work"
        id="3"
        images={["1.webp", "2.webp"]}
      />

      <Section
        title="Visitor Chair"
        folder="Vi"
        id="4"
        images={["1.webp", "2.webp","3.webp"]}
      />

      <Section
        title="Writing Chair"
        folder="Wri"
        id="5"
        images={["1.webp","2.webp"]}
      />

      <Section
        title="Cabinet"
        folder="Cab"
        id="6"
        images={["1.webp","2.webp","3.webp"]}
      />

      <Section
        title="Student Desk"
        folder="Stud"
        id="7"
        images={["1.webp","2.webp","3.webp"]}
      />

      <Section
        title="cafeteria chair"
        folder="caf"
        id="8"
        images={["1.webp","2.webp","3.webp","4.webp","5.webp",]} // ✅ 5 images
      />
     
      <Section
        title="Metro sofa"
        folder="Met"
        id="9"
        images={["1.webp"]}
      />
      <Section
        title="Wire Chair"
        folder="Cab"
        id="10"
        images={["1.webp","2.webp","3.webp"]}
      />
      <Section
        title="Bar chair"
        folder="bar"
        id="11"
        images={["1.webp"]}
      />
      <Section
        title="Stool"
        folder="stool"
        id="12"
        images={["1.webp",]}
      />
      <Section
        title="Medical Trolley"
        folder="med"
        id="13"
        images={["1.webp"]}
      />
      <Section
        title="Cot"
        folder="cot"
        id="14"
        images={["1.webp",]}
      />
      <Section
        title="Dinning Table"
        folder="dt"
        id="15"
        images={["1.webp"]}
      />
      <Section
        title="Sample Frame"
        folder="sf"
        id="16"
        images={["1.webp","2.webp"]}
      />
      <Section
        title="Table"
        folder="ta"
        id="17"
        images={["1.webp",]}
      />
      <FAQ />
      <FAQS />
    </>
  );
};

export default Products;