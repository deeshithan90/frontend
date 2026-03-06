import { Link } from "react-router-dom"
import {FaFacebook, FaInstagram, FaMailBulk, FaWhatsapp,FaPhone} from "react-icons/fa"
const Footer = () => {
    return (
        <footer className="bg-gray-500 text-white" id="id">
            <div className="flex justify-between mss">
                <div className="grid grid-cols-4 w-o mss gap-0 p-30">
                    <p style={{ fontSize: 13 }} className="font-bold cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/"}>Home</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="font-bold cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/About"}>About us</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="font-bold  cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/products"}>Products</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="font-bold  cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/Inderste"}>Industries</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="font-bold  cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/Blogs"}>Blogs</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="font-bold  cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/contact"}>Contact</p>
                    <br />
                    <p style={{ fontSize: 13 }} className="font-bold  cursor-pointer text-white hover:underline" onClick={() => window.location.href = "/cookie"}>Our Cookie</p>
                </div>
                <div className="w-1/2 p-3">
                    <h1 className="text-2xl mb-10 mt-10 font-bold">Contact</h1>
                    <div className="grid grid-cols-1 w-[300px] gap-5">
                        <p className="flexs mss gap-2"> ➤ No. 3/25 Kamarajar Salai, Senthamil Nagar,Ramapuram, Chennai Tamil Nadu 600068</p>
                        <p className="flexs gap-2"><FaPhone size={20} /> : (+91) 72002 57412</p>
                        <p className="flexs gap-2">☎️ : 044-46057637</p>
                        <p className="flexs gap-2"><FaWhatsapp color="green" size={20} /> : (+91) 76049 48552</p>
                        <p className="flexs gap-2"><FaMailBulk size={20} /> : admin@saiofficefurniture.in</p>
                        <p>Follows on</p>
                        <div className="flexs gap-10">
                            <a className="" target="_blank" href="https://www.facebook.com/profile.php?id=61573209393145&mibextid=ZbWKwL"><FaFacebook color="blue" /></a>
                            <a className="" target="_blank" href="https://www.instagram.com/sai_.enterprises_?igsh=MWwxa3M3cmswdDBscA=="><FaInstagram color="pink" /></a>
                            <a className="" target="_blank" href=""><FaWhatsapp color="green" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <div className="flexs gap-3 justify-center mt-0 mss">
                    <div className="grid grid-cols-1 gap-3">
                        <p>© All rights reserved Sai Enterprises | Powered by</p>
                        <a onClick={()=> window.location.href='/cookie'}>Privacy Policy | Terms & Conditions | Disclaimer</a>
                    </div>
                    <a href="http://deeshix.com" target="_blank">
                        <img src="/our/our.png" className="w-[130px] h-[130px]" />
                    </a>
                </div>
            </center>
        </footer>
    )
}

export default Footer