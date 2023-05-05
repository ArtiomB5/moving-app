import { FC, useState, useEffect } from "react";
import { CustomButton } from "../../Components/CustomButton";
import styles from "./UserPage.module.css";
import { useTranslation } from "react-i18next";
import { Loading } from "../../Components/Loading";
import { IOrder } from "../../TypesAndInterfaces";

interface IUserPageProps {
  logoutHandler: () => void;
}

export const UserPage: FC<IUserPageProps> = ({ logoutHandler }) => {
  const [pageLoading, setPageLoading] = useState(false);
  const [orders, setOrders] = useState<[] | IOrder[]>([]);
  const { t } = useTranslation("common");

  useEffect(() => {
    setPageLoading(true);

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const fetchOrders = () => {
      fetch(
        "https://spheric-handler-384113.ey.r.appspot.com/v1/orders",
        options
      )
        .then((response) => response.json())
        .then((orders) => {
          setOrders(orders);
          setPageLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setPageLoading(false);
        });
    };
    fetchOrders();
  }, []);

  const buttonHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("refreshToken");

    if (!localStorage.getItem("token")) {
      logoutHandler();
    }
  };

  const email = localStorage.getItem("email");

  return (
    <>
      <div className={styles.logout}>
        <>{email}</>
        <CustomButton handler={buttonHandler} title={t("Logout")} />
      </div>
      <h3>{t("Orders")}</h3>
      <div>
        {pageLoading && <Loading />}
        {!pageLoading && (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>{t("Date")}</div>
              <div>{t("Car Load Capacity, tonnes")}</div>
              <div>distance</div>
              <div>{t("Point A")}</div>
              <div>{t("Point B")}</div>
              <div>{t("Time")}</div>
              <div>{t("Number of movers")}</div>
              <div>{t("Number of packers")}</div>
              <div>price</div>
            </div>
            {orders.map((order: IOrder) => {
              return (
                <div key={order.id}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <div>{order.movingDate}</div>
                    <div>{order.carId}</div>
                    <div>{order.distance}</div>
                    <div>{order.pointAName}</div>
                    <div>{order.pointBName}</div>
                    <div>{order.time}</div>
                    <div>{order.numberOfMovers}</div>
                    <div>{order.numberOfPackers}</div>
                    <div>{order.price}</div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};
