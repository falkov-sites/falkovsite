'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageNotFound() {
  const pathname = usePathname()

  return (
    <motion.div
      className='flex h-[80vh] items-center justify-center'
      animate={{ scale: 1.2 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear'
      }}>
      <div className='text-3xl [text-shadow:4px_4px_4px_rgb(150,150,150)]'>
        🥲 page &nbsp;"{pathname}" &nbsp;not found 🥲
      </div>
    </motion.div>
  )
}
