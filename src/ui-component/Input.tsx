"use client";

import React, { ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export type InputProps<T extends FieldValues> = Partial<
  React.HTMLProps<HTMLInputElement> & React.HTMLProps<HTMLTextAreaElement>
> & {
  name: Path<T>;
  control?: Control<T>;
  error?: string;
  disabled?: boolean;
  textarea?: boolean;
  icon?: ReactNode;
  optionalLabel?: string;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  containerClass?: string;
};

const Input = <T extends FieldValues>({
  name,
  control,
  error,
  label,
  type = "text",
  placeholder,
  optionalLabel,
  icon,
  ...props
}: InputProps<T>) => (
  <Controller
    name={name}
    control={control}
    rules={{
      required: true,
    }}
    render={({ field: { onChange, onBlur, value } }) => {
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        let newValue = e.target.value;
        if (type === "number") {
          newValue = parseFloat(newValue).toString();

          if (isNaN(Number(newValue))) {
            newValue = "";
          }
        }
        onChange(newValue);
      };

      return (
        <SimpleInput
          name={name}
          onBlur={onBlur}
          value={value}
          handleChange={handleChange}
          onChange={onChange}
          label={label}
          optionalLabel={optionalLabel}
          placeholder={placeholder}
          type={type}
          control={control}
          icon={icon}
          error={error}
          {...props}
        />
      );
    }}
  />
);

export const SimpleInput = <T extends FieldValues>({
  name,
  error,
  label,
  className,
  type = "text",
  placeholder,
  onBlur,
  value,
  optionalLabel,
  handleChange,
  containerClass,
  ...props
}: InputProps<T>) => (
  <div className=" w-full">
    {label && (
      <p className="mb-2 text-white lg:text-[16px] text-[14px]">
        {label} <span className="text-subdued ml-2">{optionalLabel}</span>
      </p>
    )}
    <div
      className={`w-full py-4 rounded-[4px] bg-inherit border border-[#DCD9D9] flex item-center justify-between px-4 ${containerClass}`}
    >
      <input
        className={`flex-1 bg-inherit lg:text-[16px] text-[14px] text-secondary border-none outline-none mr-2 ${className}`}
        placeholder={placeholder}
        type={type}
        id={name}
        onBlur={onBlur}
        onChange={handleChange}
        value={value}
        {...props}
      />
    </div>
    {error && <p className="text-red-600 mt-1 text-sm">{error}</p>}
  </div>
);

export default Input;
