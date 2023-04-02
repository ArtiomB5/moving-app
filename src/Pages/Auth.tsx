import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../Types/index";
import { Input } from "../Components/Input";
import { FC } from "react";

interface IAuthProps {
  onSubmitHandler: () => void
}

export const Auth: FC<IAuthProps> = ({onSubmitHandler}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
    onSubmitHandler()
  };

  console.log(watch("date")) // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
        <Input label={"Email"} type={"email"} register={register} inputType={"email"} required={true} errors={errors}/>
        <Input label={"Password"} type={"password"} register={register} inputType={"password"} required={true} errors={errors}/>

        <input type="submit" />
      </form>
    </div>
  );
}
