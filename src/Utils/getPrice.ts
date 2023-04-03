type PricesType = {[key: string]: number}
type CommonPricesType = {[key: string]: PricesType}

const pricesCarFrom0To5: PricesType = {
    "500": 229,
    "1000": 211,
    "1500": 196,
    "2000": 180,
    "2500": 173
  }

  const pricesCarFrom5To10: PricesType = {
    "500": 265,
    "1000": 249,
    "1500": 228,
    "2000": 217,
    "2500": 206
  }

  const pricesCarFrom10To15: PricesType = {
    "500": 276,
    "1000": 251,
    "1500": 234,
    "2000": 215,
    "2500": 201
  }

  const pricesCarFrom15To20: PricesType = {
    "500": 308,
    "1000": 280,
    "1500": 256,
    "2000": 237,
    "2500": 225
  }

  const commonPrices: CommonPricesType = {
    "5": pricesCarFrom0To5,
    "10": pricesCarFrom5To10,
    "15": pricesCarFrom10To15,
    "20": pricesCarFrom15To20
  }

const getPricesByCapacity = (carCapacity: number, prices: CommonPricesType | PricesType): PricesType | number => {
    const getPriceKeys: string[] = Object.keys(prices).filter(key => carCapacity < Number(key))
    return prices[getPriceKeys[0]]
}

export const getPrice = (carCapacity: number, route: number): number => {
    const pricesByCapacity = getPricesByCapacity(carCapacity, commonPrices) as PricesType
    const price = getPricesByCapacity(carCapacity, pricesByCapacity) as number
    return price * route
};
