import { ANCHOR_DATE } from "../consts/anchor-date";
import { MS_PER_DAY } from "../consts/time";
import { DAYS_IN_YEAR_CYCLE } from "../consts/year-cycle";

export const getValidDate = (date: Date | string | number) => {
    const dateObj = new Date(date);

    if (Number.isNaN(dateObj.getTime()))
        throw new Error("Invalid date");

    return dateObj;
}

export const getDaysSinceAnchorDate = (date: Date | string | number) => {
    const dateObj = getValidDate(date);

    const deltaTime = dateObj.getTime() - ANCHOR_DATE.getTime();
    const days = Math.floor(deltaTime / MS_PER_DAY);

    const validDays = days % DAYS_IN_YEAR_CYCLE;
    const effectiveDays = validDays < 0 ? DAYS_IN_YEAR_CYCLE + validDays : validDays;

    return Math.abs(effectiveDays);
}
