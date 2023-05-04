export interface IPoint {
  coords: number[] | Array<number | []> | [][];
  pointName: string;
}
export interface IOrder {
  id: string;
  movingDate: string;
  packing:number;
  loading:number;
  carId: string;
  distance: number;
  pointAName:string;
  pointA:number[];
  pointBName:string;
  pointB: number[];
  time:string;
  numberOfMovers: number;
  numberOfPackers:number;
  price: number;
}