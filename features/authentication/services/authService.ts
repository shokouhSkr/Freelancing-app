import http from "@/features/shared/services/httpService";

export const getOtp = (data: { phoneNumber: string }) => {
  return http.post("/user/get-otp", data);
};

export const checkOtp = (data: { phoneNumber: string; otp: string }) => {
  return http.post("/user/check-otp", data);
};

export const completeProfile = (data: { name: string; email: string; role: string }) => {
  return http.post("/user/complete-profile", data);
};
