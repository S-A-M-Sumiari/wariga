import { ANCHOR_DATE } from "../consts/anchor-date";
import { MS_PER_DAY } from "../consts/time";

export const getValidDate = (date: Date | string | number) => {
    const dateObj = new Date(date);

    if (Number.isNaN(dateObj.getTime()))
        throw new Error("Invalid date");

    return dateObj;
}

export const getDaysSinceAnchorDate = (date: Date | string | number) => {
    const dateObj = getValidDate(date);

    const deltaTime = Math.abs(dateObj.getTime() - ANCHOR_DATE.getTime());
    const days = Math.floor(deltaTime / MS_PER_DAY);

    return days;
}
