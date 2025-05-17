// app/services/page.tsx
"use client";

import { Briefcase, TrendingUp, PiggyBank, CalendarCheck } from "lucide-react";

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
    <section className="px-6 py-12 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
        <p className="text-gray-600 mb-12">
          Explore our expert services designed to simplify your financial journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
