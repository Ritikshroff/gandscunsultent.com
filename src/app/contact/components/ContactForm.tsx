// "use client";
// import { useState } from "react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const res = await fetch("/api/contact", {
//       method: "POST",
//       body: JSON.stringify(formData),
//     });
//     const data = await res.json();
//     alert(data.message);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mx-auto space-y-5">
//       <h2 className="text-2xl font-semibold text-gray-800 text-center">Get in Touch</h2>

//       <div className="flex flex-col">
//         <label htmlFor="name" className="text-gray-700 font-medium mb-1">Your Name</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="John Doe"
//           onChange={handleChange}
//           required
//           className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="email" className="text-gray-700 font-medium mb-1">Email Address</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="you@example.com"
//           onChange={handleChange}
//           required
//           className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="message" className="text-gray-700 font-medium mb-1">Message</label>
//         <textarea
//           name="message"
//           id="message"
//           placeholder="Your message here..."
//           rows={4}
//           onChange={handleChange}
//           required
//           className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition resize-none"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-[#1A73E8] hover:bg-[#1666c1] text-white font-medium py-2 rounded-md transition duration-200 shadow-sm hover:shadow-lg"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// }

"use client";

import { Button } from "@/components/Button";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MoveRight } from "lucide-react";

function SubmissionSuccess() {
  return (
    <>
    <div className="justify-center items-center flex flex-col">
      <div className="text-center py-12 px-6 bg-green-50 border border-green-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">
          Thank you! 🙏
        </h2>
        <p className="text-green-700">
          We've received your message and will get back to you soon.
        </p>
      </div>
      <Button className="bg-[#1A73E8] hover:bg-[#1666c1] px-6 py-3 text-white text-md font-medium rounded-full flex items-center gap-2 shadow-lg mt-4">
        Go To Home <MoveRight size={18} />
      </Button>
      </div>
    </>
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
    <div className="w-full max-w-xl mx-auto px-4">
      <Toaster position="top-center" reverseOrder={false} />
      {submitted ? (
        <SubmissionSuccess />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-5"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-700"
              >
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
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
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
            className="w-full bg-[#1A73E8] hover:bg-[#1666c1] text-white font-medium py-2 rounded-md transition duration-200 shadow-sm hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
