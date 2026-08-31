import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Stars from "../AtomComponents/Stars";
import Container from "../Container";

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
        <Container className="flex flex-col gap-[80px]">
          
            <div className="flex flex-col gap-10">
                <div className="flex items-center gap-6 text-grey-40">
                    <Stars />
                </div>

                <h2 className="text-white text-2xl xs:text-3xl lg:text-4xl font-semibold font-urbanist">
                    Discover Our Office Locations
                </h2>

                <p className="text-grey-40 text-xs max-w-full lg:max-w-[850px]">
                    Estatein is here to serve you across multiple locations. Whether
                    you're looking to meet our team, discuss real estate opportunities,
                    or simply drop by for a chat, we have offices conveniently located
                    to serve your needs. Explore the categories below to find the
                    Estatein office nearest to you.
                </p>

                <div className="flex flex-wrap gap-8 mt-10">
                    {filterOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => setActiveFilter(option.value)}
                            className={`rounded-lg px-16 py-8 text-sm font-medium transition ${
                                activeFilter === option.value
                                    ? "bg-white text-black"
                                    : "bg-grey-10 text-grey-40 border border-grey-15 hover:text-white"
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
                {filteredOffices.map((office) => (
                    <div
                        key={office.id}
                        className="flex flex-col gap-10 rounded-2xl border border-grey-15 p-20 md:p-24"
                    >
                        <span className="text-grey-40 text-xs font-medium">
                            {office.label}
                        </span>

                        <h3 className="text-white font-semibold font-urbanist text-lg md:text-xl">
                            {office.address}
                        </h3>

                        <p className="text-grey-40 leading-relaxed text-xs md:text-sm">
                            {office.description}
                        </p>

                        <div className="flex flex-wrap gap-8">
                            <span className="flex items-center gap-6 rounded-full border border-grey-15 bg-grey-10 px-12 py-6 text-white text-xs">
                                <Mail size={13} className="shrink-0" />
                                {office.email}
                            </span>
                            <span className="flex items-center gap-6 rounded-full border border-grey-15 bg-grey-10 px-12 py-6 text-white text-xs">
                                <Phone size={13} className="shrink-0" />
                                {office.phone}
                            </span>
                            <span className="flex items-center gap-6 rounded-full border border-grey-15 bg-grey-10 px-12 py-6 text-white text-xs">
                                <MapPin size={13} className="shrink-0" />
                                {office.location}
                            </span>
                        </div>

                        <button
                            type="button"
                            className="mt-4 w-full rounded-lg bg-purple-60 py-12 text-sm text-white font-medium hover:opacity-90 transition"
                        >
                            Get Direction
                        </button>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Location;