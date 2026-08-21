import Button from "./AtomComponents/Button";

interface CTAProps {
  title?: string;
  description?: string;
  buttonContent?: string;
  onButtonClick?: () => void;
}

/**
 * CTA (Call To Action)
 * ---------------------
 * Global, page-agnostic section meant to be rendered once inside
 * <RootLayout /> (right above the <Footer />), so it automatically
 * appears on every page without being duplicated per-page.
 *
 * Visual composition:
 *  - A single decorative "AbstractDesign" image is used twice and
 *    mirrored with CSS transforms instead of shipping two separate
 *    files, to avoid duplicate assets/requests.
 *  - Desktop/tablet (md+): one copy anchored to the bottom-right edge,
 *    the mirrored copy anchored to the top-left edge.
 *  - The section has a 1px top/bottom border (grey-15) and no side
 *    borders, matching the rest of the site's section dividers.
 *  - Horizontal spacing is real pixel padding on the section itself
 *    (px-16 / md:px-80 / min-[1440px]:px-162) — the same convention
 *    as <Navbar />'s px-80 — so, unlike <FaqSection />, this doesn't
 *    need an extra wrapping div for the gutter to be visible.
 *
 * Content defaults to the Figma copy but is fully overridable through
 * props if a specific page ever needs different text.
 *
 * @param {CTAProps} props
 */
const CTA = ({
  title = "Start Your Real Estate Journey Today",
  description = "Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.",
  buttonContent = "Explore Properties",
  onButtonClick,
}: CTAProps) => {
  return (
    <section className="CTA-Section relative isolate w-full overflow-hidden border-t border-b border-grey-15 bg-grey-08 px-16 py-40 md:px-80 md:py-60 min-[1440px]:px-162">
      <img
        src="/assets/imgs/CtaAbstractDesign.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 select-none
                   bottom-0 right-0 w-220
                   md:bottom-0 md:right-0 md:top-auto md:block md:w-480 lg:w-2xl"
      />
      <img
        src="/assets/imgs/CtaAbstractDesign.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 select-none
                   top-0 left-0 w-220 rotate-180
                   md:left-0 md:rotate-0 md:bottom-0 md:w-480 md:-scale-x-100 lg:w-2xl"
      />

      <div className="CTA-Content relative z-10 flex flex-col items-start gap-20 md:flex-row md:items-center md:justify-between md:gap-40">
        <div className="flex-1 md:max-w-[70%] min-[1440px]:max-w-900">
          <h2 className="mb-10 text-3xl font-semibold text-white md:text-4xl">
            {title}
          </h2>
          <p className="text-sm font-medium text-grey-60 md:text-base min-[1440px]:text-lg">
            {description}
          </p>
        </div>

        <Button
          content={buttonContent}
          onClick={onButtonClick}
          className="h-50 text-sm lg:text-lg w-full shrink-0 rounded-lg bg-purple-60 px-20 text-white transition-colors hover:bg-purple-65 cursor-pointer md:w-auto"
        />
      </div>
    </section>
  );
};

export default CTA;