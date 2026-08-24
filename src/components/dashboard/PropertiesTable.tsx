import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

import type { AppDispatch, RootState } from "../../redux/store/store";
import { deleteProperty } from "../../redux/slices/propertiesSlice";
import type { DashboardOutletContext } from "../../pages/DashboardLayout";

import Loading from "../Loading";
import Error from "../Error";
import ActionButtons from "./ActionButtons";

const PropertiesTable = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { onEditProperty } = useOutletContext<DashboardOutletContext>();

    const { items, loading, error } = useSelector(
        (state: RootState) => state.properties
    );

    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleEdit = (id: string) => {
        const property = items.find(
            (item) => item.id === id
        );

        if (property) {
            onEditProperty(property);
        }
    };

    const handleDelete = (id: string) => {
        return dispatch(deleteProperty(id)).unwrap();
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error message={error} />;
    }

    return (
        <div className="w-full overflow-x-auto border border-grey-15 rounded-xl">
            <table className="w-full text-left text-white">

                <thead className="bg-grey-10">
                    <tr>
                        <th className="px-20 py-18 text-start text-14 font-medium text-white-90">
                            Image
                        </th>

                        <th className="px-20 py-18 text-start text-14 font-medium text-white-90">
                            Title
                        </th>

                        <th className="px-20 py-18 text-start text-14 font-medium text-white-90">
                            Category
                        </th>

                        <th className="px-20 py-18 text-start text-14 font-medium text-white-90">
                            Price
                        </th>

                        <th className="px-20 py-18 text-start text-14 font-medium text-white-90">
                            Type
                        </th>

                        <th className="px-20 py-18 text-start text-14 font-medium text-white-90">
                            Bedrooms
                        </th>

                        <th className="px-20 py-18 text-start text-14 font-medium text-white-90">
                            Bathrooms
                        </th>

                        <th className="px-20 py-18 text-center text-14 font-medium text-white-90">
                            Details
                        </th>

                        <th className="px-20 py-18 text-center text-14 font-medium text-white-90">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((property) => {

                        const hasDetails =
                            property.fullDescription ||
                            property.location ||
                            property.area ||
                            property.features?.length ||
                            property.images.length > 1;

                        const isExpanded = expandedId === property.id;

                        return (
                            <Fragment key={property.id}>

                                {/* Main Row */}
                                <tr className="border-t border-grey-15">

                                    <td className="px-20 py-20">
                                        <img
                                            src={property.images[0]}
                                            alt={property.title}
                                            className="w-60 h-60 object-cover rounded-lg"
                                        />
                                    </td>

                                    <td className="px-20 py-20">
                                        {property.title}
                                    </td>

                                    <td className="px-20 py-20">
                                        {property.category}
                                    </td>

                                    <td className="px-20 py-20">
                                        ${property.price.toLocaleString()}
                                    </td>

                                    <td className="px-20 py-20">
                                        {property.propertyType}
                                    </td>

                                    <td className="px-20 py-20">
                                        {property.bedrooms}
                                    </td>

                                    <td className="px-20 py-20">
                                        {property.bathrooms}
                                    </td>

                                    {/* Details */}
                                    <td className="px-20 py-20 text-center">

                                        {hasDetails ? (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setExpandedId(
                                                        isExpanded
                                                            ? null
                                                            : property.id
                                                    )
                                                }
                                                className="px-14 py-8 rounded-lg border border-grey-15 text-white-90 hover:bg-grey-15 transition-colors cursor-pointer"
                                            >
                                                {isExpanded
                                                    ? "Hide Details"
                                                    : "View Details"}
                                            </button>
                                        ) : (
                                            <span className="text-grey-60 text-14">
                                                Basic
                                            </span>
                                        )}

                                    </td>

                                    <td className="px-20 py-20">
                                        <ActionButtons
                                            id={property.id}
                                            onEdit={handleEdit}
                                            onDelete={handleDelete}
                                        />
                                    </td>
                                </tr>

                                {/* Expanded Details Row */}
                                {isExpanded && (
                                    <tr className="border-t border-grey-15 bg-grey-10">

                                        <td
                                            colSpan={9}
                                            className="px-20 py-20"
                                        >
                                            <div className="flex flex-col gap-20">

                                                {/* Location + Area */}
                                                <div className="flex flex-wrap gap-40">

                                                    {property.location && (
                                                        <div>
                                                            <p className="text-14 text-grey-60">
                                                                Location
                                                            </p>

                                                            <p className="mt-6 text-white-90">
                                                                {property.location}
                                                            </p>
                                                        </div>
                                                    )}

                                                    {property.area && (
                                                        <div>
                                                            <p className="text-14 text-grey-60">
                                                                Area
                                                            </p>

                                                            <p className="mt-6 text-white-90">
                                                                {property.area} Square Feet
                                                            </p>
                                                        </div>
                                                    )}

                                                </div>

                                                {/* Full Description */}
                                                {property.fullDescription && (
                                                    <div>
                                                        <p className="text-14 text-grey-60">
                                                            Full Description
                                                        </p>

                                                        <p className="mt-6 text-white-90">
                                                            {property.fullDescription}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Features */}
                                                {property.features &&
                                                    property.features.length > 0 && (
                                                        <div>
                                                            <p className="text-14 text-grey-60">
                                                                Features
                                                            </p>

                                                            <ul className="mt-8 flex flex-col gap-6">
                                                                {property.features.map(
                                                                    (feature, index) => (
                                                                        <li
                                                                            key={index}
                                                                            className="text-white-90"
                                                                        >
                                                                            • {feature}
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}

                                                {/* Images */}
                                                {property.images.length > 1 && (
                                                    <div>

                                                        <p className="text-14 text-grey-60">
                                                            Property Images
                                                        </p>

                                                        <div className="mt-10 flex flex-wrap gap-10">
                                                            {property.images.map(
                                                                (image, index) => (
                                                                    <img
                                                                        key={index}
                                                                        src={image}
                                                                        alt={`${property.title} ${index + 1}`}
                                                                        className="w-100 h-80 object-cover rounded-lg"
                                                                    />
                                                                )
                                                            )}
                                                        </div>

                                                    </div>
                                                )}

                                            </div>
                                        </td>

                                    </tr>
                                )}

                            </Fragment>
                        );
                    })}
                </tbody>

            </table>
        </div>
    );
};

export default PropertiesTable;
