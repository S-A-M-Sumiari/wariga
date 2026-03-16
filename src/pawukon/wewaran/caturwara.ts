import type { PawukonItemDetails } from "../types";

export const CATURWARA: readonly PawukonItemDetails[] = [
    { name: "sri", urip: 6, direction: "Timur Laut - Airsanya", deity: "Bhagawan Bregu" },
    { name: "laba", urip: 3, direction: "Barat Daya - Nairiti", deity: "Bhagawan Kanwa" },
    { name: "jaya", urip: 1, direction: "Barat Laut - Wayabya", deity: "Bhagawan Janaka" },
    { name: "mandala", urip: 8, direction: "Tenggara - Gneyan", deity: "Bhagawan Narada" }
] as const;