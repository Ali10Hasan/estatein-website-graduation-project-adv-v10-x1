import type { ReactNode } from "react";

export interface InputProps {
    label?: string;
    name: string;
    icon?: ReactNode;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    radioPlaceholder?: string;
    type?: string;
    className?: string;
    containerClassName?: string;
    id?: string;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    error?: string | null;
    ariaInvalid?: boolean;
}

export interface TextareaProps {
    label: string;
    name: string;
    value?: string;
    placeholder?: string;
    rows?: number;
    className?: string;
    containerClassName?: string;
    error?: string | null;
    ariaInvalid?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
