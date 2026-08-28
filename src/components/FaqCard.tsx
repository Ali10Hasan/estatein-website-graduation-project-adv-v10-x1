import type { IFaq } from "../types/faqType";
import Button from "./AtomComponents/Button";

const FaqCard = ({ id, question, answer }: IFaq) => {
  return (
    <div className="Faq-Card w-full max-w-356 min-[1200px]:max-w-412 min-[1600px]:max-w-lg flex h-full flex-col justify-between gap-20 rounded-xl border border-grey-15 bg-grey-08 p-30 md:p-40 hover:bg-grey-15 hover:border-purple-65 transition-colors">
      <div className="Faq-Content flex flex-col gap-16">
        <h3 className="text-lg md:text-2xl font-semibold text-white">
          {question}
        </h3>
        <p className="text-sm md:text-base text-grey-60">
          {answer}
        </p>
      </div>
      <Button
        content="Learn More"
        className="rounded-lg border border-grey-15 bg-grey-10 px-20 py-10 text-sm font-medium text-white transition-colors hover:border-purple-65 cursor-pointer"
      />
    </div>
  );
};

export default FaqCard;