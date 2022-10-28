import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export const app = initializeApp({
    credential: cert('./service-account.json'),
})

export const firestore = getFirestore();

export interface Message {
    name: string,
    email: string,
    subject: string,
    message: string,
}

export function addMessage(message: Message) {
    return firestore.collection("messenges").add(message);
}