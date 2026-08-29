import telegram from "../../../public/assets/icons/ShareImage.png";

function TeamButton() {
    return (
        <div className="w-full h-64 p-8 md:p-10 lg:p-14 pl-18 md:pl-20 lg:pl-24 flex justify-between items-center rounded-full bg-grey-10 border border-grey-15 gap-20 2xl:p-16 2xl:pl-24">
            <p className="text-sm md:text-base lg:text-lg font-medium text-white" >Say Hello 👋</p>
            <div className="w-48 h-48 md:w-36 md:h-36 lg:w-44 lg:h-44 2xl:w-48 2xl:h-48 bg-purple-60 group-hover:bg-purple-65 rounded-full flex items-center justify-center transition-colors " >
                <img  src={telegram} alt="Telegram" className=" w-20 h-20 lg:w-24 lg:h-24 2xl:w-28 2xl:h-28 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out" />
            </div>
        </div>
    );
}

export default TeamButton;

