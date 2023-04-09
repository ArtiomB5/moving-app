import { Layout } from "../../Components/Layout";
import { CustomButton } from "../../Components/CustomButton";
import classNames from "classnames/bind";
import styles from "./Home.module.css"
import service from "../../Images/service.webp";
import moving from "../../Images/moving.webp";
import packing from "../../Images/packing.webp";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation("common");
    
    const navigate = useNavigate();
    const orderHandler = () => navigate("/route");

    const cx = classNames.bind(styles);

    const orderClass = cx({
        commonStyle: true,
        order: true
    })

    return <>
        <div className={styles.wrapper}>
            <div className={orderClass}>
                <div>
                    <h2>{t("Affordable and reliable moving services")}</h2>
                    <div>
                        {t("Join our list of satisfied customers")}
                    </div>
                </div>
                <CustomButton title={t("Order moving now!").toUpperCase()} handler={orderHandler} />
            </div>
            <div className={styles.commonStyle}>
                <img src={packing} alt={t("Custom Wrapping and Packing") as string} className={styles.image} loading={"lazy"} />
                <div className={styles.text}>
                    <h3>
                        {t("Custom Wrapping and Packing")}
                    </h3>
                    <ul>
                        <li>{t("Mattresses")}</li>
                        <li>{t("Flat screens")}</li>
                        <li>{t("Couches and chairs")}</li>
                        <li>{t("Computers and electronics")}</li>
                        <li>{t("Lamps and light bulbs")}</li>
                        <li>{t("Hanging clothes")}</li>
                        <li>{t("Paintings and small mirrors")}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.commonStyle}>
                <img src={moving} alt={t("Lets make your move pain-free") as string} className={styles.image} loading={"lazy"} />
                <div className={styles.text}>
                    <h3>{t("Lets make your move pain-free")}</h3>
                    <div>
                        {t("We treat all our customers with the utmost care and attention.")}
                    </div>
                </div>
            </div>
            <div className={styles.commonStyle}>
                <img src={service} alt={t("We take pride in providing the best Kazakhstan moving service") as string} className={styles.image} />
                <div className={styles.text}>
                    <h3>
                        {t("We take pride in providing the best Kazakhstan moving service")}
                    </h3>
                    <div>
                        {t("From the moment you get in touch with us to the unpacking of the last item in the final box")}
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export const HomePage = () => {
    return <Layout content={<Home />} />;
}