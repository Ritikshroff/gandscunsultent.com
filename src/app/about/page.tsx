// app/about/page.tsx
"use client";

export default function About() {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">About Us</h1>
        <p className="text-gray-600 text-lg mb-8">
          At GandS Financial Consultants, we believe in building financial clarity and confidence. Our mission is to
          help individuals and businesses make smarter money decisions through expert advice and personalized strategies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Who We Are</h2>
            <p className="text-gray-600">
              We're a team of certified financial consultants, passionate about empowering people to take control of their
              financial future. With decades of combined experience, we specialize in everything from tax optimization to
              wealth management.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Client-first approach</li>
              <li>Transparent and ethical practices</li>
              <li>Personalized financial solutions</li>
              <li>Commitment to continuous growth and learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
