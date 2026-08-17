import type { IProperty } from "../types/propertyType";
import { addData, readData } from "./FirebaseAPI";

export const readProperties = (
    callback: (properties: IProperty[]) => void
) => {
    return readData<IProperty>(
        "properties",
        callback
    );
};

export const addProperty = (
    property: Omit<IProperty, "id">
) => {
    return addData(
        "properties",
        property
    );
};
