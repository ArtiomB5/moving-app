import { useEffect, useState } from "react";
import { Map } from "../../Components/Map";
import styles from "./RouteSelector.module.css";
import { Layout } from "../../Components/Layout";


const RouteSelector = () => {
  const token = localStorage.getItem("token");

  const [geolocation, setGeolocation] = useState<null | [number, number] | string>(null)
  const [isOrdering, setIsOrdering] = useState(false)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, [])

  useEffect(() => {
    if (token) {
      setIsOrdering(true)
    } else {
      setIsOrdering(false)
    }
  }, [token])

  const success = (pos: GeolocationPosition) => {
    console.log(pos)
    setGeolocation([pos.coords.longitude, pos.coords.latitude])
  }

  const error = (err: any) => {
    console.log("success_err", err)
    console.log("success_err_type", typeof err)
    setGeolocation(JSON.stringify(err))
  }

  return (
    <div className={styles.map}>
      {Array.isArray(geolocation) && <Map geolocation={geolocation} setIsOrdering={setIsOrdering} isOrdering={isOrdering} />}
    </div>
  );
}

export const RouteSelectorPage = () => <Layout content={<RouteSelector />}/>