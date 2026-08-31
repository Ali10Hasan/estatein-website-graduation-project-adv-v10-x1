import { STATS_DATA } from "../Hero/data"
import StatCard from "./StatCard"

const Stats = () => {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16 2xl:gap-20 xl:max-w-610 2xl:max-w-758 mb-40 xl:mb-0">
            {STATS_DATA.map((stat, index) => (
                <div key={index} className={index === 2 ? "col-span-2 xl:col-span-1" : ""}>
                    <StatCard value={stat.value} desc={stat.desc} suffix={stat.suffix} />
                </div>
            ))}
        </div>
    )
}

export default Stats