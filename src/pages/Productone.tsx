import { useLocation } from "react-router-dom";
import { useMemo } from "react";

import Executive from "../db/Excutive";
import Office from "../db/Office";
import Recipition from "../db/Recipition";
import Workstations from "../db/WorkStations";
import Cafeteriachair from "../db/Cafeteriachair";
import MSFrames from "../db/MSFrames";
import BeamChairs from "../db/BeamChairs";
import BarChair from "../db/BarChair";
import platic from "../db/plastic";
import Wire from "../db/WireChair";
import study from "../db/Study";
import stool from "../db/stool";
import trolley from "../db/trolley";
import cot from "../db/cot";

const Productone = () => {
  const location = useLocation();

  // Get search query
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search")?.toLowerCase() || "";

  // Combine all arrays (your structure)
  const allProducts = [
    ...Executive,
    ...Office,
    ...Recipition,
    ...Workstations,
    ...BeamChairs,
    ...BarChair,
    ...platic,
    ...Wire,
    ...stool,
    ...trolley,
    ...Cafeteriachair,
    ...study,
    ...cot,
    ...MSFrames,
  ];

  // Filter by Code and catagory
  const filteredProducts = useMemo(() => {
  return allProducts.filter((item) => {
    const categoryMatch = item.Category?.toLowerCase().includes(searchTerm);
    const codeMatch = item.Code?.toLowerCase().includes(searchTerm);

    return categoryMatch || codeMatch;
  });
}, [searchTerm, allProducts]);

  return (
    <div className="p-10 mt-80 mb-0">
      {searchTerm ? (
        <>
          <h1 className="text-4xl mb-6">
            Search Results for "{searchTerm}"
          </h1>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <div key={item.id} className="border p-4 shadow">
                 <a onClick={()=> window.location.href='/contact'}><img
                    src={item.image}
                    alt={item.Code}
                    className="w-full h-60 object-cover shss"
                  /></a>
                  <p className="mt-2 text-center font-bold">
                    Code: {item.Code}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500 text-lg">
              No products found.
            </p>
          )}
        </>
      ) : (
        <h1 className="text-3xl">All Products</h1>
      )}
    </div>
  );
};

export default Productone;