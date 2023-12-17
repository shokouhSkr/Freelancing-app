import { Dispatch, SetStateAction } from "react";

export interface CheckOTPPropType {
  phoneNumber: string;
  onBack: Dispatch<SetStateAction<number>>;
  onResendOTP: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  otpResponse: any;
}

export interface ModalPropType {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface TextFieldPropType {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioInputPropType {
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ConfirmDeletePropType {
  resourceName: string;
  disabled: boolean;
  onClose: () => void;
  onConfirm: any;
  // onConfirm: (id: string, options: { onSuccess: () => void }) => void;
}
