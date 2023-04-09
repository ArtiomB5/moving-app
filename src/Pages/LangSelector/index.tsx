import { FC } from "react";
import { Link } from "rebass";
import classNames from "classnames/bind";
import styles from "./LangSelector.module.css";

interface ILangSelector {
  langs: string[]
  langSelectHandler: (param: string) => void
  currentLang: string
}

export const LangSelector: FC<ILangSelector> = ({ langs, langSelectHandler, currentLang }) => {
  const cx = classNames.bind(styles);

  const langClass = (buttonLang: string) => cx({
    unselectedButton: currentLang !== buttonLang,
    selectedButton: currentLang === buttonLang,
    commonStyle: true,
  })
console.log(currentLang)
  return (
    <div className={styles.langsRow}>
      {langs.map((lang: string) => <Link
        key={lang}
        onClick={() => langSelectHandler(lang)}
        className={langClass(lang)}>
        {lang.toUpperCase()}
      </Link>)}
    </div>
  );
}
