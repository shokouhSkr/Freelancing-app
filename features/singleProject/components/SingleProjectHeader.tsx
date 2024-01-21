"use client";

import { useRouter } from "next/navigation";
import { HiArrowRight } from "react-icons/hi";

const SingleProjectHeader = ({ project }: { project: any }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4 mb-8">
      <button onClick={() => router.back()} className="w-5 h-5 text-secondary-500">
        <HiArrowRight />
      </button>
      <h1 className="font-black text-secondary-700 text-xl">لیست درخواست های {project.title}</h1>
    </div>
  );
};

export default SingleProjectHeader;
