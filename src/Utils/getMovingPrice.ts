import { CitiesType, cities } from "../Enums/cities";

type CommonPricesType = { [key: string]: number };
type CitiesPricesType = { [key: string]: CommonPricesType };

const commonPrices: CommonPricesType = {
  "1": 154,
  "5": 203,
  "10": 258,
  "20": 309,
};

const citiesPrices: CitiesPricesType = {
  Алматы: {
    "1": 35000,
    "5": 40000,
    "10": 45000,
    "20": 50000,
  },
  Астана: {
    "1": 95000,
    "5": 130000,
    "10": 180000,
    "20": 230000,
  },
  Шымкент: {
    "1": 90000,
    "5": 115000,
    "10": 150000,
    "20": 170000,
  },
  Тараз: {
    "1": 55000,
    "5": 70000,
    "10": 90000,
    "20": 120000,
  },
  Кызылорда: {
    "1": 110000,
    "5": 140000,
    "10": 180000,
    "20": 2100000,
  },
};

const getMovingPricesByCapacity = (
  carCapacity: number,
  commonPrices: CommonPricesType,
  citiesPrices: CitiesPricesType,
  pointA: string,
  pointB: string
): number => {
  if (pointA === pointB) {
    const prices =
      citiesPrices[citiesPrices.hasOwnProperty(pointB) ? pointB : "Тараз"];
    const filteredCarCapacity: string[] = Object.keys(prices).filter(
      (key) => carCapacity <= Number(key)
    );
    return prices[filteredCarCapacity[0]];
  } else {
    const filteredCarCapacity: string[] = Object.keys(commonPrices).filter(
      (key) => carCapacity <= Number(key)
    );
    return commonPrices[filteredCarCapacity[0]];
  }
};

export const getMovingPrice = (
  carCapacity: number,
  distance: number,
  pointA: string,
  pointB: string
): number => {
  const isOneCity = pointA === pointB;
  const price = getMovingPricesByCapacity(carCapacity, commonPrices, citiesPrices, pointA, pointB);
  return isOneCity ? price : price * distance;
};
