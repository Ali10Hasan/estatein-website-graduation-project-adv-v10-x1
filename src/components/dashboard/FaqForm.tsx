import { useState } from "react";
import { FiX } from "react-icons/fi";

import type { IFaq } from "../../types/faqType";
import InputCard from "../inputs/InputCard";
import TextareaInput from "../inputs/TextareaInput";

interface FaqFormProps {
    faq?: IFaq;
    onClose: () => void;
    onSave: (data: Omit<IFaq, "id">) => void;
}

const FaqForm = ({
    faq,
    onClose,
    onSave,
}: FaqFormProps) => {
    const [formData, setFormData] = useState({
        question: faq?.question ?? "",
        answer: faq?.answer ?? "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const finalData: Omit<IFaq, "id"> = {
            question: formData.question,
            answer: formData.answer,
        };

        const cleanData = Object.fromEntries(
            Object.entries(finalData).filter(
                ([, value]) => value !== undefined
            )
        );

        console.log("CLEAN FAQ DATA:", cleanData);

        onSave(cleanData as Omit<IFaq, "id">);
    };

    return (
        <div
            className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-smoky-black light:bg-white-90/70
        px-20
        backdrop-blur-sm
      "
            onClick={onClose}
        >
            <div
                className="
          relative
          w-full
          max-w-600
          rounded-xl
          border
          border-grey-15 light:border-white-90
          bg-grey-10 light:bg-white-95
          p-30
        "
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="
            absolute
            right-20
            top-20
            flex
            h-36
            w-36
            items-center
            justify-center
            rounded-full
            text-white-90 light:text-grey-20
            hover:bg-grey-15 light:hover:bg-white-90
          "
                    aria-label="Close"
                >
                    <FiX size={18} />
                </button>

                <h2 className="text-2xl font-semibold text-white-99 light:text-grey-08">
                    {faq ? "Edit FAQ" : "Add New FAQ"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-30 flex flex-col gap-20"
                >
                    <InputCard
                        label="Question"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                    />

                    <TextareaInput
                        label="Answer"
                        name="answer"
                        value={formData.answer}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter the FAQ answer"
                        containerClassName="px-10"
                    />

                    <div className="flex justify-end gap-10">
                        <button
                            type="button"
                            onClick={onClose}
                            className="
                rounded-lg
                border
                border-grey-15 light:border-white-90
                px-20
                py-11
                text-white-90 light:text-grey-20
                hover:bg-grey-15 light:hover:border-white-90
              "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="
                rounded-lg
                bg-purple-60
                px-20
                py-11
                font-medium
                text-white-99 light:text-grey-08
                hover:bg-purple-65
              "
                        >
                            {faq ? "Save Changes" : "Add FAQ"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FaqForm;
