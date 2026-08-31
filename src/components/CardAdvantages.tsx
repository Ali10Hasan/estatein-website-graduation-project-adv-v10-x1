interface CardAdvatagesProps {
  Arrow: string;
  Icone: string;
  advantage: string;
}

const CardAdvantages = ({ Arrow, Icone, advantage }: CardAdvatagesProps) => {
  return (
    
    <div className='Advantages-container relative  w-full h-full  flex flex-col justify-center items-center rounded-10  p-6'>
        <div className="Arrow-Container w-10 h-10 sm:w-18 sm:h-18 absolute top-28 right-8  md:top-20 md:right-20 ">
            <img src={Arrow} alt="arrow" />
        </div>
        <div className="Card-Content flex flex-col items-center justify-center gap-20">
            <div className="Icone-Container w-48 h-48 sm:w-60 sm:h-60">
                <img src={Icone} alt="icon" />
            </div>
            <div className="Advantage-Container text-[#ffffff] light:text-grey-08 text-14 md:text-[18px] font-[600] text-center w-[100%] ">
                <p>{advantage}</p>
            </div>
        </div>
    </div>
  )
}

export default CardAdvantages;
