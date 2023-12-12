"use client";

import { useState } from "react";
import { RadioInput, TextInput } from "@/features";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { completeProfile } from "../services/authService";
import { useRouter } from "next/navigation";

const CompleteProfileForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("OWNER");
  const router = useRouter();

  const { data, isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await mutateAsync({ name, email, role }); // mutateAsync === completeProfile
      const { message, user } = res.data.data;
      console.log("data from complete profile: ", user);
      toast.success(message);

      // role => push to profile
      // status ? 0, 1 or 2
      // check user status to push to profile or not
      if (user.statue !== 2) {
        toast("پروفایل شما در انتظار تایید است", { icon: "😍" });
        router.push("/");
        return;
      }
      if (user.role === "OWNER") return router.push("/owner");
      if (user.role === "FREELANCER") return router.push("/freelancer");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full sm:max-w-sm">
      <form onSubmit={submitHandler} className="space-y-6">
        <TextInput
          label="نام و نام خانوادگی"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="ایمیل"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex justify-center items-center gap-8">
          <RadioInput
            label="کارفرما"
            value="OWNER"
            checked={role === "OWNER"}
            onChange={(e) => setRole(e.target.value)}
          />
          <RadioInput
            label="فریلنسر"
            value="FREELANCER"
            checked={role === "FREELANCER"}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <button type="submit" className="btn">
          {isPending ? <BeatLoader color="#fff" size={8} /> : "تایید"}
        </button>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
