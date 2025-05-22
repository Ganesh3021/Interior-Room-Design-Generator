"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

function Emptystate() {
  const router = useRouter();

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/bg2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black'></div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='relative w-full h-full flex items-center justify-center px-4'
      >
        <motion.div
          className='relative flex flex-col md:flex-row items-center justify-center w-full h-full z-10 text-center gap-8 md:gap-0'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Heading */}
          <div className="absolute top-5 w-full text-center px-4 z-20">
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-200 drop-shadow-lg">
              Try Our Both Models
            </h2>
          </div>

          {/* Prompt to Image Generator */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-cyan-300">Prompt To Image Generator</h3>
            <img
              src="/aiart.jpg"
              alt="Image Generator"
              className="object-contain drop-shadow-xl w-72 md:w-[400px]"
            />
            <Link href={'https://prompt-to-image-ten-nu.vercel.app/'}>
              <button className="group relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                <span className="relative flex items-center gap-3 rounded-lg bg-black px-7 py-3 leading-none w-72 h-20 justify-between">
                  <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-80 shadow-lg shadow-cyan-500/50 transition-all duration-300 group-hover:scale-125"></span>
                  <span className="flex-col gap-1 text-left">
                    <span className="text-sm font-medium text-cyan-500">Image Generator</span>
                  </span>
                  <span className="ml-auto transform transition-transform duration-300 group-hover:translate-x-1">
                    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </button>
            </Link>
          </div>

          {/* Vertical Divider (only desktop) */}
          <div className="hidden md:block absolute left-1/2 top-[8rem] transform -translate-x-1/2 h-[calc(100%-8rem)] border-l-4 border-cyan-500 opacity-50"></div>

          {/* Interior Room Design Generator */}
          <div className="flex flex-col items-center space-y-4 ml-0 md:ml-64">
            <h3 className="text-lg md:text-xl font-semibold text-cyan-300">Interior Room Design Generator</h3>
            <img
              src="/out.png"
              alt="Interior Generator"
              className="object-contain drop-shadow-xl w-72 md:w-[400px]"
            />
            <Link href={'/dashboard/create-new'}>
              <button className="group relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                <span className="relative flex items-center gap-3 rounded-lg bg-black px-7 py-3 leading-none w-72 h-20 justify-between">
                  <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-80 shadow-lg shadow-cyan-500/50 transition-all duration-300 group-hover:scale-125"></span>
                  <span className="flex-col gap-1 text-left">
                    <span className="text-sm font-medium text-cyan-500">Interior Room Design Generator</span>
                  </span>
                  <span className="ml-auto transform transition-transform duration-300 group-hover:translate-x-1">
                    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Emptystate;
