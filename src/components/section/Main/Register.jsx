import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    event: "",
    transactionId: "",
    payment: "",
  });

  const [files, setFiles] = useState({
    collegeId: null,
    paymentscreenshot: null,
  });

  const [loading, setLoading] = useState(false);

  // 🔹 QR codes for demo
  const qrCodes = {
    astrosymposium: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=astrosymposium@upi",
    auctionverse: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=auctionverse@upi",
    circuitsupernova: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=circuitsupernova@upi",
    codenebula: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=codenebula@upi",
    enigma: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=enigma@upi",
    gallaxyquest: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=gallaxyquest@upi",
    interstellar: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=interstellar@upi",
    starlance: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=starlance@upi",
    robostrike: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=robostrike@upi",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 🔹 File size validation (10 MB max)
  if (files.collegeId && files.collegeId.size > 10 * 1024 * 1024) {
    alert("College ID exceeds 10 MB");
    return;
  }
  if (files.paymentscreenshot && files.paymentscreenshot.size > 10 * 1024 * 1024) {
    alert("Payment screenshot exceeds 10 MB");
    return;
  }


    const formDataToSend = new FormData();
    for (let key in formData) formDataToSend.append(key, formData[key]);
    if (files.collegeId) formDataToSend.append("collegeId", files.collegeId);
    if (files.paymentscreenshot) formDataToSend.append("paymentscreenshot", files.paymentscreenshot);


    try {
      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
      method: "POST",
      body: formDataToSend,
});

      const data = await res.json();

      if (!data.success) {
        alert(data.msg || "❌ Failed to submit registration.");
        return;
      }

      alert(data.msg);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        event: "",
        transactionId: "",
        payment: "",
      });
      setFiles({ collegeId: null, paymentscreenshot: null });
    } catch (err) {
      // console.error("Error submitting registration:", err);
      alert("❌ Failed to submit registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* 🔹 Full-screen Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/60 z-50 flex flex-col items-center justify-center">
          <svg className="animate-spin h-16 w-16 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <p className="text-white text-lg sm:text-2xl font-bold animate-pulse">
            Submitting your registration...
          </p>
        </div>
      )}

      {/* 🔹 Registration Form */}
      <div className="min-h-screen flex items-center justify-center px-2 sm:px-6 lg:px-8">
        <div
          className="w-full h-full sm:h-auto max-w-full sm:max-w-lg md:max-w-2xl p-4 sm:p-8 rounded-none sm:rounded-3xl shadow-2xl backdrop-blur-md"
          style={{
            background: "linear-gradient(135deg, rgba(255,192,203,0.2), rgba(128,0,128,0.2))",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-4 sm:mb-6 drop-shadow-lg">
            Electrovert Event Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Name, Email, Phone, College */}
            {["name", "email", "phone", "college"].map((field) => (
              <div key={field} className="flex flex-col">
                <label className="mb-1 text-white font-semibold text-sm sm:text-base">
                  {field.charAt(0).toUpperCase() + field.slice(1)} <span className="text-red-400">*</span>
                </label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  placeholder={`Enter your ${field}`}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition-all bg-white/20 text-white placeholder-white/60 shadow-md text-sm sm:text-base"
                />
              </div>
            ))}

            {/* Event Dropdown */}
            <div className="flex flex-col relative">
              <label className="mb-1 text-white font-semibold text-sm sm:text-base">
                Select Event <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <select
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition-all shadow-md text-sm sm:text-base appearance-none [&>option]:bg-gray-900 [&>option]:text-white"
                >
                  <option value="" disabled hidden>
                    -- Choose an event --
                  </option>
                  {Object.keys(qrCodes).map((event) => (
                    <option key={event} value={event}>
                      {event.charAt(0).toUpperCase() + event.slice(1)}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                />
              </div>
            </div>

            {/* Transaction ID & Payment Amount */}
            {["transactionId", "payment"].map((field) => (
              <div key={field} className="flex flex-col">
                <label className="mb-1 text-white font-semibold text-sm sm:text-base">
                  {field === "transactionId" ? "Transaction ID" : "Payment Amount"} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  placeholder={field === "transactionId" ? "Enter transaction ID" : "Enter amount paid"}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition-all bg-white/20 text-white placeholder-white/60 shadow-md text-sm sm:text-base"
                />
              </div>
            ))}

            {/* File Inputs */}
            {[
              { name: "collegeId", label: "Upload College ID" },
              { name: "paymentscreenshot", label: "Upload Payment Screenshot" },
            ].map(({ name, label }) => (
              <div key={name} className="flex flex-col">
                <label className="mb-1 text-white font-semibold text-sm sm:text-base">
                  {label} <span className="text-red-400">*</span>
                </label>
                <input
                  type="file"
                  name={name}
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  required
                  className="p-2 sm:p-3 rounded-lg bg-white/20 text-white cursor-pointer hover:bg-white/30 transition-all text-sm sm:text-base"
                />
                <p className="text-xs text-white/70 mt-1">Accepted: JPG, PNG, PDF (Max 10 MB)</p>
              </div>
            ))}

            {/* QR Code */}
            {formData.event && qrCodes[formData.event] && (
              <div className="flex flex-col items-center space-y-2">
                <p className="text-white font-semibold text-sm sm:text-base">
                  Scan & Pay for <span className="capitalize">{formData.event}</span>
                </p>
                <img
                  src={qrCodes[formData.event]}
                  alt={`${formData.event} QR Code`}
                  className="w-40 h-40 object-contain rounded-lg shadow-md border border-white/20"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold rounded-lg sm:rounded-xl shadow-lg transform hover:scale-105 transition-all text-sm sm:text-base disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
