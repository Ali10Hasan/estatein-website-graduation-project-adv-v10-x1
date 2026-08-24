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
        <div className="Site-Advatages-Container mt-40 mb-60 mx-13 md:mx-0 md:mt-20 flex flex-wrap gap-10 md:gap-20 items-center justify-start w-[calc(100%-26px)] md:w-full bg-grey-08 p-4 md:p-20 rounded-12 md:rounded-0 shadow-[0px_0px_0px_4px_rgba(25,_25,_25,_1)] md:shadow-[0px_0px_0px_10px_rgba(25,_25,_25,_1)] rounded-[12px]">
            {CardAdvantagesData.map((item, index) => {
                return (
                    <div key={index} className="CardAdvantages w-[calc(50%-5px)] md:w-[calc(25%-15px)] h-188 bg-grey-10 rounded-[10px]">
                        <CardAdvantages Arrow={item.Arrow} Icone={item.Icone} advantage={item.advantage} />
                    </div>
                )
            })}

        </div>
    )
}

export default SiteAdvantage