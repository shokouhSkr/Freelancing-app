"use client";

import { Container } from "@/features";
import { useRouter } from "next/navigation";
import { HiArrowRight } from "react-icons/hi";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="flex justify-center pt-10">
        <div>
          <h1 className="text-xl font-bold text-secondary-700 mb-8">
            صفحه ای که دنبالش بودید، پیدا نشد
          </h1>

          <button onClick={() => router.back()} className="flex items-center gap-x-2">
            <HiArrowRight className="w-6 h-6 text-primary-900" />
            <span className="text-secondary-700"> برگشت</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
