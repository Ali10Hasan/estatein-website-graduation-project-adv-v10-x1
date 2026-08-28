import { StaggerContainer, StaggerItem } from "../../FramerMotion/Animation";

export interface PricingItem {
    label: string;
    value: string | number;
    badge?: string;
    className?: string;
}

export type PricingRow = PricingItem[];

interface PricingCardProps {
    title: string;
    rows: PricingRow[];
    onLearnMore?: () => void;
}

export const PricingCard = ({ title, rows, onLearnMore }: PricingCardProps) => {
    return (
        <div className="border border-grey-15 bg-grey-08 2xl:p-50 xl:p-40 p-20 rounded-xl flex flex-col xl:gap-30 gap-20">
            {/* Header */}

            <div className="flex justify-between items-center border-b border-grey-15 2xl:pb-40 pb-20 xl:pb-30 ">
                <h3 className="2xl:text-[24px] text-[18px] font-semibold text-white">{title}</h3>
                <button
                    onClick={onLearnMore}
                    className="2xl:text-[18px] text-[14px] font-medium 2xl:px-24 2xl:py-18 xl:px-24 xl:py-18 px-20 py-14  bg-grey-10 border border-grey-15 rounded-lg text-white hover:bg-purple-60 transition-colors">
                    Learn More
                </button>
            </div>

            {/* Rows Container */}
            <StaggerContainer className="flex flex-col xl:gap-30 gap-20">
                {rows.map((row, rowIndex) => (
                    <StaggerItem key={rowIndex}>
                        <div

                            className={`grid gap-20 xl:pb-30 pb-20 border-b border-grey-15 last:border-none last:pb-0 ${row.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
                                }`}
                        >
                            {row.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className={`flex flex-col justify-between ${item.className || ""}`}
                                >
                                    <span className="2xl:text-[18px] text-[14px] text-grey-60 block 2xl:mb-16 mb-10">{item.label}</span>
                                    <div className="flex items-center 2xl:gap-16 gap-12">
                                        <span className="2xl:text-[24px] text-[18px] font-semibold text-white">{item.value}</span>
                                        {item.badge && (
                                            <span className="2xl:text-[18px] text-[14px] font-medium bg-grey-10 2xl:px-14 2xl:py-8 px-12 py-6 xl:rounded-full rounded-md text-grey-60 border border-grey-15">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </StaggerItem>

                ))}
            </StaggerContainer>
        </div>
    );
};

export default PricingCard;

