import type { PawukonItemDetails } from "../types";

export const DWIWARA: readonly PawukonItemDetails[] = [
    { name: "menga", urip: 5, direction: "Timur - Purwa", deity: "Sang Hyang Kalima" },
    { name: "pepet", urip: 4, direction: "Utara - Utara", deity: "Sang Hyang Timir" }
] as const;