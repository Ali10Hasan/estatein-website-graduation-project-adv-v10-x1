import type { IFaq } from "../types/faqType";
import { addData, deleteData, readData, updateData } from "./FirebaseAPI";

export const readFaqs = (
    callback: (faqs: IFaq[]) => void
) => {
    return readData<IFaq>(
        "faqs",
        callback
    );
};

export const addFaq = (
    faq: Omit<IFaq, "id">
) => {
    return addData(
        "faqs",
        faq
    );
};

export const updateFaq = (
    id: string,
    faq: Partial<Omit<IFaq, "id">>
) => {
    return updateData(
        "faqs",
        id,
        faq
    );
};

export const deleteFaq = (
    id: string
) => {
    return deleteData(
        "faqs",
        id
    );
};