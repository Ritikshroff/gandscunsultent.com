
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#F9FAFB] text-gray-800 font-inter">

{/* Second Section (RegisterKaro-style, stacked mobile-first) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 py-10 sm:py-16 bg-white w-full max-w-7xl mx-auto"
      >
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
            className="inline-block bg-[#1A73E8] hover:bg-[#e48d01] text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-200"
          >
            Get Started
          </a>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#f9fafb] border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="text-xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-600">Businesses Every Month</p>
            </div>
            <div className="bg-[#f9fafb] border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="text-xl font-bold text-gray-900">20,000+</p>
              <p className="text-sm text-gray-600">Clients All Over India</p>
            </div>
            <div className="bg-[#f9fafb] border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="text-xl font-bold text-gray-900">250+</p>
              <p className="text-sm text-gray-600">Professionals Network</p>
            </div>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center relative">
          <div className="relative z-10">
            <img
              src="/hero_model.webp"
              alt="Compliance team"
              className="rounded-lg object-cover w-[80%] mx-auto md:mx-0"
            />
          </div>
          <div className="absolute -top-5 right-5 w-40 h-40 bg-[#1A73E8] rounded-tr-[80px] rounded-bl-[80px] -z-10"></div>
        </div>
      </motion.section>
    </main>
  );
}
