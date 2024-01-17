"use client";

import { RadioInput, TextInput } from "@/features";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { completeProfile } from "../services/authService";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const CompleteProfileForm = () => {
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [role, setRole] = useState<string>("OWNER");
  const {
    register,
    handleSubmit,
    getValues, // dose'nt re-render the state (isn't good for radio buttons - instead we use "watch")
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const { data, isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data: any) => {
    try {
      // data => name, email, role
      const res = await mutateAsync(data); // mutateAsync === completeProfile
      const { message, user } = res.data.data;
      // console.log("data from complete profile: ", user);
      toast.success(message);

      // role => push to profile
      // status ? 0, 1 or 2
      // check user status to push to profile or not
      if (user.status !== 2) {
        toast("پروفایل شما در انتظار تایید است", { icon: "😍" }); // custom toast
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
    <div className="flex flex-col items-center gap-6 pt-10 w-full">
      <h1 className="font-bold text-3xl text-secondary-700">تکمیل اطلاعات</h1>

      <div className="w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextInput
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            error={errors}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
          />
          <TextInput
            label="ایمیل"
            name="email"
            register={register}
            error={errors}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
          />

          <div>
            <div className="flex justify-center items-center gap-8">
              <RadioInput
                label="کارفرما"
                name="role"
                value="OWNER"
                register={register}
                error={errors}
                watch={watch}
                validationSchema={{
                  required: "انتخاب نقش ضروری است",
                }}
              />
              <RadioInput
                label="فریلنسر"
                name="role"
                value="FREELANCER"
                register={register}
                error={errors}
                watch={watch}
                validationSchema={{
                  required: "انتخاب نقش ضروری است",
                }}
              />
            </div>
            {errors && errors["role"] && (
              <span className="text-error text-sm block mt-2">
                {errors["role"]?.message as string}
              </span>
            )}
          </div>

          <button type="submit" className="btn">
            {isPending ? <BeatLoader color="#fff" size={8} /> : "تایید"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
