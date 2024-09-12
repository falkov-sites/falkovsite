// 'use client'

import { headers } from 'next/headers'
import { getUserIP, getUserHost } from '@/lib/mylib'

const allHeadersList = [
  'Accept',
  'Accept-Charset',
  'Accept-Encoding',
  'Accept-Language',
  'Accept-Patch',
  'Accept-Ranges',
  'Allow',
  'Cache-Control',
  'Connection',
  'Content-Encoding',
  'Content-Language',
  'Expect',
  'If-Match',
  'If-None-Match',
  'Host',
  'Pragma',
  'Proxy-Authenticate',
  'Referer',
  'TE',
  'Trailer',
  'Transfer-Encoding',
  'Upgrade',
  'Vary',
  'Via',
  'User-Agent',
  'Warning',
  'WWW-Authenticate',
  'X-Forwarded-For'
]

type propsType = {
  title?: string
  subtitle?: string
}

const printAllHeaders = () => {
  const headersList = headers()

  return (
    <>
      {allHeadersList.map((headerTitle, index) => {
        const headerValue = headersList.get(headerTitle) || ''

        return (
          <div key={index}>
            <div className={headerValue.length > 1 ? 'text-green-500' : 'text-red-500'}>
              {headerTitle} = {headerValue}
            </div>
          </div>
        )
      })}
    </>
  )
}

const UserData = (props: propsType) => {
  return (
    <div>
      <p>ip: {getUserIP()}</p>
      <p>host: {getUserHost()}</p>

      <p className='mt-4 font-bold'>All Headers:</p>
      <p>{printAllHeaders()}</p>
    </div>
  )
}

export { UserData }
