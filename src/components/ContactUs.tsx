import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [accepted,setAccepted] = useState(false);
  const [formData, setFormData] = useState({
    FullName: "",
    Phone: "",
    Email: "",
    DisCribe: ""
  });

  // Check cookie on load
  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith("cookieConsent="));

    if (!cookie) setIsOpen(true);
    else setAccepted(true);
  }, []);

  setTimeout(()=>{
      setIsOpen(true)
  },150000)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Accept cookies
  const handleAcceptCookies = async () => {
    try {
      const res = await fetch("https://backend-2-ca7m.onrender.com/api/accept-cookies", {
        method: "POST",
        credentials: "include"
      });
      const data = await res.json();
      if (data.success) {
        setAccepted(true);
        setIsOpen(false);
        toast.success("Cookies Accepted");
      }
    } catch (err) {
      toast.error("Failed to accept cookies");
    }
  };

  // Submit enquiry
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://backend-2-ca7m.onrender.com/api/en", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Enquiry Submitted Successfully");
        setFormData({ FullName: "", Phone: "", Email: "", DisCribe: "" });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Server Error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="relative w-[350px] bg-white rounded-xl shadow-2xl p-8 animate-fadeSlide">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold">x</button>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Send Us an Enquiry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="FullName" value={formData.FullName} onChange={handleChange} placeholder="Full Name" className="border-1 w-full p-2" required />
          <input type="tel" name="Phone" value={formData.Phone} onChange={handleChange} placeholder="Phone" className="border-1 w-full p-2" required />
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Email" className="border-1 w-full p-2" required />
          <textarea name="DisCribe" value={formData.DisCribe} onChange={handleChange} placeholder="Your Requirement" className="border-1 w-full p-2" required />

          <div className="flex items-center space-x-2">
            <label htmlFor="acceptCookies">
              I accept cookies and agree to <span className="font-bold text-blue-400 cursor-pointer"><a onClick={() => window.location.href='/cookie'}>Terms & Conditions</a></span>
            </label>
          </div>

          <button type="button" onClick={handleAcceptCookies} className="w-full bg-own p-3 rounded-3xl text-white">Accept Cookies & Close</button>
          <button type="submit" className="w-full bg-own p-3 rounded-3xl text-white">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
}