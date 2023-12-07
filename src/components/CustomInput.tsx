import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
}

export function CustomInput({ label, register, ...inputProps }: ICustomInputProps) {
  return (
    <div>
      <label className="block font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register}
        {...inputProps}
      />
    </div>
  );
}
