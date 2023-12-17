import { ConfirmDeletePropType } from "@/types";

const ConfirmDelete = ({ resourceName, disabled, onClose, onConfirm }: ConfirmDeletePropType) => {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">آیا از حذف {resourceName} مطمئن هستید؟</h2>
      <div className="flex justify-between items-center gap-16">
        {/* flex-1 => grows as possible */}
        <button onClick={onClose} disabled={disabled} className="btn flex-1">
          لغو
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          className="btn bg-white text-red-500 flex-1"
        >
          تایید
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
