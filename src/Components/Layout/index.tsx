import { FC, useEffect, useState } from "react";
import { Box, Flex, Text } from "rebass";
import { CustomModal } from "../../Components/CustomModal";
import { useTranslation } from "react-i18next";
import rs from "../../Pages/RouteSelector/RouteSelector.module.css";
import { About } from "../../Pages/About";
import { UserPage } from "./../../Pages/UserPage/index";
import { Auth } from "../../Pages/Auth";
import moving from "../../Images/moving.webp";
import packing from "../../Images/packing.webp";
import service from "../../Images/service.webp";
import { PreloadImages } from "../PreloadImages";
import { Loading } from "../Loading";
import { useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { LangSelector } from "../../Pages/LangSelector";
import { Seo } from "../SEO";

interface ILayout {
  content: JSX.Element;
  jsonld?: string;
}

export const Layout: FC<ILayout> = ({ content, jsonld = '' }) => {
  const imgs = [moving, packing, service];

  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenUserPage, setIsOpenUserPage] = useState(false);
  const [isOpenLng, setIsOpenLng] = useState(false);
  const [imgsStatus, setImgsStatus] = useState(imgs.map(img => Boolean(img)));

  useEffect(() => {
    if (!imgsStatus.includes(false)) {
      sessionStorage.setItem("imgs", "loaded");
    }
  }, [imgsStatus])

  const { t, i18n } = useTranslation("common");

  const navigate = useNavigate();
  const navigateToMain = () => navigate("/");

  const token = localStorage.getItem("token");

  const onSubmitHandler = () => setIsOpenLogin(false)
  const logoutHandler = () => setIsOpenUserPage(false)

  const changeLangHandler = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang)
    setIsOpenLng(false);
  }
  
  return (
    <>
      <Seo jsonld={jsonld}/>
      <div className={styles.wrapper}>
        <Flex
          px={2}
          color="white"
          bg="black"
          alignItems="center"
          className={rs.wrapper}
        >
          <img src="https://www.stickers-factory.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/0/4/04358_00.png" alt="logo" width={"ait"} height={"40px"} />
          <Text p={2} fontWeight="bold" onClick={navigateToMain} className={styles.header}>MOVING</Text>
          <Box mx="auto" />
          <Box>
            <CustomModal buttonTitle={i18n.language.toUpperCase()} isOpen={isOpenLng} setIsOpen={setIsOpenLng}>
              <LangSelector langSelectHandler={changeLangHandler} langs={["kk", "ru", "en"]} currentLang={i18n.language} />
            </CustomModal>
            <CustomModal buttonTitle={t("About")} isOpen={isOpenAbout} setIsOpen={setIsOpenAbout}>
              <About />
            </CustomModal>
            {!token && <CustomModal buttonTitle={t("Account")} isOpen={isOpenLogin} setIsOpen={setIsOpenLogin}>
              <Auth onSubmitHandler={onSubmitHandler} />
            </CustomModal>}
            {token && <CustomModal buttonTitle={t("Account")} isOpen={isOpenUserPage} setIsOpen={setIsOpenUserPage}>
              <UserPage logoutHandler={logoutHandler} />
            </CustomModal>}
          </Box>
        </Flex>
        <div className={styles.contentWrapper}>
          {!imgsStatus.includes(false) ? <>{content}</> : <Loading />}
          <footer className={styles.footer}>
            <PreloadImages preloadSetter={setImgsStatus} urlsArray={imgs} />
          </footer>
        </div>
      </div>
    </>
  );
}
