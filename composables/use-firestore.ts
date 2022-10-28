import { Message } from "~~/server/utils/firebase";

export function useFirestore() {
    function addMessage(message: Message) {
        return useFetch("/api/addMessage", {
            method: "POST",
            body: message
        });
    }
    return {addMessage}
}