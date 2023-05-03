import { FC, useState, useEffect } from "react";
import { IPoint } from "../TypesAndInterfaces";
import { Text } from "rebass";
import { Loading } from "./Loading";
import { fetchPointData } from "../api/fetchPointData";

export const Point: FC<IPoint> = ({ coords, pointName }) => {
  const [address, setAddress] = useState("")

  useEffect(() => {
    fetchPointData(coords, pointName).then(name => setAddress(name));
  }, [coords])

  return (
    <>
      {typeof coords[0] !== "number" || address === "" 
      ? <Loading />
      : <Text>{`${pointName} - ${address}`}</Text>}
    </>
  );
}
