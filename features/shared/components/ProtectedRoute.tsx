"use client";

import { useEffect } from "react";
import { useAuthorize } from "@/features/authentication/hooks/useAuthorize";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // 1. load the authenticated user
  const { isAuthenticated, isAuthorized, isVerified, isLoading } = useAuthorize();
  const router = useRouter();

  // 2. check if is authorized or not, check if is authenticated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) router.push("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است");
      router.push("/");
    }
    if (!isAuthorized && !isLoading) router.replace("/not-access");
  }, [isAuthenticated, isAuthorized, isLoading, router, isVerified]);

  // 3. while loading => show a loading
  if (isLoading) return <Loading color="#ff3" size={10} />;

  // 4. if user isAuthenticated and isAuthorized => render the app
  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectedRoute;
