import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import LoginHeader from "./component/LoginHeader.tsx";

const LoginAdminstrator = () => {
  const navigate = useNavigate(); // 2. Initialize the hook
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // 3. SUCCESS: Redirect to the dashboard
        console.log("Login Successful, redirecting...");
        localStorage.setItem("token", data.token);
        navigate("/dashboard/admin"); // Change this to your actual route
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Could not connect to the server.");
    }
  };

  // ... rest of your return code ...

  return (
    <div className="min-h-screen bg-gray-50">
      <LoginHeader />

      {/* Container for the form */}
      <div className="max-w-2xl mx-auto my-10  px-4">
        {/* Send a Message - Right Column */}
        <div className="bg-[#ffffff] rounded-2xl shadow-sm">
          <form onSubmit={handleSubmit}>
            <div className="p-3 bg-[#800020]" style={{ borderRadius:"10px 10px 0px 0px"}}>
            <h2 className="text-[16px] tracking-[-0.2px] font-bold text-[#ffffff]">
              Administrator Login
            </h2>
            </div>

            <div className="p-8">
            <h2 className="text-[20px] tracking-[-0.2px] font-bold mb-5 text-[#fffff]">
              Welcome back
            </h2>
            <h6 className="text-[16px] tracking-[-0.2px] mb-8 text-[#fffff]">
              Sign in to access your admin dashboard
            </h6>

            {/* Email Address */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-[#374151] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border bg-[#FFFFFF] border-[#D1D5DB] placeholder:text-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-[#374151] mb-2">
                Password
              </label>
              <input
                type="password"
                name="password" // Changed from 'phone' to 'phoneNumber' to match state
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=""
                className="w-full px-4 py-3 border bg-[#FFFFFF] border-[#D1D5DB] placeholder:text-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
            </div>

            <div style={{display:'flex', justifyContent:"space-between"}}>

            <div className="flex gap-2 mb-8 items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="text-xs font-bold text-[#111827]"
                      >Remeber Me
                      </label>
                    </div>
                    <h6 className="text-[12px] tracking-[-0.2px] mb-8 text-[#800020]">Forgot Password?</h6>

            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full px-6 text-sm py-4 bg-red-900 hover:bg-red-800 text-white font-bold rounded-lg hover:cursor-pointer transition flex items-center justify-center gap-2">
              Sign in to Dashboard
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdminstrator;