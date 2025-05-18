"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#F9FAFB] text-gray-800 font-inter">
      {/* SEO Meta Tags */}
      <head>
        <title>G&S Finance - Business Compliance Made Easy</title>
        <meta name="description" content="G&S Finance helps you with business compliance, tax filings, and legal services. Fast, affordable, and expert support for your business growth." />
        <meta name="keywords" content="business compliance, tax filing, legal services, G&S Finance, registration, India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      {/* Accessible skip link for keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-white text-[#1A73E8] px-4 py-2 rounded z-50">
        Skip to main content
      </a>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 py-10 sm:py-16 bg-white w-full max-w-7xl mx-auto mb-12"
        id="main-content"
        aria-label="Hero section"
      >

        {/* Right Image Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center relative">
          <div className="relative z-10">
            <img
              src="/hero_model.webp"
              alt="Compliance team"
              className="rounded-lg object-cover w-[80%] mx-auto md:mx-0"
            />
            {/* Cloud-like question bubbles */}
            <div className="absolute left-0 top-10 md:-left-10 md:top-20">
              <div className="backdrop-blur-sm bg-white/70 border border-white/40 shadow-lg rounded-full px-6 py-3 flex items-center text-[#1A73E8] font-semibold text-base md:text-lg cloud-shape">
                Need GST Help?
              </div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 md:-left-10 md:top-1/2">
              <div className="backdrop-blur-sm bg-white/70 border border-white/40 shadow-lg rounded-full px-6 py-3 flex items-center text-[#1A73E8] font-semibold text-base md:text-lg cloud-shape">
                Stuck with ROC?
              </div>
            </div>
            <div className="absolute left-1/2 -bottom-8 md:left-1/3 md:-bottom-10 transform -translate-x-1/2">
              <div className="backdrop-blur-sm bg-white/70 border border-white/40 shadow-lg rounded-full px-6 py-3 flex items-center text-[#1A73E8] font-semibold text-base md:text-lg cloud-shape">
                Payroll Issues?
              </div>
            </div>
            <div className="absolute right-0 bottom-0 md:-right-10 md:bottom-8 md:top-auto md:translate-y-0 top-auto mb-16">
              <div className="backdrop-blur-sm bg-white/70 border border-white/40 shadow-lg rounded-full px-6 py-3 flex items-center text-[#1A73E8] font-semibold text-base md:text-lg cloud-shape">
                Trouble with ITR?
              </div>
            </div>
          </div>
          <div className="absolute -top-5 right-5 w-40 h-40 bg-[#1A73E8] rounded-tr-[80px] rounded-bl-[80px] -z-10"></div>
        </div>

        
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            We take care of <span className="text-[#1A73E8]">ALL</span> your business compliance needs
          </h2>
          <p className="text-gray-600 mb-6">
            An online platform helping entrepreneurs with registrations, tax filings, and legal services—fast, simple, and affordable.
          </p>
          <a
            href="#"
            className="inline-block bg-[#1A73E8] hover:bg-[#1666c1] text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-200"
          >
            Get Started
          </a>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#f9fafb] border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-600">Businesses Every Month</p>
            </div>
            <div className="bg-[#f9fafb] border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-xl font-bold text-gray-900">20,000+</p>
              <p className="text-sm text-gray-600">Clients All Over India</p>
            </div>
            <div className="bg-[#f9fafb] border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-xl font-bold text-gray-900">250+</p>
              <p className="text-sm text-gray-600">Professionals Network</p>
            </div>
          </div>
        </div>

        
      </motion.section>

      {/* Comparison Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16 flex flex-col items-center mb-12" aria-label="Comparison of compliance options">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">
          Grow Your Business instead of Complex Registration processes and leave it for us
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mb-8">
          Compare the traditional way of handling compliance with our streamlined, expert-driven approach. Save time, money, and stress!
        </p>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-start mt-8">
          {/* Left Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 relative min-w-[320px] max-w-xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center md:text-left">
              With other service providers you would have to pay for each compliance filing individually
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3">
                <span className="text-[#1A73E8] text-xl mr-3">✔️</span>
                Quarterly TDS fillings – <span className="ml-1 font-medium">Rs.5,000</span>
              </li>
              <li className="flex items-center bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3">
                <span className="text-[#1A73E8] text-xl mr-3">✔️</span>
                Board Minutes preparation – <span className="ml-1 font-medium">Rs.1,000</span>
              </li>
              <li className="flex items-center bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3">
                <span className="text-[#1A73E8] text-xl mr-3">✔️</span>
                Annual AOC 4 filing – <span className="ml-1 font-medium">Rs.2,000</span>
              </li>
              <li className="flex items-center bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3">
                <span className="text-[#1A73E8] text-xl mr-3">✔️</span>
                Annual MGT - 7 filing – <span className="ml-1 font-medium">Rs.2,000</span>
              </li>
              <li className="flex items-center bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3">
                <span className="text-[#1A73E8] text-xl mr-3">✔️</span>
                DIR 3KYC for all the directors – <span className="ml-1 font-medium">Rs.3,000</span>
              </li>
            </ul>
            {/* Yellow badge */}
            <div className="absolute -top-6 right-6 bg-[#1A73E8] text-white font-bold rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg border-4 border-white text-lg">
              15k
            </div>
          </div>

          {/* Or divider */}
          <div className="hidden md:flex flex-col items-center justify-center h-full">
            <span className="text-xl font-semibold text-gray-500 mt-8">Or you could</span>
          </div>
          <div className="md:hidden flex justify-center my-4">
            <span className="text-xl font-semibold text-gray-500">Or you could</span>
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 min-w-[320px] max-w-xl mx-auto flex flex-col items-center">
            <div className="w-full flex items-center bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 mb-4">
              <span className="text-[#1A73E8] text-xl mr-3">✔️</span>
              <span className="font-semibold text-gray-700">Use G&S Finance</span>
            </div>
            <p className="text-gray-700 text-center mb-4">
              Get all your <span className="font-bold text-[#1A73E8]">Compliance</span> done with the help of <span className="font-semibold">Industry Experts</span> and channelize that precious time to grow your <span className="font-semibold">business</span>.
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-[#1A73E8] hover:bg-[#1666c1] text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-200"
            >
              Get Started!
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 mb-12" aria-label="Why Choose Us">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 flex flex-col items-center text-center">
            <span className="text-[#1A73E8] text-4xl mb-4">⚡</span>
            <h3 className="text-xl font-semibold mb-2">Fast & Hassle-Free</h3>
            <p className="text-gray-600">
              Experience quick turnaround times and a seamless online process for all your compliance needs.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 flex flex-col items-center text-center">
            <span className="text-[#1A73E8] text-4xl mb-4">💡</span>
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">
              Our team of professionals ensures you get the right advice and support at every step.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 flex flex-col items-center text-center">
            <span className="text-[#1A73E8] text-4xl mb-4">💰</span>
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">
              Transparent and competitive pricing with no hidden charges—get value for your money.
            </p>
          </div>
        </div>
        {/* Add a call to action below the cards */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="bg-[#1A73E8] hover:bg-[#1666c1] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition text-lg"
            aria-label="Contact us for a free consultation"
          >
            Contact Us for a Free Consultation
          </a>
        </div>
      </section>

      {/* FAQ Section for SEO & UX */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12 mb-12" aria-label="Frequently Asked Questions">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-lg shadow p-6 group">
            <summary className="font-semibold text-[#1A73E8] cursor-pointer group-open:text-[#1666c1] transition">
              What services does G&S Finance provide?
            </summary>
            <p className="text-gray-700 mt-2">
              We offer business compliance, tax filing, legal services, and expert support for entrepreneurs and growing businesses.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group">
            <summary className="font-semibold text-[#1A73E8] cursor-pointer group-open:text-[#1666c1] transition">
              How quickly can I get support?
            </summary>
            <p className="text-gray-700 mt-2">
              Our team responds to all queries within 24 hours, ensuring you get timely and professional assistance.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow p-6 group">
            <summary className="font-semibold text-[#1A73E8] cursor-pointer group-open:text-[#1666c1] transition">
              Is my data secure with G&S Finance?
            </summary>
            <p className="text-gray-700 mt-2">
              Yes, we use industry-standard security practices to keep your information safe and confidential.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
