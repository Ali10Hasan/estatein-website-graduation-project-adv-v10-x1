export interface IHero {
    title: string;
    description: string;
}

export interface IStats {
    value: string;
    desc: string;
}

export interface IAboutHero {
    title: string;
    description: string;
    img: string;
}

export interface IPageHero {
    title: string;
    description: string;
    className?: string;
}


/* Data */
export const HERO_DATA: IHero = {
    title: "Discover Your Dream Property with Estatein",
    description:
        "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.",
};

export const STATS_DATA: IStats[] = [
    {
        value: "200+",
        desc: "Happy Customers",
    },
    {
        value: "10k+",
        desc: "Properties For Clients",
    },
    {
        value: "16+",
        desc: "Years of Experience",
    },
];