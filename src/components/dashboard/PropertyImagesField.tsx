import { useState } from "react";

import InputCard from "../inputs/InputCard";
import { MdMoveUp } from "react-icons/md";
import { MdMoveDown } from "react-icons/md";
import { FcRemoveImage } from "react-icons/fc";



interface PropertyImagesFieldProps {
    images: string[];
    onChange: (images: string[]) => void;
    isSourceSupported: (value: string) => boolean;
    error?: string;
}

const PropertyImagesField = ({
    images,
    onChange,
    isSourceSupported,
    error,
}: PropertyImagesFieldProps) => {
    const [failedSources, setFailedSources] = useState<string[]>([]);

    const updateImage = (index: number, value: string) => {
        const previousSource = images[index]?.trim();

        setFailedSources((current) =>
            current.filter(
                (source) => source !== previousSource && source !== value.trim()
            )
        );

        const nextImages = [...images];
        nextImages[index] = value;
        onChange(nextImages);
    };

    const addImage = () => {
        onChange([...images, ""]);
    };

    const removeImage = (index: number) => {
        if (images.length === 1) {
            onChange([""]);
            return;
        }

        onChange(images.filter((_, imageIndex) => imageIndex !== index));
    };

    const moveImage = (fromIndex: number, toIndex: number) => {
        if (toIndex < 0 || toIndex >= images.length) {
            return;
        }

        const nextImages = [...images];
        [nextImages[fromIndex], nextImages[toIndex]] = [
            nextImages[toIndex],
            nextImages[fromIndex],
        ];

        onChange(nextImages);
    };

    const markSourceAsFailed = (source: string) => {
        setFailedSources((current) =>
            current.includes(source) ? current : [...current, source]
        );
    };

    const markSourceAsLoaded = (source: string) => {
        setFailedSources((current) =>
            current.filter((failedSource) => failedSource !== source)
        );
    };

    return (
        <div className="flex flex-col gap-16 px-10 md:col-span-2">
            <div>
                <h3 className="text-base font-semibold text-white-99">
                    Property Images
                </h3>
                <p className="mt-6 text-sm text-grey-60">
                    Add a local /assets/ path or an HTTPS image URL. The first
                    image is used as the cover image.
                </p>
            </div>

            <div className="flex flex-col gap-16">
                {images.map((image, index) => {
                    const source = image.trim();
                    const isSupported = isSourceSupported(source);
                    const hasFailed = failedSources.includes(source);

                    return (
                        <div
                            key={index}
                            className="rounded-lg border border-grey-15 bg-grey-08 p-16"
                        >
                            <div className="flex flex-col gap-14 lg:flex-row lg:items-end">
                                <InputCard
                                    label={`Image URL ${index + 1}`}
                                    name={`property-image-${index}`}
                                    value={image}
                                    onChange={(event) =>
                                        updateImage(index, event.target.value)
                                    }
                                    placeholder="/assets/imgs/properties/property-1.webp"
                                />

                                <div className="flex gap-8">
                                    <button
                                        type="button"
                                        onClick={() => moveImage(index, index - 1)}
                                        disabled={index === 0}
                                        className="rounded-lg border border-grey-15 px-24 py-20 text-sm text-white-90 transition-colors hover:bg-grey-15 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <MdMoveUp className="text-2xl"/>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => moveImage(index, index + 1)}
                                        disabled={index === images.length - 1}
                                        className="rounded-lg border border-grey-15 px-24 py-20 text-sm text-white-90 transition-colors hover:bg-grey-15 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <MdMoveDown className="text-2xl"/>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="rounded-lg border border-grey-15 px-24 py-20 text-sm text-white-90 transition-colors hover:bg-grey-15"
                                    >
                                        <FcRemoveImage className="text-2xl"/>
                                    </button>
                                </div>
                            </div>

                            {index === 0 && (
                                <span className="mt-12 ms-10 inline-flex rounded-full bg-purple-60 px-10 py-5 text-sm font-medium text-white-99">
                                    Cover Image
                                </span>
                            )}

                            {source && !isSupported && (
                                <p className="mt-12 text-sm text-red-400">
                                    Use an /assets/ path or an HTTPS URL.
                                </p>
                            )}

                            {source && isSupported && (
                                <div className="mt-12">
                                    {hasFailed ? (
                                        <p className="text-sm text-red-400">
                                            This image could not be loaded. Check the path or URL.
                                        </p>
                                    ) : (
                                        <img
                                            src={source}
                                            alt={`Property preview ${index + 1}`}
                                            loading="lazy"
                                            referrerPolicy="no-referrer"
                                            onLoad={() => markSourceAsLoaded(source)}
                                            onError={() => markSourceAsFailed(source)}
                                            className="ms-10 h-140 w-full rounded-lg border border-grey-15 object-cover sm:w-220"
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <button
                type="button"
                onClick={addImage}
                className="w-fit rounded-lg bg-purple-60 px-16 py-10 text-sm font-medium text-white-99 transition-colors hover:bg-purple-65"
            >
                Add Another Image
            </button>

            {error && (
                <p className="text-sm text-red-400" aria-live="polite">
                    {error}
                </p>
            )}
        </div>
    );
};

export default PropertyImagesField;
