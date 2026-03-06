import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  interface Enquiry {
  _id: string;
  FullName: string;
  Phone: string;
  Email: string;
  DisCribe: string;
  createdAt: string;
  updatedAt: string;
}
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch(`https://backend-2-ca7m.onrender.com/api/admin/enquiries`,{
        credentials: "include"
      });
      console.log("Cookies:", res.cookies);
      const data: { success: boolean; data: Enquiry[]; message?: string } = await res.json();

      if (data.success) {
        setEnquiries(data.data);
      } else {
        toast.error(data.message || "Failed to fetch enquiries ❌");
      }
    } catch (error) {
      toast.error("Server error ❌");
    }
  };

  return (
    <div className="p-8 mt-50">
      <h1 className="text-3xl font-bold mb-6">All Enquiries</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Full Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Requirement</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enq) => (
            <tr key={enq._id} className="hover:bg-gray-100">
              <td className="border p-2">{enq.FullName}</td>
              <td className="border p-2">{enq.Phone}</td>
              <td className="border p-2">{enq.Email}</td>
              <td className="border p-2">{enq.DisCribe}</td>
              <td className="border p-2">{new Date(enq.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}