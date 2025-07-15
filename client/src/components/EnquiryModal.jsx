import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, User, MessageSquare, Loader, CheckCircle } from "lucide-react";

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const res = await fetch("https://abmgroupswebsite.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to send enquiry");

    setIsSubmitted(true);
    setTimeout(onClose, 2000);
  } catch (err) {
    console.error("Submission error:", err);
    alert("Failed to send enquiry. Please try again later.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-lg bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 shadow-2xl border border-gray-300"
            initial={{ opacity: 0, scale: 0.8, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isSubmitted ? (
                <>
                  {/* Name */}
                  <div className="relative flex items-center">
                    <User className="absolute left-4 text-gray-500" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative flex items-center">
                    <Mail className="absolute left-4 text-gray-500" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative flex items-center">
                    <Phone className="absolute left-4 text-gray-500" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative flex items-start">
                    <MessageSquare className="absolute left-4 top-4 text-gray-500" size={18} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message or Inquiry"
                      required
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-2 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition flex items-center gap-2 font-medium disabled:bg-yellow-400 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader className="animate-spin" size={18} />
                          Loading...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                  <p className="mt-4 text-lg text-gray-800 font-semibold">Thank you for your enquiry!</p>
                  <p className="mt-2 text-gray-600">We'll get back to you soon.</p>
                </div>
              )}
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
