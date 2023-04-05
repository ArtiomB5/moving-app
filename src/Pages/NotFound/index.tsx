import styles from "./NotFound.module.css";
import { CustomButton } from '../../Components/CustomButton/index';
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const buttonHandler = () => navigate("/");

  return (
    <div className={styles.wrapper}>
      <div className={styles.c}>
        <div className={styles._404}>404</div>
        <CustomButton handler={buttonHandler} title={"Main Page"} isPrimary={false}/>
      </div>
    </div>
  )
}
