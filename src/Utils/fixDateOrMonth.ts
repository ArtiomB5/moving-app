export const fixDateOrMonth = (dateOrMonth: number) => {
    if (dateOrMonth < 10) {
        return `0${dateOrMonth}`
    } else {
        return dateOrMonth;
    }
}