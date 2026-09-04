import { AiOutlineThunderbolt } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'
import { ClientQuoteCard } from './ClientQuoteCard'
import type { ClientItem } from '../types/clientType'
import Button from './AtomComponents/Button'

const ValuedClientCard = ({
  establishedYear,
  companyName,
  domain,
  category,
  testimonial,
  websiteUrl = '',
}: ClientItem) => {
  return (
    <div className="w-full h-full rounded-xl bg-grey-08 light:bg-white-99 border border-grey-15 light:border-white-90 ring-grey-09 light:ring-white-99 rounded-12 p-16 min-[992px]:p-50 flex flex-col justify-between gap-24 hover:border-purple-60/40 transition-colors shadow-[0px_0px_0px_6px_#191919] light:shadow-[0px_0px_0px_6px_#F4F0FE]">
      <div className="flex flex-col min-[992px]:flex-row min-[992px]:items-center justify-between gap-16 min-[992px]:gap-24 w-full">
        <div className="flex flex-col gap-6">
          <span className="text-grey-60 light:text-grey-40 text-14 min-[992px]:text-16 font-medium">
            Since {establishedYear}
          </span>
          <h3 className="text-20 min-[992px]:text-30 font-semibold text-white light:text-grey-08">
            {companyName}
          </h3>
        </div>
        <Button
  content="Visit Website"
  href={websiteUrl}
  target="_blank"
  className='w-full min-[992px]:w-auto py-18 px-24 bg-grey-15 light:bg-white-90 rounded-xl border border-grey-15 light:border-white-90 text-white light:text-grey-08 shrink-0'
/>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-24 gap-y-8 py-16 ">
        <div className="flex items-center gap-6">
          <BsGrid className="w-20 h-20 text-grey-60 light:text-grey-40" />
          <span className="text-grey-60 light:text-grey-40 text-12 min-[992px]:text-14 font-medium">
            Domain
          </span>
        </div>

        <div className="row-span-2 w-1 bg-grey-15 light:bg-white-90" />

        <div className="flex items-center gap-6">
          <AiOutlineThunderbolt className="w-20 h-20 text-grey-60 light:text-grey-40" />
          <span className="text-grey-60 light:text-grey-40 text-12 min-[992px]:text-14 font-medium">
            Category
          </span>
        </div>

        <p className="text-white light:text-grey-08 text-14 min-[992px]:text-18 font-medium">
          {domain}
        </p>

        <p className="text-white light:text-grey-08 text-14 min-[992px]:text-18 font-medium">
          {category}
        </p>
      </div>
      <ClientQuoteCard quote={testimonial} />
    </div>
  )
}

export default ValuedClientCard