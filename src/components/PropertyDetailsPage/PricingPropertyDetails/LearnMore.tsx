import { IoClose } from "react-icons/io5";

interface LearnMoreProps {
    selectedCard: string | null;
    onClose: () => void;
}

const LearnMore = ({ selectedCard, onClose }: LearnMoreProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-20">
            <div className="bg-grey-08 border border-grey-15 rounded-3xl w-full max-w-2xl p-30 xl:p-40 flex flex-col gap-24 relative shadow-2xl">

                <div className="flex justify-between items-center pb-30 border-b border-grey-15">
                    <div className="flex flex-col gap-5">
                        <span className="text-[14px] uppercase text-purple-60 font-semibold">Information Guide</span>
                        <h3 className="text-xl xl:text-[30px] font-semibold">
                            Details: {selectedCard}
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-50 h-50 rounded-full bg-grey-10 border border-grey-15 flex items-center justify-center text-grey-60 hover:text-white hover:bg-grey-15 transition-all duration-200"
                    >
                        <IoClose className="w-30 h-30" />
                    </button>
                </div>

                <div className="text-grey-60 text-[16px] xl:text-[20px] py-15">
                    {selectedCard === "Additional Fees" && (
                        <p>Additional Fees Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quis assumenda. Perferendis ipsum ea, quos velit a odit quaerat exercitationem esse atque voluptatem animi laboriosam iste perspiciatis! Voluptatibus ut commodi dolor eius dignissimos cumque vel nobis sequi magnam, necessitatibus facere voluptate, perferendis expedita dolore! Quia, velit. Ab optio necessitatibus ipsa.</p>
                    )}
                    {selectedCard === "Monthly Costs" && (
                        <p>Monthly Costs Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quis assumenda. Perferendis ipsum ea, quos velit a odit quaerat exercitationem esse atque voluptatem animi laboriosam iste perspiciatis! Voluptatibus ut commodi dolor eius dignissimos cumque vel nobis sequi magnam, necessitatibus facere voluptate, perferendis expedita dolore! Quia, velit. Ab optio necessitatibus ipsa.</p>
                    )}
                    {selectedCard === "Total Initial Costs" && (
                        <p>Total Initial Costs Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quis assumenda. Perferendis ipsum ea, quos velit a odit quaerat exercitationem esse atque voluptatem animi laboriosam iste perspiciatis! Voluptatibus ut commodi dolor eius dignissimos cumque vel nobis sequi magnam, necessitatibus facere voluptate, perferendis expedita dolore! Quia, velit. Ab optio necessitatibus ipsa.</p>
                    )}
                    {selectedCard === "Monthly Expenses" && (
                        <p>Monthly Expenses Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quis assumenda. Perferendis ipsum ea, quos velit a odit quaerat exercitationem esse atque voluptatem animi laboriosam iste perspiciatis! Voluptatibus ut commodi dolor eius dignissimos cumque vel nobis sequi magnam, necessitatibus facere voluptate, perferendis expedita dolore! Quia, velit. Ab optio necessitatibus ipsa.</p>
                    )}
                </div>

                <div className="flex justify-center pt-30 border-t border-grey-15">
                    <button
                        onClick={onClose}
                        className="w-full py-30 bg-purple-60 hover:bg-purple-70 font-medium rounded-xl transition-all duration-200 "
                    >
                        Got it
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LearnMore;