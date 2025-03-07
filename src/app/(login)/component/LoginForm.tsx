"use client";

import { ICONS } from "@/assets";
import Button from "@/ui-component/Button";
import Input from "@/ui-component/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const [passwordvisibility, setPasswordvisibility] = useState(false);

  const router = useRouter();

  const loginUser = (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <div className="bg-background lg:min-h-screen max-lg:my-6 w-full flex flex-col items-center justify-center font-karla">
      <div className="text-white lg:w-1/2 mx-auto">
        <div className="lg:flex hidden items-center justify-center gap-2">
          <ICONS.Subtract />
          <div className="flex items-start">
            <div className="relative w-[60px] h-[26px]">
              <Image src={"/uifry.png"} alt="uifry_logo" fill sizes="(max-width: 768px) 100vw, 60px"/>
            </div>
            <p className="text-[4px] mt-1 ml-[2px] font-extrabold">TM</p>
          </div>
        </div>
        <div className="text-center lg:my-4">
          <p className="text-2xl font-bold font-space-grotesk">Welcome back, Ali Riaz 🙇🏾‍♀️</p>
          <p className="mt-4 text-[#DCD9D9]">
            Login to access your Uifry account
          </p>
        </div>
        <div className="">
          <Input
            control={control}
            placeholder=""
            label="Email Address"
            name="email"
            error={errors?.email?.message}
            containerClass="mb-4"
            data-testid="email-input"
          />
          <div className="relative mt-3">
            <Input
              control={control}
              placeholder=""
              type={passwordvisibility ? "text" : "password"}
              label="Password"
              name="password"
              error={errors?.password?.message}
              data-testid="password"
            />
            <span
              className={twMerge("absolute right-4 text-xs text-secondary cursor-pointer", errors?.password?.message ? "top-[45%]" : "top-3/5")}
              onClick={() => setPasswordvisibility(!passwordvisibility)}
            >
              {passwordvisibility ? "Hide" : "Show"}
            </span>
          </div>
        </div>
        <div className="mb-4 text-right">
          <p className="font-bold max-sm:text-sm text-secondary">
            I forgot my password!
          </p>
        </div>
        <Button
          variant="primary"
          className="rounded-sm text-sm w-full py-2"
          onClick={handleSubmit(loginUser)}
        >
          Login
        </Button>
        <div className="text-center mt-4">
          <p className="text-white font-semibold text-xs">
            Not Ali Riaz?&nbsp;
            <span className="text-secondary font-bold text-xs">
              Login to continue
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
