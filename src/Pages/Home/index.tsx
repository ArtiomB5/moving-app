import { Layout } from '../../Components/Layout';
import { CustomButton } from '../../Components/CustomButton';
import { useState } from 'react';

const Home = () => {
    const [imgs, setImgs] = useState([false, false, false])
    console.log(imgs)
    return <>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", gap: "15px", padding: "15px 0" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", textAlign: "center" }}>
                <div>
                    <h2>AFFORDABLE AND RELIABLE MOVING SERVICES</h2>
                    <div>
                        Join our list of satisfied customers. We are your trusted and reliable Kazakhstan moving company.
                    </div>
                </div>
                <CustomButton title={"Order moving now!".toUpperCase()} handler={() => alert("Перевезти")} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <img src={require("./packing.webp")} alt={"Custom Wrapping and Packing"} width={"20%"} height={"auto"} loading={"lazy"} onLoad={() => setImgs(pv => [true, pv[1], pv[2]])}/>
                <div style={{ width: "50%" }}>
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
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <img src={require("./moving.webp")} alt={"Let’s make your move pain-free"} width={"20%"} height={"auto"} loading={"lazy"} onLoad={() => setImgs(pv => [pv[0], true, pv[2]])}/>
                <div style={{ width: "50%" }}>
                    <h3>Let’s make your move pain-free</h3>
                    <div>
                        We treat all our customers with the utmost care and attention. Whether you’re moving long distance or within the Kazakhstan, we’ve got a proven track record for providing professional, friendly, and timely moving service. It’s no wonder so many of our customers consider us the best among moving companies KZ.
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <img src={require("./service.webp")} alt={"We take pride in providing the best Kazakhstan moving service"} width={"20%"} height={"auto"} loading={"lazy"} onLoad={() => setImgs(pv => [pv[0], pv[1], true])}/>
                <div style={{ width: "50%" }}>
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