import { CitiesType } from "../Enums/cities"

export const isLargeCity = (city: keyof CitiesType, cities: CitiesType) => {
    return cities[city]
}