import { HTMLInputTypeAttribute, FC } from "react";
import { Inputs } from "../Types/index";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface IInputProps {
    label: string, 
    type: HTMLInputTypeAttribute, 
    inputType: keyof Inputs, 
    register: UseFormRegister<Inputs>, 
    required: boolean, 
    errors?: FieldErrors<Inputs>
}

export const Input: FC<IInputProps> = ({ label, type, register, inputType, required, errors }) => (
    <>
      <label>{label}</label>
      <input type={type} {...register(inputType, { required: required })} />
      {required && errors && errors.date && <span>This field is required</span>}
    </>
  );