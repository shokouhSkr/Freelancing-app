"use client";

import { Dispatch, SetStateAction } from "react";
import { TextInput } from "@/features";
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
    <form onSubmit={onSendOTP} className="space-y-6">
      <TextInput
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        type="number"
        onChange={(e) => onSetPhoneNumber(e.target.value)}
      />

      <button type="submit" className="btn">
        {isSendingOTP ? <BeatLoader color="#fff" size={8} /> : "ارسال کد تایید"}
      </button>
    </form>
  );
};

export default SendOTPForm;
