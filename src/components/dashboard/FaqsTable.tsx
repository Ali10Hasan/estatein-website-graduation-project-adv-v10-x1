import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import type { AppDispatch, RootState } from "../../redux/store/store";
import { deleteFaq } from "../../redux/slices/faqSlice";
import type { DashboardOutletContext } from "../../pages/DashboardLayout";
import ActionButtons from "../dashboard/ActionButtons";
import DataTable from "../dashboard/DataTable";

const FaqsTable = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { onEditFaq } =
        useOutletContext<DashboardOutletContext>();

    const faqs = useSelector(
        (state: RootState) => state.faqs.items
    );

    const handleEdit = (id: string) => {
        const faq = faqs.find(
            (item) => item.id === id
        );

        if (faq) {
            onEditFaq(faq);
        }
    };

    const handleDelete = (id: string) => {
        return dispatch(deleteFaq(id)).unwrap();
    };

    const columns = [
        {
            header: "Question",
            render: (faq: (typeof faqs)[number]) => (
                <p className="text-14 font-medium leading-22 text-white light:text-grey-08">
                    {faq.question}
                </p>
            ),
        },

        {
            header: "Answer",
            render: (faq: (typeof faqs)[number]) => (
                <p className="text-14 leading-22 text-white-90 light:text-grey-20">
                    {faq.answer}
                </p>
            ),
        },

        {
            header: "Actions",
            className: "text-center",
            render: (faq: (typeof faqs)[number]) => (
                <div className="flex justify-center">

                    <ActionButtons
                        id={faq.id}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                </div>
            ),
        },
    ];

    return (
        <DataTable
            data={faqs}
            columns={columns}
            getRowKey={(faq) => faq.id}
            emptyMessage="No FAQs found."
        />
    );
};

export default FaqsTable;