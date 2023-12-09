"use client";

import { useState } from "react";
import OTPInput from "react-otp-input";

const CheckOTPForm = () => {
  const [otp, setOtp] = useState("");

  // const checkOTPAction = async (formData: FormData) => {
  //   "use server";
  //   const phoneNumber = formData.get("phoneNumber");
  //   console.log("phone: ", phoneNumber);
  // };

  return (
    <form
      // action={checkOTPAction}
      className="pt-10 p-4 space-y-6"
    >
      <p className="text-secondary-800">کد تایید را وارد کنید</p>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} type="number" className="otp-input" />}
        renderSeparator={<span className="text-gray-800">-</span>}
        containerStyle="flex flex-row-reverse gap-x-2 justify-center"
        inputStyle={{
          width: "2.5rem",
          padding: "0.5rem 0.2rem",
        }}
      />
      <button className="btn">اعتبار سنجی کد</button>
    </form>
  );
};

export default CheckOTPForm;
