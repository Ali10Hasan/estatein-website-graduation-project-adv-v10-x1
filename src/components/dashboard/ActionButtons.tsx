import { useState } from "react";
import { FiEdit2, FiTrash2, FiX, FiAlertTriangle } from "react-icons/fi";

interface ActionButtonsProps {
    id: string;
    onEdit: (id: string) => void;
    onDelete: (id: string) => Promise<unknown> | unknown;
}

const ActionButtons = ({ id, onEdit, onDelete }: ActionButtonsProps) => {

    const [showModal, setShowModal] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {

        try {

            setDeleting(true);

            await onDelete(id);

            setShowModal(false);

        } catch (error) {

            console.error("Failed to delete:", error);

        } finally {

            setDeleting(false);

        }

    };

    return (
        <>
            {/* Actions */}

            <div className="flex items-center justify-center gap-10">

                {/* Edit */}

                <button
                    type="button"
                    onClick={() => onEdit(id)}
                    className="
                        flex
                        h-40
                        w-40
                        cursor-pointer
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-grey-15 light:border-white-90
                        bg-grey-10 light:bg-white-95
                        text-purple-75
                        transition-all
                        duration-200
                        hover:border-purple-75
                    "
                    aria-label="Edit"
                >
                    <FiEdit2 size={17} />
                </button>


                {/* Delete */}

                <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="
                        flex
                        h-40
                        w-40
                        cursor-pointer
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-grey-15 light:border-white-90
                        bg-grey-10 light:bg-white-95
                        text-red-800
                        transition-all
                        duration-200
                        hover:border-red-800
                    "
                    aria-label="Delete"
                >
                    <FiTrash2 size={17} />
                </button>

            </div>


            {/* Confirmation Modal */}

            {showModal && (

                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/70 light:bg-white/70
                        px-20
                        backdrop-blur-sm
                    "
                    onClick={() => {

                        if (!deleting) {
                            setShowModal(false);
                        }

                    }}
                >

                    {/* Modal */}

                    <div
                        className="
                            relative
                            w-full
                            max-w-450
                            overflow-hidden
                            rounded-lg
                            border
                            border-grey-15 light:border-white-90
                            bg-grey-10 light:bg-white-95
                            p-30
                            shadow-2xl
                        "
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        {/* Top gradient decoration */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-80
                                -top-80
                                h-180
                                w-180
                                rounded-full
                                bg-purple-60/10
                                blur-3xl
                            "
                        />


                        {/* Close */}

                        <button
                            type="button"
                            onClick={() =>
                                setShowModal(false)
                            }
                            disabled={deleting}
                            className="
                                absolute
                                right-20
                                top-20
                                flex
                                h-32
                                w-32
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-full
                                text-white-90 light:text-grey-20
                                transition-all
                                hover:bg-grey-15 light:hover:bg-white-90
                                hover:text-white light:hover:text-grey-08
                                disabled:cursor-not-allowed
                            "
                            aria-label="Close"
                        >
                            <FiX size={18} />
                        </button>


                        {/* Icon */}

                        <div
                            className="
                                flex
                                h-60
                                w-60
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-red-500/20
                                bg-red-500/10
                                text-red-700
                            "
                        >
                            <FiAlertTriangle size={26} />
                        </div>


                        {/* Content */}

                        <div className="mt-20">

                            <h2
                                className="
                                    text-22
                                    font-semibold
                                    text-white light:text-grey-08
                                "
                            >
                                Delete item?
                            </h2>


                            <p
                                className="
                                    mt-10
                                    max-w-350
                                    text-14
                                    leading-22
                                    text-white-90 light:text-grey-20
                                "
                            >
                                Are you sure you want to delete
                                this item? This action cannot be
                                undone.
                            </p>

                        </div>


                        {/* Actions */}

                        <div
                            className="
                                mt-30
                                flex
                                items-center
                                justify-end
                                gap-10
                            "
                        >

                            {/* Cancel */}

                            <button
                                type="button"
                                onClick={() =>
                                    setShowModal(false)
                                }
                                disabled={deleting}
                                className="
                                    cursor-pointer
                                    rounded-lg
                                    border
                                    border-grey-15 light:border-white-90
                                    bg-grey-10 light:bg-white-95
                                    px-20
                                    py-11
                                    text-14
                                    font-medium
                                    text-white-90 light:text-grey-20
                                    transition-all
                                    duration-200
                                    hover:bg-grey-15 light:hover:bg-white-90
                                    hover:text-white light:hover:text-grey-08
                                    disabled:cursor-not-allowed
                                "
                            >
                                Cancel
                            </button>


                            {/* Delete */}

                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={deleting}
                                className="
                                    min-w-90
                                    cursor-pointer
                                    rounded-lg
                                    bg-red-700
                                    px-20
                                    py-11
                                    text-14
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-200
                                    hover:bg-red-800
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            >
                                {deleting
                                    ? "Deleting..."
                                    : "Delete"
                                }
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </>
    );
};

export default ActionButtons;
