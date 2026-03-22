import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

  const [productNavbar, SetProductNavbar] = useState(false)
  const [aboutNavbar, SetAboutNavbar] = useState(false)
  const [MobileMenu, setMobileMenu] = useState(false) // ✅ start false

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/pdf/pdf.pdf";
    link.download = "SaiProfile.pdf";
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

  const handleOpen = () => {
    SetProductNavbar(true)
    SetAboutNavbar(false)
  }

  const handleOpenAbout = () => {
    SetProductNavbar(false)
    SetAboutNavbar(true)
  }

  const handleClose = () => {
    SetProductNavbar(false)
    SetAboutNavbar(false)
  }

  const handleCloseAbout = () => {
    SetProductNavbar(false)
    SetAboutNavbar(false)
  }

  return (
    <>
      <nav className="bg-white fixed top-0 w-full z-50 p-3">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <div>
            <img src="/logo.png" className="w-[140px] h-[80px]" />
            <div className="c-g mt-2 text-sm">
              www.saiofficefurniture.in | Gst : 33AFMFS2882P1Z6
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 p-4 gs bg-own rounded-full c-s-c">

            <p onClick={() => window.location.href = '/'} className="font-bold cursor-pointer text-white hover:underline text-sm">Home</p>

            <div>
              <Link to={"/About"}>
                <p onClick={handleOpenAbout} className="font-bold cursor-pointer text-white hover:underline text-sm">About us</p>
              </Link>
              {aboutNavbar &&
                <div onMouseLeave={handleCloseAbout} className="absolute bg-white text-black p-3 rounded-xl shadow-lg">
                  <a href="#20" className="block p-2 hover:underline">Our Story</a>
                  <a href="#21" className="block p-2 hover:underline">Core Values</a>
                  <a href="#22" className="block p-2 hover:underline">Custom solution</a>
                  <a href="#23" className="block p-2 hover:underline">Our Quality</a>
                  <a href="#24" className="block p-2 hover:underline">Vision and Mission</a>
                </div>}
            </div>

            <div>
              <Link to={"/products"}>
                <p onClick={handleOpen} className="font-bold cursor-pointer text-white text-sm">Products</p>
              </Link>

              {productNavbar &&
                <div onMouseLeave={handleClose} className="absolute shadow-2xl flex gap-6 p-6 bg-white text-black rounded-xl">

                  <div className="w-1/2">
                    <p>Founded in 2008 Sai Enterprises Deliver Manufacture and Imported office furnitures</p>
                    <a href="/contact">
                      <p className="p-3 rounded-3xl bg-black text-white text-center cursor-pointer mt-6 w-[150px]">Enquiry now</p>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a href="#1" className="hover:underline">Executive</a>
                    <a href="#2" className="hover:underline">Director Chair</a>
                    <a href="#3" className="hover:underline">Work station</a>
                    <a href="#4" className="hover:underline">Visitor Chair</a>
                    <a href="#5" className="hover:underline">Writing Chair</a>
                    <a href="#6" className="hover:underline">Cabinet</a>
                    <a href="#7" className="hover:underline">Student Desk</a>
                    <a href="#8" className="hover:underline">Cafeteria chair</a>
                    <a href="#9" className="hover:underline">Metro sofa</a>
                    <a href="#10" className="hover:underline">Wire Chair</a>
                    <a href="#11" className="hover:underline">Bar chair</a>
                    <a href="#12" className="hover:underline">Stool</a>
                    <a href="#13" className="hover:underline">Medical Trolley</a>
                    <a href="#14" className="hover:underline">Cot</a>
                    <a href="#15" className="hover:underline">Dinning Table</a>
                    <a href="#16" className="hover:underline">Sample Frame</a>
                    <a href="#17" className="hover:underline">Table</a>
                  </div>

                </div>}
            </div>

            <p onClick={() => window.location.href = '/Inderste'} className="font-bold cursor-pointer text-white hover:underline text-sm">Industries</p>
            <p onClick={downloadPDF} className="font-bold cursor-pointer text-white hover:underline text-sm">Catalog</p>
            <p onClick={() => window.location.href = "/Blogs"} className="font-bold cursor-pointer text-white hover:underline text-sm">Blogs</p>
            <a href="/contact"><p className="font-bold cursor-pointer text-white hover:underline text-sm">Enquiry</p></a>
            <p onClick={() => window.location.href = "/contact"} className="font-bold cursor-pointer text-white hover:underline text-sm">Contact</p>

          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenu(true)} className="text-3xl">
              ☰
            </button>
          </div>

        </div>

        {/* Search */}
        <div className="flex justify-center mt-4">
          <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-xl">
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
        </div>

      </nav>

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

      {MobileMenu && <div className="overlay" onClick={() => setMobileMenu(false)}></div>}

    </>
  )
}

export default Navbar