import CardAdvantages from "../CardAdvantages";

const SiteAdvantage = () => {
    interface CardAdvatagesProps {
        Arrow: string;
        Icone: string;
        advantage: string;
    }
    const CardAdvantagesData: CardAdvatagesProps[] = [
        {
            Arrow: "/assets/icons/ArrowIcone.png",
            Icone: "/assets/icons/AdvantageIcone1.png",
            advantage: "Find Your Dream Home"
        },
        {
            Arrow: "/assets/icons/ArrowIcone.png",
            Icone: "/assets/icons/AdvantageIcone2.png",
            advantage: "Unlock Property Value"
        },
        {
            Arrow: "/assets/icons/ArrowIcone.png",
            Icone: "/assets/icons/AdvantageIcone3.png",
            advantage: "Effortless Property Management"
        },
        {
            Arrow: "/assets/icons/ArrowIcone.png",
            Icone: "/assets/icons/AdvantageIcone4.png",
            advantage: "Smart Investments, Informed Decisions"
        },
    ]
    return (
        <div className="pb-80 md:pb-120 lg:pb-150 pt-40 lg:pt-10 w-full px-16 lg:px-10 mx-auto">
            <div className="flex flex-wrap gap-10 md:gap-20 items-center justify-center md:w-full border border-grey-08 bg-grey-08 light:bg-white-99 light:border-white-99 p-4 md:p-20 rounded-12 md:rounded-0 shadow-[0px_0px_0px_4px_rgba(25,25,25,1)] md:shadow-[0px_0px_0px_10px_rgba(25,25,25,1)] light:shadow-[0px_0px_0px_4px_rgba(241,241,243,1)] md:light:shadow-[0px_0px_0px_10px_rgba(241,241,243,1)]">
                {CardAdvantagesData.map((item, index) => {
                    return (
                        <div key={index} className="CardAdvantages w-[calc(50%-5px)] md:w-[calc(25%-15px)] h-188 bg-grey-10 light:bg-white-95 rounded-[10px]">
                            <CardAdvantages Arrow={item.Arrow} Icone={item.Icone} advantage={item.advantage} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default SiteAdvantage