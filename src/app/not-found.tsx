'use client'

import { usePathname } from 'next/navigation'

export default function PageNotFound() {
  const pathname = usePathname()

  return (
    <div className='flex h-[80vh] items-center justify-center'>
      <div className='text-3xl [text-shadow:4px_4px_4px_rgb(150,150,150)]'>
        <h1>🥲 page &nbsp;"{pathname}" &nbsp;not found 🥲</h1>
      </div>
    </div>
  )
}
