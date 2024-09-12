'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='flex gap-2'>
      <button
        className='rounded-full border border-transparent p-1 transition-all hover:border-primary/50'
        onClick={() => setTheme('light')}>
        <SunIcon className='h-[1.5rem] w-[1.5rem]' />
      </button>
      <button
        className='rounded-full border border-transparent p-1 transition-all hover:border-primary/50'
        onClick={() => setTheme('dark')}>
        <MoonIcon className='h-[1.5rem] w-[1.5rem]' /> 
      </button>
    </div>
  )
}
