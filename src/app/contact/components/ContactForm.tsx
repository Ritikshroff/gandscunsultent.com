"use client";

import { Button } from "@/components/Button";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
// import contact from "../../../public/contact-us.webp";

function SubmissionSuccess() {
  return (
    <div className="justify-center items-center flex flex-col py-20">
      <div className="text-center py-12 px-6 bg-green-50 border border-green-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">
          Thank you! 🙏
        </h2>
        <p className="text-green-700">
          We've received your message and will get back to you soon.
        </p>
      </div>
      <Button className="bg-[#1A73E8] hover:bg-[#1666c1] px-6 py-3 text-white text-md font-medium rounded-full flex items-center gap-2 shadow-lg mt-6">
        Go To Home <MoveRight size={18} />
      </Button>
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.loading("Sending...", { id: "contact-toast" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Message sent!", { id: "contact-toast" });
        setSubmitted(true);
      } else {
        toast.error(data.message || "Something went wrong", {
          id: "contact-toast",
        });
      }
    } catch (err) {
      toast.error("Network error!", { id: "contact-toast" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <Toaster containerClassName="top-8" position="top-center" reverseOrder={false} />

      {/* 🌟 WhatsApp Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#e8f0fe] border border-[#cbdcf7] rounded-lg shadow-md p-6 mb-8 w-full max-w-3xl"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-[#1A73E8] mb-2">
          Get Your Queries Answered Instantly on WhatsApp
        </h3>
        <p className="text-gray-700 mb-3">
          Whether you need help with services, pricing, or general inquiries, our team is just a message away.
        </p>
        <p className="font-medium text-gray-800 mb-4">
          Connect With Our Support Team!
        </p>
        <a
          href="https://wa.me/919555325902"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold py-2 px-5 rounded-full transition duration-200 shadow-md hover:shadow-lg"
        >
          Chat Now 💬
        </a>
      </motion.div>

      <div className="w-full flex flex-col items-center">
        {submitted ? (
          <SubmissionSuccess />
        ) : (
          <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-3xl">
            {/* Left image / illustration area */}
            <div className="md:w-1/2 w-full bg-[#1A73E8] flex items-center justify-center p-8">
              <img
                src="/contact-us.webp"
                alt="Contact Illustration"
                className="w-full max-w-sm"
              />
            </div>

            {/* Right form area */}
            <div className="md:w-1/2 w-full p-8">
              <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-500 text-center mb-6 text-sm">
                Fill out the form and our team will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Query about services"
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your message here..."
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A73E8] hover:bg-[#1666c1] text-white font-medium py-2 rounded-md transition duration-200 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
