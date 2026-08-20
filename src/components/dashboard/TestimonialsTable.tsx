import { useSelector } from "react-redux";
import ActionButtons from "../dashboard/ActionButtons";

import type { RootState } from "../../redux/store/store";
import RatingStars from "../AtomComponents/RatingStars";

const TestimonialsTable = () => {

    const testimonials = useSelector(
        (state: RootState) => state.testimonials.items
    );

    return (
        <div className="w-full overflow-x-auto rounded-xl border border-grey-15">

            <table className="w-full min-w-800 border-collapse">

                {/* Header */}

                <thead>

                    <tr className="border-b border-grey-15 text-left">

                        <th className="px-20 py-18 text-14 font-medium text-white-90">
                            Client
                        </th>

                        <th className="px-20 py-18 text-14 font-medium text-white-90">
                            Review
                        </th>

                        <th className="px-20 py-18 text-14 font-medium text-white-90">
                            Rating
                        </th>

                        <th className="px-20 py-18 text-center text-14 font-medium text-white-90">
                            Actions
                        </th>

                    </tr>

                </thead>

                {/* Body */}

                <tbody>

                    {testimonials.map((testimonial) => (

                        <tr
                            key={testimonial.id}
                            className="
                                border-b
                                border-grey-15
                                last:border-b-0
                                transition-colors
                                hover:bg-grey-08
                            "
                        >

                            {/* Client */}

                            <td className="px-20 py-20">

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
                                            truncate
                                            text-15
                                            font-medium
                                            text-white
                                        ">
                                            {testimonial.name}
                                        </p>

                                        <p className="
                                            mt-4
                                            truncate
                                            text-13
                                            text-white-90
                                        ">
                                            {testimonial.location}
                                        </p>

                                    </div>

                                </div>

                            </td>

                            {/* Review */}

                            <td className="max-w-400 px-20 py-20">

                                <p className="
                                    text-14
                                    leading-22
                                    text-white-90
                                ">
                                    {testimonial.review}
                                </p>

                            </td>

                            {/* Rating */}

                            <td className="px-20 py-20">

                                <RatingStars
                                    rating={testimonial.rating}
                                />

                            </td>


                            {/* Actions */}

                            <td className="px-20 py-20">

                                <ActionButtons
                                    id={testimonial.id}
                                    collectionName="testimonials"
                                />

                            </td>

                        </tr>

                    ))}

                    {/* Empty state */}

                    {testimonials.length === 0 && (

                        <tr>

                            <td
                                colSpan={4}
                                className="
                                    px-20
                                    py-60
                                    text-center
                                    text-16
                                    text-white-90
                                "
                            >
                                No testimonials found.
                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
};

export default TestimonialsTable;