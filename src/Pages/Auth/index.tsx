import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import { Input } from "@rebass/forms";
import { CustomButton } from "../../Components/CustomButton";
import styles from "./Auth.module.css";
import { useTranslation } from "react-i18next";

interface IAuthProps {
  onSubmitHandler: () => void;
}

export const Auth: FC<IAuthProps> = ({ onSubmitHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [step, setStep] = useState({
    choosing: true,
    login: false,
    signin: false,
  });
  const { t } = useTranslation("common");

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  const setStage = (login: boolean = false, signin: boolean = false) => {
    setStep({
      choosing: false,
      login,
      signin,
    });
  };

  const onAuthHandler = () => {
    step.login &&
      fetch(
        "https://spheric-handler-384113.ey.r.appspot.com/v1/users/login",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem("token", response.accessToken);
          localStorage.setItem("refreshToken", response.refreshToken);
          onSubmitHandler();
        })
        .catch(() => setError(true));

    step.signin &&
      fetch("https://spheric-handler-384113.ey.r.appspot.com/v1/users", options)
        .then((response) => {
          if (response.status === 200) {
            setStage(true);
            setEmail("");
            setPassword("");
          }
        })
        .catch(() => setError(true));
  };

  const onChangeInputHandler = (inputSetter: () => void) => {
    inputSetter();
    setError(false);
  };

  return (
    <div className={styles.auth}>
      {step.choosing && (
        <>
          <CustomButton handler={() => setStage(true)} title={t("Login")} />
          <CustomButton
            handler={() => setStage(false, true)}
            title={t("Signin")}
          />
        </>
      )}
      {!step.choosing && (
        <>
          <>
            <span>E-mail:</span>
            <Input
              type={"email"}
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeInputHandler(() => setEmail(e.currentTarget.value))
              }
            />
          </>
          <>
            <span>{`${t("Password")}:`}</span>
            <Input
              type={"password"}
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeInputHandler(() => setPassword(e.currentTarget.value))
              }
            />
          </>

          <CustomButton
            handler={onAuthHandler}
            title={step.login ? t("Login") : t("Signin")}
            isDisabled={email === "" || password === ""}
          />

          {isError && (
            <div className={styles.error}>Wrong login or password!</div>
          )}
        </>
      )}
    </div>
  );
};
