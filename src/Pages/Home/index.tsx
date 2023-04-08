import { Layout } from '../../Components/Layout';
import { CustomButton } from '../../Components/CustomButton';
import classNames from "classnames/bind";
import styles from "./Home.module.css"
import service from "../../Images/service.webp";
import moving from "../../Images/moving.webp";
import packing from "../../Images/packing.webp";
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
                    <h2>AFFORDABLE AND RELIABLE MOVING SERVICES</h2>
                    <div>
                        Join our list of satisfied customers. We are your trusted and reliable Kazakhstan moving company.
                    </div>
                </div>
                <CustomButton title={"Order moving now!".toUpperCase()} handler={orderHandler} />
            </div>
            <div className={styles.commonStyle}>
                <img src={packing} alt={"Custom Wrapping and Packing"} className={styles.image} loading={"lazy"} />
                <div className={styles.text}>
                    <h3>
                        Custom Wrapping and Packing
                    </h3>
                    <ul>
                        <li>Mattresses</li>
                        <li>Flat screens</li>
                        <li>Couches and chairs</li>
                        <li>Computers and electronics</li>
                        <li>Lamps and light bulbs</li>
                        <li>Hanging clothes</li>
                        <li>Paintings and small mirrors</li>
                    </ul>
                </div>
            </div>
            <div className={styles.commonStyle}>
                <img src={moving} alt={"Let’s make your move pain-free"} className={styles.image} loading={"lazy"} />
                <div className={styles.text}>
                    <h3>Let’s make your move pain-free</h3>
                    <div>
                        We treat all our customers with the utmost care and attention. Whether you’re moving long distance or within the Kazakhstan, we’ve got a proven track record for providing professional, friendly, and timely moving service. It’s no wonder so many of our customers consider us the best among moving companies KZ.
                    </div>
                </div>
            </div>
            <div className={styles.commonStyle}>
                <img src={service} alt={"We take pride in providing the best Kazakhstan moving service"} className={styles.image} />
                <div className={styles.text}>
                    <h3>
                        We take pride in providing the best Kazakhstan moving service
                    </h3>
                    <div>
                        From the moment you get in touch with us to the unpacking of the last item in the final box, our experienced team of our movers takes pride in providing seamless moving service for your household or business. We’re only happy if your transition is fast, efficient, stress and hustle-free.
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export const HomePage = () => {
    return <Layout content={<Home />} />;
}