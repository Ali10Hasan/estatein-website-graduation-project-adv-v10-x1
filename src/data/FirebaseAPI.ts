import {
    addDoc,
    collection,
    deleteDoc,
    deleteField,
    doc,
    onSnapshot,
    updateDoc,
} from "firebase/firestore";

import { db } from "../config/firebase";

const prepareCreateData = (data: object) => {
    return Object.fromEntries(
        Object.entries(data).filter(([, value]) => value !== undefined)
    );
};

const prepareUpdateData = (data: object) => {
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
            key,
            value === undefined ? deleteField() : value,
        ])
    );
};

export const readData = <T>(
    collectionName: string,
    callback: (data: T[]) => void,
    errorCallback?: (error: Error) => void
) => {
    const stopListener = onSnapshot(
        collection(db, collectionName),

        (querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as T[];

            callback(data);
        },

        (error) => {
            console.error(
                `Error reading ${collectionName}:`,
                error
            );

            errorCallback?.(error);
        }
    );

    return stopListener;
};

export const addData = async (
    collectionName: string,
    data: object
) => {
    const preparedData = prepareCreateData(data);

    const docRef = await addDoc(
        collection(db, collectionName),
        preparedData
    );

    return docRef.id;
};

export const updateData = async (
    collectionName: string,
    id: string,
    data: object
) => {
    const docRef = doc(db, collectionName, id);
    const preparedData = prepareUpdateData(data);

    try {
        await updateDoc(docRef, preparedData);
    } catch (error) {
        console.error("Error updating document:", error);
        throw error;
    }
    
};

export const deleteData = async (
    collectionName: string,
    id: string
) => {
    const docRef = doc(db, collectionName, id);

    try {
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting document:", error);
        throw error;
    }
};
