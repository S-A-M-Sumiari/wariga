import * as pawukon from "./pawukon";

const today = new Date("2027-02-08");

const triwara = pawukon.getTriwara(today);
const pancawara = pawukon.getPancawara(today);
const sadwara = pawukon.getSadwara(today);
const saptawara = pawukon.getSaptawara(today);
const wuku = pawukon.getWuku(today);

const uripSum = saptawara.urip + pancawara.urip;
const dwiwara = pawukon.getDwiwara(uripSum);
const ekawara = pawukon.getEkawara(uripSum);
const dasawara = pawukon.getDasawara(uripSum);


console.log(`Dasawara: ${dasawara?.name} Ekawara: ${ekawara?.name ?? "N/A"} Dwiwara: ${dwiwara?.name} Triwara: ${triwara?.name} Pancawara: ${pancawara?.name} Sadwara: ${sadwara?.name} Saptawara: ${saptawara?.name} Wuku: ${wuku?.name}`);