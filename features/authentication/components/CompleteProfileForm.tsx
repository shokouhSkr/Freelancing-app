"use client";

import { useState } from "react";
import { RadioInput, TextInput } from "@/features";

const CompleteProfileForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("OWNER");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("name: ", name, " email: ", email, " role: ", role);
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
          تایید
        </button>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
