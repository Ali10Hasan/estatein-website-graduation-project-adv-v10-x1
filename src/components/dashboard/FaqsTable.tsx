import { useSelector } from "react-redux";

import type { RootState } from "../../redux/store/store";

import ActionButtons from "../dashboard/ActionButtons";

const FaqsTable = () => {

    const faqs = useSelector(
        (state: RootState) => state.faqs.items
    );

    return (
        <div className="w-full overflow-x-auto rounded-xl border border-grey-15">

            <table className="w-full min-w-700 border-collapse">

                {/* Header */}

                <thead>

                    <tr className="border-b border-grey-15 text-left">

                        <th className="px-20 py-18 text-14 font-medium text-white-90">
                            Question
                        </th>

                        <th className="px-20 py-18 text-14 font-medium text-white-90">
                            Answer
                        </th>

                        <th className="px-20 py-18 text-center text-14 font-medium text-white-90">
                            Actions
                        </th>

                    </tr>

                </thead>

                {/* Body */}

                <tbody>

                    {faqs.map((faq) => (

                        <tr
                            key={faq.id}
                            className="border-b border-grey-15 last:border-b-0 transition-colors hover:bg-grey-08"
                        >

                            {/* Question */}

                            <td className="w-1/3 px-20 py-20 align-top">

                                <p className="text-14 font-medium leading-22 text-white">
                                    {faq.question}
                                </p>

                            </td>

                            {/* Answer */}

                            <td className="w-1/2 px-20 py-20 align-top">

                                <p className="text-14 leading-22 text-white-90">
                                    {faq.answer}
                                </p>

                            </td>

                            {/* Actions */}

                            <td className="px-20 py-20 align-middle">

                                <ActionButtons
                                    id={faq.id}
                                    collectionName="faqs"
                                />

                            </td>

                        </tr>

                    ))}

                    {/* Empty state */}

                    {faqs.length === 0 && (

                        <tr>

                            <td
                                colSpan={3}
                                className="px-20 py-60 text-center text-16 text-white-90"
                            >
                                No FAQs found.
                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
};

export default FaqsTable;