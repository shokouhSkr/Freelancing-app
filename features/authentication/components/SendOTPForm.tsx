import { TextField } from "@/features";

const SendOTPForm = () => {
  const sendOTPAction = async (formData: FormData) => {
    "use server";
    const phoneNumber = formData.get("phoneNumber");
    console.log("phone: ", phoneNumber);
  };

  return (
    <form action={sendOTPAction} className="p-4 space-y-6">
      <TextField label="شماره موبایل" name="phoneNumber" />
      <button className="btn">ارسال کد تایید</button>
    </form>
  );
};

export default SendOTPForm;
