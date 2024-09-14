'use client'

import { FoldUnfoldButton } from '@/components/FoldUnfoldButton'
import { RowLink } from '@/components/RowLink'
import { CollapsibleSpoiler } from '@/components/CollapsibleSpoiler'

import svgYandex from '@/images/ya.svg'
import svgYandex_translate from '@/images/ya_transl.svg'
import svgGoogle from '@/images/google.svg'
import svgGooglePin from '@/images/google-pin.svg'
import svgGoogleTranslate from '@/images/google-transl.svg'
import svgYoutube from '@/images/youtube.svg'

import spoilers from '@/data/spoilers.json'

export default function Page() {
  return (
    <>
      <section className='m-4 flex flex-wrap items-center justify-center gap-2'>
        <div className='flex gap-2 rounded-full border border-primary/20 p-2'>
          <FoldUnfoldButton className='__gradient-sky-withHover __shadow border border-gray-300' fold_unfold='unfold' />
          <FoldUnfoldButton className='__gradient-sky-withHover __shadow border border-gray-300' fold_unfold='fold' />
        </div>

        <div className='flex gap-2 rounded-full border border-primary/20 p-2'>
          <RowLink
            className='[border-radius:100px_20px_20px_100px]'
            title='yandex'
            href='https://yandex.ru'
            img={svgYandex.src}
            color='green'
          />
          <RowLink
            className='rounded'
            title='yandex.transl'
            href='https://translate.yandex.ru'
            img={svgYandex_translate.src}
            color='green'
          />
          <RowLink
            className='rounded'
            title='google'
            href='https://www.google.com'
            img={svgGoogle.src}
            color='orange'
            alt=''
          />
          <RowLink
            className='rounded'
            title='maps.google'
            href='https://www.google.ru/maps'
            img={svgGooglePin.src}
            color='orange'
          />
          <RowLink
            className='rounded'
            title='google.transl'
            href='https://translate.google.ru/?hl=en&tab=TT'
            img={svgGoogleTranslate.src}
            color='orange'
          />
          <RowLink
            className='[border-radius:20px_100px_100px_20px]'
            title='youtube'
            href='https://www.youtube.com'
            img={svgYoutube.src}
            color='orange'
          />
        </div>
      </section>

      <section className='m-4 flex flex-wrap justify-center gap-2 *:flex *:flex-col *:gap-1'>
        <div>
          <CollapsibleSpoiler color='orange' spoiler={spoilers.spoiler_language} />
          <CollapsibleSpoiler color='orange' spoiler={spoilers.spoiler_help} />
          <CollapsibleSpoiler color='orange' spoiler={spoilers.spoiler_libraries} />
          <CollapsibleSpoiler color='orange' spoiler={spoilers.spoiler_check} />
          <CollapsibleSpoiler color='orange' spoiler={spoilers.spoiler_node} />
          <CollapsibleSpoiler color='orange' spoiler={spoilers.spoiler_server} />
          <CollapsibleSpoiler color='orange' spoiler={spoilers.spoiler_english} />
          <CollapsibleSpoiler color='orange' spoiler={spoilers.spoiler_analyze} />
          <CollapsibleSpoiler color='orange' spoiler={spoilers.spoiler_email} />
          <CollapsibleSpoiler color='orange' spoiler={spoilers.spoiler_me} />
        </div>

        <div>
          <CollapsibleSpoiler color='blue' spoiler={spoilers.spoiler_background} />
          <CollapsibleSpoiler color='blue' spoiler={spoilers.spoiler_gradient} />
          <CollapsibleSpoiler color='blue' spoiler={spoilers.spoiler_logo} />
          <CollapsibleSpoiler color='blue' spoiler={spoilers.spoiler_icons} />
          <CollapsibleSpoiler color='blue' spoiler={spoilers.spoiler_color} />
          <CollapsibleSpoiler color='blue' spoiler={spoilers.spoiler_photo} />
          <CollapsibleSpoiler color='blue' spoiler={spoilers.spoiler_picture} />
          <CollapsibleSpoiler color='blue' spoiler={spoilers.spoiler_service} />
          <CollapsibleSpoiler color='blue' spoiler={spoilers.spoiler_reference} />
          <CollapsibleSpoiler color='blue' spoiler={spoilers.spoiler_reserve_1} />
        </div>

        <div>
          <CollapsibleSpoiler color='green' spoiler={spoilers.spoiler_fonts} />
          <CollapsibleSpoiler color='green' spoiler={spoilers.spoiler_svg} />
          <CollapsibleSpoiler color='green' spoiler={spoilers.spoiler_favicon} />
          <CollapsibleSpoiler color='green' spoiler={spoilers.spoiler_text} />
          <CollapsibleSpoiler color='green' spoiler={spoilers.spoiler_animation} />
          <CollapsibleSpoiler color='green' spoiler={spoilers.spoiler_toolboxes} />
          <CollapsibleSpoiler color='green' spoiler={spoilers.spoiler_json} />
          <CollapsibleSpoiler color='green' spoiler={spoilers.spoiler_other} />
          <CollapsibleSpoiler color='green' spoiler={spoilers.spoiler_reserve_2} />
          <CollapsibleSpoiler color='green' spoiler={spoilers.spoiler_reserve_3} />
        </div>

        <div>
          <CollapsibleSpoiler color='violet' spoiler={spoilers.spoiler_api} />
          <CollapsibleSpoiler color='violet' spoiler={spoilers.spoiler_wp} />
          <CollapsibleSpoiler color='violet' spoiler={spoilers.spoiler_vue} />
          <CollapsibleSpoiler color='violet' spoiler={spoilers.spoiler_nuxt} />
          <CollapsibleSpoiler color='violet' spoiler={spoilers.spoiler_react} />
          <CollapsibleSpoiler color='violet' spoiler={spoilers.spoiler_next} />
          <CollapsibleSpoiler color='violet' spoiler={spoilers.spoiler_tailwind} />
          <CollapsibleSpoiler color='violet' spoiler={spoilers.spoiler_shadcn} />
          <CollapsibleSpoiler color='violet' spoiler={spoilers.spoiler_astro} />
          <CollapsibleSpoiler color='violet' spoiler={spoilers.spoiler_reserve_4} />
        </div>
      </section>
    </>
  )
}
