import React, { FC, useState, useEffect } from "react";
import { IPoint } from "../TypesAndInterfaces";
import { Text } from "rebass";
import { Loading } from "./Loading";

export const Point: FC<IPoint> = ({ coords, pointName }) => {
  const [address, setAddress] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://catalog.api.2gis.com/3.0/items/geocode?lon=${coords[0]}&lat=${coords[1]}&fields=items.point&key=demo`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const {address_name, full_name} = data.result.items[0]

          address_name ? setAddress(address_name) : setAddress(full_name)
        });
    }
    fetchData()
  }, [coords])

  return (
    <>
      {typeof coords[0] !== "number" || address === "" 
      ? <Loading />
      : <Text>{`${pointName} - ${address}`}</Text>}
    </>
  );
}
