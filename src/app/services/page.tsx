// app/services/page.tsx
"use client";

import { Briefcase, TrendingUp, PiggyBank, CalendarCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function Services() {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#1A73E8]" />,
      title: "Tax Planning & Savings",
      description: "Optimize your tax liabilities with personalized strategies that maximize your savings.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#1A73E8]" />,
      title: "Investment Consultation",
      description: "Smart, data-backed investment advice to grow your portfolio and manage risk.",
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-[#1A73E8]" />,
      title: "Wealth Management",
      description: "Long-term wealth building plans tailored to your financial goals and lifestyle.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-[#1A73E8]" />,
      title: "Retirement Planning",
      description: "Secure your future with a solid retirement roadmap designed around you.",
    },
  ];

  return (
    <section className="px-4 sm:px-8 py-12 bg-[#F9FAFB] font-inter">
      {/* SEO Meta Tags */}
      <Head>
        <title>Services | G&S Finance</title>
        <meta name="description" content="Explore G&S Finance services: tax planning, investment consultation, wealth management, and retirement planning. Expert support for your financial journey." />
        <meta name="keywords" content="tax planning, investment, wealth management, retirement, G&S Finance, services" />
      </Head>

      {/* Accessible skip link */}
      <a href="#services-main" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-white text-[#1A73E8] px-4 py-2 rounded z-50">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="min-h-auto flex flex-col justify-center items-center p-8 m-4 md:px-0 text-center bg-white mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]"
        >
          Empowering Your Financial Future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-xl mb-6"
        >
          Smart consulting tailored to your goals. GandS is your partner in wealth, planning, and peace of mind.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button className="bg-[#1A73E8] hover:bg-[#1666c1] px-6 py-3 text-white text-md font-medium rounded-full flex items-center gap-2 shadow-lg">
            Get Started <MoveRight size={18} />
          </Button>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-8 flex-col md:flex-row items-center gap-12 bg-[#F4F7FE] rounded-3xl mb-12 hidden sm:flex" aria-label="What We Do">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <span className="uppercase text-gray-700 font-medium tracking-wide mb-2">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Receive support at every stage of business development.
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            Launch, grow and scale with ease. Each of our clients has a dedicated team that is committed to answering all queries within 24 hours, so you can rely on our helpful and professional support throughout your business journey.
          </p>
          <div className="flex gap-4">
            <Button className="bg-[#1A73E8] hover:bg-[#1A73f6] text-white font-semibold px-7 py-3 rounded-full shadow transition">
              Popular Services
            </Button>
            <Button variant="outline" className="bg-white border border-gray-300 text-gray-800 font-semibold px-7 py-3 rounded-full shadow transition flex items-center gap-2">
              Get Started <MoveRight size={18} />
            </Button>
          </div>
        </div>
        {/* Right Images & Dots */}
        <div className="flex-1 flex justify-center items-center relative min-h-[320px]">
          {/* Decorative Dots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -top-8 -left-8 z-0"
          >
            <svg width="100" height="100" className="opacity-40">
              <circle cx="10" cy="10" r="3" fill="#1A73E8" />
              <circle cx="30" cy="10" r="3" fill="#1A73E8" />
              <circle cx="50" cy="10" r="3" fill="#1A73E8" />
              <circle cx="70" cy="10" r="3" fill="#1A73E8" />
              <circle cx="90" cy="10" r="3" fill="#1A73E8" />
              <circle cx="10" cy="30" r="3" fill="#1A73E8" />
              <circle cx="30" cy="30" r="3" fill="#1A73E8" />
              <circle cx="50" cy="30" r="3" fill="#1A73E8" />
              <circle cx="70" cy="30" r="3" fill="#1A73E8" />
              <circle cx="90" cy="30" r="3" fill="#1A73E8" />
            </svg>
          </motion.div>
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <Image
              src="/next.svg"
              alt="Support Team"
              width={260}
              height={320}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>
          {/* Top Small Image */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -top-8 left-24 z-20"
          >
            <Image
              src="/confident-business-people-diversity-teamwork-concept.jpg"
              alt="Team Collaboration"
              width={110}
              height={80}
              className="rounded-lg border-4 border-white shadow-md"
            />
          </motion.div>
          {/* Bottom Small Image */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute bottom-0 left-0 z-20"
          >
            <Image
              src="/grow.jpg"
              alt="Client Meeting"
              width={110}
              height={80}
              className="rounded-lg border-4 border-white shadow-md"
            />
          </motion.div>
          {/* Pink Circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="absolute top-20 left-20 w-40 h-40 bg-[#FBB6CE] rounded-full z-0"
          />
        </div>
      </section>

      {/* Business Journey Section */}
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center py-12 mb-12" aria-label="Business Journey">
        <div className="flex flex-row items-start justify-center gap-2 sm:gap-12 w-full">
          {/* Sole Trader */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center flex-1 min-w-0"
          >
            <div className="bg-[#184366] rounded-xl p-2 sm:p-6 flex flex-col items-center shadow-lg mx-auto">
              <svg
                width="24"
                height="24"
                className="sm:w-10 sm:h-10"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z" fill="#fff"/>
              </svg>
            </div>
            <span className="mt-2 text-xs sm:text-sm font-semibold text-gray-800 text-center">Sole Trader</span>
          </motion.div>

          {/* Arrow */}
          <div className="flex items-center justify-center flex-none">
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
              <path d="M4 12 Q14 24 24 12" stroke="#1A73E8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#1A73E8"/>
                </marker>
              </defs>
            </svg>
          </div>

          {/* Limited Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center flex-1 min-w-0"
          >
            <div className="bg-[#1A73E8] rounded-xl p-2 sm:p-6 flex flex-col items-center shadow-lg mx-auto">
              <svg
                width="24"
                height="24"
                className="sm:w-10 sm:h-10"
                fill="none"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="7" width="18" height="13" rx="2" fill="#fff"/>
                <rect x="7" y="3" width="10" height="4" rx="1" fill="#fff" opacity="0.7"/>
              </svg>
            </div>
            <span className="mt-2 text-xs sm:text-sm font-semibold text-gray-800 text-center">Limited Company</span>
          </motion.div>

          {/* Arrow */}
          <div className="flex items-center justify-center flex-none">
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
              <path d="M4 12 Q14 24 24 12" stroke="#1A73E8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
              <defs>
                <marker id="arrowhead2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#1A73E8"/>
                </marker>
              </defs>
            </svg>
          </div>

          {/* Growing Business */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center flex-1 min-w-0"
          >
            <div className="bg-[#184366] rounded-xl p-2 sm:p-6 flex flex-col items-center shadow-lg mx-auto">
              <svg
                width="24"
                height="24"
                className="sm:w-10 sm:h-10"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M4 17v2h16v-2M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" strokeWidth="2"/>
              </svg>
            </div>
            <span className="mt-2 text-xs sm:text-sm font-semibold text-gray-800 text-center">Growing Business</span>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services-main" className="max-w-6xl mx-auto text-center py-12 px-4 sm:px-8 mb-12" aria-label="Our Services">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
        <p className="text-gray-600 mb-12">
          Explore our expert services designed to simplify your financial journey.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col items-center text-center"
              tabIndex={0}
              aria-label={service.title}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        {/* CTA below services */}
        <div className="flex justify-center mt-10">
          <a
            href="/contact"
            className="bg-[#1A73E8] hover:bg-[#1666c1] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition text-lg"
            aria-label="Contact us for a free consultation"
          >
            Contact Us for a Free Consultation
          </a>
        </div>
      </section>

      {/* FAQ Section for SEO & UX */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12 mb-8" aria-label="Frequently Asked Questions">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-lg shadow p-4 group">
            <summary className="font-semibold text-[#1A73E8] cursor-pointer group-open:text-[#1666c1] transition">
              What makes G&S Finance different?
            </summary>
            <p className="text-gray-700 mt-2">
              We combine expert advice, fast response, and a client-first approach to help you at every stage of your business and financial journey.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow p-4 group">
            <summary className="font-semibold text-[#1A73E8] cursor-pointer group-open:text-[#1666c1] transition">
              How do I get started?
            </summary>
            <p className="text-gray-700 mt-2">
              Simply click "Get Started" or "Contact Us" and our team will reach out to you within 24 hours.
            </p>
          </details>
          <details className="bg-white rounded-lg shadow p-4 group">
            <summary className="font-semibold text-[#1A73E8] cursor-pointer group-open:text-[#1666c1] transition">
              Are your services suitable for small businesses?
            </summary>
            <p className="text-gray-700 mt-2">
              Absolutely! We support sole traders, startups, and growing businesses with tailored solutions.
            </p>
          </details>
        </div>
      </section>
    </section>
  );
}
