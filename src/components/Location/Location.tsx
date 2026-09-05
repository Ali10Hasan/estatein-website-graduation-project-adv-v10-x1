import { useState } from "react";
import Stars from "../AtomComponents/Stars";
import Container from "../Container";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";

type OfficeCategory = "regional" | "international";
type FilterOption = "all" | OfficeCategory;

interface Office {
    id: string;
    category: OfficeCategory;
    label: string;
    address: string;
    description: string;
    email: string;
    phone: string;
    location: string;
}

const offices: Office[] = [
    {
        id: "hq",
        category: "regional",
        label: "Main Headquarters",
        address: "123 Estatein Plaza, City Center, Metropolis",
        description:
            "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        email: "info@estatein.com",
        phone: "+1 (123) 456-7890",
        location: "Metropolis",
    },
    {
        id: "regional-1",
        category: "regional",
        label: "Regional Offices",
        address: "456 Urban Avenue, Downtown District, Metropolis",
        description:
            "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
        email: "info@estatein.com",
        phone: "+1 (123) 628-7890",
        location: "Metropolis",
    },
    {
        id: "intl-1",
        category: "international",
        label: "International Offices",
        address: "78 Global Street, Business Bay, Dubai",
        description:
            "Our international offices bring Estatein's expertise to clients around the world, offering local knowledge combined with a global standard of service.",
        email: "global@estatein.com",
        phone: "+971 (4) 123-4567",
        location: "Dubai",
    },
];

const filterOptions: { label: string; value: FilterOption }[] = [
    { label: "All", value: "all" },
    { label: "Regional", value: "regional" },
    { label: "International", value: "international" },
];

const DEFAULT_VISIBLE_COUNT = 2;

const Location = () => {
    const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

    const filteredOffices =
        activeFilter === "all"
            ? offices.slice(0, DEFAULT_VISIBLE_COUNT)
            : offices.filter((office) => office.category === activeFilter);

    return (
        <Container>
            <div className="flex flex-col gap-10 mt-80 md:mt-120 lg:mt-150">
                <div className="relative ">
                    <Stars />
                </div>

                <h2 className="text-white light:text-grey-08 text-3xl md:text-4xl lg:text-5xl font-semibold font-urbanist">
                    Discover Our Office Locations
                </h2>

                <p className="text-grey-40 light:text-grey-20 mt-8 md:mt-10 lg:mt-14 text-sm md:text-base lg:text-lg max-w-full md:max-w-1160 min-[1440]:max-w-1297">
                    Estatein is here to serve you across multiple locations. Whether
                    you're looking to meet our team, discuss real estate opportunities,
                    or simply drop by for a chat, we have offices conveniently located
                    to serve your needs. Explore the categories below to find the
                    Estatein office nearest to you.
                </p>

                <div className="flex flex-wrap gap-8 mt-40 md:mt-60 lg:mt-80 mb-30 lg:mb-50 md:mb-40 p-10 bg-grey-10 light:bg-white-99 w-fit rounded-lg">
                    {filterOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => setActiveFilter(option.value)}
                            className={`text-center rounded-lg w-105 lg:w-125  py-14 text-sm md:text-base lg:text-lg font-medium transition ${activeFilter === option.value
                                    ? "bg-grey-08 text-white light:bg-purple-70 light:text-white-95"
                                    : "bg-grey-15 light:bg-white-90 text-white light:text-grey-20 border border-grey-15 light:border-white-90 "
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div> 
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
                {filteredOffices.map((office) => (
                    <div key={office.id} className="flex flex-col p-24 gap-24 md:p-40 md:gap-30 2xl:p-50 2xl:gap-40 rounded-lg lg:rounded-xl border bg-grey-08 border-grey-15 light:bg-white-99 light:border-white-90" >
                        <span className="text-white light:text-grey-08 text-sm 2xl:text-lg font-medium"> {office.label} </span>
                        <h3 className="text-white light:text-grey-08 font-semibold font-urbanist text-xl md:text-2xl 2xl:text-3xl"> {office.address} </h3>
                        <p className="text-grey-60 light:text-grey-40 leading-relaxed text-sm md:text-base 2xl:text-lg flex-1"> {office.description} </p>

                        <div className="flex flex-wrap gap-8">
                            <span className="flex items-center gap-4 px-16 py-10 text-sm 2xl:gap-6 2xl:px-20 2xl:py-16 2xl:text-lg  rounded-full border border-grey-15 light:border-white-90 bg-grey-10 light:bg-white-95 text-white light:text-grey-08 ">
                                <MdEmail className="shrink-0 w-20 h-20 2xl:w-24 2xl:h-24" />
                                {office.email}
                            </span>
                            <span className="flex items-center gap-4 px-16 py-10 text-sm 2xl:gap-6 2xl:px-20 2xl:py-16 2xl:text-lg  rounded-full border border-grey-15 light:border-white-90 bg-grey-10 light:bg-white-95 text-white light:text-grey-08">
                                <FaPhoneAlt className="shrink-0 w-20 h-20 2xl:w-24 2xl:h-24" />
                                {office.phone}
                            </span>
                            <span className="flex items-center gap-4 px-16 py-10 text-sm 2xl:gap-6 2xl:px-20 2xl:py-16 2xl:text-lg  rounded-full border border-grey-15 light:border-white-90 bg-grey-10 light:bg-white-95 text-white light:text-grey-08">
                                <TiLocation  className="shrink-0 w-20 h-20 2xl:w-24 2xl:h-24" />
                                {office.location}
                            </span>
                        </div>

                        <button type="button" className="px-14 py-20 2xl:px-18 2xl:py-24 w-full rounded-lg 2xl:rounded-xl text-sm 2xl:text-lg  bg-purple-60  text-white font-medium hover:opacity-90 transition">
                            Get Direction
                        </button>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Location;