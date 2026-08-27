interface FeatureCardProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
    className?: string;
}

const PropertyFeatureCard = ({ icon, label, value, className = "" }: FeatureCardProps) => (
    <div className={`flex flex-col 2xl:gap-10 xl:gap-8 gap-6 ${className}`}>
        <span className="text-grey-60 flex items-center 2xl:gap-6 gap-4 text-[14px] 2xl:text-[18px]">
            <span className=" ">{icon}</span>
            <span className="font-medium text-[14px] 2xl:text-[18px]">{label}</span>
        </span>
        <span className="text-[18px] xl:text-[20px] 2xl:text-2xl font-semibold text-white">
            {value}
        </span>

    </div>
);
export default PropertyFeatureCard