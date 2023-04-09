import { Dispatch, FC, SetStateAction } from "react";
import styles from "./PreloadImages.module.css";

interface IPreloadImages {
  urlsArray: string[],
  preloadSetter: Dispatch<SetStateAction<boolean[]>>
}

export const PreloadImages:FC<IPreloadImages> = ({urlsArray, preloadSetter}) => {
  const onLoadhandler = (index: number) => preloadSetter((pv: boolean[]) => {
    const urlsStatus = [...pv];
    urlsStatus[index] = true;
    return urlsStatus;
  })
  return (
    <>
      {urlsArray.map((url, index) => <img src={url} key={url} alt={"preload"} className={styles.img} onLoad={() => onLoadhandler(index)}/>)}
    </>
  );
}