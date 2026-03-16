import { ANCHOR_DATE } from "./consts/anchor-date";
import { MS_PER_DAY } from "./consts/time";
import * as pawukon from "./pawukon";

const getValidDate = (date: Date | string | number) => {
    const dateObj = new Date(date);

    if (Number.isNaN(dateObj.getTime()))
        throw new Error("Invalid date");

    return dateObj;
}

const getDaysSinceAnchorDate = (date: Date | string | number) => {
    const dateObj = getValidDate(date);

    const deltaTime = Math.abs(dateObj.getTime() - ANCHOR_DATE.getTime());
    const days = Math.floor(deltaTime / MS_PER_DAY);

    return days;
}

const getWuku = (date: Date | string | number) => {
    const daysSinceAnchorDate = getDaysSinceAnchorDate(date);

    const wukuIndex = daysSinceAnchorDate % pawukon.WUKU_MODULO;
    const wuku = pawukon.WUKU_DATA[wukuIndex];

    return wuku;
}
