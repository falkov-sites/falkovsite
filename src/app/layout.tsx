import { ThemeProvider } from '@/app/theme-provider'
import type { Metadata } from 'next'

// import { NavMenu } from '@/components/NavMenu'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
// import { Logo } from '@/components/Logo'

import '@/styles/globals.css'
import { LogoMotion } from '@/components/LogoMotion'
// import { GeoWeather } from '@/components/GeoWeather'

// import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: 'webNotes',
  description: 'my web notes'
  // icons: {
  //   icon: '../icons/mstile-144x144.png'
  // }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <body>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <div className='container mx-auto my-4 flex max-w-[900px] items-center justify-between px-6'>
              <LogoMotion />
              {/* <NavMenu /> */}
              <ThemeSwitcher />
            </div>

            {children}

            {/* <GeoWeather /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
