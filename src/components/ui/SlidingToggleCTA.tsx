'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function SlidingToggleCTA() {
  const [isHovered, setIsHovered] = useState(false);

  // Colors aligned with the Capital Partners theme and user request
  const brandGreen = "#37d67a";

  const handleClick = () => {
    // Navigate to the whatsapp hash as in the previous implementation
    window.location.hash = 'whatsapp';
  };

  return (
    <div
      className="relative group cursor-pointer inline-block w-full sm:w-[340px] min-w-[280px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Outer Glow/Border Effect */}
      <div
        className="relative rounded-2xl p-[1px] transition-all duration-500 overflow-hidden"
        style={{
          background: isHovered 
            ? `linear-gradient(90deg, ${brandGreen}, #ffffff, ${brandGreen})` 
            : 'transparent',
          boxShadow: isHovered ? `0 0 30px ${brandGreen}44` : 'none',
        }}
      >
        {/* Main Button Body */}
        <motion.div
          className="relative flex items-center w-full h-16 rounded-2xl overflow-hidden p-2 border border-white/5"
          initial={false}
          animate={{
            backgroundColor: isHovered ? "#0f172a" : brandGreen,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Responsive Sliding Knob */}
          <div className="relative w-full h-full flex items-center z-20 pointer-events-none">
            <motion.div
              className="absolute w-12 h-12 rounded-xl flex items-center justify-center shadow-lg pointer-events-auto"
              initial={false}
              animate={{
                left: isHovered ? "calc(100% - 48px)" : "0%",
                backgroundColor: isHovered ? brandGreen : "#000000",
              }}
              transition={{ duration: 0.5, type: "spring", stiffness: 180, damping: 22 }}
            >
              <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.div
                  key="chat-icon"
                  initial={{ opacity: 0, rotate: -20 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="arrow-icon"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-6 h-6 text-black" />
                </motion.div>
              )}
            </AnimatePresence>
            </motion.div>
          </div>

          {/* Text Layers */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 w-full overflow-hidden">
            {/* DEFAULT STATE: Fale com um Especialista */}
            <motion.span
              className="absolute text-sm sm:text-base font-bold whitespace-nowrap tracking-tight"
              initial={false}
              animate={{
                opacity: isHovered ? 0 : 1,
                x: isHovered ? -40 : 12,
              }}
              transition={{ duration: 0.35 }}
              style={{ color: "#000000" }}
            >
              Fale com um Especialista
            </motion.span>

            {/* HOVER STATE: New CTA phrase */}
            <motion.span
              className="absolute text-sm sm:text-base font-bold whitespace-nowrap tracking-tight"
              initial={false}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? -12 : 40,
              }}
              transition={{ duration: 0.35 }}
              style={{ color: brandGreen }}
            >
              Conversar via WhatsApp
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
