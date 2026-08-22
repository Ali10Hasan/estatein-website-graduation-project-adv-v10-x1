import TeamCard from "../TeamCard";
import member1 from "../../../public/assets/imgs/team/member1.webp"
import member2 from "../../../public/assets/imgs/team/member2.webp"
import member3 from "../../../public/assets/imgs/team/member3.webp"
import member4 from "../../../public/assets/imgs/team/member4.webp"
import SliderSection from "../Slider/SliderSection"
const teamMembers = [
    {
        id: 1,
        image: member1,
        name: "Max Mitchell",
        role: "Founder",
    },
    {
        id: 2,
        image: member2,
        name: "Sarah Johnson",
        role: "Chief Real Estate Officer",
    },
    {
        id: 3,
        image: member3,
        name: "David Brown",
        role: "Head of Property Management",
    },
    {
        id: 4,
        image: member4,
        name: "Michael Turner",
        role: "Legal Counsel",
    },
    {
        id: 5,
        image: member1,
        name: "John Smith",
        role: "Developer",
    },
    {
        id: 6,
        image: member3,
        name: "David Turner",
        role: "Founder",
    },
];

export default function TeamSection() {
    return (
        <div >
            <SliderSection
                title="Meet the Estatein Team"
                desc="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
                desktopCards={4}
                tabletCards={2}
                mobileCards={1}
                showButton={false}
            >
                {teamMembers.map((member) => (
                    <TeamCard
                        key={member.id}
                        image={member.image}
                        name={member.name}
                        role={member.role}
                    />
                ))}
            </SliderSection>
        </div>
    );
}