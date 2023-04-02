import React, { useEffect, useState } from 'react';
import { Map } from "../Components/Map";

export const Home = () => {
  const [geolocation, setGeolocation] = useState<null | [number, number] | string>(null)

  const success = (pos: GeolocationPosition) => {
    console.log(pos)
    setGeolocation([pos.coords.longitude, pos.coords.latitude])
  }

  const error = (err: any) => {
    console.log("success_err", err)
    console.log("success_err_type", typeof err)
    setGeolocation(JSON.stringify(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {geolocation === null && <div>loading</div>}
      {Array.isArray(geolocation) && <Map geolocation={geolocation} />}
    </div>
  );
}
