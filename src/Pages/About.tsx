import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <p>
        {t("AboutP1")}
      </p>
      <p>
        {t("AboutP2")}
      </p>
      <p>
        {t("AboutListTitle")}
      </p>
      <ul>
        <li>
          {t("AboutLI1")}
        </li>
        <li>
          {t("AboutLI2")}
        </li>
        <li>
          {t("AboutLI3")}
        </li>
      </ul>
      <p>
        {t("AboutP3")}
      </p>
    </div>
  );
}
