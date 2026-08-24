import { useState } from "react";
import { FiX } from "react-icons/fi";

import type { IFaq } from "../../types/faqType";

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
        bg-black/70
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
          border-grey-15
          bg-grey-10
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
            text-white-90
            hover:bg-grey-15
          "
                    aria-label="Close"
                >
                    <FiX size={18} />
                </button>

                <h2 className="text-24 font-semibold text-white">
                    {faq ? "Edit FAQ" : "Add New FAQ"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-30 flex flex-col gap-20"
                >
                    <div className="flex flex-col gap-8">
                        <label className="text-14 text-white-90">
                            Question
                        </label>

                        <input
                            name="question"
                            value={formData.question}
                            onChange={handleChange}
                            className="
                rounded-lg
                border
                border-grey-15
                bg-grey-08
                px-14
                py-12
                text-white
              "
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        <label className="text-14 text-white-90">
                            Answer
                        </label>

                        <textarea
                            name="answer"
                            value={formData.answer}
                            onChange={handleChange}
                            rows={5}
                            className="
                rounded-lg
                border
                border-grey-15
                bg-grey-08
                px-14
                py-12
                text-white
              "
                        />
                    </div>

                    <div className="flex justify-end gap-10">
                        <button
                            type="button"
                            onClick={onClose}
                            className="
                rounded-lg
                border
                border-grey-15
                px-20
                py-11
                text-white-90
                hover:bg-grey-15
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
                text-white
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