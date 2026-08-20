import { Link } from "react-router-dom";
import { brandingData, columnsData, footerBottomData } from "../data/FooterData";


const Footer = () => {
  
  const renderColumn = (column, hasBorderBottom = false, hasBorderRight = false) => (
    <div className={`w-full md:w-auto flex flex-col gap-y-[23px] pb-[20px] relative md:pb-0 md:mb-0`}>
      <h3 className="text-[16px] md:text-[14px] lg:text-[20px] font-semibold text-grey-60">
        {column.header}
      </h3>
      <ul className="text-[14px] md:text-[16px] flex flex-col gap-y-[10px]">
        {column.links.map((link, linkIndex) => (
          <li key={linkIndex}>
            <Link to="#" className="text-white">
              {link}
            </Link>
          </li>
        ))}
      </ul>
      
      {hasBorderBottom && <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#262626] lg:hidden"></span>}
      {hasBorderRight && <span className="absolute right-[-4%] top-1 bottom-1 w-[1px] bg-[#262626] lg:hidden"></span>}
    </div>
  );

  return (
    <footer className="w-full bg-[#141414] text-white flex flex-col justify-between h-auto lg:h-425">
      
      {/* القسم العلوي الرئيسي */}
      <div className="w-full flex flex-col lg:flex-row pt-0 px-0 lg:pt-60 lg:px-60 gap-y-50 gap-x-60">
        
        {/* اللوغو وحقل الإدخال */}
        <div className="w-full lg:w-[26%] flex flex-col items-start gap-20 pt-50 px-16 pb-8 lg:pt-0 lg:px-0">
          <div className="flex items-center gap-x-10">
            <img src={brandingData.logoIcon} alt="Estatein logo" />
            <h2 className="text-xl font-bold">{brandingData.logoText}</h2>
          </div>

          <div className="Email-Container flex items-center w-full relative">
            <img src={brandingData.emailIcon} alt="" className="absolute left-18" />
            <input
              type="text"
              placeholder={brandingData.emailPlaceholder}
              className="w-full h-52 bg-transparent text-white border border-[#262626] rounded-md pl-40 pr-40 focus:outline-none placeholder:text-14"
            />
            <img src={brandingData.shareIcon} alt="Submit" className="absolute right-20 cursor-pointer" />
          </div>
        </div>

       
        <div className="w-full lg:w-[65%] flex flex-wrap gap-x-[4%] px-16 lg:hidden">
          
         
          <div className="w-[48%] mb-6">{renderColumn(columnsData.home, true, true)}</div>
          <div className="w-[48%] mb-6">{renderColumn(columnsData.about, true, false)}</div>
          
          
          <div className="w-[48%] flex flex-col gap-y-6">
            <div className="w-full">{renderColumn(columnsData.properties, true, true)}</div>
            <div className="w-full pt-4">{renderColumn(columnsData.contact, false, true)}</div>
          </div>
          
        
          <div className="w-[48%]">{renderColumn(columnsData.services, false, false)}</div>
        </div>

       
        <div className="hidden lg:w-[65%] lg:flex lg:justify-between">
          {renderColumn(columnsData.home)}
          {renderColumn(columnsData.about)}
          {renderColumn(columnsData.properties)}
          {renderColumn(columnsData.services)}
          {renderColumn(columnsData.contact)}
        </div>

      </div>

      {/* القسم السفلي */}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center bg-[#1A1A1A] lg:px-60 p-10 lg:py-20 gap-y-20 lg:gap-y-0 text-14 mt-10 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center  gap-x-20 text-gray-400 gap-y-2 text-center lg:text-left">
          <p className="hover:text-white ">{footerBottomData.copyright}</p>
          <Link to="#" className="hover:text-white ">
            {footerBottomData.legalLinks}
          </Link> 
        </div>
        
        <div className="flex gap-x-[12px] justify-center">
         {footerBottomData.socialIcons.map((IconComponent, iconIndex) => (
            <Link
              key={iconIndex}
              to="#" 
              className="bg-[#141414] p-15 rounded-full border border-[#262626] flex items-center justify-center hover:bg-black text-white"
            >
              <IconComponent className="w-30 h-30" />
            </Link>
         ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
