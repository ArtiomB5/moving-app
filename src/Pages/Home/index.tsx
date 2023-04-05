import { useEffect, useState } from "react";
import { Map } from "../../Components/Map";
import { Box, Flex, Text } from "rebass";
import { CustomModal } from "../../Components/CustomModal";
import { Loading } from "../../Components/Loading";
import { Auth } from "../Auth";
import { UserPage } from "../UserPage";
import styles from "./Home.module.css";

export const Home = () => {
  const token = localStorage.getItem("token");

  const [geolocation, setGeolocation] = useState<null | [number, number] | string>(null)
  const [isOrdering, setIsOrdering] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [isOpenAbout, setIsOpenAbout] = useState(false)
  const [isOpenUserPage, setIsOpenUserPage] = useState(false)

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

  const onSubmitHandler = () => setIsOpenLogin(false)
  const logoutHandler = () => setIsOpenUserPage(false)

  const about = `More About Mayflower
    Mayflower is involved in several organizations as part of dedication to our customers, employees and communities. Mayflower and its agents across the United States are humbled to support our veterans by participating in the U.S. Chamber of Commerce Hiring Our Heroes. Our agents have hired a number of veterans as a result.
    
    We are also proud to be ISO Certified and is a Certified ProMover which is a certification, granted by the American Moving and Storage Association. AMSA works to provide strong and effective advocacy for customers utilizing moving and storage services, including helping people to identify professional and reliable moving companies.`

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
    <div className={styles.home}>
      <Flex
        px={2}
        color="white"
        bg="black"
        alignItems="center"
        className={styles.wrapper}
      >
        <img src="https://www.stickers-factory.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/0/4/04358_00.png" alt="logo" width={"ait"} height={"40px"} />
        <Text p={2} fontWeight="bold">MOVING</Text>
        <Box mx="auto" />
        <Box>
          <CustomModal buttonTitle={"About"} isOpen={isOpenAbout} setIsOpen={setIsOpenAbout}>
            <div>{about}</div>
          </CustomModal>
          {!token && <CustomModal buttonTitle={"Login"} isOpen={isOpenLogin} setIsOpen={setIsOpenLogin}>
            <Auth onSubmitHandler={onSubmitHandler} />
          </CustomModal>}
          {token && <CustomModal buttonTitle={"Account"} isOpen={isOpenUserPage} setIsOpen={setIsOpenUserPage}>
            <UserPage logoutHandler={logoutHandler} />
          </CustomModal>}
        </Box>
      </Flex>
      {geolocation === null && <div className={styles.loading}>
        <Loading />
      </div>}
      {Array.isArray(geolocation) && <Map geolocation={geolocation} setIsOrdering={setIsOrdering} isOrdering={isOrdering} />}
    </div>
  );
}
