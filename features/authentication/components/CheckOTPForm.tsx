"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../services/authService";
import { useRouter } from "next/navigation";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { RESET_TIME } from "@/utils/constants";
import BeatLoader from "react-spinners/BeatLoader";
import { CheckOTPPropType } from "@/types";

const CheckOTPForm = ({ phoneNumber, onBack, onResendOTP, otpResponse }: CheckOTPPropType) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESET_TIME);
  const router = useRouter();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOTPHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await mutateAsync({ phoneNumber, otp }); // mutateAsync === checkOtp
      const { message, user } = res.data.data;
      console.log("data from checkOTP: ", user);

      toast.success(message);

      if (!user.isActive) {
        router.push("/complete-profile");
        return;
      }

      if (user.statue !== 2) {
        toast("پروفایل شما در انتظار تایید است", { icon: "😍" });
        router.push("/");
        return;
      }

      if (user.role === "OWNER") return router.push("/owner");
      if (user.role === "FREELANCER") return router.push("/freelancer");
      if (user.role === "ADMIN") return router.push("/admin");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={() => onBack(1)} className="mb-4">
        <HiArrowRight />
      </button>

      <form onSubmit={checkOTPHandler} className="space-y-6">
        <p className="text-secondary-800">کد تایید را وارد کنید</p>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input {...props} type="number" className="otp-input" />}
          renderSeparator={<span className="px-1"></span>}
          // renderSeparator={<span className="text-gray-800">-</span>}
          containerStyle="flex flex-row-reverse gap-1 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
          }}
        />

        <div>
          {time ? (
            <p>{time} ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={onResendOTP}>ارسال مجدد کد</button>
          )}
        </div>

        {otpResponse && (
          <p className="flex gap-2 items-center">
            {otpResponse?.data?.data?.message}
            <button onClick={() => onBack(1)}>
              <CiEdit />
            </button>
          </p>
        )}

        <button type="submit" className="btn">
          {isPending ? <BeatLoader color="#fff" size={8} /> : "اعتبارسنجی کد"}
        </button>
      </form>
    </div>
  );
};

export default CheckOTPForm;
