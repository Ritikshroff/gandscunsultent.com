"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mx-auto space-y-5">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Get in Touch</h2>

      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700 font-medium mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700 font-medium mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@example.com"
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-gray-700 font-medium mb-1">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message here..."
          rows={4}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#1A73E8] hover:bg-[#1666c1] text-white font-medium py-2 rounded-md transition duration-200 shadow-sm hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
}
