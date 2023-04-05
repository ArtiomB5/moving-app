import { memo } from "react";
import styles from "./MapWrapper.module.css";

export const MapWrapper = memo(
  () => {
      return <div id="map-container" className={styles.mapWrapper}></div>;
  },
  () => true,
);