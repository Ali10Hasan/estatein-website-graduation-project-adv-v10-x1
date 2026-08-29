import { FaTwitter } from "react-icons/fa";
import type { TeamCardProps } from "../types/teamType";
import TeamButton from "./AtomComponents/TeamButton";

export default function TeamCard({
  image,
  name,
  role,
}: TeamCardProps) {
  return (
    <div className="group w-full rounded-xl border border-grey-15 p-20 md:p-24 lg:p-30 h-full flex flex-col transition-colors duration-300 hover:border-purple-60">
      <div className="relative">
        <div className="overflow-hidden rounded-10">
          <img src={image} alt={name} className="w-full rounded-10 object-cover h-full transition-transform duration-500 ease-in-out group-hover:scale-105"  />
        </div>
        <button type="button" aria-label="Twitter"className="absolute -bottom-18 lg:-bottom-20 left-1/2 flex h-40 w-60 lg:w-76 lg:h-52 -translate-x-1/2 items-center justify-center rounded-full bg-purple-60 text-white" >
          <FaTwitter className="size-20 lg:size-24 transition-transform duration-600 ease-in-out group-hover:rotate-360"/>
        </button>
      </div>
      <div className="mt-40 md:mt-50 mb-16 md:mb-20 lg:mb-24 text-center flex flex-col flex-1">
        <h3 className="font-urbanist text-xl lg:text-2xl font-semibold leading-24 text-white">  {name} </h3>
        <p className="mt-2 md:mt-4 lg:mt-6 font-urbanist text-sm lg:text-lg font-medium leading-24 text-grey-60">  {role} </p>
      </div>
      <TeamButton />
    </div>
  );
}