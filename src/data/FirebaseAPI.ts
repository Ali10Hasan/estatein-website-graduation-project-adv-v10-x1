import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

import { db } from "../config/firebase";

export const readData = <T>(
    collectionName: string,
    callback: (data: T[]) => void
) => {
    const stopListener = onSnapshot(
        collection(db, collectionName),

        (querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as T[];

            callback(data);
        }
    );

    return stopListener;
};

export const addData = async (
    collectionName: string,
    data: object
) => {
    const docRef = await addDoc(
        collection(db, collectionName),
        data
    );

    return docRef.id;
};

export const updateData = async ( collectionName: string, id: string, data: object ) => {
    const docRef = doc( db, collectionName, id );
    try {
        await updateDoc(docRef, data);
    } catch (error) {
        console.error("Error updating document:", error);
        throw error;
    }
    
};

export const deleteData = async ( collectionName: string, id: string ) => {
    const docRef = doc( db, collectionName, id );
    try {
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting document:", error);
        throw error;
    }
};