import { cn } from '@/lib/utils'

type propsType = {
  title: string
  href: string
  img: string
  color: 'blue' | 'green' | 'orange' | 'violet' | 'sky'
  className?: string
  alt?: string
}

const RowLink = (props: propsType) => {
  return (
    <>
      <a
        className={cn(
          `flex items-center justify-center gap-1 border border-gray-300 p-1 px-2`,
          `__gradient-${props.color}-withHover __shadow`,
          props.className
        )}
        target='_blank'
        href={props.href}>
        <img src={props.img} width={22} height={22} alt={props.alt ? props.alt : ''} />
        <span className='hidden __screen_760:flex'> {props.title}</span>
      </a>
    </>
  )
}

export { RowLink }
