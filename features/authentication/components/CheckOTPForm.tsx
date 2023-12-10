"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../services/authService";
import { useRouter } from "next/navigation";

const CheckOTPForm = ({ phoneNumber }: { phoneNumber: string }) => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOTPHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await mutateAsync({ phoneNumber, otp }); // mutateAsync === checkOtp
      const { message, user } = res.data.data;
      console.log("data from checkOTP: ", user);

      toast.success(message);

      if (user.isActive) {
        // if (user.role === "OWNER") router.push("/owner");
        // if (user.role === "FREELANCER") router.push("/freelancer");
      } else {
        router.push("/complete-profile");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form onSubmit={checkOTPHandler} className="pt-10 p-4 space-y-6">
      <p className="text-secondary-800">کد تایید را وارد کنید</p>

      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} type="number" className="otp-input" />}
        renderSeparator={<span className="text-gray-800">-</span>}
        containerStyle="flex flex-row-reverse gap-1 justify-center"
        inputStyle={{
          width: "2.5rem",
          padding: "0.5rem 0.2rem",
        }}
      />

      <button type="submit" className="btn">
        اعتبار سنجی کد
      </button>
    </form>
  );
};

export default CheckOTPForm;
