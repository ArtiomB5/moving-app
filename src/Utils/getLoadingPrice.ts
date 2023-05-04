export const getLoadingPrice = (weight: number, movers: number, maxMoverCapacity: number, moverPrice: number) => {
    return movers <= 0 ? 0 : weight / (maxMoverCapacity * movers) * moverPrice
}