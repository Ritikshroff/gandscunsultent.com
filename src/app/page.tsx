// app/page.tsx
"use client";

import { Button } from "@/components/Button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#F9FAFB] text-gray-800 font-inter">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 md:px-0 text-center bg-white">
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
    </main>
  );
}
