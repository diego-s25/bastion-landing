'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-radial animate-pulse-slow"
        aria-hidden="true"
      ></motion.div>

      <motion.div
        className="max-w-3xl text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Bienvenido a<br />
          <span className="text-white text-6xl md:text-8xl block leading-tight">
            BASTION
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Transporte privado, elevado a un nuevo nivel. Elegancia. Seguridad. Exclusividad.
        </motion.p>

        <motion.p
          className="text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          ¿Interesado en ofrecer tu flota con Bastion? Escríbenos a <span className="text-white">bastionapp@outlook.com</span>
        </motion.p>
      </motion.div>
    </main>
  );
}
