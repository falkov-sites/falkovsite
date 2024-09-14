'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { cn } from '@/lib/utils'

const navItems: { title: string; href: string }[] = [
  { title: 'Home', href: '/' },
  { title: 'WebNotes', href: '/webnotes' },
  { title: 'Contacts', href: '/contacts' },
  { title: 'About', href: '/about' }
]

export function NavMenu() {
  const pathname = usePathname()

  return (
    <nav className='flex gap-1 *:rounded-lg *:border *:px-3 *:py-2'>
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={
            pathname === item.href
              ? '__gradient-sky-withHover border border-sky-500'
              : 'border-transparent hover:border-sky-300'
          }>
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
