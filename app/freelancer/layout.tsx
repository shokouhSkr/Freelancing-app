import { Header, Sidebar } from "@/features";

const FreelancerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />
      <div className="h-[calc(100dvh-68px)] bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">{children}</div>
      </div>
    </div>
  );
};

export default FreelancerLayout;
