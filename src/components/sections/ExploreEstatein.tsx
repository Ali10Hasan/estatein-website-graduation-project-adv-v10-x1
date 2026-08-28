import img1 from "../../../public/assets/imgs/ExploreEstatein' World/Image1.webp";
import img2 from "../../../public/assets/imgs/ExploreEstatein' World/Image2.webp";
import img3 from "../../../public/assets/imgs/ExploreEstatein' World/Image3.webp";
import img4 from "../../../public/assets/imgs/ExploreEstatein' World/Image4.webp";
import img5 from "../../../public/assets/imgs/ExploreEstatein' World/Image5.webp";
import img6 from "../../../public/assets/imgs/ExploreEstatein' World/Image6.webp";

import Container from "../Container";
import HeaderSection from "../HeaderSection";

function ExploreEstatein() {
  return (
    <Container>
      <section className=" w-full  p-24 md:p-60 min-[1440px]:p-80 bg-cover bg-no-repeat bg-grey-10 border border-grey-15 rounded-xl " style={{ backgroundImage: "url('/assets/imgs/Explore-Abstract-Design.webp')", }} >
        <div className=" grid grid-cols-2  md:grid-rows-[191.5px_191.5px_220px] grid-rows-[71.5px_71.5px_auto_auto] lg:grid-rows-[236px_236px_280px] md:gap-20 w-full gap-10 ">
          <div className="group overflow-hidden rounded-2xl ">
            <img src={img1} alt="img1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>

          <div className="group overflow-hidden rounded-2xl">
            <img src={img3} alt=""  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>

          <div className="group overflow-hidden rounded-2xl">
            <img src={img2} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="group overflow-hidden rounded-2xl ">
              <img src={img4} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            </div>

            <div className="group overflow-hidden rounded-2xl object-contain">
              <img src={img5} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            </div>
          </div>

          <div className="max-md:col-span-2 flex items-center pt-50">
            <HeaderSection
              title="Explore Estatein's World"
              description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
            />
          </div>

          <div className="group max-md:col-span-2 overflow-hidden rounded-2xl pt-20 md:pt-0 ">
            <img src={img6} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default ExploreEstatein;