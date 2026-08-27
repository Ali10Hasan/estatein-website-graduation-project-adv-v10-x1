export type FieldType = "text" | "email" | "tel" | "number" | "select" | "textarea";

export interface SelectOption {
  label: string;
  value: string;
}

export interface FormFieldConfig {
  id: string;              // معرّف فريد (بيستخدم كـ htmlFor/id)
  name: string;             // اسم الحقل (بيستخدم بالـ state وبالإرسال)
  label: string;             // النص فوق الحقل
  type: FieldType;
  placeholder?: string;
  options?: SelectOption[];  // إلزامي إذا type === "select"
  fullWidth?: boolean;       // true = ياخد الصف كامل (متل Message)
  required?: boolean;
}

export interface FormConfig {
  title: string;
  description?: string;
  fields: FormFieldConfig[];
  submitText: string;
  agreementText?: string;    // نص الموافقة (اختياري)
  termsLabel?: string;
  termsHref?: string;
  privacyLabel?: string;
  privacyHref?: string;
}

export type FormValues = Record<string, string>;