import * as pawukon from "./pawukon";

const today = new Date("2027-02-08");

const triwara = pawukon.getTriwara(today);
const pancawara = pawukon.getPancawara(today);
const sadwara = pawukon.getSadwara(today);
const saptawara = pawukon.getSaptawara(today);
const wuku = pawukon.getWuku(today);

console.log(triwara);
console.log(pancawara);
console.log(sadwara);
console.log(saptawara);
console.log(wuku);

console.log(`Triwara: ${triwara?.name} Pancawara: ${pancawara?.name} Sadwara: ${sadwara?.name} Saptawara: ${saptawara?.name} Wuku: ${wuku?.name}`);