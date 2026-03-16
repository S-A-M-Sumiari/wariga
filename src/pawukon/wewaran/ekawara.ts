import type { PawukonItemDetails } from "../types";

export const EKAWARA: readonly PawukonItemDetails[] = [
    { name: "luang", urip: 1, direction: "Barat Laut - Wayabya", deity: "Sang Hyang Taya" }
] as const;

export const getEkawara = (dwiwara: PawukonItemDetails): PawukonItemDetails | null => {
    if (dwiwara.name === "menga") {
        return EKAWARA[0]!;
    } else {
        return null;
    }
}