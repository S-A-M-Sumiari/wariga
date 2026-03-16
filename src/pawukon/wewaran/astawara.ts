import type { PawukonItemDetails } from "../types";

export const ASTAWARA: readonly PawukonItemDetails[] = [
  { name: "sri", urip: 6, direction: "Timur Laut - Airsanya", deity: "Dewi Sri" },
  { name: "indra", urip: 5, direction: "Timur - Purwa", deity: "Sang Hyang Indra" },
  { name: "guru", urip: 8, direction: "Tenggara - Gneyan", deity: "Sang Hyang Guru" },
  { name: "yama", urip: 9, direction: "Selatan - Daksina", deity: "Sang Hyang Yama" },
  { name: "ludra", urip: 3, direction: "Barat Daya - Nairiti", deity: "Sang Hyang Rudra" },
  { name: "brahma", urip: 7, direction: "Barat - Pascima", deity: "Sang Hyang Brahma" },
  { name: "kala", urip: 1, direction: "Barat Laut - Wayabya", deity: "Sang Hyang Kala" },
  { name: "uma", urip: 4, direction: "Utara - Utara", deity: "Dewi Uma" }
] as const;