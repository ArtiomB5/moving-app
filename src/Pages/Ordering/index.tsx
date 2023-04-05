import { Input, Select } from "@rebass/forms";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { CustomButton } from "../../Components/CustomButton";
import { getCars } from "../../Utils/getCars";
import { getMovingPrice } from "../../Utils/getMovingPrice";
import { getLoadingPrice } from "../../Utils/getLoadingPrice";
import styles from "./Ordering.module.css";

interface IOrderingProps {
  onSubmitHandler: () => void,
  points: number[][],
  distance: number
}

export const Ordering: FC<IOrderingProps> = ({ onSubmitHandler, points, distance }) => {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [loading, setLoading] = useState("0")
  const [packing, setPacking] = useState("0")
  const [numberOfMovers, setNumberOfMovers] = useState("0")
  const [numberOfPackers, setNumberOfPackers] = useState("0")
  const [carLoadCapacity, setCarLoadCapacity] = useState(getCars()[2])
  const [movingPrice, setMovingPrice] = useState(0)
  const [loadingPrice, setLoadingPrice] = useState(0)
  const [packingPrice, setPackingPrice] = useState(0)

  useEffect(() => {
    setMovingPrice(getMovingPrice(carLoadCapacity, distance))
  }, [carLoadCapacity, distance])

  const submitHandler = () => {
    console.log({
      date,
      time,
      loading,
      packing,
      carLoadCapacity,
      points,
      distance,
      numberOfMovers,
      numberOfPackers
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.cell}>
        <span>Date:</span>
        <Input type="date" placeholder={"Choose Moving Date"} value={date} onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setDate(e.currentTarget.value)
        }} />
      </div>
      <div className={styles.cell}>
        <span>Time:</span>
        <Input type="time" placeholder={"Choose Moving Time"} value={time} onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setTime(e.currentTarget.value)
        }} />
      </div>
      <div className={styles.cell}>
        <span>Car Load Capacity, tonnes:</span>
        <Select
          id="carLoadCapacity"
          name="carLoadCapacity"
          defaultValue={carLoadCapacity}
          style={{ padding: "0 100px", background: "none" }}
          onChange={e => {
            setCarLoadCapacity(Number(e.currentTarget.value))
          }}
        >
          {getCars().map(car => <option key={car}>{car}</option>)}
        </Select>
      </div>
      <div className={styles.additionalServices}>
        <div>
          <span className={styles.servicesTitle}>Loading:</span>
          <input
            value={loading}
            type={"checkbox"}
            onClick={() => setLoading(pv => {
              if (pv === "0") {
                return "1"
              } else {
                setLoadingPrice(0)
                setNumberOfMovers("0")
                return "0"
              }
            })}
            className={styles.servicesInput}
          />
        </div>
        <div>
          <span className={styles.servicesTitle}>Packing:</span>
          <input
            value={packing}
            type={"checkbox"}
            onClick={() => setPacking(pv => {
              if (pv === "0") {
                return "1"
              } else {
                setPackingPrice(0)
                setNumberOfPackers("0")
                return "0"
              }
            })}
            className={styles.servicesInput}
          />
        </div>
      </div>

      {loading === "1"
        && <div className={styles.serviceCount}>
          <span style={{ width: "140px" }}>Number of movers:</span>
          <input
            type={"number"}
            value={numberOfMovers}
            onChange={(e) => {
              const value = e.currentTarget.value
              const valueNumber = Number(value)
              if (Number(value) >= 40) {
                setNumberOfMovers("40")
                setLoadingPrice(getLoadingPrice(carLoadCapacity, 40, 0.35, 3000))
              } else {
                setLoadingPrice(getLoadingPrice(carLoadCapacity, valueNumber, 0.35, 3000))
                setNumberOfMovers(value)
              }
            }}
            className={styles.serviceInput}
          />
        </div>}
      {packing === "1"
        && <div className={styles.serviceCount}>
          <span style={{ width: "140px" }}>Number of packers:</span>
          <input
            type={"number"}
            value={numberOfPackers}
            onChange={(e) => {
              const value = e.currentTarget.value
              const valueNumber = Number(value)
              if (Number(value) >= 40) {
                setNumberOfPackers("40")
                setPackingPrice(getLoadingPrice(carLoadCapacity, 40, 0.35, 2100))
              } else {
                setPackingPrice(getLoadingPrice(carLoadCapacity, valueNumber, 0.35, 2100))
                setNumberOfPackers(value)
              }
            }}
            className={styles.serviceInput}
          />
        </div>}
      <h3 className={styles.countResult}>{`${Math.round(distance * 10) / 10} Км`}</h3>
      <h3 className={styles.countResult}>{`${Math.round(movingPrice + loadingPrice + packingPrice)} ТГ`}</h3>

      <CustomButton handler={submitHandler} title={"Submit Order"} isDisabled={date === "" || time === ""} />
    </div >
  );
}
