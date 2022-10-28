function encode(raw: string): string[] {
    return raw.split("").map(c => {
     switch(c) {
         case " ": return "&#160;";
     }
     return c;
 });
}

export function useHtmlEncoder() {
    return {encode};
}