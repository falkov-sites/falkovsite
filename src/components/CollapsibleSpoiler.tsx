import { cn } from '@/lib/utils'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import { ChevronDown } from 'lucide-react'

type CollapsibleSpoilerType = {
  spoiler_title: string

  spoiler_items: {
    subtitle?: string
    href?: string
    text?: string
    tooltip?: string
  }[]
}
type propsType = {
  spoiler: CollapsibleSpoilerType
  color: 'blue' | 'green' | 'orange' | 'violet' | 'sky'
}

const CollapsibleSpoiler = (props: propsType) => {
  const { spoiler_title, spoiler_items } = props.spoiler

  return (
    <>
      <Collapsible className='w-[200px] cursor-pointer rounded p-1 text-center'>
        <CollapsibleTrigger
          className={cn(
            'group flex w-full items-center justify-between rounded border border-gray-300 p-1 pl-[6px] uppercase',
            `__gradient-${props.color}-withHover __shadow`
          )}
          name='trigger'>
          {spoiler_title}
          <ChevronDown className='size-4 shrink-0 transition-all duration-300 group-data-[state=open]:rotate-180' />
        </CollapsibleTrigger>

        <CollapsibleContent className='__shadow data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'>
          <div className={cn(`bg-__${props.color}/20 __shadow rounded border border-gray-300 p-1`, '')}>
            {spoiler_items.map((item, index) => (
              <div key={index}>
                <span
                  className={
                    item.subtitle
                      ? `my-[2px] block rounded-[3px] bg-__${props.color}/40 border py-[1px] text-center border-__${props.color}/50`
                      : ''
                  }>
                  {item.subtitle ? item.subtitle : ''}
                </span>
                {item.tooltip ? (
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          className={`hover:bg-__${props.color}/20 flex justify-between rounded-[3px] px-1 hover:after:content-["•"]`}
                          target='_blank'
                          href={item.href}>
                          {item.text}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent className='bg-yellow-100 p-1 text-xs text-black/80' side='right'>
                        {item.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <a
                    className={`hover:bg-__${props.color}/20 flex justify-between rounded-[3px] px-1 hover:after:content-["•"]`}
                    target='_blank'
                    href={item.href}>
                    {item.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  )
}

export { CollapsibleSpoiler }
