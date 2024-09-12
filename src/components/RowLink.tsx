import { cn } from '@/lib/utils'

type propsType = {
  title: string
  href: string
  img: string
  color: 'blue' | 'green' | 'orange' | 'violet' | 'sky'

  alt?: string
}

const RowLink = (props: propsType) => {
  return (
    <>
      <a
        className={cn(
          'flex items-center justify-center gap-1 rounded border border-gray-300 p-1 px-2',
          `__gradient-${props.color}-withHover __shadow`
        )}
        target='_blank'
        href={props.href}>
        <img src={props.img} width={22} height={22} alt={props.alt ? props.alt : ''} />
        <span className='__screen_760:flex hidden'> {props.title}</span>
      </a>
    </>
  )
}

export { RowLink }
