// app/about/page.tsx
"use client";

export default function About() {
  return (
    <main className="bg-[#F9FAFB] min-h-screen font-inter">
      {/* Hero Section */}
      <section className="w-full bg-white py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <img
            src="/contact-us.webp"
            alt="Our Team"
            className="w-32 h-32 mb-6 rounded-full object-cover shadow-lg bg-[#e8f0fe]"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-700 text-lg sm:text-xl mb-6 max-w-2xl">
            We are a modern, client-focused Financial Consultants founded by a Chartered Accountant and an MBA, bringing
            together the best of financial, regulatory, and strategic expertise.
          </p>
          <p className="text-gray-600 text-base sm:text-lg mb-2 max-w-2xl">
            Built on a shared vision to provide end-to-end business solutions under one roof, our firm is committed to
            helping individuals, startups, and enterprises navigate the complexities of finance, taxation, and compliance
            with confidence.
          </p>
        </div>
      </section>

      {/* Who We Are & Our Approach */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-8 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#1A73E8] mb-3">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            With a blend of technical knowledge, industry insights, and a hands-on approach, we aim to go beyond just
            compliance. We partner with our clients to drive sustainable growth, ensure regulatory peace of mind, and
            unlock value at every stage of the business lifecycle.
          </p>
          <p className="text-gray-600">
            Whether you're looking to set up a new venture, streamline your operations, raise funds, or stay ahead of
            regulatory changes, we are here to guide you with clarity, integrity, and a personalized approach.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/contact-us.webp"
            alt="Growth"
            className="w-64 h-64 object-contain rounded-xl shadow-md bg-[#f4f7fe] p-4"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <img src="/vision.jpg" alt="Vision" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold text-[#1A73E8] mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To be a trusted financial and strategic advisor, empowering businesses to grow with confidence and compliance.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <img src="/mission.jpg" alt="Mission" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold text-[#1A73E8] mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To deliver timely, reliable, and value-driven services across audit, taxation, compliance, and advisory by
            combining the strengths of professional excellence and business acumen.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-8 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
          Ready to experience clarity and confidence in your finances?
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Connect with our team for a personalized consultation and discover how we can help you or your business grow.
        </p>
        <a
          href="/contact"
          className="bg-[#1A73E8] hover:bg-[#1666c1] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition text-lg"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
