import { LegacyRef } from "react";
import { ModalPropType } from "@/types";
import { HiOutlineX } from "react-icons/hi";
import { useClickOutside } from "../../hooks/useClickOutside";

const Modal = ({ open, onClose, title, children }: ModalPropType) => {
  const ref = useClickOutside(onClose) as LegacyRef<HTMLDivElement>;

  return (
    open && (
      // backdrop
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
        {/* modal */}
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          {/* modal header */}
          <header className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
            {/* modal header - text */}
            <p className="font-bold text-base text-secondary-700">{title}</p>

            {/* modal header - button */}
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </button>
          </header>

          {/* modal body */}
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
