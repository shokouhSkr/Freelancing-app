"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { TextField } from "@/features";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../services/authService";
import { toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const SendOTPForm = ({ onSetStep }: { onSetStep: Dispatch<SetStateAction<number>> }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOTPHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await mutateAsync({ phoneNumber }); // mutateAsync === getOtp
      const data = res.data.data;
      console.log("data: ", data.message);

      toast.success(data.message);
      setPhoneNumber("");
      onSetStep(2);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form onSubmit={sendOTPHandler} className="p-4 space-y-6">
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <button type="submit" className="btn">
        {isPending ? <BeatLoader color="#fff" size={8} /> : "ارسال کد تایید"}
      </button>
    </form>
  );
};

export default SendOTPForm;
