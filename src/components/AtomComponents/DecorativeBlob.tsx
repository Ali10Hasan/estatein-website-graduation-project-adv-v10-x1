interface DecorativeBlobProps {
  className: string;
}
const DecorativeBlob = ({ className }: DecorativeBlobProps) => {
  return (
    <img
      src="/assets/imgs/CtaAbstractDesign.webp"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 select-none ${className}`}
    />
  );
};

export default DecorativeBlob;