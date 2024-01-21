import { BeatLoader } from "react-spinners";

const Loading = ({ size, color }: { size: number; color: string }) => {
  return (
    <div className="flex justify-center items-center h-[calc(100dvh-10rem)]">
      <BeatLoader color={color} size={size} />
    </div>
  );
};

export default Loading;
