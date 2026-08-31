import { useState } from "react";
import { FiX } from "react-icons/fi";

import type { ITestimonial } from "../../types/testimonialType";
import InputCard from "../inputs/InputCard";
import TextareaInput from "../inputs/TextareaInput";

interface TestimonialFormProps {
    testimonial?: ITestimonial;
    onClose: () => void;
    onSave: (
        data: Omit<ITestimonial, "id">
    ) => void;
}

interface TestimonialFormState {
    title: string;
    review: string;
    rating: string;
    name: string;
    location: string;
    image: string;
}

const TestimonialForm = ({
    testimonial,
    onClose,
    onSave,
}: TestimonialFormProps) => {
    const [formData, setFormData] = useState<TestimonialFormState>({
        title: testimonial?.title ?? "",
        review: testimonial?.review ?? "",
        rating: String(testimonial?.rating ?? 5),
        name: testimonial?.name ?? "",
        location: testimonial?.location ?? "",
        image: testimonial?.image ?? "",
    });
    const [ratingError, setRatingError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "rating") {
            setRatingError(null);
        }
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const rating = Number(formData.rating);

        if (
            formData.rating.trim() === "" ||
            !Number.isInteger(rating) ||
            rating < 1 ||
            rating > 5
        ) {
            setRatingError("Rating is required and must be a whole number between 1 and 5.");
            return;
        }

        const finalData: Omit<ITestimonial, "id"> = {
            title: formData.title.trim(),
            review: formData.review.trim(),
            rating,
            name: formData.name.trim(),
            location: formData.location.trim(),
            image: formData.image.trim(),
        };

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
        bg-smoky-black light:bg-white-90/70
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

                <h2 className="text-2xl font-semibold text-white-99 light:text-bg-grey-08">
                    {testimonial
                        ? "Edit Testimonial"
                        : "Add New Testimonial"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-30 grid grid-cols-1 gap-20 md:grid-cols-2"
                >
                    <InputCard
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        containerClassName="md:col-span-2"
                    />

                    <TextareaInput
                        label="Review"
                        name="review"
                        value={formData.review}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter the testimonial review"
                        containerClassName="md:col-span-2 px-10"
                    />

                    <InputCard
                        label="Rating"
                        type="number"
                        name="rating"
                        min={1}
                        max={5}
                        step={1}
                        value={formData.rating}
                        onChange={handleChange}
                        ariaInvalid={Boolean(ratingError)}
                        error={ratingError}
                    />

                    <InputCard
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <InputCard
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <InputCard
                        label="Image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="/assets/imgs/testimonials/client-1.png"
                    />

                    <div className="flex justify-end gap-10 md:col-span-2">
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
                hover:bg-grey-15 light:hover:bg-white-90
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
