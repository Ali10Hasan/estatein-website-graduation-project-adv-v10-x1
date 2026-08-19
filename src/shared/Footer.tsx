import { Link } from "react-router-dom";
import { brandingData, columnsData, footerBottomData } from "../data";


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
    <footer className="w-full bg-[#141414] text-white flex flex-col justify-between h-auto lg:h-[425px]">
      
      {/* القسم العلوي الرئيسي */}
      <div className="w-full flex flex-col lg:flex-row pt-0 px-0 lg:pt-[60px] lg:px-[60px] gap-y-[50px] gap-x-[60px]">
        
        {/* اللوغو وحقل الإدخال */}
        <div className="w-full lg:w-[26%] flex flex-col items-start gap-[20px] pt-[50px] px-[16px] pb-8 lg:pt-0 lg:px-0">
          <div className="flex items-center gap-x-[10px]">
            <img src={brandingData.logoIcon} alt="Estatein logo" />
            <h2 className="text-xl font-bold">{brandingData.logoText}</h2>
          </div>

          <div className="Email-Container flex items-center w-full relative">
            <img src={brandingData.emailIcon} alt="" className="absolute left-3" />
            <input
              type="text"
              placeholder={brandingData.emailPlaceholder}
              className="w-full h-[52px] bg-transparent text-white border border-[#262626] rounded-md pl-[40px] pr-[40px] focus:outline-none placeholder:text-[14px]"
            />
            <img src={brandingData.shareIcon} alt="Submit" className="absolute right-10 cursor-pointer" />
          </div>
        </div>

       
        <div className="w-full lg:w-[65%] flex flex-wrap gap-x-[4%] px-[16px] lg:hidden">
          
         
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
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center bg-[#1A1A1A] lg:px-[60px] p-[10px] lg:py-[20px] gap-y-[20px] lg:gap-y-0 text-[14px] mt-10 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-x-[20px] text-gray-400 gap-y-2 text-center lg:text-left">
          <p>{footerBottomData.copyright}</p>
          <Link to="#" className="hover:text-white transition-colors">
            {footerBottomData.legalLinks}
          </Link> 
        </div>
        
        <div className="flex gap-x-[12px] justify-center">
          {footerBottomData.socialIcons.map((icon, iconIndex) => (
            <Link
              key={iconIndex}
              to="#" 
              className="bg-[#141414] p-2.5 rounded-full border border-[#262626] flex items-center justify-center hover:bg-grey-10 transition-all"
            >
              <img src={icon} alt="social icon" className="w-[60px] h-[60px] lg:w-[40px] lg:h-[40px]" />
            </Link>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
