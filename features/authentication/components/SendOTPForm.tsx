"use client";

import { TextInput } from "@/features";
import { BeatLoader } from "react-spinners";
import { SendOTPPropType } from "@/types";

const SendOTPForm = ({ onSendOTP, isSendingOTP, register }: SendOTPPropType) => {
  return (
    <form onSubmit={onSendOTP} className="space-y-6">
      <TextInput label="شماره موبایل" name="phoneNumber" type="number" register={register} />

      <button type="submit" className="btn">
        {isSendingOTP ? <BeatLoader color="#fff" size={8} /> : "ارسال کد تایید"}
      </button>
    </form>
  );
};

export default SendOTPForm;
