import { useState } from "react";
import { FiX } from "react-icons/fi";

import type { ITestimonial } from "../../types/testimonialType";

interface TestimonialFormProps {
    testimonial?: ITestimonial;
    onClose: () => void;
    onSave: (
        data: Omit<ITestimonial, "id">
    ) => void;
}

const TestimonialForm = ({
    testimonial,
    onClose,
    onSave,
}: TestimonialFormProps) => {
    const [formData, setFormData] = useState({
        title: testimonial?.title ?? "",
        review: testimonial?.review ?? "",
        rating: testimonial?.rating ?? 5,
        name: testimonial?.name ?? "",
        location: testimonial?.location ?? "",
        image: testimonial?.image ?? "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "number"
                    ? Number(value)
                    : value,
        }));
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const finalData: Omit<ITestimonial, "id"> = {
            title: formData.title.trim(),
            review: formData.review.trim(),
            rating: Math.min(Math.max(formData.rating, 1), 5),
            name: formData.name.trim(),
            location: formData.location.trim(),
            image: formData.image.trim(),
        };

        console.log("TESTIMONIAL DATA:", finalData);

        onSave(finalData);
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
        py-30
        backdrop-blur-sm
      "
            onClick={onClose}
        >
            <div
                className="
          relative
          w-full
          max-w-700
          max-h-[90vh]
          overflow-y-auto
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
                    {testimonial
                        ? "Edit Testimonial"
                        : "Add New Testimonial"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-30 grid grid-cols-1 gap-20 md:grid-cols-2"
                >
                    <div className="flex flex-col gap-8 md:col-span-2">
                        <label className="text-14 text-white-90">
                            Title
                        </label>

                        <input
                            name="title"
                            value={formData.title}
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

                    <div className="flex flex-col gap-8 md:col-span-2">
                        <label className="text-14 text-white-90">
                            Review
                        </label>

                        <textarea
                            name="review"
                            value={formData.review}
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

                    <div className="flex flex-col gap-8">
                        <label className="text-14 text-white-90">
                            Rating
                        </label>

                        <input
                            type="number"
                            name="rating"
                            min={1}
                            max={5}
                            value={formData.rating}
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
                            Name
                        </label>

                        <input
                            name="name"
                            value={formData.name}
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
                            Location
                        </label>

                        <input
                            name="location"
                            value={formData.location}
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
                            Image
                        </label>

                        <input
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="/assets/imgs/testimonials/client-1.png"
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

                    <div className="flex justify-end gap-10 md:col-span-2">
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
                            {testimonial
                                ? "Save Changes"
                                : "Add Testimonial"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TestimonialForm;