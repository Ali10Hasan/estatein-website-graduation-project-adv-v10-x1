export interface IHero {
    title: string;
    description: string;
}

export interface IStats {
    value: number;
    desc: string;
    suffix: string
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
        value: 200,
        suffix: "+",
        desc: "Happy Customers",
    },
    {
        value: 10,
        desc: "Properties For Clients",
        suffix: "K+"
    },
    {
        value: 16,
        desc: "Years of Experience",
        suffix: "+"
    },
];