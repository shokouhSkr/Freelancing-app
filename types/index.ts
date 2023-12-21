import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

export interface SendOTPPropType {
  isSendingOTP: boolean;
  onSendOTP: any;
  register: any;
}

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
  validationSchema?: RegisterOptions;
  register: any;
  error?: any;
  required?: boolean;
  type?: string;
}

export interface RadioInputPropType {
  label: string;
  value: string;
  name: string;
  error: any;
  watch: any;
  validationSchema?: RegisterOptions;
  register: any;
}

export interface ConfirmDeletePropType {
  resourceName: string;
  disabled: boolean;
  onClose: () => void;
  onConfirm: any;
  // onConfirm: (id: string, options: { onSuccess: () => void }) => void;
}

export interface SelectPropType {
  label: string;
  name: string;
  register: any;
  options: any;
  required: boolean;
}

export interface DatePickerFieldPropType {
  label: string;
  date: Date;
  setDate: any;
}

export interface CreateProjectFormPropType {
  onClose: () => void;
  projectToEdit?: any;
}

export interface TogglePropType {
  label: string;
  enabled: boolean;
  onChange: any;
}
