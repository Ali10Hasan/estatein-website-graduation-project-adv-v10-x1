import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import type { AppDispatch, RootState } from "../../redux/store/store";
import { deleteTestimonial } from "../../redux/slices/testimonialsSlice";
import type { DashboardOutletContext } from "../../pages/DashboardLayout";
import ActionButtons from "../dashboard/ActionButtons";
import RatingStars from "../AtomComponents/RatingStars";
import DataTable from "../dashboard/DataTable";

const TestimonialsTable = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { onEditTestimonial } =
        useOutletContext<DashboardOutletContext>();

    const testimonials = useSelector(
        (state: RootState) => state.testimonials.items
    );

    const handleEdit = (id: string) => {

        const testimonial = testimonials.find(
            (item) => item.id === id
        );

        if (testimonial) {
            onEditTestimonial(testimonial);
        }
    };

    const handleDelete = (id: string) => {
        return dispatch(
            deleteTestimonial(id)
        ).unwrap();
    };

    const columns = [
        {
            header: "Client",
            render: (
                testimonial: (typeof testimonials)[number]
            ) => (
                <div className="flex items-center gap-12">

                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="
                            h-50
                            w-50
                            shrink-0
                            rounded-full
                            object-cover
                        "
                    />

                    <div className="min-w-0">

                        <p className="
                            text-15
                            font-medium
                            text-white light:text-grey-08
                        ">
                            {testimonial.name}
                        </p>

                        <p className="
                            mt-4
                            truncate
                            text-13
                            text-white-90 light:text-grey-20
                        ">
                            {testimonial.location}
                        </p>

                    </div>

                </div>
            ),
        },

        {
            header: "Review",
            render: (
                testimonial: (typeof testimonials)[number]
            ) => (
                <p className="
                    max-w-400
                    text-14
                    leading-22
                    text-white-90 light:text-grey-20
                ">
                    {testimonial.review}
                </p>
            ),
        },

        {
            header: "Rating",
            render: (
                testimonial: (typeof testimonials)[number]
            ) => (
                <RatingStars
                    rating={testimonial.rating}
                />
            ),
        },

        {
            header: "Actions",
            className: "text-center",

            render: (
                testimonial: (typeof testimonials)[number]
            ) => (
                <div className="flex justify-center">

                    <ActionButtons
                        id={testimonial.id}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                </div>
            ),
        },
    ];


    return (
        <DataTable
            data={testimonials}
            columns={columns}
            getRowKey={(testimonial) => testimonial.id}
            emptyMessage="No testimonials found."
        />
    );
};

export default TestimonialsTable;