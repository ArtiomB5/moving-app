import { Input, Select } from "@rebass/forms";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { CustomButton } from "../../Components/CustomButton";
import { getCars } from "../../Utils/getCars";
import { getMovingPrice } from "../../Utils/getMovingPrice";
import { getLoadingPrice } from "../../Utils/getLoadingPrice";
import styles from "./Ordering.module.css";
import { useTranslation } from "react-i18next";
import { Loading } from "../../Components/Loading";
import { dateCheck } from "../../Utils/dateCheck";

interface IOrderingProps {
  onSubmitHandler: () => void;
  points: number[][];
  distance: number;
}

export const Ordering: FC<IOrderingProps> = ({
  onSubmitHandler,
  points,
  distance,
}) => {
  const [movingDate, setMovingDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState("0");
  const [packing, setPacking] = useState("0");
  const [numberOfMovers, setNumberOfMovers] = useState("0");
  const [numberOfPackers, setNumberOfPackers] = useState("0");
  const [carLoadCapacity, setCarLoadCapacity] = useState(getCars()[2]);
  const [movingPrice, setMovingPrice] = useState(0);
  const [loadingPrice, setLoadingPrice] = useState(0);
  const [packingPrice, setPackingPrice] = useState(0);
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const pointA = localStorage.getItem(t("Point A"));
    const pointB = localStorage.getItem(t("Point B"));
    pointA && pointB && setMovingPrice(getMovingPrice(carLoadCapacity, distance, pointA, pointB));
  }, [carLoadCapacity, distance]);

  const { t } = useTranslation("common");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      movingDate,
      packing,
      loading,
      carId: carLoadCapacity,
      distance,
      pointAName: "test_aad076dfba783",
      pointA: points[0],
      pointBName: "test_3e6f7dd1b98za",
      pointB: points[1],
    }),
  };

  const submitHandler = () => {
    setPageLoading(true);
    fetch("https://spheric-handler-384113.ey.r.appspot.com/v1/orders", options)
      .then((response) => response.json())
      .then(() => setPageLoading(false))
      .catch((err) => {
        console.error(err);
        setPageLoading(false);
      });
    // console.log({
    //   MovingDate,
    //   time,
    //   loading,
    //   packing,
    //   carLoadCapacity,
    //   points,
    //   distance,
    //   numberOfMovers,
    //   numberOfPackers,
    // });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cell}>
        <span>{`${t("MovingDate")}:`}</span>
        <Input
          type={"date"}
          placeholder={"Choose Moving MovingDate"}
          value={movingDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setMovingDate(dateCheck(e.currentTarget.value).toString());
          }}
        />
      </div>
      <div className={styles.cell}>
        <span>{`${t("Time")}:`}</span>
        <Input
          type="time"
          placeholder={"Choose Moving Time"}
          value={time}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTime(e.currentTarget.value);
          }}
        />
      </div>
      <div className={styles.cell}>
        <span>{`${t("Car Load Capacity, tonnes")}:`}</span>
        <Select
          id="carLoadCapacity"
          name="carLoadCapacity"
          defaultValue={carLoadCapacity}
          style={{ padding: "0 122px" }}
          onChange={(e) => {
            setCarLoadCapacity(Number(e.currentTarget.value));
          }}
        >
          {getCars().map((car) => (
            <option key={car}>{car}</option>
          ))}
        </Select>
      </div>
      <div className={styles.additionalServices}>
        <div className={styles.checkbox}>
          <div>{`${t("Loading")}:`}</div>
          <input
            value={loading}
            type={"checkbox"}
            onClick={() =>
              setLoading((pv) => {
                if (pv === "0") {
                  return "1";
                } else {
                  setLoadingPrice(0);
                  setNumberOfMovers("0");
                  return "0";
                }
              })
            }
            className={styles.servicesInput}
          />
        </div>
        <div className={styles.checkbox}>
          <div>{`${t("Packing")}:`}</div>
          <input
            value={packing}
            type={"checkbox"}
            onClick={() =>
              setPacking((pv) => {
                if (pv === "0") {
                  return "1";
                } else {
                  setPackingPrice(0);
                  setNumberOfPackers("0");
                  return "0";
                }
              })
            }
            className={styles.servicesInput}
          />
        </div>
      </div>

      {loading === "1" && (
        <div className={styles.serviceCount}>
          <span className={styles.servicesCountTitle}>{`${t(
            "Number of movers"
          )}:`}</span>
          <input
            type={"number"}
            value={numberOfMovers}
            onChange={(e) => {
              const value = e.currentTarget.value;
              const valueNumber = Number(value);
              if (Number(value) >= 40) {
                setNumberOfMovers("40");
                setLoadingPrice(
                  getLoadingPrice(carLoadCapacity, 40, 0.35, 3000)
                );
              } else {
                setLoadingPrice(
                  getLoadingPrice(carLoadCapacity, valueNumber, 0.35, 3000)
                );
                setNumberOfMovers(value);
              }
            }}
            className={styles.serviceInput}
          />
        </div>
      )}
      {packing === "1" && (
        <div className={styles.serviceCount}>
          <span className={styles.servicesCountTitle}>{`${t(
            "Number of packers"
          )}:`}</span>
          <input
            type={"number"}
            value={numberOfPackers}
            onChange={(e) => {
              const value = e.currentTarget.value;
              const valueNumber = Number(value);
              if (Number(value) >= 40) {
                setNumberOfPackers("40");
                setPackingPrice(
                  getLoadingPrice(carLoadCapacity, 40, 0.35, 2100)
                );
              } else {
                setPackingPrice(
                  getLoadingPrice(carLoadCapacity, valueNumber, 0.35, 2100)
                );
                setNumberOfPackers(value);
              }
            }}
            className={styles.serviceInput}
          />
        </div>
      )}
      <h3 className={styles.countResult}>{`${
        Math.round(distance * 10) / 10
      } ${t("Km")}`}</h3>
      <h3 className={styles.countResult}>{`${Math.round(
        movingPrice + loadingPrice + packingPrice
      )} ТГ`}</h3>

      <div className={styles.container}>
        {pageLoading ? (
          <Loading />
        ) : (
          <CustomButton
            handler={submitHandler}
            title={`${t("Submit Order")}`}
            isDisabled={movingDate === "" || time === ""}
          />
        )}
      </div>
    </div>
  );
};
