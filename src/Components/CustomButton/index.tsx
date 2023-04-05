import classNames from "classnames/bind";
import { FC } from "react";
import styles from "./CustomButton.module.css";

interface ICustomButton {
  handler: () => void,
  title: string,
  isPrimary?: boolean
  isDisabled?: boolean
}

const cx = classNames.bind(styles);

export const CustomButton: FC<ICustomButton> = ({ handler, title, isPrimary = true, isDisabled = false }) => {
  const buttonClass = cx({
    button: true,
    primary: isPrimary,
    secondary: !isPrimary,
    disabled: isDisabled,
  });

  return <button
    onClick={handler}
    disabled={isDisabled}
    className={buttonClass}>
    {title}
  </button>
}
