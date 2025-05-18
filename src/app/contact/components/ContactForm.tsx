"use client";

import { Button } from "@/components/Button";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";

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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-2 py-6 font-inter">
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Us | RegisterKaro</title>
        <meta
          name="description"
          content="Contact RegisterKaro for expert help with company incorporation, compliance, tax, and more. Get in touch with our team for fast support."
        />
        <meta
          name="keywords"
          content="contact, RegisterKaro, company registration, compliance, tax, support"
        />
      </Head>

      {/* Accessible skip link */}
      <a
        href="#contact-main"
        className="sr-only focus:not-sr-only absolute left-2 top-2 bg-white text-[#1A73E8] px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Hero/Intro Section */}
      <section className="w-full max-w-2xl mx-auto text-center py-8 px-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          Empower Your Business With RegisterKaro!
        </h1>
        <p className="text-gray-700 text-base sm:text-lg mb-4">
          Unlock Seamless Solutions for Incorporation, Compliance, and Taxation
          with Our Expert Services!
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="bg-[#e8f0fe] text-[#1A73E8] px-3 py-1 rounded-full text-sm font-medium">
            Private Limited Company Registration
          </span>
          <span className="bg-[#e8f0fe] text-[#1A73E8] px-3 py-1 rounded-full text-sm font-medium">
            FSSAI Certificate Registration
          </span>
          <span className="bg-[#e8f0fe] text-[#1A73E8] px-3 py-1 rounded-full text-sm font-medium">
            LLP Registration
          </span>
          <span className="bg-[#e8f0fe] text-[#1A73E8] px-3 py-1 rounded-full text-sm font-medium">
            Trademark Registration
          </span>
        </div>
        <a
          href="#contact-main"
          className="inline-block bg-[#1A73E8] hover:bg-[#1666c1] text-white font-semibold py-2 px-6 rounded-full shadow transition text-base"
        >
          Get Started Today
        </a>
      </section>

      {/* WhatsApp Banner */}
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
          Whether you need help with services, pricing, or general inquiries, our
          team is just a message away.
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

      {/* Contact Directory Section */}
      <section
        className="w-full max-w-3xl mx-auto mb-8"
        aria-label="Contact Directory"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
            <h4 className="font-semibold text-[#1A73E8] mb-1">Sales</h4>
            <span className="text-gray-800 text-lg font-medium">
              +91 84477 46183
            </span>
            <h4 className="font-semibold text-[#1A73E8] mt-4 mb-1">
              Incorporation & Registrations
            </h4>
            <span className="text-gray-800 text-lg font-medium">
              +91 84487 89562
            </span>
            <h4 className="font-semibold text-[#1A73E8] mt-4 mb-1">
              Trademark & Copyright
            </h4>
            <span className="text-gray-800 text-lg font-medium">
              +91 92050 96817
            </span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
            <h4 className="font-semibold text-[#1A73E8] mb-1">
              For Billing & Payment
            </h4>
            <span className="text-gray-800 text-sm">
              Email:{" "}
              <a
                href="mailto:accounting@registerkaro.in"
                className="underline hover:text-[#1A73E8]"
              >
                accounting@registerkaro.in
              </a>
            </span>
            <h4 className="font-semibold text-[#1A73E8] mt-4 mb-1">
              Joel Dsouza
              <br />
              <span className="text-xs font-normal text-gray-600">
                Co-founder
              </span>
            </h4>
            <span className="text-gray-800 text-sm">
              Email:{" "}
              <a
                href="mailto:joel@registerkaro.in"
                className="underline hover:text-[#1A73E8]"
              >
                joel@registerkaro.in
              </a>
            </span>
            <h4 className="font-semibold text-[#1A73E8] mt-4 mb-1">
              For Grievance and Complaints
            </h4>
            <span className="text-gray-800 text-sm">
              Email:{" "}
              <a
                href="mailto:support@registerkaro.in"
                className="underline hover:text-[#1A73E8]"
              >
                support@registerkaro.in
              </a>
            </span>
          </div>
        </div>
        <div className="mt-6 text-gray-600 text-sm text-center">
          <span className="font-medium text-[#1A73E8]">Note:</span>{" "}
          RegisterKaro is a leading group of expert professionals, known for its
          excellence in guiding corporate businesses and entrepreneurs. We
          specialize in company incorporation, tax services, and a wide range of
          other professional services, all delivered with individual expertise
          and dedication.
        </div>
      </section>

      {/* Contact Form Section */}
      <div id="contact-main" className="w-full flex flex-col items-center">
        <Toaster
          containerClassName="top-8"
          position="top-center"
          reverseOrder={false}
        />
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
                      placeholder="Name"
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
                      placeholder="email"
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
                      placeholder="+91 "
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
                      placeholder="Query "
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
                    placeholder="Type here..."
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

      {/* FAQ Section for Contact Page */}
      <section
        className="w-full max-w-3xl mx-auto px-2 py-10"
        aria-label="Contact FAQs"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-lg shadow p-4 group">
            <summary className="font-semibold text-[#1A73E8] cursor-pointer group-open:text-[#1666c1] transition">
              How quickly will I get a response?
            </summary>
            <p className="text-gray-700 mt-2">
              Our team responds to all queries within 24 hours on business days.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow p-4 group">
            <summary className="font-semibold text-[#1A73E8] cursor-pointer group-open:text-[#1666c1] transition">
              Can I get support for multiple services?
            </summary>
            <p className="text-gray-700 mt-2">
              Yes, our experts can guide you across incorporation, compliance, tax,
              and more—just mention your needs in the form.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow p-4 group">
            <summary className="font-semibold text-[#1A73E8] cursor-pointer group-open:text-[#1666c1] transition">
              Is my information safe?
            </summary>
            <p className="text-gray-700 mt-2">
              Absolutely. We use industry-standard security to keep your data
              confidential and protected.
            </p>
          </details>
        </div>
      </section>



    </div>
  );
}
