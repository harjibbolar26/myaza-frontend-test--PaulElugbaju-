import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "outlined" | "primary";
  className?: string;
};

const variantMap = {
  outlined:
    "border border-solid border-buttonMain text-buttonMain bg-transparent",
  primary:
    "bg-buttonMain text-background border border-solid border-buttonMain",
};
const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        `px-4 font-medium text-[14px] lg:text-[16px] py-1 w-fit rounded-[8px] whitespace-nowrap cursor-pointer hover:bg-backgroundSec/10 transition-colors hover:text-white hover:border-white ${variantMap[variant]}`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
