import { addDoc, collection, onSnapshot } from "firebase/firestore";

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