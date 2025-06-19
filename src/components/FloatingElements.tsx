'use client';
import { motion } from 'framer-motion';

export default function FloatingElements() {
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating lotus flowers */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 text-4xl text-yellow-400 opacity-30"
        style={{ animationDelay: '0s' }}
      >
        ❀
      </motion.div>
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 text-3xl text-red-400 opacity-25"
        style={{ animationDelay: '2s' }}
      >
        ❀
      </motion.div>
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-32 left-1/4 text-5xl text-yellow-300 opacity-20"
        style={{ animationDelay: '4s' }}
      >
        ❀
      </motion.div>
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 right-1/3 text-2xl text-red-300 opacity-30"
        style={{ animationDelay: '1s' }}
      >
        ❀
      </motion.div>

      {/* Sparkle effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          variants={sparkleVariants}
          animate="animate"
          className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
}