import type { IProperty } from "../types/propertyType";
import { addData, deleteData, readData, updateData } from "./FirebaseAPI";

export const readProperties = (
    callback: (properties: IProperty[]) => void,
    errorCallback?: (error: Error) => void
) => {
    return readData<IProperty>(
        "properties",
        callback,
        errorCallback
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

export const updateProperty = (
    id: string,
    property: Partial<Omit<IProperty, "id">>
) => {
    return updateData(
        "properties",
        id,
        property
    );
};


export const deleteProperty = (
    id: string
) => {
    return deleteData(
        "properties",
        id
    );
};
