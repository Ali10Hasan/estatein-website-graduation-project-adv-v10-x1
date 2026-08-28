import Button from "./AtomComponents/Button";
import DecorativeBlob from "./AtomComponents/DecorativeBlob";

interface CTAProps {
  title?: string;
  description?: string;
  buttonContent?: string;
  onButtonClick?: () => void;
}

const CTA = ({
  title = "Start Your Real Estate Journey Today",
  description = "Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.",
  buttonContent = "Explore Properties",
  onButtonClick,
}: CTAProps) => {
  return (
    <section className="CTA-Section relative isolate w-full overflow-hidden border-t border-b border-grey-15 bg-grey-08 px-16 py-40 min-[992px]:px-80 min-[992px]:py-60 min-[1440px]:px-162">
      <DecorativeBlob
        className="bottom-0 right-0 w-220 min-[992px]:bottom-0 min-[992px]:right-0 min-[992px]:top-auto min-[992px]:block min-[992px]:w-480 lg:w-2xl"
      />
      <DecorativeBlob
        className="top-0 left-0 w-220 rotate-180 min-[992px]:left-0 min-[992px]:rotate-0 min-[992px]:bottom-0 min-[992px]:w-480 min-[992px]:-scale-x-100 lg:w-2xl"
      />

      <div className="CTA-Content relative z-10 flex flex-col items-start gap-20 min-[992px]:flex-row min-[992px]:items-center min-[992px]:justify-between min-[992px]:gap-40">
        <div className="flex-1 min-[992px]:max-w-[70%] min-[1440px]:max-w-900">
          <h2 className=" text-3xl font-semibold text-white min-[992px]:text-4xl">
            {title}
          </h2>
          <p className="text-sm font-medium text-grey-60 min-[992px]:text-base min-[1440px]:text-lg">
            {description}
          </p>
        </div>

        <Button
          content={buttonContent}
          onClick={onButtonClick}
          className="text-sm lg:text-lg w-full shrink-0 rounded-lg bg-purple-60 px-20 text-white transition-colors hover:bg-purple-65 cursor-pointer min-[992px]:w-auto"
        />
      </div>
    </section>
  );
};

export default CTA;