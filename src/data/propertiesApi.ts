import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import type { IProperty } from "../types/propertyType";


export const listenToProperties = (
    callback: (properties: IProperty[]) => void
) => {
    const stopListening = onSnapshot(
        collection(db, "properties"),
        (querySnapshot) => {
            const properties = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as IProperty[];

            callback(properties);
        }
    );

    return stopListening;
};