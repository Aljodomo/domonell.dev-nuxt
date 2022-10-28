import {addMessage} from "../utils/firebase"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return addMessage(body);
});