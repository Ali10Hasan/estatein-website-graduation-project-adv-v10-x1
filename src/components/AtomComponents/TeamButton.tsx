import telegram from "../../../public/assets/icons/ShareImage.png";

function TeamButton() {
    return (
        <div className="w-full h-64 p-8 md:p-10 lg:p-14 pl-18 min-[1405px]:pl-20 min-[1440px]:pl-24 flex justify-between items-center rounded-full bg-grey-10 border border-grey-15 gap-20 2xl:p-16 2xl:pl-24">
            <p className="text-xs min-[1200px]:text-base min-[1440px]:text-lg font-medium text-white" >Say Hello 👋</p>
            <div className="w-44 h-44 min-[1024px]:w-30 min-[1024px]:h-30 min-[1440px]:w-48 min-[1440px]:h-48 bg-purple-60 group-hover:bg-purple-65 rounded-full flex items-center justify-center transition-colors " >
                <img  src={telegram} alt="Telegram" className=" w-20 h-20 min-[1024px]:w-16 min-[1024px]:h-16 min-[1440px]:w-28 min-[1440px]:h-28 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out" />
            </div>
        </div>
    );
}

export default TeamButton;

