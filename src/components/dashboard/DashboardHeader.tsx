import { FaPlus } from "react-icons/fa";
import Button from "../AtomComponents/Button";
interface DashboardHeaderProps {
    onAddNew: () => void;
}

const DashboardHeader = ({ onAddNew }: DashboardHeaderProps) => {
    return (
        <div className="flex items-center justify-between mb-30">
            <h1 className="text-white light:text-grey-08 text-3xl font-semibold">
                Dashboard
            </h1>

            <Button
                onClick={onAddNew}
                className="flex items-center justify-center gap-10 bg-purple-60 hover:bg-purple-65 text-white px-20 py-12 rounded-lg transition-colors w-200 text-xl font-bold"
                icon={<FaPlus />}
                content=" Add New"
            >
            </Button>
        </div>
    );
};

export default DashboardHeader;