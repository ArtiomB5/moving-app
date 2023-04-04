export const getLoadingPrice = (weight: number, movers: number, maxMoverCapacity: number, moverPrice: number) => {
    console.log(`weight-${weight} movers-${movers} max-${maxMoverCapacity} price-${moverPrice}`)
    console.log(movers <= 0 ? 0 : weight / (maxMoverCapacity * movers) * moverPrice)
    return movers <= 0 ? 0 : weight / (maxMoverCapacity * movers) * moverPrice
}