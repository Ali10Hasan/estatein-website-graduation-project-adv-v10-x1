import CardAdvantages from "../components/CardAdvantages"
interface CardAdvatagesProps {
  Arrow: string;
  Icone: string;
  advantage: string;
}
const CardAdvantagesData: CardAdvatagesProps[]=[
    {
        Arrow:"/ArrowIcone.png",
        Icone:"/AdvantageIcone1.png",
        advantage:"Find Your Dream Home"
    },
    {
        Arrow:"/ArrowIcone.png",
        Icone:"/AdvantageIcone2.png",
        advantage:"Unlock Property Value"
    },
    {
        Arrow:"/ArrowIcone.png",
        Icone:"/AdvantageIcone3.png",
        advantage:"Effortless Property Management"
    },
    {
        Arrow:"/ArrowIcone.png",
        Icone:"/AdvantageIcone4.png",
        advantage:"Smart Investments, Informed Decisions"
    },
]
const Home = () => {
    return (
       <div className="Site-Advatages-Container mt-[40px] mb-[60px] mx-[13px] md:mx-0 md:mt-[20px] flex flex-wrap gap-[10px] md:gap-[20px] items-center justify-start w-[calc(100%-26px)] md:w-full bg-grey-08 p-[4px] md:p-[20px] rounded-[12px] md:rounded-[0px] shadow-[0px_0px_0px_4px_rgba(25,_25,_25,_1)] md:shadow-[0px_0px_0px_10px_rgba(25,_25,_25,_1)]">
    {CardAdvantagesData.map((item, index) => {
        return (
            <div key={index} className="CardAdvantages w-[calc(50%-5px)] md:w-[calc(25%-15px)] h-[188px] bg-grey-10 rounded-[12px]">
                <CardAdvantages Arrow={item.Arrow} Icone={item.Icone} advantage={item.advantage}/>
            </div>
        )
    })}
</div>

    )
}

export default Home