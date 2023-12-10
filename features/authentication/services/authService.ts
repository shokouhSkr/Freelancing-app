import http from "../../shared/services/httpService";

export const getOtp = (data: { phoneNumber: string }) => {
  return http.post("/user/get-otp", data);
};

export const checkOtp = (data: { phoneNumber: string }) => {
  return http.post("/user/check-otp", data);
};
