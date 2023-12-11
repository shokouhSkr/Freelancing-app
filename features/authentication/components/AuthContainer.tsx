"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../services/authService";

const AuthContainer = () => {
  const [step, setStep] = useState<number>(1);
  const [phoneNumber, setPhoneNumber] = useState<string>("09161111111");

  const {
    data,
    isPending: isSendingOTP,
    error,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOTPHandler = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    try {
      const res = await mutateAsync({ phoneNumber }); // mutateAsync === getOtp
      const data = res.data.data;
      console.log("data from sendOTP: ", data.message);

      toast.success(data.message);
      setStep((prevStep) => prevStep + 1);
      setPhoneNumber("");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onSetPhoneNumber={setPhoneNumber}
            onSendOTP={sendOTPHandler}
            isSendingOTP={isSendingOTP}
          />
        );

      case 2:
        return (
          <CheckOTPForm onResendOTP={sendOTPHandler} onBack={setStep} phoneNumber={phoneNumber} />
        );

      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;
