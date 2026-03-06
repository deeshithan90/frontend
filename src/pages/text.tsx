import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [productNavbar, SetProductNavbar] = useState(false)
  const [aboutNavbar,SetAboutNavbar] = useState(false)
  const [MobileMenu,setMobileMenu] = useState(true)
const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = "/pdf/pdf.pdf";   // file inside public
  link.download = "SaiProfile.pdf"; // name after download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/productone?search=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };


  const handleOpen = ()=>{
     SetProductNavbar(true)
     SetAboutNavbar(false)
  }
  const handleOpenAbout = ()=>{
     SetProductNavbar(false)
     SetAboutNavbar(true)
  }
  const handleClose = ()=>{
     SetProductNavbar(false)
     SetAboutNavbar(false)
  }
  const handleCloseAbout = ()=>{
     SetProductNavbar(false)
     SetAboutNavbar(false)
  }
  return (
    <>
      <nav className="bg-white fixed top-0 w-full z-50 p-3">
        <div className="flexs justify-between ">
          {/* Mobile Menu Button */}
<div className="md:hidden">
  <button onClick={() => setMobileMenu(true)} className="text-2xl">
    ☰
  </button>
</div>
        <div>
          <img src="/logo.png" className="w-[140px] h-[80px]" />
          <div className="c-g mt-4">
            www.saiofficefurniture.in | Gst : 33AFMFS2882P1Z6
          </div>
        </div>
        <div className="flex gap-13 p-4 gs bg-own rounded-full c-s-c">
            <p style={{ fontSize: 13 }} onClick={()=> window.location.href='/'} className="font-bold cursor-pointer text-white hover:underline">Home</p>
          <div>
            <Link to={"/About"}>
              <p style={{ fontSize: 13 }} onClick={handleOpenAbout}  className="font-bold cursor-pointer text-white hover:underline">About us</p>
            </Link>
            {aboutNavbar? <div onMouseLeave={handleCloseAbout} className="grid grid-cols-1 gap-3 text-[15px] absolute bg-white text-black p-3 rounded-2xl">
                <a  href="#20" className="hover:underline p-2 cursor-pointer">Our Story</a>
                <a href="#21" className="hover:underline p-2 cursor-pointer">Core Values</a>
                <a href="#22" className="hover:underline p-2 cursor-pointer">Custom solution</a>
                <a href="#23" className="hover:underline p-2 cursor-pointer">Our Quality</a>
                <a href="#24" className="hover:underline p-2 cursor-pointer">Vision and Mission</a>
            </div> : ""}
          </div>
          <div>
            <Link to={"/products"}>
            <p style={{ fontSize: 13 }} className="font-bold  cursor-pointer text-white" onClick={handleOpen}>Products</p>
            </Link>
            {productNavbar ? <div className="text-black" onMouseLeave={handleClose}>
              <div className="absolute shadow-2xl flexs justify-around p-4 bg-white gap-4">
                <div className="w-1/2">
                  <p>Founded in 2008 Sai Enterprises Deliver Manufacture and Imported office furnitures</p>
                  <a href="/contact">
                  <p className="p-3 rounded-3xl bgs text-center cursor-pointer text-white mt-10 mb-10 w-[150px]">Enquriy now</p>
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-3 mt-10">
                    <a href="#2" className="cursor-pointer hover:underline">Office chair</a>
                    <a href="#1" className="cursor-pointer hover:underline">Executive chair</a>
                    <a href="#3" className="cursor-pointer hover:underline">Reception desk</a>
                    <a href="#4" className="cursor-pointer hover:underline">Work stations</a>
                    <a href="#5" className="cursor-pointer hover:underline">Cafeteria chair</a>
                    <a href="#1" className="cursor-pointer hover:underline">Confernce Table</a>
                    <a href="#6" className="cursor-pointer hover:underline">MS Frames</a>
                </div>
              </div>
            </div> : ""}
          </div>
             <p style={{ fontSize: 13 }} className="font-bold cursor-pointer text-white hover:underline" onClick={()=> window.location.href = '/Inderste'}>Industries</p>
          <p style={{ fontSize: 13 }} onClick={downloadPDF} className="font-bold cursor-pointer text-white hover:underline">Catalog</p>
            <p style={{ fontSize: 13 }} className="font-bold cursor-pointer text-white hover:underline" onClick={()=> window.location.href="/Blogs"}>Blogs</p>
          <a href="/contact">  
          <p style={{ fontSize: 13 }} className="font-bold cursor-pointer text-white hover:underline">Enquriy</p>
          </a>
            <p style={{ fontSize: 13 }} className="font-bold  cursor-pointer text-white hover:underline" onClick={()=> window.location.href="/contact"}>Contact</p>
        </div>
        </div>
        <center className="flex justify-center bg-white">
    <form onSubmit={handleSubmit} className="flex gap-10">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-own rounded-3xl text-white px-4">
        Search
      </button>
    </form>
        </center>
        {/* Mobile Sidebar */}
<div className={`mobile-sidebar ${MobileMenu ? "open" : ""}`}>
  <div className="close-btn" onClick={() => setMobileMenu(false)}>✕</div>

  <a href="/" onClick={() => setMobileMenu(false)}>Home</a>
  <a href="/About" onClick={() => setMobileMenu(false)}>About</a>
  <a href="/products" onClick={() => setMobileMenu(false)}>Products</a>
  <a href="/Inderste" onClick={() => setMobileMenu(false)}>Industries</a>
  <a onClick={downloadPDF}>Catalog</a>
  <a href="/Blogs" onClick={() => setMobileMenu(false)}>Blogs</a>
  <a href="/contact" onClick={() => setMobileMenu(false)}>Enquiry</a>
  <a href="/contact" onClick={() => setMobileMenu(false)}>Contact</a>
</div>

{/* Overlay */}
{MobileMenu && (
  <div className="overlay" onClick={() => setMobileMenu(false)}></div>
)}
      </nav>
    </>
  )
}

export default Navbar