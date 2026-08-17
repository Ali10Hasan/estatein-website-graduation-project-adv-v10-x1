import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import type { IProperty } from "../types/propertyType";


export const getProperties = async (): Promise<IProperty[]> => {
    const querySnapshot = await getDocs(collection(db, "properties"));

    const properties = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as IProperty[];

    return properties;
};