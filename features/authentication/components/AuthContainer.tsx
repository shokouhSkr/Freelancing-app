"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../services/authService";
import { useForm } from "react-hook-form";

const AuthContainer = () => {
  const [step, setStep] = useState<number>(2);
  // getValues, get values (dah!) by name
  const { register, handleSubmit, getValues } = useForm();

  const {
    data: otpResponse,
    isPending: isSendingOTP,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOTPHandler = async (data: any) => {
    try {
      // data => phoneNumber
      const res = await mutateAsync(data); // mutateAsync === getOtp
      // console.log("data from sendOTP: ", res.data.data.message);

      toast.success(res.data.data.message);
      setStep((prevStep) => prevStep + 1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            onSendOTP={handleSubmit(sendOTPHandler)}
            isSendingOTP={isSendingOTP}
            register={register}
          />
        );

      case 2:
        return (
          <CheckOTPForm
            otpResponse={otpResponse}
            onResendOTP={sendOTPHandler}
            onBack={setStep}
            phoneNumber="09379733726"
            // phoneNumber={getValues("phoneNumber")}
          />
        );

      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;
