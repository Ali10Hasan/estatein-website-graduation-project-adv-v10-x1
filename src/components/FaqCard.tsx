import type { IFaq } from "../types/faqType";

interface FaqCardProps {
  faq: IFaq;
}

/**
 * FaqCard
 * -------
 * Presentational card for a single FAQ entry.
 * Renders the question, its answer, and a "Read More" action.
 * Pure/stateless — all data is passed in via props (Single Responsibility).
 *
 * @param {FaqCardProps} props - contains the `faq` item to render.
 */
const FaqCard = ({ faq }: FaqCardProps) => {
  return (
    <div className="Faq-Card flex h-full flex-col justify-between gap-20 rounded-xl border border-grey-15 light:border-white-90 bg-grey-08 light:bg-white-99 p-30 md:p-40">
      <div className="Faq-Content flex flex-col gap-16">
        <h3 className="text-lg md:text-2xl font-semibold text-white light:text-grey-08">
          {faq.question}
        </h3>
        <p className="text-sm md:text-base text-grey-60 light:text-grey-40">
          {faq.answer}
        </p>
      </div>

      <button className="w-full md:w-fit rounded-lg border border-grey-15 light:border-white-99 bg-grey-10 light:bg-white-95 px-20 py-10 text-sm font-medium text-white light:text-grey-08 transition-colors hover:bg-grey-15 light:hover:bg-white-90 cursor-pointer">
        Read More
      </button>
    </div>
  );
};

export default FaqCard;