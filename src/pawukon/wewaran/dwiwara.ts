import type { PawukonItemDetails } from "../types";

const DWIWARA_MODULO = 2;

export const DWIWARA: readonly PawukonItemDetails[] = [
    { name: "menga", urip: 5, direction: "Timur - Purwa", deity: "Sang Hyang Kalima" },
    { name: "pepet", urip: 4, direction: "Utara - Utara", deity: "Sang Hyang Timir" }
] as const;

/**
 * Get the dwiwara based on the saptawara and pancawara.
 * If the urip sum is even then it's menga, otherwise it's pepet.
 * 
 * @param saptawara - The saptawara to get the dwiwara for.
 * @param pancawara - The pancawara to get the dwiwara for.
 * @returns The dwiwara.
 */
export const getDwiwara = (saptawara: PawukonItemDetails, pancawara: PawukonItemDetails) => {
    const uripSum = saptawara.urip + pancawara.urip;
    
    const dwiwaraIndex = uripSum % DWIWARA_MODULO;
    const dwiwara = DWIWARA[dwiwaraIndex];

    if (!dwiwara) throw new Error("Dwiwara not found");

    return dwiwara;
}