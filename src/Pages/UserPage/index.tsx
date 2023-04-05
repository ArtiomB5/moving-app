import { FC } from "react";
import { CustomButton } from "../../Components/CustomButton";
import styles from "./UserPage.module.css";

interface IUserPageProps {
  logoutHandler: () => void
}

export const UserPage: FC<IUserPageProps> = ({ logoutHandler }) => {
  const buttonHandler = () => {
    localStorage.removeItem("token")
    if (!localStorage.getItem("token")) {
      logoutHandler()
    }
  }
  return (
    <>
      <div className={styles.logout}>
        <>
          user@email.com
        </>
        <CustomButton handler={buttonHandler} title={"Logout"} />
      </div>
      <h3>Orders</h3>
      <>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
        <div><span>2023-01-01</span><span>Point A</span><span>Point B</span><span> 100$</span></div>
      </>
    </>
  );
}
