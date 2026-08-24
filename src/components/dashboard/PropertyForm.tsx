import { useState } from "react";
import { FiX } from "react-icons/fi";

import type { IProperty } from "../../types/propertyType";

interface PropertyFormProps {
    property?: IProperty;
    onClose: () => void;
    onSave: (data: Omit<IProperty, "id">) => void;
}

const PropertyForm = ({
    property,
    onClose,
    onSave,
}: PropertyFormProps) => {
    const [formData, setFormData] = useState({
        title: property?.title ?? "",
        category: property?.category ?? "",
        price: property?.price ?? 0,
        propertyType: property?.propertyType ?? "",
        bedrooms: property?.bedrooms ?? 0,
        bathrooms: property?.bathrooms ?? 0,
        location: property?.location ?? "",
        area: property?.area ?? 0,
        shortDescription: property?.shortDescription ?? "",
        fullDescription: property?.fullDescription ?? "",
        features: property?.features?.join("\n") ?? "",
        images: property?.images?.join("\n") ?? "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        console.log("FORM SUBMIT WORKED");
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

        const finalData: Omit<IProperty, "id"> = {
            title: formData.title,
            category: formData.category,
            price: formData.price,
            propertyType: formData.propertyType,
            bedrooms: formData.bedrooms,
            bathrooms: formData.bathrooms,
            location: formData.location,
            area: formData.area,
            shortDescription: formData.shortDescription,
            fullDescription:
                formData.fullDescription,

            features: formData.features
                ? formData.features
                    .split("\n")
                    .map((feature) => feature.trim())
                    .filter(Boolean)
                : undefined,

            images: formData.images
                .split("\n")
                .map((image) => image.trim())
                .filter(Boolean),
        };

        const cleanData = Object.fromEntries(
            Object.entries(finalData).filter(
                ([, value]) => value !== undefined
            )
        );

        console.log("CLEAN DATA:", cleanData);

        onSave(cleanData as Omit<IProperty, "id">);
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
          max-w-900
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
                >
                    <FiX size={18} />
                </button>

                <h2 className="text-24 font-semibold text-white">
                    {property ? "Edit Property" : "Add New Property"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-30 grid grid-cols-1 gap-20 md:grid-cols-2"
                >
                    <div className="flex flex-col gap-8">
                        <label className="text-14 text-white-90">
                            Title
                        </label>

                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        <label className="text-14 text-white-90">
                            Category
                        </label>

                        <input
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        <label className="text-14 text-white-90">
                            Price
                        </label>

                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        <label className="text-14 text-white-90">
                            Property Type
                        </label>

                        <input
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        <label className="text-14 text-white-90">
                            Bedrooms
                        </label>

                        <input
                            type="number"
                            name="bedrooms"
                            value={formData.bedrooms}
                            onChange={handleChange}
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        <label className="text-14 text-white-90">
                            Bathrooms
                        </label>

                        <input
                            type="number"
                            name="bathrooms"
                            value={formData.bathrooms}
                            onChange={handleChange}
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
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
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        <label className="text-14 text-white-90">
                            Area
                        </label>

                        <input
                            type="number"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8 md:col-span-2">
                        <label className="text-14 text-white-90">
                            Short Description
                        </label>

                        <textarea
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            rows={3}
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8 md:col-span-2">
                        <label className="text-14 text-white-90">
                            Full Description
                        </label>

                        <textarea
                            name="fullDescription"
                            value={formData.fullDescription}
                            onChange={handleChange}
                            rows={4}
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8 md:col-span-2">
                        <label className="text-14 text-white-90">
                            Features
                        </label>

                        <textarea
                            name="features"
                            value={formData.features}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Enter each feature on a new line"
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-8 md:col-span-2">
                        <label className="text-14 text-white-90">
                            Images
                        </label>

                        <textarea
                            name="images"
                            value={formData.images}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Enter each image path on a new line"
                            className="rounded-lg border border-grey-15 bg-grey-08 px-14 py-12 text-white"
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
                            {property ? "Save Changes" : "Add Property"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PropertyForm;