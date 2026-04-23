import {FaFacebook, FaInstagram, FaMailBulk, FaWhatsapp,FaPhone, FaAddressCard} from "react-icons/fa"
const Footer = () => {
    return (
        <footer className="hj text-white" id="id">
            <div className="flex justify-between mss">
                <div className="grid grid-cols-4 w-o mss gap-0 p-30">
                    <p style={{ fontSize: 13 }} className="cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/"}>Home</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/About"}>About us</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/products"}>Products</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/Inderste"}>Industries</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/Blogs"}>Blogs</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/contact"}>Contact</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/cookie"}>Privacy Policy</p>
                </div>
                <div className="w-1/2 p-4">
                    <h1 className="text-2xl mb-10 mt-10 underline">Contact showroom</h1>
                    <div className="grid grid-cols-1 w-[300px] gap-5">
                        <p className="flexs mss gap-2"> ➤sai Enterprises : 3/25 Kamarajar Salai, Senthamil Nagar,Ramapuram, Chennai 600089</p>
                        <p className="flexs gap-2"><FaPhone size={20} /> : (+91) 76049 48552 | 72002 57412</p>
                        <p className="flexs gap-2">☎️ : 044-46057637</p>
                        <p className="flexs gap-2"><FaWhatsapp color="green" size={20} /> : (+91) 72002 57412</p>
                        <p className="flexs gap-3"><FaMailBulk size={30} /> : admin@saiofficefurniture.in | vr.saienterprises2024@gmail.com</p>
                        <p>Follows on</p>
                        <div className="flexs gap-10">
                            <a className="" target="_blank" href="https://www.facebook.com/profile.php?id=61573209393145&mibextid=ZbWKwL"><FaFacebook size={30} color="blue" /></a>
                            <a className="" target="_blank" href="https://www.instagram.com/sai_.enterprises_?igsh=MWwxa3M3cmswdDBscA=="><FaInstagram size={30} color="pink" /></a>
                            <a className="" target="_blank" href="/jdsfkdkdj"><FaWhatsapp size={30} color="green" /></a>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <h1 className="text-2xl mb-10 mt-11 underline">Contact Factory</h1>
                    <div>
                        <p className="flex gap-3"><FaAddressCard size={30}/> Factory : No.12 , Parathasarathy Street, Chinna sekkadu, Manali , chennai-600068. </p>
                    </div>
                </div>  
            </div>
            <center>
                <div className="flexs gap-5 justify-center mt-0 mss">
                    <div className="grid grid-cols-1 gap-3">
                        <a onClick={()=> window.location.href='/cookie'}>Privacy Policy | Terms & Conditions | Disclaimer</a>
                        <p>© All rights reserved 2026 Sai Enterprises | Powered by</p>
                    </div>
                    <a href="http://deeshix.com" target="_blank">
                        <img src="/our/our.png" className="w-[80px] h-[80px]" />
                    </a>
                </div>
            </center>
        </footer>
    )
}

export default Footer