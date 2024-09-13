// 'use client'

import logo from '@/images/logo/logo_2.svg'

const Logo = () => {
  return (
    <>
      <div className='flex items-center justify-start gap-1'>
        <img className='animate-logo w-9' src={logo.src} alt='' />
        <p className='font-Itim text-xl text-blue-700 dark:text-yellow-200'>WebNotes</p>
      </div>
    </>
  )
}

export { Logo }
