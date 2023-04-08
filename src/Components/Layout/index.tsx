import { FC, useEffect, useState } from 'react';
import { Box, Flex, Text } from "rebass";
import { CustomModal } from "../../Components/CustomModal";
import { useTranslation } from "react-i18next";
import styles from "../../Pages/RouteSelector/RouteSelector.module.css";
import { About } from '../../Pages/About';
import { UserPage } from './../../Pages/UserPage/index';
import { Auth } from '../../Pages/Auth';
import moving from "../../Images/moving.webp";
import packing from "../../Images/packing.webp";
import service from "../../Images/service.webp";
import { PreloadImages } from '../PreloadImages';
import { Loading } from '../Loading';
import { useNavigate } from 'react-router-dom';

interface ILayout {
  content: JSX.Element
}

export const Layout: FC<ILayout> = ({ content }) => {
  const imgs = [moving, packing, service];

  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenUserPage, setIsOpenUserPage] = useState(false);
  const [isOpenLng, setIsOpenLng] = useState(false);
  const [imgsStatus, setImgsStatus] = useState(imgs.map(img => Boolean(img)));

  useEffect(() => {
    if (!imgsStatus.includes(false)) {
      sessionStorage.setItem('imgs', 'loaded');
    }
  }, [imgsStatus])

  const { t, i18n } = useTranslation("common");

  const navigate = useNavigate();
  const navigateToMain = () => navigate("/");

  const token = localStorage.getItem("token");

  const onSubmitHandler = () => setIsOpenLogin(false)
  const logoutHandler = () => setIsOpenUserPage(false)

  const changeLangHandler = (lang: "kk" | "en" | "ru") => {
    i18n.changeLanguage(lang);
    setIsOpenLng(false);
  }
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
      <Flex
        px={2}
        color="white"
        bg="black"
        alignItems="center"
        className={styles.wrapper}
      >
        <img src="https://www.stickers-factory.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/0/4/04358_00.png" alt="logo" width={"ait"} height={"40px"} />
        <Text p={2} fontWeight="bold" onClick={navigateToMain} style={{cursor: "pointer"}}>MOVING</Text>
        <Box mx="auto" />
        <Box>
          <CustomModal buttonTitle={i18n.language.toUpperCase()} isOpen={isOpenLng} setIsOpen={setIsOpenLng}>
            <>
              <button onClick={() => changeLangHandler("kk")}>KK</button>
              <button onClick={() => changeLangHandler("en")}>EN</button>
              <button onClick={() => changeLangHandler("ru")}>RU</button>
            </>
          </CustomModal>
          <CustomModal buttonTitle={t("About")} isOpen={isOpenAbout} setIsOpen={setIsOpenAbout}>
            <About />
          </CustomModal>
          {!token && <CustomModal buttonTitle={t("Login")} isOpen={isOpenLogin} setIsOpen={setIsOpenLogin}>
            <Auth onSubmitHandler={onSubmitHandler} />
          </CustomModal>}
          {token && <CustomModal buttonTitle={t("Account")} isOpen={isOpenUserPage} setIsOpen={setIsOpenUserPage}>
            <UserPage logoutHandler={logoutHandler} />
          </CustomModal>}
        </Box>
      </Flex>
      <div style={{
        height: "100%",
        width: "100%",
        overflowY: "auto",
      }}>
        {!imgsStatus.includes(false) ? <>{content}</> : <Loading />}
        <footer style={{ width: "100%", height: "50px" }}>
          <PreloadImages preloadSetter={setImgsStatus} urlsArray={imgs} />
        </footer>
      </div>
    </div>
  );
}
