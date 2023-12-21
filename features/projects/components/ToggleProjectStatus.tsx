"use client";

import { useToggleProjectStatus } from "../hooks/useToggleProjectStatus";
import { Toggle } from "@/features";

const ToggleProjectStatus = ({ project }: { project: any }) => {
  const { isToggling, mutateAsync: toggleStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";

    toggleStatus({ id: project._id, data: { status } });
  };

  return (
    <div className="w-[5rem]">
      {isToggling ? (
        "loading..."
      ) : (
        <Toggle
          label={project.status === "OPEN" ? "باز" : "بسته"}
          enabled={project.status === "OPEN" ? true : false}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
};

export default ToggleProjectStatus;
