export interface ElementEntry {
    key: string,
    elements: number,
    stagger?: number,
    delay?: number,
    time?: number
}

export function useCssStagger(map: ElementEntry[]) {

    function giveMeMyMsDelay(key: string, elementNr: number): string {
        let delay = 0;
        for (let index = 0; index < map.length; index++) {
            const element = map[index];
            if (element.key === key) {

                if (element.time) {
                    return (element.delay ?? 0) + element.time + elementNr * (element.stagger ?? 0) + "ms";
                }

                return delay + (element.delay ?? 0) + elementNr * (element.stagger ?? 0) + "ms";
            } else {
                delay = delay + element.elements * (element.stagger ?? 0) + (element.delay ?? 0);
            }
        }
        return "0ms";
    }

    return { giveMeMyMsDelay }
}