export const WUKU_NAMES = [
    "sinta",
    "landep",
    "ukir",
    "kulantir",
    "tolu",
    "gumbreg",
    "wariga",
    "warigadean",
    "julungwangi",
    "sungsang",
    "dungulan",
    "kuningan",
    "langkir",
    "medangsia",
    "pujut",
    "pahang",
    "krulut",
    "merakih",
    "tambir",
    "medangkungan",
    "matal",
    "uye",
    "menail",
    "prangbakat",
    "bala",
    "ugu",
    "wayang",
    "klawu",
    "dukut",
    "watugunung"
] as const;

export type WukuName = typeof WUKU_NAMES[number];

interface WukuDetails {
    urip: number; // a specific sacred number
    direction: string;
    deity: string;
}

export const WUKU: Record<WukuName, WukuDetails> = {
    sinta: {
        urip: 7,
        direction: "Barat - Pascima",
        deity: "Sang Hyang Yamadipati"
    },
    landep: {
        urip: 1,
        direction: "Barat Laut - Wayabya",
        deity: "Sang Hyang Mahadewa"
    },
    ukir: {
        urip: 4,
        direction: "Utara - Utara",
        deity: "Sang Hyang Mahayekti"
    },
    kulantir: {
        urip: 6,
        direction: "Timur Laut - Airsanya",
        deity: "Sang Hyang Langsur"
    },
    tolu: {
        urip: 5,
        direction: "Timur - Purwa",
        deity: "Sang Hyang Bayu"
    },
    gumbreg: {
        urip: 8,
        direction: "Tenggara - Gneyan",
        deity: "Sang Hayng Candra"
    },
    wariga: {
        urip: 9,
        direction: "Selatan - Daksina",
        deity: "Sang Hyang Semara"
    },
    warigadean: {
        urip: 3,
        direction: "Barat Daya - Nairiti",
        deity: "Sang Hyang Mahareshi"
    },
    julungwangi: {
        urip: 7,
        direction: "Barat - Pascima",
        deity: "Sang Hyang Sambhu"
    },
    sungsang: {
        urip: 1,
        direction: "Barat Laut - Wayabya",
        deity: "Sang Hyang Gana"
    },
    dungulan: {
        urip: 4,
        direction: "Utara - Utara",
        deity: "Sang Hyang Kamajaya"
    },
    kuningan: {
        urip: 6,
        direction: "Timur Laut - Airsnya",
        deity: "Sang Hyang Indra"
    },
    langkir: {
        urip: 5,
        direction: "Timur - Purwa",
        deity: "Sang Hyang Kala"
    },
    medangsia: {
        urip: 8,
        direction: "Tenggara - Gneyan",
        deity: "Sang Hyang Brahma"
    },
    pujut: {
        urip: 9,
        direction: "Selatan - Daksina",
        deity: "Sang Hyang Guritna"
    },
    pahang: {
        urip: 3,
        direction: "Barat daya - Nairiti",
        deity: "Sang Hyang Tantra"
    },
    krulut: {
        urip: 7,
        direction: "Barat - Pascima",
        deity: "Sang Hyang Wisnu"
    },
    merakih: {
        urip: 1,
        direction: "Barat Laut - Wayabya",
        deity: "Sang Hyang Surangghana"
    },
    tambir: {
        urip: 4,
        direction: "Utara - Utara",
        deity: "Sang Hyang Shiwa"
    },
    medangkungan: {
        urip: 6,
        direction: "Timur Laut - Airsanya",
        deity: "Sang Hyang Basuki"
    },
    matal: {
        urip: 5,
        direction: "Timur - Purwa",
        deity: "Bhagawan Sakri"
    },
    uye: {
        urip: 8,
        direction: "Tenggara - Gneyan",
        deity: "Sang Hyang Kwera"
    },
    menail: {
        urip: 9,
        direction: "Selatan - Daksina",
        deity: "Sang Hyang Citragotra"
    },
    prangbakat: {
        urip: 3,
        direction: "Barat Daya - Nairiti",
        deity: "Bhagawan Bisma"
    },
    bala: {
        urip: 7,
        direction: "Barat - Pascima",
        deity: "Sang Hyang Durga"
    },
    ugu: {
        urip: 1,
        direction: "Barat Laut - Wayabya",
        deity: "Sang Hyang Singajalma"
    },
    wayang: {
        urip: 4,
        direction: "Utara - Utara",
        deity: "Dewi Sri"
    },
    klawu: {
        urip: 6,
        direction: "Timur Laut - Airsanya",
        deity: "Sang Hyang Sedana"
    },
    dukut: {
        urip: 5,
        direction: "Timur - Purwa",
        deity: "Sang Hyang Baruna"
    },
    watugunung: {
        urip: 8,
        direction: "Tenggara - Gneyan",
        deity: "Sang Hyang Anantabhoga"
    }
} as const;
