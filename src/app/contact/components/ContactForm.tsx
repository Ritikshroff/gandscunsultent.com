"use client";

import { Button } from "@/components/Button";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/navigation";

// import contact from "../../../public/contact-us.webp";

function SubmissionSuccess() {
  const router = useRouter();

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
      <Button
        className="bg-[#1A73E8] hover:bg-[#1666c1] px-6 py-0 text-white text-md font-medium rounded-full flex items-center gap-2 shadow-lg mt-6 cursor-pointer"
        onClick={() => router.push("/")}
      >
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (formData.phone && !/^\+?\d{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form.", { id: "contact-toast" });
      return;
    }

    setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-8 py-8 font-inter">
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
      <section className="w-full max-w-2xl mx-auto text-center py-10 px-4 sm:px-8 mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          Empower Your Business With G&S Finance!
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

      {/* WhatsApp Banner - Attractive, at the very top, no margin */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-none bg-gradient-to-r from-[#25D366] via-[#1A73E8] to-[#1A73E8] shadow-xl rounded-b-2xl px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <div className="flex items-center gap-3">
          {/* WhatsApp Icon */}
          <span className="inline-flex items-center justify-center rounded-full bg-white shadow-md w-12 h-12">
            <svg
              viewBox="0 0 32 32"
              width="32"
              height="32"
              fill="none"
              className="text-[#25D366]"
            >
              <circle cx="16" cy="16" r="16" fill="#25D366" />
              <path
                d="M23.5 17.5c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.4-.8 1.2-1 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.7.1-.2 0-.5-.1-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.5 0-.7 0-.2 0-.7.1-1 .5-.3.4-1.3 1.2-1.3 2.9 0 1.7 1.3 3.3 1.5 3.5.2.2 2.6 4.1 6.3 5.6.9.4 1.6.7 2.1.9.9.3 1.7.3 2.3.2.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.1-.4-.2-.8-.4z"
                fill="#fff"
              />
            </svg>
          </span>
          <span className="text-white font-semibold text-lg ml-2">WhatsApp Support</span>
        </div>
        <a
          href="https://wa.me/918447746183"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto text-center bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold py-2 px-5 rounded-full transition duration-200 shadow-md hover:shadow-lg"
        >
          Chat Now 💬
        </a>
      </motion.div>

      {/* Contact Form Section - moved up, always visible */}
      <div id="contact-main" className="w-full flex flex-col items-center mb-12 px-4 sm:px-0">
        <Toaster containerClassName="top-8" position="top-center" reverseOrder={false} />
        {submitted ? (
          <SubmissionSuccess />
        ) : (
          <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-3xl">
            {/* Left image / illustration area - hidden on mobile */}
            <div className="hidden md:flex md:w-1/2 bg-[#1A73E8] items-center justify-center p-6 sm:p-8">
              <img
                src="/contact-us.webp"
                alt="Contact Illustration"
                className="w-full max-w-xs sm:max-w-sm rounded-lg"
              />
            </div>
            {/* Right form area */}
            <div className="md:w-1/2 w-full p-4 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-500 text-center mb-6 text-sm">
                Fill out the form and our team will get back to you shortly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      required
                      className={`w-full border ${errors.name ? "border-red-400" : "border-gray-300"} rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500">{errors.name}</span>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      onChange={handleChange}
                      required
                      className={`w-full border ${errors.email ? "border-red-400" : "border-gray-300"} rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500">{errors.email}</span>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 "
                      onChange={handleChange}
                      className={`w-full border ${errors.phone ? "border-red-400" : "border-gray-300"} rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500">{errors.phone}</span>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Query "
                      onChange={handleChange}
                      required
                      className={`w-full border ${errors.subject ? "border-red-400" : "border-gray-300"} rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]`}
                    />
                    {errors.subject && (
                      <span className="text-xs text-red-500">{errors.subject}</span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Type here..."
                    onChange={handleChange}
                    required
                    className={`w-full border ${errors.message ? "border-red-400" : "border-gray-300"} rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] resize-none`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500">{errors.message}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className={`w-full bg-[#1A73E8] hover:bg-[#1666c1] text-white font-medium py-3 rounded-md transition duration-200 shadow-md hover:shadow-lg text-base mt-2 ${isSubmitting ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="w-full max-w-3xl mx-auto border-b border-gray-200 my-10" />

      {/* FAQ Section for Contact Page */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-8 py-10 mb-10" aria-label="Contact FAQs">
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
              Yes, our experts can guide you across incorporation, compliance, tax, and more—just mention your needs in the form.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow p-4 group">
            <summary className="font-semibold text-[#1A73E8] cursor-pointer group-open:text-[#1666c1] transition">
              Is my information safe?
            </summary>
            <p className="text-gray-700 mt-2">
              Absolutely. We use industry-standard security to keep your data confidential and protected.
            </p>
          </details>
        </div>
      </section>

      {/* Contact Directory Carousel Section */}
      <section
        className="w-full max-w-3xl mx-auto mb-12 px-4 sm:px-8"
        aria-label="Key Contacts & Support"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-center text-[#1A73E8] mb-4">
          Key Contacts & Support
        </h3>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 py-2 px-1 snap-x snap-mandatory"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Cards duplicated for seamless infinite loop */}
            {[...Array(2)].flatMap((_, i) => [
              // Card 1
              <div key={`sales-${i}`} className="min-w-[260px] max-w-xs bg-white rounded-xl shadow p-4 flex flex-col gap-2 items-center snap-center">
                <h4 className="font-semibold text-[#1A73E8] mb-1">Sales</h4>
                <a href="tel:+918447746183" className="text-gray-800 text-lg font-medium underline hover:text-[#1A73E8]">
                  +91 84477 46183
                </a>
                <p className="text-gray-500 text-xs text-center">For all sales related queries</p>
              </div>,
              // Card 2
              <div key={`incorp-${i}`} className="min-w-[260px] max-w-xs bg-white rounded-xl shadow p-4 flex flex-col gap-2 items-center snap-center">
                <h4 className="font-semibold text-[#1A73E8] mb-1">Incorporation & Registrations</h4>
                <a href="tel:+918448789562" className="text-gray-800 text-lg font-medium underline hover:text-[#1A73E8]">
                  +91 84487 89562
                </a>
                <p className="text-gray-500 text-xs text-center">Company/LLP/FSSAI/Other Registrations</p>
              </div>,
              // Card 3
              <div key={`tm-${i}`} className="min-w-[260px] max-w-xs bg-white rounded-xl shadow p-4 flex flex-col gap-2 items-center snap-center">
                <h4 className="font-semibold text-[#1A73E8] mb-1">Trademark & Copyright</h4>
                <a href="tel:+919205096817" className="text-gray-800 text-lg font-medium underline hover:text-[#1A73E8]">
                  +91 92050 96817
                </a>
                <p className="text-gray-500 text-xs text-center">IPR, Trademark & Copyright queries</p>
              </div>,
              // Card 4
              <div key={`billing-${i}`} className="min-w-[260px] max-w-xs bg-white rounded-xl shadow p-4 flex flex-col gap-2 items-center snap-center">
                <h4 className="font-semibold text-[#1A73E8] mb-1">Billing & Payment</h4>
                <span className="text-gray-800 text-sm text-center">
                  Email: <a href="mailto:accounting@registerkaro.in" className="underline hover:text-[#1A73E8]">accounting@registerkaro.in</a>
                </span>
                <p className="text-gray-500 text-xs text-center">For invoices, receipts, and payment queries</p>
              </div>,
              // Card 5
              <div key={`joel-${i}`} className="min-w-[260px] max-w-xs bg-white rounded-xl shadow p-4 flex flex-col gap-2 items-center snap-center">
                <h4 className="font-semibold text-[#1A73E8] mb-1">Joel Dsouza</h4>
                <span className="text-xs font-normal text-gray-600 mb-1">Co-founder</span>
                <span className="text-gray-800 text-sm text-center">
                  Email: <a href="mailto:joel@registerkaro.in" className="underline hover:text-[#1A73E8]">joel@registerkaro.in</a>
                </span>
                <p className="text-gray-500 text-xs text-center">Direct connect for business partnerships</p>
              </div>,
              // Card 6
              <div key={`grievance-${i}`} className="min-w-[260px] max-w-xs bg-white rounded-xl shadow p-4 flex flex-col gap-2 items-center snap-center">
                <h4 className="font-semibold text-[#1A73E8] mb-1">Grievance & Complaints</h4>
                <span className="text-gray-800 text-sm text-center">
                  Email: <a href="mailto:support@registerkaro.in" className="underline hover:text-[#1A73E8]">support@registerkaro.in</a>
                </span>
                <p className="text-gray-500 text-xs text-center">For any support or complaint escalation</p>
              </div>,
            ])}
          </motion.div>
        </div>
        <div className="mt-8 text-gray-600 text-sm text-center px-2">
          <span className="font-medium text-[#1A73E8]">Note:</span> G&S Finance is a leading group of expert professionals, known for its excellence in guiding corporate businesses and entrepreneurs. We specialize in company incorporation, tax services, and a wide range of other professional services, all delivered with individual expertise and dedication.
        </div>
      </section>
    </div>
  );
}
