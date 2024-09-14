'use client'

import { motion, AnimatePresence } from 'framer-motion'
// import logo from '@/images/logo/logo_rect_yellow.svg'
import logo from '@/images/logo/logo_2.svg'

const LogoMotion = () => {
  return (
    <>
      <div className='flex items-center justify-start gap-1'>
        {/* <img className='w-8 animate-logo' src={logo.src} alt='' /> */}

        <motion.div
          className=''
          // initial={{ opacity: 0, x: -120 }}
          // exit={{ opacity: 0 }}
          // whileHover={{ scale: 1.2, transition: { duration: 1 }, }} // whileHover, whileTap, whileDrag, whileFocus, whileInView
          animate={{ rotate: 360, x: 133 }}
          transition={{
            delay: 30,
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse', // "loop" | "reverse" | "mirror"
            repeatDelay: 30,
            ease: [0.37, -0.3, 0.6, 1.3]
          }}>
          <img className='w-8' src={logo.src} alt='' />
        </motion.div>

        <p className='font-Itim text-xl text-blue-700 dark:text-yellow-200'>Web Notes</p>
      </div>
    </>
  )
}

export { LogoMotion }
