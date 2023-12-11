"use client";

import { Dispatch, SetStateAction } from "react";
import { TextField } from "@/features";
import { BeatLoader } from "react-spinners";

interface SendOTPPropType {
  phoneNumber: string;
  onSetPhoneNumber: Dispatch<SetStateAction<string>>;
  onSendOTP: any;
  isSendingOTP: boolean;
}

const SendOTPForm = ({
  phoneNumber,
  onSetPhoneNumber,
  onSendOTP,
  isSendingOTP,
}: SendOTPPropType) => {
  return (
    <form onSubmit={onSendOTP} className="p-4 space-y-6">
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => onSetPhoneNumber(e.target.value)}
      />

      <button type="submit" className="btn">
        {isSendingOTP ? <BeatLoader color="#fff" size={8} /> : "ارسال کد تایید"}
      </button>
    </form>
  );
};

export default SendOTPForm;
