import { useState } from "react";
import { FiX } from "react-icons/fi";

import type { IProperty } from "../../types/propertyType";
import InputCard from "../inputs/InputCard";
import TextareaInput from "../inputs/TextareaInput";
import PropertyImagesField from "./PropertyImagesField";

interface PropertyFormProps {
    property?: IProperty;
    onClose: () => void;
    onSave: (data: Omit<IProperty, "id">) => void;
}

interface PropertyFormState {
    title: string;
    category: string;
    price: string;
    propertyType: string;
    bedrooms: string;
    bathrooms: string;
    location: string;
    area: string;
    builtYear: string;
    shortDescription: string;
    fullDescription: string;
    features: string;
    images: string[];
}

type NumericPropertyField =
    | "price"
    | "bedrooms"
    | "bathrooms"
    | "area"
    | "builtYear";

type PropertyFormField = NumericPropertyField | "images";

type PropertyFormErrors = Partial<Record<PropertyFormField, string>>;

const numericPropertyFields = new Set<NumericPropertyField>([
    "price",
    "bedrooms",
    "bathrooms",
    "area",
    "builtYear",
]);

const parseOptionalNumber = (value: string) => {
    return value.trim() === "" ? undefined : Number(value);
};

const isSupportedPropertyImageSource = (value: string) => {
    const source = value.trim();

    if (/^\/assets\/\S+$/.test(source)) {
        return true;
    }

    try {
        return new URL(source).protocol === "https:";
    } catch {
        return false;
    }
};

const PropertyForm = ({
    property,
    onClose,
    onSave,
}: PropertyFormProps) => {
    const [formData, setFormData] = useState<PropertyFormState>({
        title: property?.title ?? "",
        category: property?.category ?? "",
        price: property?.price !== undefined ? String(property.price) : "",
        propertyType: property?.propertyType ?? "",
        bedrooms: property?.bedrooms !== undefined ? String(property.bedrooms) : "",
        bathrooms: property?.bathrooms !== undefined ? String(property.bathrooms) : "",
        location: property?.location ?? "",
        area: property?.area !== undefined ? String(property.area) : "",
        builtYear: property?.builtYear !== undefined ? String(property.builtYear) : "",
        shortDescription: property?.shortDescription ?? "",
        fullDescription: property?.fullDescription ?? "",
        features: property?.features?.join("\n") ?? "",
        images: property?.images?.length ? [...property.images] : [""],
    });
    const [errors, setErrors] = useState<PropertyFormErrors>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (numericPropertyFields.has(name as NumericPropertyField)) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    const handleImagesChange = (images: string[]) => {
        setFormData((prev) => ({
            ...prev,
            images,
        }));

        setErrors((prev) => ({
            ...prev,
            images: undefined,
        }));
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const price = Number(formData.price);
        const bedrooms = parseOptionalNumber(formData.bedrooms);
        const bathrooms = parseOptionalNumber(formData.bathrooms);
        const area = parseOptionalNumber(formData.area);
        const builtYear = parseOptionalNumber(formData.builtYear);
        const images = formData.images
            .map((image) => image.trim())
            .filter(Boolean);
        const currentYear = new Date().getFullYear();
        const nextErrors: PropertyFormErrors = {};

        if (formData.price.trim() === "" || !Number.isFinite(price) || price <= 0) {
            nextErrors.price = "Price is required and must be greater than 0.";
        }

        if (
            bedrooms !== undefined &&
            (!Number.isInteger(bedrooms) || bedrooms < 0)
        ) {
            nextErrors.bedrooms = "Bedrooms must be a whole number of 0 or more.";
        }

        if (
            bathrooms !== undefined &&
            (!Number.isInteger(bathrooms) || bathrooms < 0)
        ) {
            nextErrors.bathrooms = "Bathrooms must be a whole number of 0 or more.";
        }

        if (area !== undefined && (!Number.isFinite(area) || area <= 0)) {
            nextErrors.area = "Area must be greater than 0.";
        }

        if (
            builtYear !== undefined &&
            (!Number.isInteger(builtYear) ||
                builtYear < 1800 ||
                builtYear > currentYear)
        ) {
            nextErrors.builtYear = `Built year must be between 1800 and ${currentYear}.`;
        }

        if (images.length === 0) {
            nextErrors.images = "At least one property image is required.";
        } else if (images.some((image) => !isSupportedPropertyImageSource(image))) {
            nextErrors.images = "Each image must use an /assets/ path or an HTTPS URL.";
        } else if (new Set(images).size !== images.length) {
            nextErrors.images = "Duplicate image URLs are not allowed.";
        }

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            return;
        }

        const finalData: Omit<IProperty, "id"> = {
            title: formData.title.trim(),
            category: formData.category.trim(),
            price,
            propertyType: formData.propertyType.trim() || undefined,
            bedrooms,
            bathrooms,
            location: formData.location.trim() || undefined,
            area,
            builtYear,
            shortDescription: formData.shortDescription.trim(),
            fullDescription: formData.fullDescription.trim() || undefined,

            features: formData.features
                ? formData.features
                    .split("\n")
                    .map((feature) => feature.trim())
                    .filter(Boolean)
                : undefined,

            images,
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
        bg-smoky-black light:bg-white-90
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
                >
                    <FiX size={18} />
                </button>

                <h2 className="text-2xl font-semibold text-white-99 light:text-grey-08">
                    {property ? "Edit Property" : "Add New Property"}
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
                    />

                    <InputCard
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />

                    <InputCard
                        label="Price"
                        type="number"
                        name="price"
                        min={0.01}
                        step="any"
                        value={formData.price}
                        onChange={handleChange}
                        ariaInvalid={Boolean(errors.price)}
                        error={errors.price}
                    />

                    <InputCard
                        label="Property Type"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                    />

                    <InputCard
                        label="Bedrooms"
                        type="number"
                        name="bedrooms"
                        min={0}
                        step={1}
                        value={formData.bedrooms}
                        onChange={handleChange}
                        ariaInvalid={Boolean(errors.bedrooms)}
                        error={errors.bedrooms}
                    />

                    <InputCard
                        label="Bathrooms"
                        type="number"
                        name="bathrooms"
                        min={0}
                        step={1}
                        value={formData.bathrooms}
                        onChange={handleChange}
                        ariaInvalid={Boolean(errors.bathrooms)}
                        error={errors.bathrooms}
                    />

                    <InputCard
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <InputCard
                        label="Area"
                        type="number"
                        name="area"
                        min={0.01}
                        step="any"
                        value={formData.area}
                        onChange={handleChange}
                        ariaInvalid={Boolean(errors.area)}
                        error={errors.area}
                    />

                    <InputCard
                        label="Built Year"
                        type="number"
                        name="builtYear"
                        min={1800}
                        max={new Date().getFullYear()}
                        step={1}
                        value={formData.builtYear}
                        onChange={handleChange}
                        ariaInvalid={Boolean(errors.builtYear)}
                        error={errors.builtYear}
                    />

                    <TextareaInput
                        label="Short Description"
                        name="shortDescription"
                        value={formData.shortDescription}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Enter a short description"
                        containerClassName="md:col-span-2 px-10"
                    />

                    <TextareaInput
                        label="Full Description"
                        name="fullDescription"
                        value={formData.fullDescription}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Enter the full description"
                        containerClassName="md:col-span-2 px-10"
                    />

                    <TextareaInput
                        label="Features"
                        name="features"
                        value={formData.features}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter each feature on a new line"
                        containerClassName="md:col-span-2 px-10"
                    />

                    <PropertyImagesField
                        images={formData.images}
                        onChange={handleImagesChange}
                        isSourceSupported={isSupportedPropertyImageSource}
                        error={errors.images}
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
