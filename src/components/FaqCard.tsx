import type { IFaq } from "../types/faqType";
import Button from "./AtomComponents/Button";

const FaqCard = ({question, answer }: IFaq) => {
  return (
    <div className="Faq-Card flex h-full flex-col justify-between gap-20 rounded-xl border border-grey-15 light:border-white-90 bg-grey-08 light:bg-white-99 p-30 md:p-40">
      <div className="Faq-Content flex flex-col gap-16">
        <h3 className="text-lg md:text-2xl font-semibold text-white light:text-grey-08">
          {question}
        </h3>
        <p className="text-sm md:text-base text-grey-60 light:text-grey-40">
          {answer}
        </p>
      </div>

      <Button 
      className="w-full md:w-fit rounded-lg border border-grey-15 light:border-white-99 bg-grey-10 light:bg-white-95 px-20 py-10 text-sm font-medium text-white light:text-grey-08 transition-colors hover:bg-grey-15 light:hover:bg-white-90 cursor-pointer"
      content="Read More">
      </Button>
    </div>
  );
};

export default FaqCard;