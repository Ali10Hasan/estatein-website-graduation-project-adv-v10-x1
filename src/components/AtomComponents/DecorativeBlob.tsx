interface DecorativeBlobProps {
  className: string;
}
const DecorativeBlob = ({ className }: DecorativeBlobProps) => {
  return (
    <img
      src="/assets/imgs/CtaAbstractDesign.webp"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 select-none mix-blend-screen light:mix-blend-multiply light:opacity-60 ${className}`}
    />
  );
};

export default DecorativeBlob;