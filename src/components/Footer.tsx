import { Link, NavLink } from "react-router-dom";
import { TiSocialLinkedin } from "react-icons/ti";
import type { BrandingData, ColumnData, FooterBottomData } from "../types/FooterType";
import { PiTwitterLogoThin, PiYoutubeLogoThin } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi";


const brandingData: BrandingData = {
  logoIconDark: "/assets/imgs/EstateinLogo.webp",
  logoIconeLight:"/assets/imgs/logolight.webp",
  logoText: "Estatein",
  emailIcon: "/assets/icons/EmailImage.png",
  emailPlaceholder: "Enter Your Email",
  shareIcon: "/assets/icons/ShareImage.png",
};

const columnsData: { [key: string]: ColumnData } = {
  home: { header: "Home",path: "/", links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ's"] },
  about: { header: "About Us",path: "/about", links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"] },
  properties: { header: "Properties",path: "/properties", links: ["Portfolio", "Categories"] },
  services: { header: "Services",path: "/services", links: ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"] },
  contact: { header: "Contact Us",path: "/contact", links: ["Contact Form", "Our Offices"] }
};

const footerBottomData: FooterBottomData = {
  copyright: "@2023 Estatein. All Rights Reserved.",
  legalLinks: "Terms & Conditions",
  socialLinks: ["https://facebook.com","https://linkedin.com","https://twitter.com","https://youtube.com"],
  socialIcons: [BiLogoFacebook, TiSocialLinkedin, PiTwitterLogoThin, PiYoutubeLogoThin],
};

const Footer = () => {
  const ScrollToTop=()=>{
      window.scrollTo({top:0,behavior:"smooth"})
  }
  const renderColumn = (column: ColumnData , hasBorderBottom = false, hasBorderRight = false) => (
    <div className={`w-full md:w-auto flex flex-col gap-y-23 pb-20 relative md:pb-0 md:mb-0`}>
      <h3 className="text-16 md:text-14 lg:text-[20px] font-semibold text-grey-60 light:text-grey-40 ">
      <NavLink to={column.path} onClick={ScrollToTop} className="text-white light:text-grey-08">
        {column.header}
      </NavLink>
      </h3>
      <ul className="text-14 md:text-16 flex flex-col gap-y-10">
        {column.links.map((link, linkIndex) => (
          <li key={linkIndex}>
            <Link to="#" className="text-white light:text-grey-08">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {hasBorderBottom && <span className="absolute bottom-0 left-1 right-1 h-2 bg-grey-15 light:bg-white-90 lg:hidden"></span>}
      {hasBorderRight && <span className="absolute right-[-4%] top-1 bottom-1 w-1 bg-grey-15 light:bg-white-90 lg:hidden"></span>}
    </div>
  );

  return (
    <footer className="w-full text-white flex flex-col justify-between h-auto">
      {/* القسم العلوي الرئيسي */}
      <div className="w-full flex flex-col lg:flex-row max-w-1900 mx-auto px-16 md:px-80 lg:px-160 py-50 md:py-80 lg:py-100 gap-x-60">

        {/* اللوغو وحقل الإدخال */}
        <div className="w-full lg:w-[26%] flex flex-col items-start gap-20 pt-50 px-16 pb-8 lg:pt-0 lg:px-0">
          <div className="flex items-center light:fill-black gap-x-10">
           <img src={brandingData.logoIconDark} className=" light:hidden" alt="Estatein_Logo" />
        <img src={brandingData.logoIconeLight} className="hidden light:block" alt="Estatein_Logo" />
          </div>

          <div className="Email-Container flex items-center w-full relative">
            <img src={brandingData.emailIcon} alt="" className="absolute left-18" />
            <input
              type="text"
              placeholder={brandingData.emailPlaceholder}
              className="w-full h-52 bg-transparent text-white light:text-grey-08 border border-grey-15 light:border-white-90 rounded-md pl-40 pr-40 focus:outline-none placeholder:text-14"
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
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center bg-grey-10 light:bg-white-95 max-w-1900 mx-auto px-16 md:px-80 lg:px-160 py-20 md:py-12 lg:py-30">
        <div className="flex flex-col lg:flex-row items-center  gap-x-20 text-gray-400 light:text-grey-20 gap-y-2 text-center lg:text-left">
          <p className="hover:text-white light:hover:text-grey-40">{footerBottomData.copyright}</p>
          <Link to="#" className="hover:text-white light:hover:text-grey-08">
            {footerBottomData.legalLinks}
          </Link>
        </div>

        <div className="flex gap-x-12 justify-center">
          {footerBottomData.socialIcons.map((IconComponent, iconIndex) => (
            <Link
              key={iconIndex}
              to={footerBottomData.socialLinks[iconIndex]}
              target="_blank" 
              className="bg-grey-08 light:bg-white-99 p-10 rounded-full border border-grey-15 light:border-white-90 flex items-center justify-center hover:bg-black light:hover:bg-white text-white light:text-grey-08"
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
